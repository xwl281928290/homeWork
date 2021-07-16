<!--
 * @Author: Mr.xie
 * @Date: 2021-07-16 09:34:18
 * @LastEditTime: 2021-07-16 17:37:15
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
        创建 初始化 编译模版 挂载dom 更新 卸载 一系列过程 
    1 beforeCreate / created
    2 beforeMount / mounted
    3 beforeUpdate / updated
    4 deactivated / beforeDestory

# Object.defineProperty 和 Proxy区别
    Proxy：
        1 可以直接监听对象而非属性
        2 可以直接监听数组的变化
        3 多达13中国呢拦截方法 不限于 apply ownKeys deleteProperty has obj.defin..不具备
        4 返回一个新对象 可以直接操作新对象 而 obj 只能遍历属性直接修改
    obj.de..:
        兼容性好 支持ie9 proxy 有兼容问题 且无法使用polyfill磨平
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
        1 hash：利用url中的hash（‘#’）
            
        2 history：利用History interface 在HTML5中新增的方法
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
    给对象添加属性 不是响应式
        解决方案
            1 Vueset(对象，属性，值)
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
    原理：
        通过异步队列控制 DOM 更新和 nextTick 回调函数先后执行的方式。
    1 常见的宏任务有：script, setTimeout, setInterval。。
    2 常见的微任务有：process.nextTick(nodejs),Promise.then()。。

    