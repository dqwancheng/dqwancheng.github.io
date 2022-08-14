---
title: 常用的Hexo命令
author: DQ晚成
tags:
  - Hexo
  - 静态博客
abbrlink: e94204bf
date: 2021-02-22 17:28:25
---

## 常用命令

### 1. `hexo n 'HelloWorld'`

- 作用：新建一个 HelloWorld.md 的博客文章
- 另：`hexo n draft '草稿'`创建一个草稿文档，不会出现在博客上
    - 使用`hexo publish '草稿'`发布为正式文章
- 附：`hexo n page ''`新建页面



### 2. `hexo g`

- 作用：自动生成网站静态文件到public目录下，便于查看网站生成的静态文件或者手动部署网站
- 注意：如果使用自动部署，不需要先执行该命令

### 3. `hexo s`

- 作用：启动本地服务器，用于预览主题。默认地址：` http://localhost:4000/`，预览的同时可以修改文章内容或主题代码，保存后刷新页面即可。

- 注意：对Hexo根目录 `_config.yml` 的修改，需要重启本地服务器后才能预览效果。

- 另：预览草稿文章 `hexo s --drafts`

### 4. `hexo d`

- 作用：自动生成网站静态文件，并部署到设定的仓库

### 5. `hexo clean`

- 作用：清除缓存文件`db.json`和已生成的静态文件 public目录，一般在网站出现异常时使用

### 6. 设置文章摘要

```
以上是文章摘要
<!--more-->
以下是余下全文 
```

![效果图](http://dqwcpics1.oss-cn-zhangjiakou.aliyuncs.com/img/%E6%95%88%E6%9E%9C%E5%9B%BE.png)

## 常见命令

```hexo
hexo new "postName" # 新建文章
hexo new page "pageName" # 新建页面
hexo generate # 生成静态页面至public目录
hexo server # 开启预览访问端口（默认端口4000，'ctrl + c'关闭server）监视文件变动并自动更新，无需重启服务器
hexo server -p 5000 # 更改端口
hexo server -i 192.168.1.1 # 自定义 IP
hexo deploy # 部署到GitHub
hexo help  # 查看帮助
hexo version  # 查看Hexo的版本
hexo init  # 初始化
```

### 缩写

```
hexo n == hexo new
hexo p == hexo publish
hexo g == hexo generate
hexo s == hexo server
hexo d == hexo deploy
```

### 组合

```
hexo s -g #生成并本地预览
hexo d -g #生成并上传
```

### 一些问题
