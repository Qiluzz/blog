(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{389:function(_,v,t){"use strict";t.r(v);var e=t(43),a=Object(e.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"使用-git-向开源项目提交-pr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-git-向开源项目提交-pr"}},[_._v("#")]),_._v(" 使用 git 向开源项目提交 pr")]),_._v(" "),t("h2",{attrs:{id:"pull-request-是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pull-request-是什么"}},[_._v("#")]),_._v(" Pull Request 是什么")]),_._v(" "),t("p",[_._v("⛏️ "),t("code",[_._v("Pull Request")]),_._v(" 是一种通知机制"),t("br"),_._v("\n你修改了他人的代码，将你的修改通知原来的作者，希望他合并你的修改，这就是 "),t("code",[_._v("Pull Request")])]),_._v(" "),t("p",[_._v("⛏️ "),t("code",[_._v("Pull Request")]),_._v(" 本质上是一种软件的合作方式，是将涉及不同功能的代码，纳入主干的一种流程。这个过程中，还可以进行讨论、审核和修改代码")]),_._v(" "),t("p",[_._v("⛏️ 简单的说是在自己本地仓库修改代码，提交到自己远程仓库，提交 "),t("code",[_._v("PR")]),_._v(" 后被接受后，再会被合并到 "),t("code",[_._v("master")])]),_._v(" "),t("h2",{attrs:{id:"具体流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#具体流程"}},[_._v("#")]),_._v(" 具体流程")]),_._v(" "),t("h3",{attrs:{id:"fork"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fork"}},[_._v("#")]),_._v(" fork")]),_._v(" "),t("p",[_._v("将项目 "),t("code",[_._v("fork")]),_._v(" 到自己的仓库中，以 "),t("code",[_._v("vue-clicli")]),_._v(" 为例")]),_._v(" "),t("p",[t("img",{attrs:{src:"/git/git_pull_request/fork.png",alt:""}})]),_._v(" "),t("p",[_._v("进入到 "),t("code",[_._v("vue-clicli")]),_._v(" 的 "),t("code",[_._v("Github")]),_._v(" 项目中，点击右上角的 "),t("code",[_._v("fork")]),_._v("，稍等片刻，此项目便会出现在自己的仓库中")]),_._v(" "),t("p",[_._v("进到自己 "),t("code",[_._v("fork")]),_._v(" 的项目中，就能看到 "),t("code",[_._v("Clone or download")]),_._v(" 按钮，复制一下 "),t("code",[_._v("SSH")]),_._v(" 链接或者 "),t("code",[_._v("HTTPS")]),_._v(" 链接")]),_._v(" "),t("p",[_._v("通过上面的步骤，已经将远程仓库建好了")]),_._v(" "),t("h3",{attrs:{id:"clone"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clone"}},[_._v("#")]),_._v(" clone")]),_._v(" "),t("p",[_._v("将刚才 "),t("code",[_._v("fork")]),_._v(" 过来的项目 "),t("code",[_._v("clone")]),_._v(" 到本地，用的是你刚才复制的 "),t("code",[_._v("SSH")]),_._v(" 链接或者 "),t("code",[_._v("HTTPS")]),_._v(" 链接")]),_._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[_._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[_._v("git")]),_._v(" clone https://github.com/acgzone/vue-clicli.git\n")])])]),t("p",[_._v("进到 "),t("code",[_._v("vue-clicli")]),_._v(" 目录中，试试跑一下 "),t("code",[_._v("git status")]),_._v("，会提示现在是 "),t("code",[_._v("master")]),_._v(" 分支")]),_._v(" "),t("p",[_._v("用 "),t("code",[_._v("git remote -v")]),_._v(" 命令，可以看到此时只与自己的远程仓库建立了连接")]),_._v(" "),t("p",[t("img",{attrs:{src:"/git/git_pull_request/git_remote_-v_1.png",alt:""}})]),_._v(" "),t("p",[_._v("还需要与上游建立连接，这里上游指的是一开始 "),t("code",[_._v("fork")]),_._v(" 的那个项目源，以 "),t("code",[_._v("vue-clicli")]),_._v(" 为例，执行如下命令：")]),_._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[_._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[_._v("git")]),_._v(" remote "),t("span",{pre:!0,attrs:{class:"token function"}},[_._v("add")]),_._v(" upstream https://github.com/acgzone/vue-clicli.git\n")])])]),t("p",[_._v("再用 "),t("code",[_._v("git remote -v")]),_._v(" 可以看到")]),_._v(" "),t("p",[t("img",{attrs:{src:"/git/git_pull_request/git_remote_-v_2.png",alt:""}})]),_._v(" "),t("p",[_._v("接下来就能创建分支了")]),_._v(" "),t("h3",{attrs:{id:"创建分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建分支"}},[_._v("#")]),_._v(" 创建分支")]),_._v(" "),t("p",[_._v("当然，一般需要提交新功能的时候才需要创建新分支，如果是修复 "),t("code",[_._v("bug")]),_._v(" 的话，就不需要切换分支，可以直接在主分支 "),t("code",[_._v("master")]),_._v(" 里完成修改，下面创建分支的步骤就可以省略。"),t("br"),_._v("\n继续运行命令：( 看情况是否创建新分支 )")]),_._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[_._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[_._v("git")]),_._v(" checkout -b dev\n")])])]),t("p",[_._v("这个命令的意思是创建一个叫 "),t("code",[_._v("dev")]),_._v(" 的分支，运行这个命令后 "),t("code",[_._v("bash")]),_._v(" 将自动切换到新的分支下")]),_._v(" "),t("h3",{attrs:{id:"修改代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改代码"}},[_._v("#")]),_._v(" 修改代码")]),_._v(" "),t("p",[_._v("自行修改代码，完成开发等等")]),_._v(" "),t("h3",{attrs:{id:"提交"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提交"}},[_._v("#")]),_._v(" 提交")]),_._v(" "),t("p",[_._v("可以先使用 "),t("code",[_._v("git status")]),_._v(" 来查看有哪些文件被修改了")]),_._v(" "),t("p",[t("img",{attrs:{src:"/git/git_pull_request/git_status.png",alt:""}})]),_._v(" "),t("p",[_._v("然后再 "),t("code",[_._v("git add .")]),_._v(" 将要提交的文件都加上")]),_._v(" "),t("p",[_._v("然后再 "),t("code",[_._v('git commit -m "modify XX"')]),_._v("，需要注意的是 "),t("code",[_._v("git commit")]),_._v(" 只是把修改的代码提交到当前分支 ( 如果前面没有切换新分支的话，默认分支是 "),t("code",[_._v("master")]),_._v(" ) ，"),t("code",[_._v('"modify XX"')]),_._v(" 是本次提交的简单说明")]),_._v(" "),t("p",[_._v("然后再 "),t("code",[_._v("git push origin master")]),_._v("，这一步才是将当前分支推送到自己的远程仓库")]),_._v(" "),t("p",[_._v("这时，在自己的远程仓库便能看刚才 "),t("code",[_._v("push")]),_._v(" 上去的分支了")]),_._v(" "),t("h2",{attrs:{id:"提交-pr"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提交-pr"}},[_._v("#")]),_._v(" 提交 PR")]),_._v(" "),t("p",[_._v("找到 "),t("code",[_._v("New pull request")]),_._v("，需要注意的是 "),t("code",[_._v("compare")]),_._v(" 处选择刚才提交上来的分支 ( 当前示例的是代码提交在主分支 "),t("code",[_._v("master")]),_._v(" 的情况 )")]),_._v(" "),t("p",[t("img",{attrs:{src:"/git/git_pull_request/compare.png",alt:""}})]),_._v(" "),t("p",[_._v("然后点 "),t("code",[_._v("Create pull request")])]),_._v(" "),t("p",[_._v("写好名字，写好说明，提交")]),_._v(" "),t("p",[_._v("🎨 "),t("code",[_._v("PR")]),_._v(" 创建后，就等着管理者是否接受该 "),t("code",[_._v("PR")]),_._v(" 了")]),_._v(" "),t("h2",{attrs:{id:"关于-check-不通过的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关于-check-不通过的问题"}},[_._v("#")]),_._v(" 关于 check 不通过的问题")]),_._v(" "),t("p",[t("code",[_._v("github")]),_._v(" 有代码自己编译和 "),t("code",[_._v("check")]),_._v(" 机制，在你提交 "),t("code",[_._v("pr")]),_._v(" 的时候，项目可能已经有了比较大的变更 ( 每天都有世界各地的 "),t("code",[_._v("coder")]),_._v(" 提 "),t("code",[_._v("pr")]),_._v(" )，而你没有将分支保持与项目同步，所以有可能会导致 "),t("code",[_._v("check")]),_._v(" 失败，"),t("code",[_._v("pr")]),_._v(" 被无视")]),_._v(" "),t("p",[_._v("还记得我们在自己本地有一个 "),t("code",[_._v("master")]),_._v(" 分支，然后又拉了一个 "),t("code",[_._v("dev")]),_._v(" 分支，然后在 "),t("code",[_._v("dev")]),_._v("上进行修改，提交的也是 "),t("code",[_._v("dev")]),_._v('，然后又想起了之前有一步是"与上游建立连接"，说到你可能已经知道了 '),t("code",[_._v("master")]),_._v(" 的作用 —— 用于远程代码同步")]),_._v(" "),t("p",[_._v("所以每次提交 "),t("code",[_._v("pr")]),_._v(" 前，都要先从做代码同步。过程如下：")]),_._v(" "),t("p",[_._v("先 "),t("code",[_._v("git fetch upstream")])]),_._v(" "),t("p",[t("img",{attrs:{src:"/git/git_pull_request/git_fetch_upstream.png",alt:""}})]),_._v(" "),t("p",[_._v("再 "),t("code",[_._v("git rebase upstream/master")])]),_._v(" "),t("p",[t("img",{attrs:{src:"/git/git_pull_request/git_rebase_upstream+master.png",alt:""}})]),_._v(" "),t("p",[_._v("再 "),t("code",[_._v("git push origin master")])]),_._v(" "),t("p",[t("img",{attrs:{src:"/git/git_pull_request/git_push_origin_master.png",alt:""}})]),_._v(" "),t("p",[t("code",[_._v("push")]),_._v(" 完后，远程仓库便可看到你的 "),t("code",[_._v("branch")]),_._v(" 版本和 "),t("code",[_._v("master")]),_._v(" 分支一致了，否则会显示与 "),t("code",[_._v("master")]),_._v(" 相差了多少次 "),t("code",[_._v("commit")])]),_._v(" "),t("p",[t("img",{attrs:{src:"/git/git_pull_request/branch_commit.png",alt:""}}),t("img",{attrs:{src:"/git/git_pull_request/branch_commit_even.png",alt:""}})]),_._v(" "),t("p",[_._v("🍭 注：此处 "),t("code",[_._v("branch")]),_._v(" 指的是你自己的远程仓库，"),t("code",[_._v("master")]),_._v(" 指的是 "),t("code",[_._v("fork")]),_._v(" 的项目的仓库")]),_._v(" "),t("p",[_._v("🌥️ 做完这些操作，就可以回到之前的步骤来操作了")])])}),[],!1,null,null,null);v.default=a.exports}}]);