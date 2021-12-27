<!--
 * @Author: Mr.xie
 * @Date: 2021-07-16 09:34:18
 * @LastEditTime: 2021-12-26 21:55:55
 * @LastEditors: Mr.xie
 * @Description: 
 * @FilePath: /homeWork/vue/vue.md
 * 可以输入预定的版权声明、个性签名、空行等
-->

 # Vue 常用的指令都有哪些？并且说明其作用（必会）
    1 v-model：
    2 v-for：
    3 v-show：
    4 v-if：
    5 V-bind：
    6 @click
    7 v-text：
    8 v-html：
    9 b-bind：class 三种绑定方式 对象 三元 数组
    10 v-cloak：
    11 v-pre
 # 常用的修饰符有那些
    .prevent:提交事件不再重载页面
    .stop:阻止单机事件冒泡
    .self: 当事件发生载该元素本身而不是子元素的时候触发
    .capture:事件间帧听 事件发生时会调用

 # Vue 该如何实现组件缓存?

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

# Vue 中 slot 的使用方式，以及 slot 作用域插槽的用法
    1 普通插槽
        使用：父组件中 
                <template> 插槽内容 </template>
            子组件 
                <slot></slot> 

    2 具名插槽 -------- 就是实现在子组件中自行决定自己要显示什么内容
        使用：父组件中 
                <template v-slot:xxx> 插槽内容 </template>
            子组件
                <slot name='xxx'></slot> 

    3 作用域插槽 ：
        使用：父组件中 
                <template v-slot:default="scope">
                    <!-- 插槽内容 -->
                    {{scope.user.name}}
                </template>
            子组件
                <slot :user="user"></slot> 
                user：{
                    name:'1111',
                    age:'18'
                } 

# 生命周期
    含义：
        创建 载入 更新  卸载 一系列过程 
        1 beforeCreate / created
        2 beforeMount / mounted
        3 beforeUpdate / updated
        4 deactivated / beforeDestory
    什么阶段才能调用DOM
        mounted 中可以访问操作 DOM。

    什么阶段能发起请求
        created、beforeMount、mounted 因为在这三个钩子函数中，data 已经创建，可以将服务端端返回的数据进行赋值。

# Object.defineProperty 和 Proxy区别
    Proxy：
        1 可以直接监听对象而非属性
        2 可以直接监听数组的变化
        3 多达13中国呢拦截方法 不限于 apply ownKeys deleteProperty has obj.defin..不具备
        4 返回一个新对象 可以直接操作新对象 而 obj 只能遍历属性直接修改
    obj.de..:
        兼容性好 支持ie9 proxy 有兼容问题 且无法使用polyfill磨平

        // 在对象中添加一个属性与存取描述符的示例
        var bValue;
        var o = {};
        Object.defineProperty(o, "b", {
            get : function(){
                console.log('监听正在---获取b')
                return bValue;
            },
            set : function(newValue){
                console.log('监听正在---设置b')
                bValue = newValue;
            },
            enumerable : true,
            configurable : true
        });

        o.b = 38;
        console.log(o.b)
        打印：
            // 监听正在设置b
            // 监听正在获取b
            // 38
        结论：设置o.b时 调用set 获取o.b调用get
# 观察者 模式
    什么是观察者模式？它分为注册环节跟发布环节。
    function objServe(){
        this.dep = []
        <!-- 统一注册 -->
        register(fn){
            this.dep.push(fn)
        }
        <!-- 集中通知 -->
        notify(){
            this.dep.forEach( item => item())
        }
    }
    const wantCake = new Oberver();
    // 每来一个顾客就注册一个想执行的函数
    wantCake.register(() => {'console.log("call daisy")'})
    wantCake.register(() => {'console.log("call anny")'})
    wantCake.register(() => {'console.log("call sunny")'})

    // 最后蛋糕做好之后，通知所有的客户
    wantCake.notify()
