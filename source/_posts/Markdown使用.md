---
title: Markdown使用
author: DQ晚成
top: false
cover: false
toc: true
mathjax: false
abbrlink: 28cddff3
date: 2021-04-13 22:57:39
img:
coverImg:
password:
summary:
tags:
categories:
---

# Markdown使用

## 001.符号及公式

Markdown中书写符号或者公式时，只需在符号或者公式前后同时添加`"$"`或`"$$”`即可，显示效果不同。如下所示：

当在`\delta`前后各添加**两**个`"$"`，结果为：$$\delta$$

`$xxx$`将插入内容嵌入文本中：(使用格式为：`$\frac{1}{as+1}$变成$\frac{s}{as+1}$的形式`)

嵌入文本示范$\frac{1}{as+1}$变成$\frac{s}{as+1}$的形式

当在`\delta`前后各添加**一**个`"$"`，结果为：$\delta$

`$$xxx$$`将内容单独成行：(使用格式为：`$$\frac{1}{as+1}$$变成$$\frac{s}{as+1}$$的形式`)

$$\frac{1}{as+1}$$变成$$\frac{s}{as+1}$$的形式

------

**`$`一个还是两个的问题**
当输入特殊内容时，比如矩阵、公式、希腊字符等，需要使用`$`作为引导符号。

- `$xxx$` 将插入内容嵌入文本中

- `$$xxx$$`将内容单独成行

- `eg1:`
    嵌入文本示范$\frac{1}{as+1}$变成$\frac{s}{as+1}$的形式
    使用格式为：`$\frac{1}{as+1}$变成$\frac{s}{as+1}$的形式`

- `eg2:`
    单独成行：![image-20200203155245169](C:/Users/ASUS1/AppData/Roaming/Typora/typora-user-images/image-20200203155245169.png)

    使用格式为：`$$\frac{1}{as+1}$$变成$$\frac{s}{as+1}$$的形式`

------

### 数学符号

#### 数学模式重音符

|    语法     |    效果     |    语法     |    效果     |     语法      |     效果      |      语法       |      效果       |
| :---------: | :---------: | :---------: | :---------: | :-----------: | :-----------: | :-------------: | :-------------: |
|  `\bar{a}`  |  $\bar{a}$  | `\acute{a}` | $\acute{a}$ |  `\check{a}`  |  $check{a}$   |   `\grave{a}`   |   $\grave{a}$   |
|  `\hat{a}`  |  $\hat{a}$  | `\tilde{a}` | $\tilde{a}$ |   `\dot{a}`   |   $\dot{a}$   |   `\ddot{a}`    |   $\ddot{a}$    |
| `\breve{a}` | $\breve{a}$ |  `\vec{a}`  |  $\vec{a}$  | `\widehat{A}` | $\widehat{A}$ | `\widetilde{A}` | $\widetilde{A}$ |

#### 小写希腊字母

|     语法      |     效果      |    语法     |    效果     |    语法     |    效果     |    语法    |    效果    |
| :-----------: | :-----------: | :---------: | :---------: | :---------: | :---------: | :--------: | :--------: |
|   `\alpha`    |   $\alpha$    |  `\theta`   |  $\theta$   |     `o`     |     $o$     | `\upsilon` | $\upsilon$ |
|    `\beta`    |    $\beta$    | `\vartheta` | $\vartheta$ |    `\pi`    |    $\pi$    |   `\phi`   |   $\phi$   |
|   `\gamma`    |   $\gamma$    |   `\iota`   |   $\iota$   |  `\varpi`   |  $\varpi$   | `\varphi`  | $\varphi$  |
|   `\delta`    |   $\delta$    |  `\kappa`   |  $\kappa$   |   `\rho`    |   $\rho$    |   `\chi`   |   $\chi$   |
|  `\epsilon`   |  $\epsilon$   |  `\lambda`  |  $\lambda$  |  `\varrho`  |  $\varrho$  |   `\psi`   |   $\psi$   |
| `\varepsilon` | $\varepsilon$ |    `\mu`    |    $\mu$    |  `\sigma`   |  $\sigma$   |  `\omega`  |  $\omega$  |
|    `\zeta`    |    $\zeta$    |    `\nu`    |    $\nu$    | `\varsigma` | $\varsigma$ |   `\eta`   |   $\eta$   |
|     `\xi`     |     $\xi$     |   `\tau`    |   $\tau$    |             |             |            |            |

