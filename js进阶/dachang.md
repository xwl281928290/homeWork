<!--
 * @Author: Mr.xie
 * @Date: 2021-07-14 13:41:43
 * @LastEditTime: 2021-08-05 14:26:49
 * @LastEditors: Mr.xie
 * @Description: 
 * @FilePath: /homeWork/js进阶/dachang.md
 * 可以输入预定的版权声明、个性签名、空行等
-->

# es6 新增了那些方法
    1 let 和 const
    2 模板字符串（Template String） `${}`
    3 箭头函数 ：（）=>{}
    4 对象扩展：
        1 属性的简写 
        2 省略：冒号与 function 关键字
        3 Object.keys(xx)方法 获取对象的所有属性名或方法名（不包括原形的内容），返回一个数组
    5 解构赋值 
    6 import 和 export
    7 Map 与 Set的方法 :set相当于数组 map健值对的集合
    8 Promise 对象
        三个状态：
            1 Fulfilled 为成功的状态，
            2 Rejected 为失败的状态，
            3 Pending 既不是 Fulfilld 也不是 Rejected 的状态，可以理解为 Promise 对象实例创建时候的初始状态
        两个过程：
            padding -> fulfilled、padding -> rejected
    9 class
    10 ...展开运算符
    11 async、await
    12 Proxy 代理

    手写一个 Promise
    Promise 如何封装一个 Ajax


# h5新增了那些方法
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

# 数组for in ，for of ，for循环的区别
    区别：
        forin 原型链上的属性也会被访问
    特点：
        forin:返回的是角标
        for of：返回的是值
        for：角标值都有区别：
# glup怎么执行任务 webpack怎么执行任务
    glup：是创建一个一个task 执行任务 注重流程
    webpack：注重打包 模块化
# promise理解和 promise怎么监听所有的异步执行完成

# 做过组件让团队共享么

# element和ant 你知道是怎么实现调用的么

# promise 与 async-await 有什么区别?
    相同：
        promise 和 async,await 都是异步编程的一种解决方法，
    不同：
        promise： 出现解决了传统 callback 函数回调地域的问题，支持链式调用可以停.then,promise 
            分别有 3 种状态一旦函数执行 promise 有了结果就无法改变，
            遇到复杂的业务逻辑 promise 显然不是那么方便需要不停 then 这样语法显然也不美观。
        async,await： 是基于 promise 实现的，它返回的是一个 promise 对象，
            可以使异步代码看起来像同步代码一样，更方便阅读和理解代码，解决了 promise 里面不停.then 的问题

# requer。js有了解么 属于那个规范
    CommonJS：
        来源：是nodejs也就是服务器端广泛使用的模块化机制 同步
        1 module.exports 导出对外的变量或接口 通过 require() 来导入其他模块的输出到当前模块作用域中
    requerJs：
        来源：即为遵循AMD规范的模块化工具。客户端使用 是异步的
        1 通过define方法，将代码定义为模块；通过require方法，实现代码的模块加载
    es6:
        新增模块化逻辑 import 和 export 替换 AMD/commonjs/requesjs

# 原型链以及对象原型和函数原型的区别
    原型链：
        当访问一个对象的属性时，如果该对象内部不存在这个访问的属性，
        则会去它的__proto__属性所指的对象(父对象)里寻找，如果父对象不存在这个属性，
        则继续往祖先对象的__proto__所指的对象(爷爷对象)里寻找，一直往上寻找...直到原型链顶端null，
        此时如果继续往上相当于在null上取属性，系统就会报错(null可以理解为原型链的终点，到该点时结束)，
        以上从访问的对象到null的一条链，我们称为原型链

    obj：__proto__和constructor属性是对象所独有的
        __proto__：
            对象所拥有的，__proto__属性都是由一个对象指向另一个对象，也就是指向它们的原型对象(也可以理解为父对象)

    Fn：prototype是函数所独有的
        prototype：它是从一个函数指向一个对象，所指的对象就是函数的原型对象

    特点：js中函数也是一种对象 也拥有__proto__和constructor属性
        在生成对象时 对象的__proto__属性指向函数的prototype属性 
    
# ajax怎么设置是否携带cookies
    $.ajax({
　　　　url: 'www.baidu.com',
　　　　type: 'post',
　　　　data: '',
　　　　//  默认情况下，标准的跨域请求是不会发送cookie的
　　　　beforeSend: function (xhr) {
　　　　　　xhr.withCredentials = true //确定携带 同源cookies
　　　　},
　　　　success: (rs) {
　　　　}
　　})
# js原生ajax的方法
    
    function ajax(method,url,data){
        var xhr = new XMLHttpRequese();
        var method = method || 'GET";
        var data = data || null;

        if(method == 'GET'){
            xhr.open(mehtod,url+?+data)
        }else{
            xhr.open(method,url)
            xhr.setRequestHeader('Content-type','application/x-www-form-urliencoded')
        }

        xhr.send(methdo=='get'?'':data)

        xhr.onreadyStatusChange funcution() {
            if(xhr.status == 200 && xhr.readStatus == 4)
        }
    }
    　　
    　　
    　