# vue响应式原理
    1 observer 遍历对象所有的属性设置get/set 
    2 watcher
    3 compiler 编译标签模版 编译过程中 将标签于数据进行关联 注册一个watcher观察者 当数据变化时 watcher调用对应的compiler 编译更行对应的页面
    

    借鉴文章： https://zhuanlan.zhihu.com/p/88648401
    
    一 init 阶段： VUE 的 data的属性都会被reactive化，也就是加上 setter/getter函数。
        *****************************为代码start*****************************
            function defineReactive(obj: Object, key: string, ...) {
                const dep = new Dep()
                Object.defineProperty(obj, key, {
                    enumerable: true,
                    configurable: true,
                    get: function reactiveGetter () {
                        ....
                        dep.depend()
                        return value
                        ....
                    },
                    set: function reactiveSetter (newVal) {
                        ...
                        val = newVal
                        dep.notify()
                        ...
                    }
                })
            }
            
            class Dep {
                static target: ?Watcher;
                subs: Array<Watcher>;
                depend () {
                    if (Dep.target) {
                    Dep.target.addDep(this)
                    }
                }
                notify () {
                    const subs = this.subs.slice()
                    for (let i = 0, l = subs.length; i < l; i++) {
                    subs[i].update()
                    }
                }
            }
        *****************************为代码end*****************************
        1 所有属性添加 setter/getter函数 每一个data的属性都会有一个dep对象
        2 getter调用的时候，去dep里注册函数
        3 setter的时候，就是去通知执行刚刚注册的函数。

    二 mount 阶段：
        *****************************为代码start*****************************
            mountComponent(vm: Component, el: ?Element, ...) {
                vm.$el = el
                ...
                updateComponent = () => {
                    vm._update(vm._render(), ...)
                }
                new Watcher(vm, updateComponent, ...)
                ...
            }
            class Watcher {
                getter: Function;
                constructor(vm: Component, expOrFn: string | Function, ...) {
                    ...
                    this.getter = expOrFn
                    Dep.target = this                      // 注意这里将当前的Watcher赋值给了Dep.target
                    this.value = this.getter.call(vm, vm)  // 调用组件的更新函数
                    ...
                }
            }
        *****************************为代码end*****************************
        1 创建一个Watcher类的对象。这个Watcher实际上是连接Vue组件与Dep的桥梁 每一个Watcher对应一个vue component。
        2 在new Watcher的时候，constructor 里的this.getter.call(vm, vm)函数会被执行  getter 其实就是 updateComponent（）
        3 updateComponent函数会调用组件的render函数来更新重新渲染
        4 render函数 会访问data属性 以及属性下面的 getter函数 （这个过程叫做搜集依赖）
            render: function (createElement) {
                return createElement('h1', this.blogTitle)
            }
            此时会去调用这个属性blogTitle的getter函数，即：
                // getter函数
                get: function reactiveGetter () {
                    ....
                    dep.depend()
                    return value
                    ....
                },
                // dep的depend函数
                depend () {
                    if (Dep.target) {
                    Dep.target.addDep(this)
                    }
                }
    三 更新阶段
        1 当属性发生改变的时候，就去调用Dep的notify函数,然后通知所有的Watcher调用update函数更新。

    总结：
        1 组件初始化的时候，先给每一个Data属性都注册getter，setter，也就是reactive化。
        2 然后再new 一个自己的Watcher对象，此时watcher会立即调用组件的render函数去生成虚拟DOM。
        3 在调用render的时候，就会需要用到data的属性值，
        4 此时会触发getter函数，将当前的Watcher函数注册进sub里。
        5 当data属性发生改变之后，就会遍历sub里所有的watcher对象，通知它们去重新渲染组件。

# vuex
    1 state
        状态树 定义需要管理的数组 对象 字符串等
    2 getter
        类似计算属性
    3 mutation  
        同步 改变state中的值 store.commit 
    4 action
        异步 提交mutation 执行 store.dispatch
    5 module
        当state过于庞大是 拆分成多个模块 拥有自己的 state、mutation、action 和 getter

# vue-router
    模式：
        1 hash：利用url中的hash（‘#’） //原声js 坚挺路由变化可以通过 body标签设置 <body onhashchange='getHash()'></body>
            
        2 history：通过history.pushState或者history.replaceState这样的API锚点来改变浏览器的历史记录堆栈 在HTML5中新增的方法
            优点：没有锚点 能使用浏览器后退前进功能
            缺点：实现需要考虑多种路由变化的情况；兼容性相对较差
    跳转方式：
        1 <router-link to='需要跳转的页面路径'>
        2 this.$router.push('') history有记录可以回退
        3 this.$router.replace() history没有记录 回到上上个页面
        4 this.$router.go(n) 向前活向后跳n个页面 n可以是正数或 负数
    安装配置：
        npm install --save vue-router
        import VueRouter from 'vue-router'
        var router = new VueRouter({
            routers:[
                {
                    path:'/hello',
                    component:HelloWorld
                }
            ]
        })
    动态显示路由
        <router-view></router-view>
    路由守卫
        全局守卫：beforeEach
            三个参数：
                1 to:router 即将进入的路由对象 1,3）
                2 from:当前导航即将离开的路由 1,4）
                3 next:function,进行管道中的一个钩子，如果执行完了,则导航的状态就是 confirmed （确认的）否则为 false,终止导航
        后置守卫：afterEach
        全局解析守卫：beforeResolve
        路由独享守卫：beforeEnter