#### 大写希腊字母

|   语法   |   效果   |   语法    |   效果    |    语法    |    效果    |   语法   |   效果   |
| :------: | :------: | :-------: | :-------: | :--------: | :--------: | :------: | :------: |
| `\Gamma` | $\Gamma$ | `\Lambda` | $\Lambda$ |  `\Sigma`  |  $\Sigma$  |  `\Psi`  |  $\Psi$  |
| `\Delta` | $\Delta$ |   `\Xi`   |   $\Xi$   | `\Upsilon` | $\Upsilon$ | `\Omega` | $\Omega$ |
| `\Theta` | $\Theta$ |   `\Pi`   |   $\Pi$   |   `\Phi`   |   $\Phi$   |          |          |

#### 二元关系符

可以通过在下述命令前加上`\not`来得到其否定形式，如`"\not >"`即为$\not >$

|     语法      |    效果     |     语法     |     效果     |    语法     |    效果     |     语法      |     效果      |
| :-----------: | :---------: | :----------: | :----------: | :---------: | :---------: | :-----------: | :-----------: |
|      `<`      |      <      |     `>`      |     $>$      |     `=`     |     $=$     | `\leq`或`\le` | $\leq$或$\le$ |
| `\geq`或`\ge` |    $\ge$    |   `\equiv`   |   $\equiv$   |    `\ll`    |    $\ll$    |     `\gg`     |     $\gg$     |
|    `\sim`     |   $\sim$    |   `\simeq`   |   $\simeq$   |  `\subset`  |  $\subset$  |   `\supset`   |   $\supset$   |
|   `\approx`   |  $\approx$  | `\subseteq`  | $\subseteq$  | `\supseteq` | $\supseteq$ |    `\cong`    |    $\cong$    |
|     `\in`     |    $\in$    | `\ni或\owns` | $\ni或\owns$ |  `\propto`  |  $\propto$  |    `\mid`     |    $\mid$     |
|  `\parallel`  | $\parallel$ |     `:`      |     $:$      |  `\notin`   |  $\notin$   | `\neq`或`\ne` | $\neq$或$\ne$ |

#### 二元运算符

|       语法       |       效果       |        语法        |        效果        |    语法    |    效果    |    语法    |    效果    |
| :--------------: | :--------------: | :----------------: | :----------------: | :--------: | :--------: | :--------: | :--------: |
|       `+`        |       $+$        |        `-`         |        $-$         |   `\mp`    |   $\mp$    |   `\pm`    |   $\pm$    |
| `\triangleleft`  | $\triangleleft$  |  `\triangleright`  |  $\triangleright$  |  `\cdot`   |  $\cdot$   |   `\div`   |   $\div$   |
|     `\times`     |     $\times$     |     `setminus`     |    $\setminus$     |  `\star`   |  $\star$   |   `\ast`   |   $\ast$   |
|      `\cup`      |      $\cup$      |       `\cap`       |       $\cap$       |  `\circ`   |  $\circ$   | `\bullet`  | $\bullet$  |
|  `\vee`或`\lor`  |      $\vee$      |   `\wedge或land`   |      $\land$       |  `\oplus`  |  $\oplus$  | `\ominus`  | $\ominus$  |
|     `\odot`      |     $\odot$      |     `\oslash`      |     $\oslash$      | `\otimes`  | $\otimes$  | `\diamond` | $\diamond$ |
| `\bigtriangleup` | $\bigtriangleup$ | `\bigtriangledown` | $\bigtriangledown$ | `\bigcirc` | $\bigcirc$ | `\bigstar` | $\bigstar$ |

#### 大尺寸运算符

