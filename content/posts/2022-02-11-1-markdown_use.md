---
layout: post
title: markdown使用测试文档
tags:
  - web
description: markdown使用示例
image: /images/markdown.jpeg
redirect_from:
  - /gbk-or-utf8/
  - /gbk-or-utf8
noComments: false
---

>> markdown使用测试文档


# 一、 自动生成目录
[TOC]: 生成目录， ***github不支持啊该功能***
```
[TOC]: 生成目录， ***github不支持啊该功能***
```

# 二、 文字修饰：
- *文字斜体*
- **文字加粗**
- ***文字斜体加粗***
- ~~文字删除~~ 
- ~~**文字加粗删除**~~ 
- ~~*文字斜体删除*~~ 
- <u>文字下划线使用HTML u 标签</u>
```
- *文字斜体*
- **文字加粗**
- ***文字斜体加粗***
- ~~文字删除~~ 
- ~~**文字加粗删除**~~ 
- ~~*文字斜体删除*~~ 
- <u>文字下划线使用HTML u 标签</u>
```

# 三 分割线
分割线：
***
---
```
分割线：
***
---
```

# 四 列表
1. 有序列表一
2. 有序列表二
3. 有序列表三
```
1. 有序列表一
2. 有序列表二
3. 有序列表三
```

# 五 列表
+ 无序列表1
+ 无序列表2
 
- 无序列表1
- 无序列表2
 
* 无序列表1
* 无序列表2
```
+ 无序列表1
+ 无序列表2
 
- 无序列表1
- 无序列表2
 
* 无序列表1
* 无序列表2
```

# 六 待办任务
- [ ] 待办任务1
- [ ] 待办任务2
- [x] 已办任务
- [ ] 待办任务
```
- [ ] 待办任务1
- [ ] 待办任务2
- [x] 已办任务
```

# 七 列表
嵌套列表，子列表4个空格锁进：
- 无序列表
    - 子列表是无序列表
    - 子列表是无序列表
 
1. 有序列表
    1. 子列表是有序列表
    2. 子列表是有序列表
    3. 以下无序
        - 无序1
        - 无序2
```
- 无序列表
    - 子列表是无序列表
    - 子列表是无序列表
 
1. 有序列表
    1. 子列表是有序列表
    2. 子列表是有序列表
    3. 以下无序
        - 无序1
        - 无序2
```

# 八 引用，多级引用

> 一级引用
>> 二级引用
>>> 三级引用
>>>> 四级引用
>>>>> 五级引用

```
> 一级引用
>> 二级引用
>>> 三级引用
>>>> 四级引用
>>>>> 五级引用
```

# 九，代码块
## 1, 行内代码块
` int main(int argc, char **argv) `

```
` int main(int argc, char **argv) `
```
## 2, 多行代码块
```
多行代码块，测试1
```

