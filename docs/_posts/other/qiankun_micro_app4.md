---
title: qiankun 微前端应用实践与部署（四）
date: 2020-09-14
categories: "other" #分类
tags:  #标签
    - qiankun
    - micro-frontend
---

# qiankun 微前端应用实践与部署（四）

一般情况下，我们对应用进行配置打包，要对图片字体等资源进行下面配置，使得资源路径正常加载。但是，在微前端模式下，子应用打包部署后，往往会出现子应用 `css` 文件里面引入资源路径加载失败的问题，下面就让我们来探究一下。

👉 独立应用下的 `url-loader` 配置：

```javascript
// vue-cli 2 写法

module: {
  rules: [
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: "url-loader",
      options: {
        limit: 10000,
        // 此处的 utils.assetsPath 是函数，返回根据配置项拼接好的路径，如 static/img/[name].[hash:7].[ext] 
        name: utils.assetsPath("img/[name].[hash:7].[ext]")
      }
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: "url-loader",
      options: {
        limit: 10000,
        // 此处的 utils.assetsPath 是函数，返回根据配置项拼接好的路径，如 static/fonts/[name].[hash:7].[ext] 
        name: utils.assetsPath("fonts/[name].[hash:7].[ext]")
      }
    }
  ]
}
```

因为 `url-loader` 的 `options` 项的属性 `publicPath` 属性默认是 `''`，表示相对路径，即打包出来的资源引用 `url` 都会加上相对路径寻找 `static` 静态资源入口，比如：

```css
/* static/css/app.e99e9aae.css */

background-header {
    background: url(../../static/img/bg_header.790a94f4.png);
}
```

所有应用编译打包部署后，当主应用加载子应用，子应用加载自身的 `css` 文件样式时，由于 其对应的 css 文件里面的图片 `url` 引用是相对路径，会出现子应用的资源相对路径拼接主应用 `domain` 的情况，即子应用的 `../../static/img/bg_header.790a94f4.png` 会在主应用的 `domain` 下进行资源的寻找，导致加载失败 `404` 的情况。

## 解决打包后的 css 背景图片与字体图标路径问题

如果项目有用到第三方库，比如 `element-ui`，那么就更有必要进行处理了。因为 `element-ui` 的字体图标是在 `css` 里面引入的，还有相关背景图片的引入也是在 `css` 里，所以需要配置 `webpack` 的 `url-loader`，生产模式情况下直接指定资源前缀，使之成为绝对路径。

```javascript
module: {
  rules: [
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: "url-loader",
      options: {
        limit: 10000,
        name: utils.assetsPath("img/[name].[hash:7].[ext]"),
        //这里 192.168.2.192：7100 是子应用部署地址
        publicPath: process.env.NODE_ENV === 'production' ? '//192.168.2.192:7100' : ''
      }
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: "url-loader",
      options: {
        limit: 10000,
        name: utils.assetsPath("fonts/[name].[hash:7].[ext]"),
        publicPath: process.env.NODE_ENV === 'production' ? '//192.168.2.192:7100' : ''
      }
    }
  ]
}
```

这样配置后，打包出来的 css 样式文件会变成：

```css
/* static/css/app.e99e9aae.css */

background-header {
    background: url(//192.168.2.192:7100/static/img/bg_header.790a94f4.png);
}
```

资源是绝对路径，就不会出现上面子应用资源加载失败的情况。

但是，这种前端配置文件写死路径的做法灵活性并不好，比如不能做到编译一次，任意部署，因为路径写死，所以如果需要部署到其他服务器的话，就需要重新编译了。

接下来，讲的是实现灵活部署的方案。

## 结合 nginx 配置资源引用路径代理转发

我们在只编译打包一次前端应用的前提下，为了实现灵活部署，需要借助 `nginx` 来实现。

下面以 `vue-cli 3` 的配置为例，与 `vue-cli 2` 只是写法上的区别，其他都一样。 

> 不过 vue-cli 3 对 webpack 配置进行了抽象，要理解配置中包含的东西会比较困难，尤其是当我们需要重写或者调整配置的时候，可以参考 [审查项目的 webpack 配置](https://cli.vuejs.org/zh/guide/webpack.html#审查项目的-webpack-配置)。

```javascript
module.exports = {
  chainWebpack: (config) => 

    config.module
      .rule("fonts")
      .test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/)
      .use("url-loader")
      .loader("url-loader")
      .options({
        limit: 4096,
        name: 'static/fonts/[name].[hash:8].[ext]',
        publicPath: process.env.NODE_ENV === 'production' ? '/live' : '',
      });

    config.module
      .rule("images")
      .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
      .use("url-loader")
      .loader("url-loader")
      .options({
        limit: 4096,
        // name 代表 url-loader 会将资源写到 static/fonts/ 下
        name: 'static/img/[name].[hash:8].[ext]',
        // publicPath 代表资源引入 url 会生成 /live 的前缀，比如 /live/static/img/bg_header.790a94f4.png
        publicPath: process.env.NODE_ENV === 'production' ? '/live' : '',
      });

  }
}
```

假设主应用部署地址是 `192.168.2.192`，子应用的部署地址是 `192.168.2.192:7102`。

打包编译部署后，子应用的 css 文件里面的图片资源引用 `url` 如下：

```css
/* static/css/app.e99e9aae.css */

background-header {
    background: url(/live/static/img/bg_header.790a94f4.png);
}
```

主应用加载子应用的时候，子应用的资源拼接主应用 `domian` 后，子应用的 `css` 文件里面的图片资源加载路径 `url` 就会变成：

```bash
192.168.2.192/live/static/img/bg_header.790a94f4.png
```

此时的关键就是要访问到子应用的资源，而不是去主应用资源目录去找。

所以我们采用 `nginx` 路径代理转发端口的方案，当应用访问 `192.168.2.192/live` 这个路径时，经过 `nginx` 进行路径代理转发配置，转发到子应用端口。

配置 `nginx` 代理规则：
```bash
# nginx.conf

http {
  server {
    listen	80;
    server_name 192.168.2.192;
  
    location /live {
      proxy_pass  127.0.0.1:7102

      try_files $uri $uri/ /index.html;
    }
  }
}
```

此时真正访问的资源路径（子应用资源路径）是：

```bash
192.168.2.192:7102/static/img/bg_header.790a94f4.png
```

👋 至此，通过修改配置 `url-loader` 的 `publicPath` 以及配置 `nginx` 的路径代理转发，就可以实现编译打包一次，到处部署的目的。