# vue自定义指令
    全局指令：
        Vue.directive( id, [definition] ) 方式注册全局指令，
            1 参数1:指令名称（指令名称不需要加 v- 前缀，默认是自动加上前缀的，使用指令的时候一定要加上前缀）
            2 参数2:可以是对象数据，也可以是一个指令函数。

        <!-- 全局注册 -->
        <input type="text" placeholder="我是全局自定义指令" v-focus>
        Vue.directive("focus", {
            inserted: function(el，binding){
                el.focus();
            }
        })
    局部指令：
        <input type="text" placeholder="我是局部自定义指令" v-focus2>
        new Vue({
            el: "#app",
            directives: {
                focus2: {
                    inserted: function(el，binding){
                        el.focus();
                    }
                }
            }
        })
    钩子函数：自定义指令提供了5个钩子函数
        bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
        inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
        update：所在组件的 VNode 更新时调用。
        componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用。
        unbind：只调用一次，指令与元素解绑时调用
    钩子函数参数：
        el: 指令所绑定的元素，可以用来直接操作 DOM，就是放置指令的那个元素。
        binding: 一个对象，里面包含了几个属性，这里不多展开说明，官方文档上都有很详细的描述。
        vnode：Vue 编译生成的虚拟节点。
        oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用
# vue响应式原理
    https://zhuanlan.zhihu.com/p/168768245
    
    
# meta标签里面的name = ‘viewport’ 是什么意思都那些属性 是基于谁缩放的
    1 viewport：在手机浏览器中能看到网页内容的那块区域称为可视区域，viewport就相当于那块可视区域
    2 缩放：initial-scale 缩放是根据设备宽度进行缩放
    3 属性
        width ：设置viewport的宽度，为一个正整数，或字符串"width-device"代表设备屏幕大小
        height ：设置viewport的高度，为一个正整数，或字符串"height-device"代表设备屏幕大小
        initial-scale：设置页面的初始缩放值，为一个数字，可以带小数
        user-scalable：是否允许用户进行缩放，值为"no"或"yes", no 代表不允许，yes代表允许
        minimum-scale：允许用户的最小缩放值，为一个数字，可以带小数
        maximum-scale：允许用户的最大缩放值，为一个数字，可以带小数

# 手写防抖截流函数
    // 防抖：你狂点按钮也没有，等你冷静下来事件才会触发。
    //输入框输入
    function debounce1(func, wait) {
        let timeout;
        return function (value) {
            if (timeout) clearTimeout(timeout);
            timeout = setTimeout(() => {
                func(value)
            }, wait);
        }
    }
    // 时间戳版 推荐 没有延迟
    function throttle1(fn, wait) {
        let pre = 0;
        return function () {
            let now = Date.now();
            if (now - pre > wait) {
                fn.apply(this, arguments);
                pre = now;
            }
        }
    }

# 手写去去重 多叉树递归遍历 深拷贝
<!-- 深拷贝 -->
    function deepCopy(obj) {
        <!-- 判断是数组还是对象 -->
        let objClone = Array.isArray(obj) ? [] : {};
        <!-- 判断是不是对象 数组也是对象的一种 -->
        if (obj && typeof obj === 'object') {
            for (key in obj) {
                console.log(key)
                if (obj.hasOwnProperty(key)) {
                    // 判断 obj 子元素是否为对象，如果是则递归复制
                    if (obj[key] && typeof obj[key] === 'object') {
                        objClone[key] = deepCopy(obj[key]);
                    } else {
                        // 如果不是则直接复制
                        objClone[key] = obj[key];
                    }
                }
            }
        }
        return objClone;
    }
# 手写css布局 流式布局

# css3用过那些属性
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

# less 和 sass区别 怎么定一个一个全局变量和 怎么写函数
    1 关于变量在Less和Sass中的唯一区别就是Less用@，Sass用$
    2 相对less功能更加强大
    3 变量：$声明  $引用
    4 混合：@mixin声明  @include引用

