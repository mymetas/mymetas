---
layout: post
title: 以太坊开发（二）以太坊开发环境
tags:
  - eth
description: 以太坊智能合约开发环境
image: /images/eth_learn/eth.webp
redirect_from:
  - /gbk-or-utf8/
  - /gbk-or-utf8
noComments: false
---

> 以太坊开发（二）以太坊开发环境

## 一、以太坊概述&重要概念

1. 以太坊虚拟机（EVM)   
以太坊是图灵完备的，可以执行任意复杂算法和业务逻辑的去中心化平台。    
以太坊允许用户按照自己的意愿和业务目的创建程序和代码，称为Dapp。例如发行erc代币，NFT资产。     
在这个平台，用户可以使用高级语言（如solidity）创建Dapp，而以太坊网络中的每台机器将执行、验证Dapp应用及数据，计算机中运行Dapp合约代码的环境就称为EVM（以太坊虚拟机）。   

2. Dapp/以太坊智能合约适用范围：    
智能合约/Dapp 拥有去中心化，无认为干预、用户直接掌控账号和资产的特点，所以特别适合点对点之间的资产确权和业务逻辑自动执行的场景，例如清结算的自动执行；互联网大规模用户之间的协调、管理和互动。    
典型的如BTC系统，实现了数字黄金在互联网上的确权以及数字黄金在互联网上的清结算。   
但以太坊的适用范围，远超BTC。因为BTC的智能合约不是图灵完备，只能做到有限的拓展，借助于以太发的图灵完备智能合约系统，用户可在以太坊平台上实现金融、资产管理、社会管理（如投票）等等复杂的Dapp应用。     

