---
layout: post
title: 以太坊开发（三）以太坊智能合约语法
tags:
  - eth
description: 以太坊智能合约语法
image: /images/eth_learn/eth.webp
redirect_from:
  - /gbk-or-utf8/
  - /gbk-or-utf8
noComments: false
---

>> 以太坊开发（三）以太坊智能合约

## 一、智能合约开发环境实战
  ### 1. remix使用
  * [跟我学 Solidity ：开发环境](https://learnblockchain.cn/article/1755)
  * 注意1: 首页“”Remix IDE“，"file" tab
    - “New file“: 新创建一个文件
    - “Open file“: 在本地打开一个sol文件
    - ”Conect to localhost“ ：
      * 本地安装一个代理： npm install -g remixd
      * 启动代理，并指定一个sol文件目录 remixd -s ./local_solidity_directory — remix-ide https://remix.ethereum.org
      * 选择“Connect to local host”， 就可以将本机目录同步到IDE
  * 注意2: "Deploy & run Transaction", "Environment" 编译合约，发布到哪里？
    - javascript, 内置js 以太坊
    - injected web3, metamask 钱包provider
    - web3 provider， 本地以太node节点（ipc等）
    - hardhat provider， hardhat工具环境
    - ganache provider, 常用的truffle/ganache节点
    - Wallet connect， 连接到infra等节点 
***这里选择 ganache providr，以适配truffle等工具***    
    - 注意选择了ganache，就可以看到预置的10个账号（包括公钥地址、以及测试eth数量等）

  ### 2. truffle/ganache使用
  * [以太坊开发（二）以太坊开发环境](/posts/2022-02-15-1-eth_learn_2_eth_dev_env/)
    - ganache -d
    - [ganache 图形界面工具](https://trufflesuite.com/ganache/)

  ### 3. nft market 实战项目
  [NFT market 实例](https://trufflesuite.com/guides/nft-marketplace/)
  * truffle unbox optimism nft-marketplace
  * remixd -s nft-marketplace — remix-ide https://remix.ethereum.org
  ### 4. truffle配合remix 
  [remix IDE doc](https://remix-ide.readthedocs.io/en/latest/#)
  * 选择"connect to localhost" 
  * 可以指定truffle项目目录
  * npm install -g @remix-project/remixd
  * remixd -s nft-marketplace — remix-ide https://remix.ethereum.org     (remixd IDE 将可以打开本地的nft-marketplace目录)


## 二、合约基本概念和入门

网上资料很多，随便找个入门吧：<br/> 
[全面掌握Solidity智能合约开发 https://learnblockchain.cn/column/1 ](https://learnblockchain.cn/column/1)
  * [跟我学 Solidity：关于变量](https://learnblockchain.cn/article/1758)
    - [以太坊区块链存储](https://medium.com/cybermiles/diving-into-ethereums-world-state-c893102030ed)