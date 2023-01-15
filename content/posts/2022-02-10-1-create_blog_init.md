---
layout: post
title: 创建个人blog
tags:
  - web
description: 开始创建blog
image: /images/me.jpeg
redirect_from:
  - /gbk-or-utf8/
  - /gbk-or-utf8
noComments: false
---

>> 创建个人blog

```
参考mymetas的代码，在github上创建/fork一个项目， 然后通过netlify发布应用（netlify提供该应用到项目域名链接）。
namesilo上申请一个域名，将该域名映射到netlify上的应用链接。
这样就完成了一个自己拥有完全域名和控制权的blog(包括数据，都是自己完全掌握)
```

## 一、 gatsby & react

react的CMS封装项目,个人blog选gatsby。
官网，web的应用app可选择next框架.

## 二、 netlify

* 免费部署平台 netlify:
  - [app.netlify.com](app.netlify.com)
  - 部署后，会生成blog 应用的链接[访问链接 https://wonderful-williams-f800f9.netlify.app/](https://wonderful-williams-f800f9.netlify.app/)

## 三、 DNS ， godaddy, namesilo
* netlify 可提供域名注册及解析，不过付费麻烦，改用godaddy
* [godaddy 域名申请及设置](https://dcc.godaddy.com/control/mymetas.org)
  - www 子域名, 使用godaddy 提供的web建站工具
  - blog，使用netlify平台应用（即本github代码, 目前设置为私有）：[访问链接 https://wonderful-williams-f800f9.netlify.app/](https://wonderful-williams-f800f9.netlify.app/)
    * godaddy 设置CNAME： 
      - blog --> wonderful-williams-f800f9.netlify.app
      - www  --> mymetas.org
    * netlify 除生成默认的wonderful-williams-f800f9.netlify.app 外，需要额外增加一个blog域名设置： blog.mymetas.org 
    * godaddy解析blog到netlify平台，netlify平台必须增加blog.mymetas.org设置，并设置使用netlify缺省证书，否则出现访问blog.mymetas.org 的错误： Not Found - Request ID:

* [https://www.namesilo.com/](https://www.namesilo.com/) , [namesilo 使用简介](https://iyideng.vip/note/namesilo-domain-registrar.html)
  - godaddy  申请域名失败， 换成 namesilo， 配置类似, 域名 mymetas.top      
  - 注意子域名在 domain manager/DNS Records菜单中
  - netlify 配置截图：
    * > <img width="921" alt="image" src="https://user-images.githubusercontent.com/97513521/175199279-cb48fff3-be32-4be3-a85a-75badd298041.png">

  - namesili 配置截图：
    * > <img width="962" alt="image" src="https://user-images.githubusercontent.com/97513521/175201226-ff29f474-6b43-4ce4-9f87-ca90161a51b9.png">
      * namesili配置的意思是 子域名"blog.mymetas.top"指向 netlify的“wonderful-williams-f800f9.netlify.app” (因此netlify平台要显示声明这个app)

* 该项目可以集成评论功能[gtalk 评论设置](https://www.jianshu.com/p/4242bb065550)