|   语法    |   效果    |   语法    |   效果    |    语法     |    效果     |     语法     |     效果     |
| :-------: | :-------: | :-------: | :-------: | :---------: | :---------: | :----------: | :----------: |
|  `\sum`   |  $\sum$   | `\bigcup` | $\bigcup$ |  `\bigvee`  |  $\bigvee$  |  `\bigolus`  | $\bigoplus$  |
|  `\prod`  |  $\prod$  | `\bigcap` | $\bigcap$ | `\bigwedge` | $\bigwedge$ | `\bigotimes` | $\bigotimes$ |
| `\coprod` | $\coprod$ |  `\int`   |   $\in$   |   `\oint`   |   $\oint$   |  `\bigodot`  |  $\bigodot$  |

#### 箭头

|         语法          |         效果          |       语法        |       效果        |        语法        |        效果        |        语法         |        效果         |
| :-------------------: | :-------------------: | :---------------: | :---------------: | :----------------: | :----------------: | :-----------------: | :-----------------: |
| `\leftarrow`或`\gets` | $\leftarrow$或$\gets$ | `\longleftarrow`  | $\longleftarrow$  |     `\uparrow`     |     $\uparrow$     |    `\downarrow`     |    $\downarrow$     |
| `\rightarrow`或`\to`  | $\rightarrow$或$\to$  | `\longrightarrow` | $\longrightarrow$ | `\leftrightarrow`  | $\leftrightarrow$  |    `updownarrow`    |    $updownarrow$    |
|     `\Leftarrow`      |     $\Leftarrow$      | `\Longleftarrow`  | $\Longleftarrow$  |     `\Uparrow`     |     $\Uparrow$     |    `\Downarrow`     |    $\Downarrow$     |
|     `\Rightarrow`     |     $\Rightarrow$     | `\Longrightarrow` | $\Longrightarrow$ | `\Leftrightarrow`  | $\Leftrightarrow$  |   `\Updownarrow`    |   $\Updownarrow$    |
|      `\nearrow`       |      $\nearrow$       |    `\searrow`     |    $\searrow$     |     `\swarrow`     |     $\swarrow$     |     `\nwarrow`      |     $\nwarrow$      |
|   `\leftharpoonup`    |   $\leftharpoonup$    | `\rightharpoonup` | $\rightharpoonup$ | `\leftharpoondown` | $\leftharpoondown$ | `\rightharpoondown` | $\rightharpoondown$ |
| `\rightleftharpoons`  | $\rightleftharpoons$  |      `\iff`       |      $\iff$       |                    |                    |                     |                     |

#### 其他符号

| 语法            | 效果            | 语法         | 效果         | 语法        | 效果        | 语法         | 效果         |
| --------------- | --------------- | ------------ | ------------ | ----------- | ----------- | ------------ | ------------ |
| `\dots`         | $\dots$         | `\cdots`     | $\cdots$     | `\vdots`    | $\vdots$    | `\ddots`     | $\ddots$     |
| `\hbar`         | $\hbar$         | `\imath`     | $\imath$     | `\jmath`    | $\jmath$    | `\ell`       | $\ell$       |
| `\Re`           | $\Re$           | `\Im`        | $\Im$        | `aleph`     | $\aleph$    | `\wp`        | $\wp$        |
| `\forall`       | $\forall$       | `\exists`    | $\exists$    | `\mho`      | $\mho$      | `\partial`   | $\partial$   |
| `’`             | $’$             | `\prime`     | $\prime$     | `\emptyset` | $\emptyset$ | `\infty`     | $\infty$     |
| `\nabla`        | $\nabla$        | `\triangle`  | $\triangle$  | `\Box`      | $\Box$      | `\Diamond`   | $\Diamond$   |
| `\bot`          | $\bot$          | `\top`       | $\top$       | `\angle`    | $\angle$    | `\surd`      | $\surd$      |
| `\diamondsuit`  | $\diamondsuit$  | `\heartsuit` | $\heartsuit$ | `\clubsuit` | $\clubsuit$ | `\spadesuit` | $\spadesuit$ |
| `\neg`或`\lnot` | $\neg$或$\lnot$ | `\flat`      | $\flat$      | `\natural`  | $\natural$  | `\sharp`     | $\sharp$     |

### 公式

#### 函数

