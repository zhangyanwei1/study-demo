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
![](https://uploader.shimo.im/f/WXR8MVuOr20FvQx0.png!thumbnail)

### flex-wrap

```
.box{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```