```c
//```c
int main(int argc, char **argv)
{
  printf("This is test!";
  return 0
}
```

```cpp
// ```cpp  //c++ 语言代码
int main()
{
  cout << "This is test" <<endl;
  return 0
}
```

```java
//```java
// Java 代码
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("hello world.");
    }
}
```

```js
//```js
function myFunction(p1, p2) {
    return p1 * p2;              // 该函数返回 p1 和 p2 的乘积
}
```

# 十 表格处理

|表头1  | 表头2 |表头3|
|--|--|--|
| 第1行第1列 | 第1行第2列 |第1行第3列|
| 第2行第1列 | 第2行第2列 |第2行第3列|

```
|表头1  | 表头2 |表头3|
|--|--|--|
| 第1行第1列 | 第1行第2列 |第1行第3列|
| 第2行第1列 | 第2行第2列 |第2行第3列|
```

| 左对齐 | 右对齐 | 居中对齐 |
| :--| --: | :--: |
| 单元格 | 单元格 | 单元格 |
| 单元格11 | 单元格22 | 单元格33 |

```
| 左对齐 | 右对齐 | 居中对齐 |
| :--| --: | :--: |
| 单元格 | 单元格 | 单元格 |
| 单元格11 | 单元格22 | 单元格33 |
```
> 冒号在左边：表示左对齐.  
> 冒号在右边：表示右对齐.  
> 两边都有冒号：表示居中对齐.  


# 十一 链接的处理

 1. 超级链接：
[百度官网](http://www.baidu.com)
```
  [百度官网](http://www.baidu.com)
```

 2. 直接显示链接
<http://baidu.com> 
```
<http://baidu.com>
```
 3. 本文档锚点
跳转到[锚点](#here)
### 这是一个锚点{#here}

```
github 这种锚点方式不能使用，需要使用 后面所列的 [目录1] [目录2] 所示的方式
跳转到[锚点](#here)
### 这是一个锚点{#here}
```

# 标题

----
## 目录
1. [目录1](#jump1)
2. [目录2](#jump2)

---
### <span id="jump1">1. 目录1</span>
---
### 2. 目录2<span id="jump2"></span>

```
# 标题

----
## 目录
1. [目录1](#jump1)
2. [目录2](#jump2)

---
### <span id="jump1">1. 目录1</span>
---
### 2. 目录2<span id="jump2"></span>
```

# 十二 图片处理

![这是一张本地图片](pictures/wechatimg39.jpeg)
![这是一张图片](./pictures/wechatimg39.jpeg)
![这是](/pictures/WechatIMG39.jpeg) 
<img width="100" alt="image" src="/pictures/WechatIMG39.jpeg">
<img width="100" alt="image" src="https://user-images.githubusercontent.com/97513521/149879594-43fa0fdf-b0d8-47a4-bde8-6df51e03cd68.png">

```
![这是一张本地图片](pictures/wechatimg39.jpeg)    ////error
![这是一张图片](./pictures/wechatimg39.jpeg)     ////error
![这是一张图片](/pictures/WechatIMG39.jpeg)       //原图
<img width="100" alt="image" src="/pictures/WechatIMG39.jpeg"> //指定大小
<img width="100" alt="image" src="https://user-images.githubusercontent.com/97513521/149879594-43fa0fdf-b0d8-47a4-bde8-6df51e03cd68.png">
```

>>>> 指定大小,并居中
<div align="center">
  <img width="100" alt="image" src="/pictures/WechatIMG39.jpeg"> 
</div>

```
<div align="center">
  <img width="100" alt="image" src="/pictures/WechatIMG39.jpeg"> 
</div>
```

``` 错误显示，样式不生效？？？？？？
![这是一张图片11111](/pictures/WechatIMG39.jpeg){:class="img-responsive"}
![这是一张图片22222](/pictures/WechatIMG39.jpeg){:height="50%" width="50%"}
![这是一张图片33333](/pictures/WechatIMG39.jpeg){:height="100px" width="400px"}
```

```
base64格式图片，可直接保存：
![描述图片的文字][图片声明]
[图片声明]:图片base64 编码内容

![描述][base64str]
[base64str]:data:image/png;base64,iVBORw0......

```

```
<img src="图片地址">       可使用img html标签
```

# 十三 文字上提，下沉

下标：X<sub>2</sub>
上标：Y<sup>2</sup>
下标文字: X<sub>上标文字</sub>
上标文字: Y<sup>上标文字</sup>

```
下标：X<sub>2</sub>
上标：Y<sup>2</sup>
下标文字: X<sub>上标文字</sub>
上标文字: Y<sup>上标文字</sup>
```

# 十四 简写，标注

<abbr title="Hyper Text Markup Language">HTML</abbr> 是一种标记语言。

```
<abbr title="Hyper Text Markup Language">HTML</abbr> 是一种标记语言。
```

# 十五 注脚

注脚示例[^note]
注脚示例二[^note2]
[^note]:这是注脚示例内容        
[^note2]:这是注脚示例内容2

```
注脚示例[^note]
注脚示例二[^note2]
 
[^note]:这是注脚示例内容        
[^note2]:这是注脚示例内容2
```


# 十六， markup 思维导图支持：

# Markmap 支持
 
## 标题符号
 
- 一级标题
- 二级标题
- 三级标题
 
## 无序列表
 
- 列表1
- 列表2
 
## 分隔符
 
- 第一部分
---
- 第二部分
--- 
- 第三部分
- 第四部分
 
## 超级链接
 
- <https://www.google.com>
- [Google](https://www.google.com)
 
## 文字修饰
 
- *斜体*
- **加粗**
- ~~删除线~~
 
## 代码块
 
- `单行代码块`
- 多行代码块 
```shell
多行代码块1
多行代码块2
多行代码块3
```