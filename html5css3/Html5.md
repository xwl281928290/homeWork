
# H5新特性

    拖拽：1 拖动什么 - ondragstart 2 进行放置 - ondrop 3 放到何处 - ondragover 
    语义话标签：header nav footer aside articel section
    自定义属性：data-id
    音频视频：audio video 如果浏览器不支持自动播放怎么办?在属性中添加 autoplay
    画布 Cancas
    地图：Geolocation
    新技术：
        webworker：
        websocket 
        Geolocation

# localstrage sessionStorage，cookie 区别
    相同：都保存在浏览器端 且同源
    不同：
        1 cookie 存储大小4k storage是5M
        2 cookie根据设置的过期时间确定
    cookie：数据始终在同源的http请求中携带 即cookie在浏览器和服务器间来回传递 有路径path概念，

# h5 的浏览器存储有那些
    1 cookie：通信过程传递 可以设置失效时间 Cookies.set('name', 'value', {expires: 7,})
    2 localStrage，sesionStorage
    3 indexedDB ：浏览器内嵌非关系数据 操作对象是ObjectStore
    4 websql：类似mysql
    5 window变量：临时存储
    6 flash cookie ：音乐播放记录。。。

# BFC
    块级格式化上下文
    内部box 垂直一个接一个放置 独立容器不相互影响

# html5 移动开发app框架
    1 jquery mobile
    2 mui
    3 ionic
    4 Mobile Angular Ui
    5 PhoneGap
    