3. 以太坊账户
  - EOA(外部账户）：私人密钥控制
  - 合约账户：由合约代码控制，“外部账户”触发“合约账户”  
> 以太坊账户，在代码设计上是统一的，但分成了两种类型。普通用户掌握私钥，通过私钥可以控制自己的外部账户（EOA）；同时用户可以通过外部账户创建一个智能合约，而该智能合约绑定了一个“合约账户”，通过智能合约的代码，可以规定该“合约账户”可以由创建者执行一些功能，也可以规定某些功能可以由所有的用户执行（即使用）。而不管“合约账户”的创建者，或者使用者，他们都是由“外部账户”来触发“合约账户”的功能执行和调用。 
   
> 典型场景就是，管理员用自己的以太坊“外部账户”部署了一个智能合约，这个智能合约有个“合约账户”；管理员通过自己以太坊“外部账户”调用“合约账户”的管理功能，而普通用户通过各自的以太坊”外部账户“调用该智能合约相关的”合约账户“提供的普通用户功能。    

>  “外部账户”可以拥有以太币（即一个记账变量），“合约账户”与“外部账户”一样也可以拥有以太币；   

>  从底层设计来看“外部账户”和“合约账户”是一致的，且以太坊社区有把两个账户合一的规划（还未实现）    

> “合约账户” 与 “外部账户”比，除了拥有账户余额外，“合约账户”还可以维护用户自定义数据，并可触发执行用户自定义功能和逻辑。

> 以太坊智能合约可以由用户定义变量（状态），以及关于这些变量（状态）的功能函数（即业务逻辑）；而以太坊网络通过类似BTC的区块链底层机制，保证了这些状态和功能的全网一致性、不可人为干预性，并且用户通过私钥掌控公钥，再通过公钥掌控外部账户，触发”合约账户“执行智能合约，从而实现了“世界的状态机“系统；

4. gas费用    


## 二、geth使用     

1. geth安装    
> [ethereum官网](https://ethereum.org/en/)   /  [以太坊官网文档](https://ethereum.org/en/developers/docs/)   
> [ethereum官网安装文档](https://ethereum.org/en/developers/docs/nodes-and-clients/run-a-node/)    /    [geth安装下载](https://geth.ethereum.org/downloads/)    
> [geth安装文档](https://geth.ethereum.org/docs/install-and-build/installing-geth)    
> [geth文档](https://geth.ethereum.org/docs/)

```
#brew tap ethereum/ethereum
#brew install ethereum   
```

2. geth常用命令    

* 使用开发者模式启动geth：   
```
# 指定数据目录以维护运行之间的状态--datadir，否则，数据库是临时的和内存中的：
# 注意设置corsdomain，保证Remix工具的使用
# cd eth
# mkdir test-chain-dir
# geth --datadir test-chain-dir --http --dev --http.corsdomain "https://remix.ethereum.org,http://remix.ethereum.org"

#### 正式的eth节点，要启动挖矿模式，需要用这个命令： geth --mine --miner.threads=4

# INFO [02-18|16:54:15.844] New local node record                    seq=1,645,174,455,844 id=4641a155f904f0d9 ip=127.0.0.1 udp=0 tcp=0
INFO [02-18|16:54:15.845] Started P2P networking                   self=enode://182803e2a52d2a65624150b368ee2bb57fee8fa76c43130e5081c529f6f2cc502a8203caf4fa7d3c6feb02bf5bcc120e42813aae20c080bfdc011de792020e3f@127.0.0.1:0
INFO [02-18|16:54:15.845] IPC endpoint opened                      url=/Users/taiyunsu/me/src/eth/test-chain-dir/geth.ipc
INFO [02-18|16:54:15.845] HTTP server started                      endpoint=127.0.0.1:8545 prefix= cors=https://remix.ethereum.org,http://remix.ethereum.org vhosts=localhost

```

* geth attach 命令   
[attach 后的 web3 js 借口命令封装](https://geth.ethereum.org/docs/interface/javascript-console)   
[attach命令](https://github.com/ethereum/wiki/wiki/JavaScript-API)  / [web3js文档](https://web3js.readthedocs.io/en/v1.2.9/)

```
# another termial
# # geth attach <IPC_LOCATION>
# geth attach /Users/taiyunsu/me/src/eth/test-chain-dir/geth.ipc
# 打印出 coinbase： 0xeaafb8ae9b0e887c8c5c405fdbcbf326761f82d4

# attach 常用命令：

>net.listening
>net.peerCount
>admin.peers
>admin.nodeInfo

> personal.newAccount()   #输入password
"0x4973d7a678cf5e16f9fa92aa5b266e64439b5d14“   #回显公钥

> personal.listAccounts
["0xeaafb8ae9b0e887c8c5c405fdbcbf326761f82d4", "0x4973d7a678cf5e16f9fa92aa5b266e64439b5d14"]

> eth.accounts
["0xeaafb8ae9b0e887c8c5c405fdbcbf326761f82d4", "0x4973d7a678cf5e16f9fa92aa5b266e64439b5d14"]

> web3.fromWei(eth.getBalance(eth.coinbase), "ether")

> function checkAllBalances() {
    var totalBal = 0;
    for (var acctNum in eth.accounts) {
        var acct = eth.accounts[acctNum];
        var acctBal = web3.fromWei(eth.getBalance(acct), "ether");
        totalBal += parseFloat(acctBal);
        console.log("  eth.accounts[" + acctNum + "]: \t" + acct + " \tbalance: " + acctBal + " ether");
    }
    console.log("  Total balance: " + totalBal + " ether");
};     ####控制台可以输入function

> checkAllBalances();

> loadScript("/Users/username/gethload.js") #执行脚本

```

```
geth attach /Users/taiyunsu/me/src/eth/test-chain-dir/geth.ipc --exec "eth.blockNumber"
```

```
geth 管理账户：

geth account list --help
### 创建新账户, 指定 datadir
# geth account new  --datadir /Users/taiyunsu/me/src/eth/test-chain-dir

Public address of the key:   0x6fc07941EB4B982DF639689eb244Ab0f75029185

#### 注意， 创建账户，一定要用 --datadir  指定geth的工作目录（如果geth已经启动， 且geth启动时，没有指定工作目录，则可以省略这个参数）

# geth account list  --keystore /Users/taiyunsu/me/src/eth/test-chain-dir/keystore
#### 注意，获取accout信息时， 需要使用 keystore指定账户信息的目录，如果geth 没有指定目录，则可省略，使用系统默认目录

# 创建 新账户
# geth account new
# 列出账户
# geth account list
# 

```

3. geth控制台

  - geth控制台命令的使用
```
geth attach /Users/taiyunsu/me/src/eth/test-chain-dir/geth.ipc

> eth.accounts
##### 相当于 geth account list  --keystore /Users/taiyunsu/me/src/eth/test-chain-dir/keystore

> personal.unlockAccount(address, "password", 300)
##### 解锁不带参数，则是解锁第一个，可以带 公钥账号，以及索引
##### 想以非交互方式使用帐户，则需要将其解锁。
geth --unlock "0x407d73d8a49eeb85d32cf465507dd71d507100c1,0,5,e470b1a7d2c9c5c6f03bbaa8fa20db6d404a0c32"

```

  - 发起转帐交易：（dev模式下，可以直接成功，实际上需要矿工挖矿，把这个交易打包到 挖矿数据包中）
```
> var sender = eth.accounts[0];
> var receiver = eth.accounts[1];
> var amount = web3.toWei(0.01, "ether")
> var gasAmount = 210000
> eth.sendTransaction({from:sender, to:receiver, value: amount, gas: gasAmount})
> eth.getBalance(eth.coinbase)
> eth.getBalance(eth.accounts[0])
> eth.getBalance(eth.accounts[1])
10000000000000000

```

  - geth如果不是dev模式，则需要解锁coinbase，设置长挖矿模式，并启动挖矿
```
查看账户余额
> eth.getBalance(eth.accounts[ ])
解锁账户
> personal.unlockAccount(eth.accounts[], <password>) 
挖矿
$ geth --mine --minerthreads=4
> miner.start(8)
结束挖矿
> miner.stop()
查看挖矿速率
> miner.getHashrate()
查看区块高度
 > eth.blockNumber
查看挖矿账户
> eth.coinbase
设置挖矿账户
> miner.setEtherbase(eth.accounts[0]) 
预估手续费
> bytecode = ""
> web3.eth.estimateGas({data: bytecode})
```

  - 账户操作命令：
```
> eth.accounts
> personal.listAccounts    
> personal.newAccount("***") 
> personal.unlockAccount("**********")  
> personal.lockAccount("**********")  

```

  - 账户操作命令：
```
eth.getBalance() 
web3.fromWei() 

```
  - 其他命令：
```
> net.listening：检查是否连接
> net.peerCount：连接到的节点个数
> admin.peers：返回连接到的节点的详细信息
> admin.nodeInfo：返回本地节点的详细信息
> admin.addPeer()       
> eth.getBlock(n) 
> eth.blockNumber
```

## 三、区块浏览器的安装和使用
  - 下载和安装.   
[以太坊区块链浏览器搭建](https://blog.csdn.net/chitan8817/article/details/100648178).   版本太老无法匹配

```
git clone https://github.com/etherparty/explorer.git
cd explore
npm install
npm start


```



## 四、 Remix 使用   

- 本地geth启动开发者模式    
- 打开Remix网址： https://remix.ethereum.org/     
- 修改 remix的 web3访问地址（修改为本地geth测试地址）： http://127.0.0.1:8545      
- [Remix 使用手册]()          

npm install -g @remix-project/remixd

