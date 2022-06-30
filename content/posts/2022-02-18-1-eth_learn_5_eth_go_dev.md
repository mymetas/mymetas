---
layout: post
title: 以太坊开发（五）以太坊Go开发
tags:
  - eth
description: 以太坊Go开发
image: /images/eth_learn/eth.webp
redirect_from:
  - /gbk-or-utf8/
  - /gbk-or-utf8
noComments: false
---

>> 以太坊开发（五）以太坊Go开发

## 一、 一个例子：[https://github.com/mymetas/mymetas_pub](https://github.com/mymetas/mymetas_pub)

* rpc dial [RPC 参数说明](http://blog.mymetas.top/posts/2022-02-15-1-eth_learn_2_eth_dev_env/#2-json-%E5%8F%82%E6%95%B0%E9%80%9F%E6%9F%A5%E8%A1%A8)
* mymetas_pub中的command封装了go语言对eth的rpc封装

## 1. 账户、私钥、地址
	* 私钥可生成公钥,公钥再hash生成20字节的账户地址,可合成账户地址/文件（例如keystore，该文件可另外加密，以保护文件中的私钥信息的安全性）
	* 私钥只能由某一个用户掌握,绝对不能泄漏。公钥匙是对外公开的地址（对外公开场景例如：公开可见的收钱地址）
	* 私钥是一个16进制字符串，“助记词” 是一组单词（例如12个英文单词）
	* 以太坊的账户可无限生成（离线），因此以太坊系统不掌控用户私钥/公钥/账户地址），以太坊只记录用户的历史
	* <https://github.com/mymetas/mymetas_pub/> 项目中 GenerateKey 函数展示了 私钥生成公钥，然后生成地址的方法 
## 2. 状态、交易、收据
  * 以太坊是个全球状态机器: 所谓状态机，就是一组数据、一批内外部事件。内部、外部事件触发数据的改变，称为状态机变迁。本质上以太坊就是账户、智能合约内部的数据，被外部时间触发，引发的状态机变迁，而以太坊状态机的正确性、不可篡改性，是通过全球的节点通过共识算法来保证。
    - 状态跃迁，自带时间戳，因为以太坊也称为 可信时间机器
  * 交易：普通交易，裸交易，节点进行签名（节点使用私钥）称为普通交易，外部应用（典型的如用户web3应用，启动metamask钱包，对交易数据进行签名）直接将签名后的数据发送到节点，由节点转发至共识网络，称为裸交易。
    - eth_sendTransaction
	- eth_sendRawTransaction
  * 收据： 以太坊网络收到交易数据，还需要经过多个挖矿周期，才能最终确认记录到公共账本中,因此提交到网络后，会返还一个收据数据，后期可用这个id查询交易状态。
## 2， 智能合约
  * [智能合约小结](/posts/2022-02-16-1-eth_learn_3_eth_smart_contract/)
  * 智能合约最早是1994年，Nick Szabo提出，但没有执行环境，区块链系统具有可追溯，不可篡改、自动执行的特征，才真正实现了智能合约（但目前就算以太坊也只是部分实现、且特定于特定应用场景）
  * <https://github.com/mymetas/mymetas_pub/> 项目, internal/service/eth/build_contract.sh 调用 solc, abigen变异sol智能合约文件。编译结果在contract/build, contract/wrapper 两个目录中。
  ```
  $ ls internal/service/eth/build_contract.sh
  $ tree internal/service/eth/contract/
internal/service/eth/contract/
├── TestErc20Token.sol
├── build
│   ├── TestErc20Token.abi
│   └── TestErc20Token.bin
└── wrapper
    └── testerc20token
        └── TestErc20Token.go
  ```

## 3， 监听事件
* pull事件： 用户主动轮询
* push事件： 用户注册，以太坊主动推送
  - 只支持websocket连接
***不论pull ，push事件，用户都可以指定过滤器filter，获取指定内容***
* 监听block变化，已经出块
  - eth_newBlockFilter,  创建一个新块过滤器，然后可以用eth_getFilterChanges 检查过滤器更新（pull模式，用户主动查询拉取）
  - client.SubscribeNewHeader, 订阅新区块事件（ws连接），实时监听通道，获取通知消息（以太坊主动通知）
* 监听待出块消息，pengding未决出块
  - client.EthNewPendingTransactionFilter 注册pending块
  - 其余和block块pull类似
  - SubscribeNewPendingTransactions, 订阅pengding块，其余和block块push类似
* 日志监听类型
  - eth_newFilter , 过滤日志注册， opts 设置过滤规则
	- opts 为空，监听所有日志
  - SubscribeFilterLogs, 注册push日志功能， ethereum.FilterQuery 指定查询条件
  - watchTransfer, 监听事件注册， bind.watchOpts设置监听事件类型和参数

## 二、 go & 以太坊 参考

* [dapp 分享社区， 以太坊，ipfs 的demo开发](https://kauri.io/##_top)
* [一个 dapp 应用架构- 基于区块链的图像分享](https://blog.51cto.com/u_15069472/3442850)
* [go语言开发以太坊应用-英文版](https://goethereumbook.org/en/)
    * [go语言开发以太坊应用-中文版](https://goethereumbook.org/zh/)
* [以太坊官方 智能合约开发框架列表](https://ethereum.org/en/developers/local-environment/)

* [面向 GO 开发者的以太坊](https://ethereum.org/zh/developers/docs/programming-languages/golang/)
	* [go 开发以太坊， dapp模拟器等开发指导](https://geth.ethereum.org/docs/dapp/native-bindings)
		* [用Go语言开发以太坊合约](https://blog.csdn.net/ahy231/article/details/114112638)

* [以太坊官方 solc工具](https://github.com/ethereum/solidity)
	* [solc 翻译文档](https://www.osgeo.cn/solidity/)

* [以太坊 gas 查询网站 ethgasstation](https://ethgasstation.info/)

* [6 个重要模块，带你编写一个基于Golang的区块链公链demo！| 博文精选](https://cloud.tencent.com/developer/article/1579000)

* [汇智网-Go以太坊开发详解](http://xc.hubwiz.com/course/5e5d172e9e1468826d1b5fe6)   
	* [Mac 升级bash 到4或者5版本](https://www.dwhd.org/20181004_004349.html) 
		* cat /private/etc/shells     /////  /usr/local/bin/bash
	* [汇智网-以太坊JSON RPC API](http://cw.hubwiz.com/card/c/ethereum-json-rpc-api/)
	* ["transaction type not supported" 问题的解决](https://stackoverflow.com/questions/69934685/transaction-type-not-supported-when-trying-to-deploy-a-simple-contract-using-g)

* [一个eth的go接口实现，与汇智网类似，web3.go](https://github.com/kylesliu/web3.go)
	* [eth 的go接口实现 go-web3](https://github.com/chenzhijie/go-web3)

* [以太坊技术与实现 learnblockchain](https://learnblockchain.cn/books/geth/part0/first.html)
	* [从零开发区块链应用 learnblockchain (一)--golang配置文件管理工具viper](https://learnblockchain.cn/article/3446)


* [以太坊设计与源代码之美 阅读入口](https://blog.csdn.net/superwiles/article/details/88097180)



* [以太坊系列之一: 以太坊RLP用法-以太坊源码学习](https://www.cnblogs.com/baizx/p/6928622.html)

* [go-ethereum-code-analysis以太坊源代码分析](https://gitcode.net/mirrors/ztesoftcs/go-ethereum-code-analysis?utm_source=csdn_github_accelerator)

* [https://github.com/blockchainGuide/blockchainguide](https://github.com/blockchainGuide/blockchainguide)