| 语法                 | 效果                 | 语法                          | 效果                          | 语法         | 效果         | 语法          | 效果          |
| -------------------- | -------------------- | ----------------------------- | ----------------------------- | ------------ | ------------ | ------------- | ------------- |
| `\sin\theta`         | $\sin\theta$         | `\cos\theta`                  | $\cos\theta$                  | `\tan\theta` | $\tan\theta$ | `\cot\theta`  | $\cot\theta$  |
| `\arcsin\frac{A}{C}` | $\arcsin\frac{A}{C}$ | `\log X`                      | $\log X$                      | `\sqrt{3}`   | $\sqrt{3}$   | `\sqrt[n]{3}` | $\sqrt[n]{3}$ |
| `\lim A`             | $\lim A$             | `\lim_{\imath\to n} x_\imath` | $\lim_{\imath\to n} x_\imath$ |              |              |               |               |

#### 积分，求和

<table style="text-align: center"><tbody>
    <tr>
        <th>功能</th>
        <th>语法</th>
        <th>效果</th>
    </tr>
    <tr>
        <th rowspan=2>求和</th>
        <th>\sum_{k=1}^N k^2</th>
        <th><img src="http://latex.codecogs.com/gif.latex? \sum_{k=1}^N k^2"/></th>
    </tr>
    <tr>
        <th>\\begin{matrix} \sum_{k=1}^N k^2 \\end{matrix}</th>
        <th><img src="http://latex.codecogs.com/gif.latex? \begin{matrix} \sum_{k=1}^N k^2 \end{matrix}"/></th>
    </tr>
    <tr>
        <th rowspan=2>求积</th>
        <th>\prod_{i=1}^N x_i</th>
        <th><img src="http://latex.codecogs.com/gif.latex? \prod_{i=1}^N x_i"/></th>
    </tr>
    <tr>
        <th>\\begin{matrix} \prod_{i=1}^N x_i \\end{matrix}</th>
        <th><img src="http://latex.codecogs.com/gif.latex? \begin{matrix} \prod_{i=1}^N x_i \end{matrix}"/></th>
    </tr>
    <tr>
        <th rowspan=2>积分</th>
        <th>\int_{-N}^{N} e^x\, dx</th>
        <th><img src="http://latex.codecogs.com/gif.latex? \int_{-N}^{N} e^x\, dx"/></th>
    </tr>
    <tr>
        <th>\\begin{matrix} \int_{-N}^{N} e^x\, dx\\end{matrix}</th>
        <th><img src="http://latex.codecogs.com/gif.latex? \begin{matrix} \int_{-N}^{N} e^x\, dx\end{matrix}"/></th>
    </tr>
    <tr>
        <th>双重积分</th>
        <th>\iint_{-N}^{N} e^x\, dx</th>
        <th><img src="http://latex.codecogs.com/gif.latex? \iint_{-N}^{N} e^x\, dx"/></th>
    </tr>
    <tr>
        <th>三重积分</th>
        <th>\iiint_{-N}^{N} e^x\, dx</th>
        <th><img src="http://latex.codecogs.com/gif.latex? \iiint_{-N}^{N} e^x\, dx"/></th>
    </tr>
    <tr>
        <th>闭合的曲线，曲面积分</th>
        <th>\oint_{C} x^3\, dx + 4y^2\, dy</th>
        <th><img src="http://latex.codecogs.com/gif.latex? \oint_{C} x^3\, dx + 4y^2\, dy"/></th>
    </tr>
</table>

> 注：在实际使用过程中
>
> ```
> \\begin{}
> \\end{}
> ```
>
> 应书写为
>
> ```
> \begin{}
> \end{}
> ```

#### 矩阵，方程

