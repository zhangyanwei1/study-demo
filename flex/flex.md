## 基本概念
Flexible Box 弹性布局。
任何一个容器都可以指定flex布局；行内元素也可以使用flex布局。

```
.box{
  display: inline-flex;
}
```
flex 与 inline-flex 区别比较像块级元素与行内块级元素的区别
注意，设为 Flex 布局以后，子元素的`float`、`clear`和`vertical-align`属性将失效。

## 容器属性
- `flex-direction` 决定主轴的方向（即项目的排列方向）
- `flex-wrap` 默认情况下，项目都排在一条线（又称"轴线"）上。`flex-wrap`属性定义，如果一条轴线排不下，如何换行。
- `flex-flow` 是`flex-direction`属性和`flex-wrap`属性的简写形式，默认值为`row nowrap`
- `justify-content` 定义了项目在主轴上的对齐方式。
- `align-items` 定义项目在交叉轴上如何对齐。
- `align-content` 定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

### flex-direction
```
.box {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

+ row(默认值)：水平方向，起点在左边
+ row-reverse：水平方向，起点在右边
+ column：垂直方向，起点在上
+ column-reverse：垂直方向，起点在下

[demo](./flex-container.html)
![flex-direction](https://uploader.shimo.im/f/WXR8MVuOr20FvQx0.png!thumbnail)

### flex-wrap

```
.box{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

+ nowrap：不换行，通过压缩成员宽度/高度实现，即使设置了成员的  `width/height` 属性也会被忽略；设置了`min-width`的则不会。
+ wrap：正常换行
+ wrap-reverse：换行，但是反向排列

[demo]('./flex-wrap.html)
![flex-wrap](https://uploader.shimo.im/f/na7C4Q92SwASReNp.png!thumbnail)

### flex-flow
flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap.

### justify-content
定义项目成员在主轴（水平方向）上的对齐方式。

```
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
}
```

+ flex-start（默认值）：以主轴起点开始，左对齐；
+ flex-end：以主轴终点开始，右对齐；
+ center：以主轴居中对齐（flex-direction：决定水平/垂直居中）
+ space-betwween：以主轴两端对齐，项目之间间隔相等；
+ space-around：以主轴两端最起，但是两个各有1/2的距离；

[demo]('./justify-content.html)

![justify-content](https://uploader.shimo.im/f/JoN3dcnSGGcrZbfI.png!thumbnail)

### align-items
定义成员在交叉轴方向（竖直方向）上的对齐方式。

```
align-items: flex-start | flex-end | center | baseline | stretch;
```

+ flex-start：交叉轴的起点对齐（顶部对齐）。
+ flex-end：交叉轴的终点对齐（底部对齐）。
+ center：交叉轴的中点对齐（居中对齐）。
+ baseline: 项目的第一行文字的基线对齐。
+ stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

[demo](./align-items.html)

![align-items](https://uploader.shimo.im/f/E4e2tD5VypcZlbmQ.png!thumbnail)

### align-content
定义了存在多根轴线的对齐方式。如果项目只有一根轴线，则该属性不起作用。也就是成员在一行展示不下，产生换行时的排列方式。（容器设置flex-wrap: wrap）