# http1.0和http2.0 的区别
    1、HTTP2 采用二进制格式而非文本格式，比起文本格式，二进制格式解析起来更加高效， 并且错误少 
    2、HTTP2 是完全的多路复用，非有序并阻塞的----只需要一个连接即可实现并行，多路 复用的意思是它能同时处理多个消息的请求和响应，HTTP1 是一个连接一次只能提交一个请 求的效率比较高，多了就会变慢 
    3、使用报头压缩，HTTP2 降低了开销，HTTP1 的消息头很大冗余,HTTP2 是将消息头中的不 同的部分分别用不用的索引进行表示，且会用哈夫曼编码压缩字符串，最后封装成 frame 
    4、HTTP2 让服务器可以将响应主动”推送”到客户端缓存中，HTTP2 中服务器会主动将资源推 送给客户端，例如把 js 和 css 文件主动推送给客户端而不用客户端解析 HTML 后请求再响应

# http 和 https 区别
    1、HTTPS 协议需要到 CA （Certificate Authority，证书颁发机构）申请证书，
        一般免费证 书较少，因而需要一定费用。(以前网易官网是 HTTP，而网易邮箱是 HTTPS 。) 
    2、HTTP 是超文本传输协议，信息是明文传输，HTTPS 则是具有安全性的 SSL 加密传输协 议
    3、HTTP 和 HTTPS 使用的是完全不同的连接方式，用的端口也不一样，前者是 80，后者 是 443 
    4、HTTP 的连接很简单，是无状态的。HTTPS 协议是由 SSL+HTTP 协议构建的可进行加密 传输、身份认证的网络协议，比 HTTP 协议安全。(无状态的意思是其数据包的发送、传输 和接收都是相互独立的。无连接的意思是指通信双方都不长久的维持对方的任何信息。)
    
# nginx怎么代理 配置项都是啥
    server
         {
            listen      81 ;
            server_name  www.baidu.com default;
            index index.html;
            root /data/abc/;
            
            #auth_basic "input you user name and password";
            #auth_basic_user_file /data/test_pwd;
                  
            location / {
                root   /data/abc/;
                index  index.html index.htm;
            }   
         }
# 跨域除了jsonp还有那些
    1 jsonp:
        var script = document.createElement("script"); 
            script.src = "HTTP:xxx.php?callback=jsonpCallback"
        document.head.appendChild(script);
        function jsonpCallback(data){}

    2 CORS：跨域资源共享 原理：服务器设置 Access-Control-Allow-OriginHTTP 响应头之后，浏览器将会允许跨域请求
        限制：浏览器需要支持 HTML5，可以支持 POST，PUT 等方法兼容 ie9 以上 
        需要后台设置 :
            Access-Control-Allow-Origin: * //允许所有域名访问，或者 
            Access-Control-Allow-Origin: HTTP://a.com //只允许所有域名访问 
    3、反向代理 :nginx
    4、window+iframe

# 从url到显示页面过程发生了什么
    http请求过程：
        1 DNS解析：
            查询对应的ip地址(dns查询：浏览器缓存-系统缓存-路由缓存-DNS缓存-根域名服务器)
        2 Tcp连接：三次握手
            浏览器向web服务器发送一个Http请求（Tcp 三次握手）
        3 发送HTTP请求
        4 服务器处理请求并返回HTTP报文
        5 浏览器解析渲染页面
        6 连接结束 四次挥手
    请求原理
        http协议是应用层的一种协议，是一种c/s架构服务，基于tcp/ip协议来通信，监听tcp的80端口
        http协议实现的是客户端可以向服务端获得web资源

# tcp 三次握手
    1 建立连接 客户端发送syn包 到服务器 等待确认
    2 服务器收到syn包 ，再次确认客户端的syn包（ack=j+1） 同时自己也发送一个包 给客户端（syn+ack）
    3 客户端收到服务器的syn+ack，向服务器发送确认包

# 什么是websocket
    定义：是一种通信协议 是html5提供的一种在单个tcp连接上进行全双通信协议
    区别：
        http：是无状态 单向协议 请求只能通过客户端到服务器
        websocket：允许客户端与服务器双向通信 一次连接 一直保持连接状态

# iframe通讯
	1:在内嵌项目中使用top.postMessage('传递的数据，尽量是字符串'，'需要接收消息的window域名')
		window.parent.postMessage(
			{
				title:'xxxx',
				data:{}
			},
			'*' //任意域名
		)
	2:在接受页面用 window.addEventListener("message", （e）=> {});来接受消息
		window.AddEventListener('message',(e)=>{
			if(e.title == xxx){}
		})
# flex
# 浏览器崩溃
# 内存泄露
	含义：应用程序不再需要占用内存的时候，由于某些原因，内存没有被操作系统或可用内存池回收
	引起内存泄露：
		1： 意外的全局变量
		2：被遗忘的计时器或回调函数
		3：脱离 DOM 的引用
		4：闭包


# 原声js坚挺锚点变化模拟vue 路由
	body标签设置 <body onhashchange='getHash()'></body>
		function getHash(){
			var hash = window.location.hash;
			if(hash == '#index')....
		}
# 