<table><tbody>
    <tr>
		<th style="text-align:center">功能</th>
        <th style="text-align:center">语法</th>
        <th style="text-align:center">效果</th>
    </tr>
    <tr>
        <th rowspan=2 style="text-align:center">矩阵</th>
        <th>\\begin{bmatrix}<br>x & y \\<br>z & v<br>\\end{bmatrix}</th>
        <th style="text-align:center"><img src="http://latex.codecogs.com/gif.latex? \begin{bmatrix} x & y \\ z & v \end{bmatrix}"/></th>
    </tr>
    <tr>
        <th>\\begin{vmatrix}<br>x & y \\<br>z & v<br>\\end{vmatrix}</th>
        <th style="text-align:center"><img src="http://latex.codecogs.com/gif.latex? \begin{vmatrix} x & y \\ z & v \end{vmatrix}"/></th>
    </tr>
    <tr>
        <th style="text-align:center">条件定义</th>
        <th>f(n) =<br>\\begin{cases}<br>n/2, & \mbox{if }n\mbox{ is even} \\<br>3n+1, & \mbox{if }n\mbox{ is odd}<br>\\end{cases}</th>
        <th style="text-align:center"><img src="http://latex.codecogs.com/gif.latex? f(n) =\begin{cases} n/2, & \mbox{if }n\mbox{ is even} \\3n+1, & \mbox{if }n\mbox{ is odd} \end{cases}"/></th>
    </tr>
    <tr>
        <th style="text-align:center">方程组</th>
        <th>\\begin{cases}<br>3x + 5y + z = 0\\<br>7x - 2y + 4z = 0 \\<br>-6x + 3y + 2z = 0<br>\\end{cases}</th>
        <th style="text-align:center"><img src="http://latex.codecogs.com/gif.latex? \begin{cases} 3x + 5y + z = 0\\ 7x - 2y + 4z = 0 \\ -6x + 3y + 2z = 0 \end{cases}"/></th>
    </tr>
    <tr>
        <th rowspan=2 style="text-align:center">上下括号</th>
        <th>\\begin{matrix} 2 \\ \overbrace{<br>\\begin{bmatrix}<br>x & y \\<br>z & v<br>
\\end{bmatrix}<br>}\\end{matrix}</th>
        <th style="text-align:center"><img src="http://latex.codecogs.com/gif.latex? \begin{matrix} 2 \\ \overbrace{ \begin{bmatrix} x & y \\ z & v \end{bmatrix} }\end{matrix}"/></th>
    </tr>
    <tr>
        <th>\\begin{matrix} \underbrace{<br>\\begin{vmatrix}<br>x & y \\<br>z & v<br> \\end{vmatrix}} \\<br>2 \\end{matrix}</th>
        <th style="text-align:center"><img src="http://latex.codecogs.com/gif.latex? \begin{matrix} \underbrace{ \begin{vmatrix}x & y \\z & v\end{vmatrix}} \\2 \end{matrix}"/></th>
    </tr>
</table>

> 观察方程等的书写语法可知，只需在固定格式中替换所需功能对应的语法即可。
>
> ```
> \begin{功能}
> ...
> \end{功能}
> ```
>
> 若想在公式或方程后添加编号，只需添加`\tag{序号}`即可，如：

$$ax+by+c=0 \tag{1.1}$$

命令为：

```
$$ax+by+c=0 \tag{1.1}$$
```



## 002.排版

### 表格

Markdown可以通过多种方式实现表格
**Markdown推荐的标准表格**

```
| 语法 | 效果   | 语法    | 效果      | 语法    | 效果      | 语法     | 效果        |
| ---- | ------ | ------- | --------- | ------- | --------- | -------- | ----------- |
| \sum | $\sum$ | \bigcup | $\bigcup$ | \bigvee | $\bigvee$ | \bigolus | $\bigoplus$ |
```

效果为：

| 语法   | 效果   | 语法      | 效果      | 语法      | 效果      | 语法       | 效果        |
| ------ | ------ | --------- | --------- | --------- | --------- | ---------- | ----------- |
| `\sum` | $\sum$ | `\bigcup` | $\bigcup$ | `\bigvee` | $\bigvee$ | `\bigolus` | $\bigoplus$ |



默认表格内内容居中对齐，若需居左或居右对齐，操作如下：

```
| 语法 |   效果 | 语法    |      效果 | 语法    |   效果    |
| :--- | -----: | :------ | --------: | ------- | :-------: |
| \sum | $\sum$ | \bigcup | $\bigcup$ | \bigvee | $\bigvee$ |
```
效果为：
| 语法   |   效果 | 语法      |      效果 | 语法      |   效果    |
| :----- | -----: | :-------- | --------: | --------- | :-------: |
| `\sum` | $\sum$ | `\bigcup` | $\bigcup$ | `\bigvee` | $\bigvee$ |

