
# css3新特性
    1 颜色 新增RGBA HSLA模式
    2 蚊子阴影（text-shadow）
    3 边框 圆角 border-radius 边框阴影：box-shadow
    4 盒子模型：box-sizing
    5 背景：backgroud-size backgound-origin background-clip
    6 渐变：linear-gradient radial-gradient
    7 过渡：transiont 动画
    8 自定义动画：animate @keyfrom
    9 媒体查询 @media screen and （widht：800px）「」
    10 2D转换：transform：translate（x，y）rotate（x，y）
    11 弹性布局

# transform transition animation 作用

    1 transform：描述静态样式 可以对元素进行 
        操作：旋转 rotate，缩放 scale 移动 translate 
    2 transition 样式过渡 
        操作：通常和hover事件配合使用 需要犹事件来触发过渡
    3 animation 动画 由@keyframes来描述每一帧的样式
    区别：
        1 transform 描述静态样式 配合transition 和animation使用
        2 transition 通常和hover等事件配合使用 animation是自发的 立即播放
        3 animation 可设置循环次数
        4 animation 可设置每一帧的样式和时间 transition只能设置头尾
        5 transition可以与js配合使用 。js 设定要变化的样式 transiton负责动画效果

# 垂直剧中一个img
    #container{ //img的容器
        display:table-cell;
        text-align:center;
        vertical-align:middle;
    }

# sass
    变量：$声明  $引用
    混合：@mixin声明  @include引用