# query 和 params 之间的区别是什么？
    params：相当于post请求 url中不限时参数 刷新后 参数消失
    name---params
        this.$router.push(
            {
                name: 'checkDetailInfo',
                params:{
                    fkdNum:fkdNum,
                }
        });
    this.$route.params; //接收参数

    querty：相当于get请求 url中显示参数 刷新还在
    path---query
        this.$router.push(
            {
                path: 'checkDetailInfo',
                querty:{
                    fkdNum:fkdNum,
                }
        });
        this.$route.querty; //接收参数
# $route 和$router 的区别是什么
    route：路由信息对象
        path params hash query fullPath matched name 路由信息
    router：全局路由器对象
        this。router。push 会网history中添加新记录

# vue坑
    给对象新增对象属性时 不是响应式
		原因：
			1:data中的对象属性在初始化时已经完成了 dep的注册环节
			2:添加新属性的时候，却无法触发 Object.defineProperty 的getter、setter 事件属性的拦截
        解决方案：
            1 this.$set(obj,"propertyName","value") 来添加属性 
            2 Vue.next(回掉函数进行获取)
		
# vue项目优化解决方案
    1 css抽离
    2 抽离公共js代码抽离
    3 不打包框架 库文件 通过cdn方式引入
    4 小图片 使用base64 iconfont
    5 webpack 处理文件压缩
    6 配置文件  懒加载
    7 ui库按需加载
    8 路由动态加载

# style 上加 scoped 属性的原理么
    作用：样式私有化 不污染全局
    原理：通过postCss转译实现 给所有dom添加一个唯一不重复的动态属性

# vue的nextTick 的原理是什么
	作用：
		　在下次DOM更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的DOM。
	什么时候使用nextTick：
		1 created()钩子函数进行的DOM操作一定要放在Vue.nextTick()的回调函数中。原因是什么呢，原因是在created()钩子函数执行的时候DOM 其实并未进行任何渲染
		2 的到数据后在遍历元素，则在mounted里不一定能得到该元素，则也需要使用Vue.nextTick()；
    原理：
        通过异步队列控制 DOM 更新和 nextTick 回调函数先后执行的方式。
    1 常见的宏任务有：script, setTimeout, setInterval。。
    2 常见的微任务有：process.nextTick(nodejs),Promise.then()。。


            
# for 循环 key的作用
    提升效率：通过这个 key，我们的 diff 操作可以更准确、更快速

# computed计算属性和watch之间的区别
    computed:
        1.computed 具有缓存功能，可以监听对象某个具体属性。
        2.变量不在 data中定义，而是定义在computed中。
        3.根据一个或多个现有数据去生成一个新数据，并且这两个数据会永久的建立关系，还会建立缓存，当无关数据改变的时候，不会重新计算而是直接使用缓存中的值。
    注意：
        如果是在 methods中每调用一次就会重新计算一次，为了进行不必要的资源消耗，选择用计算属性. 初始化的时候就可以被监听到并且计算
    应用：
        计算累加
         computed: {
            isMan () {
                return this.num * this.num1
            }
        }
    watch：
        1.watch 监听的是已经在 data 中定义的变量, 当该变量变化时，会触发 watch 中的方法
        2.watcher，当需要在数据变化时执行异步或开销较大的操作时，这时watch是非常有用的
        3.watch可以进行深度监听，监听对象的变化。
        4.只能监听简单数据类型，如果监听复杂数据类型，如对象，无法监听对象具体某个属性。
    应用：
        watch: {
            queryData: {   
                handler: function() {
                    //do something
                },
                deep: true
            }
        }
        
# vnode是什么 入如何渲染的

# keep-alive
    keep-alive是一个抽象组件：
        它自身不会渲染一个DOM元素，也不会出现在父组件链中；使用keep-alive包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。

    一个场景
        用户在某个列表页面选择筛选条件过滤出一份数据列表，由列表页面进入数据详情页面，再返回该列表页面，我们希望：列表页面可以保留用户的筛选（或选中）状态。
        keep-alive就是用来解决这种场景。当然keep-alive不仅仅是能够保存页面/组件的状态这么简单，
        它还可以避免组件反复创建和渲染，有效提升系统性能。总的来说，keep-alive用于保存组件的渲染状态。

    <keep-alive>
        <coma v-if="test"></coma>
        <comb v-else="test"></comb>
    </keep-alive>
    <button @click="test=handleClick">请点击</button>
    切换组件 被缓存的组件不会消失

    keep-alive组件提供了include与exclude两个属性来允许组件有条件地进行缓存
    <keep-alive include="a">
        <component></component>
    </keep-alive

    <keep-alive exclude="a">
        <component></component>
    </keep-alive>

    生命钩子：
        keep-alive提供了两个生命钩子，分别是activated与deactivated。
        因为keep-alive会将组件保存在内存中，并不会销毁以及重新创建，所以不会重新调用组件的created等方法，
        需要用activated与deactivated这两个生命钩子来得知当前组件是否处于活动状态