**HTML格式的表格**
由于Markdown兼容`html`语法，因此可以用`html`语法生成一些复杂形式的表格。如下面可合并行列的表格：

<table><tbody>
    <tr>
        <th rowspan=3>合并行</th>
        <th>第一列</th>
        <th>第二列</th>
        <th>第三列</th>
    </tr>
    <tr>
        <td colspan=2>合并列</td>
        <td rowspan=2>第三列</td>
    </tr>
    <tr>
        <td><img src="http://latex.codecogs.com/gif.latex? \omega" /></td>
        <td><img src="http://latex.codecogs.com/gif.latex? 35*d_2" /></td>
    </tr>
</table>  
插入公示，只需添加

```
<img src="http://latex.codecogs.com/gif.latex? latex公式代码" />
```

html插入公示参考链接：[轮子的博客](http://www.cnblogs.com/haore147/p/3629895.html)

代码为：

```html
<table><tbody>
    <tr>
        <th rowspan=3>合并行</th>
        <th>第一列</th>
        <th>第二列</th>
        <th>第三列</th>
    </tr>
    <tr>
        <td colspan=2>合并列</td>
        <td rowspan=2>第三列</td>
    </tr>
    <tr>
        <td><img src="http://latex.codecogs.com/gif.latex? \omega" /></td>
        <td><img src="http://latex.codecogs.com/gif.latex? 35*d_2" /></td>
    </tr>
</table>  
```

### 图片

图片尺寸及位置调整参考：[简书](https://www.jianshu.com/p/5c1805c6f0ff)
插入图片时，可以直接复制粘贴一张图，图片可以是任意位置的图片，粘贴进来会自动生成地址，不用担心图片挪动位置导致图片不显示。但直接复制粘贴的图片默认是居左显示的，如下图：

![img](https://upload-images.jianshu.io/upload_images/1503319-c696a9cd1495d68f.png?imageMogr2/auto-orient/strip|imageView2/2/w/400/format/webp)

```
![img](https://upload-images.jianshu.io/upload_images/1503319-c696a9cd1495d68f.png?imageMogr2/auto-orient/strip|imageView2/2/w/400/format/webp)
```

如果想调整图像大小，只需在代码后面添加尺寸约束“ =200x”（宽x高），尺寸可以自定义，在不确定图像比例的情况下可以省略高度信息：

```
![在这里插入图片描述](https://img-blog.csdn.net/20181011191327845?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTM5MTQ0NzE=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70 =200x)
```

效果如下：

![在这里插入图片描述](https://img-blog.csdn.net/20181011191327845?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTM5MTQ0NzE=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70=200x)

也可以用html语法调整：

```
<img src="https://img-blog.csdn.net/20181011191327845?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTM5MTQ0NzE=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70" width="500" hegiht="313" />
```

<img src="https://i.loli.net/2021/04/13/9COEV2P6BLGMQFU.png" width="500" hegiht="313" />



若想让图片居中或者居右显示，则替换align=center或right

```
<div align=center><img src="https://img-blog.csdn.net/20181011191327845?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTM5MTQ0NzE=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70"/></div>
```

<div align=center><img src="https://img-blog.csdn.net/20181011191327845?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTM5MTQ0NzE=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70"/></div>

<span id="跳转"><\span>

### 页内跳转

参考内容：[Markdown页内跳转实现方法](https://www.cnblogs.com/tocy/p/markdown-link-inner-page.html)

页内跳转除了通过Markdown默认的目录功能外，还可以通过HTML中的设置锚点的方式进行。具体操作如下：
在需要跳转至的地方设置锚点：

```
<span id="jump"></span>
```

其中，span是设置锚点的关键词，id可理解为该锚点的定义，“jump”即为锚点id，可以自定义，在需要跳转的位置，链接此id即可实现跳转。

在需要点击进行跳转的地方链接锚点id：

```
[点击跳转](#jump)
```

其中，“[ ]”中的内容是你希望点击的对象，“( )”中是锚点id。

示例：查看[跳转效果](#跳转)。
操作步骤如下图所示：