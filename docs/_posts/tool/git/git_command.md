---
title: Git 代码托管
date: 2018-12-20
categories: "git" #分类
tags:  #标签
    - git
---

# Git 代码托管

>前置条件: 在 github 上新建仓库，本地与远端已实现身份认证

🔶 第一步: 初始化 git 仓库(本地)
```bash
$ git init
```
🔶 第二步: 将项目所有文件添加到待提交列表（缓冲区）中
```bash
$ git add .
```
🔶 第三步: 将 add 的文件 commit 到本地仓库(并添加注释)
```bash
$ git commit -m "注释语句"
```
🔶 第四步: 将本地仓库关联到 github 远程仓库
```bash
$ git remote add origin https://github.com/jwchan1996/pizza-app.git    #仓库地址
```
🔶 第五步: 将代码上传到 github 远程仓库(推送)
```bash
# 使用 -u 代表指定默认主机，这样以后就可以不加任何参数使用 git pull 与 git push
$ git push -u origin master   
```

完成上述步骤之后，之后的代码提交基本是以下四步：
```bash
$ git status
$ git add .
$ git commit -m "[feat] new feat"
$ git push
```

>🌖 注意: 多人协作每次同步代码需要先将代码拉下来(拉取)

👉 首先将代码提交到本地仓库
```bash
$ git add .
$ git commit -m "注释语句"
```
👉 将远程代码拉取下来
```bash
$ git pull origin master
```
👉 然后再将本地仓库代码上传
```bash
$ git push origin master
```

至此，github 代码托管就完成啦(๑>؂<๑）

🌘 附: Git基本常用命令
```bash
$ mkdir XX    #创建一个空目录 XX指目录名

$ pwd     #显示当前目录的路径。

$ git init    #把当前的目录变成可以管理的git仓库，生成隐藏.git文件。

$ git add XX    #把xx文件添加到暂存区去。

$ git commit –m “XX”   #提交文件 –m 后面的是注释。

$ git status    #查看仓库状态

$ git diff  XX    #查看XX文件修改了那些内容

$ git log    #查看历史记录

$ git reset --hard HEAD^ 或者 git reset --hard HEAD~  #回退到上一个版本

$ git reset –hard HEAD~100   #回退到100个版本

$ cat XX    #查看XX文件内容

$ git reflog    #查看历史记录的版本号id

$ git checkout -- XX    #把XX文件在工作区的修改全部撤销。

$ git rm XX    #删除XX文件

$ git remote add origin https://github.com/jwchan1996/pizza-app.git    #关联一个远程库

$ git push –u(第一次要用-u 以后不需要) origin master    #把当前master分支推送到远程库

$ git clone https://github.com/jwchan1996/pizza-app.git    #从远程库中克隆

$ git checkout –b dev    #创建dev分支 并切换到dev分支上

$ git branch    #查看当前所有的分支

$ git checkout master    #切换回master分支

$ git merge dev   #在当前的分支上合并dev分支

$ git branch –d dev   #删除dev分支

$ git branch name    #创建分支

$ git stash    #把当前的工作隐藏起来 等以后恢复现场后继续工作

$ git stash list   #查看所有被隐藏的文件列表

$ git stash apply   #恢复被隐藏的文件，但是内容不删除

$ git stash drop   #删除文件

$ git stash pop   #恢复文件的同时 也删除文件

$ git remote    #查看远程库的信息

$ git remote –v    #查看远程库的详细信息

$ git push origin master   #Git会把master分支推送到远程库对应的远程分支上
```