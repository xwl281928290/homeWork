<!--
 * @Author: Mr.xie
 * @Date: 2021-07-16 12:16:34
 * @LastEditTime: 2021-07-16 15:16:13
 * @LastEditors: Mr.xie
 * @Description: 
 * @FilePath: /homeWork/vue/webpack.md
 * 可以输入预定的版权声明、个性签名、空行等
-->

# webpack
    定义：
        1 webpack是一个模块化打包工具，在webpack里一切文件都是模块，
        2 通过loader转换文件
        3 通过plugin注入钩子
        4 输出多个木块组合的文件

    优点：
        1 专注与处理模块化的项目 能做到开箱即用一步到位
        2 通过 plugin扩展 完整好用又不失灵活
        3 使用场景不局限与web开发
        4 社区庞大活跃 能找到多数开源扩展
        5 提供更好的开发体验

    webpack的构建流程是什么？
        1 初始化参数 
            从配置文件和shell语句中读取合并参数 得出最终参数
        2 开始编译
            用上一步的参数初始化Compiler对象 加载所有配置插件 执行run方法编译
        3 确定入口
            根据配置中的entry 找出所有的入口文件
        4 编译模块
            调用所有配置的loader对模块进行翻译 找出模块依赖 递归处理所有依赖文件
        5 完成编译
            使用loader翻译后 得到每个模块被翻译后的最终内容以及他们之间的依赖关系
        6 输出资源
            根据入口和模块之间的依赖关系 组装成一个个包含多个模块的Chunk 在把每个CHunk转换成一个单独的文件加入到输出列表 这是可以修改输出内容的最后机会
        7 输出完成
            确定好输出内容后 根据配置文件输出的路径和文件名 把文件内容写入文件系统

    webpack热更新原理
        缩写：
            HMR： Hot Module Replacement 不用刷新浏览器而改变模块替换掉旧的模块
            WDS：webpack dev server 模块热替换        
        刷新：
            1 页面刷新，不保留页面状态，就是简单粗暴，直接window.location.reload()。
            2 基于WDS (Webpack-dev-server)的模块热替换，只需要局部刷新页面上发生变化的模块，同时可以保留当前的页面状态，比如复选框的选中状态、输入框的输入等
        原理：
            1 HMR的核心就是客户端从服务器拉去更新后的文件 实际上 WDS与浏览器维护一个websocket 
                当本地资源发生变化时 WDS会向浏览器推送更新 并带上构建时的hash 让客户端与上一次资源对比
            2 客户端对比出差异后会像WDS发送ajax 请求来获取更改内容（文件列表hash）
                这样客户端就可以借助这些信息继续向WDS发送jsonp请求获取chunk的增量更新
            3 拿到增量更新之后 那些保留 那些更新 由 Hot Module Plugin 来完成

# Loader 和 Plugin的不同
作用：
    Loader：加载器 webpack将一切文件视为模块 但是webpack只能解析js 如果像将其它文件也打包
        就会用到loader 作用就是 拥有加载和解析非js文件的能力
    Plugin：插件 可以扩展webpack的功能让给你webpack具有更多灵活性 
不同：
    loader在module。rules中配置 作为模块解析规则存在
    plugin在plugins中单独配置 类型数组

# 常见Loader 解决什么问题
    1 file-loader：把文件输入到一个文件夹中 在代码中通过URL去引用输出文件
    2 url-loader：file-loader类似 但是能在文件很小的情况下 一base64 
    3 image-loader：加载并且压缩图片文件
    4 babel-loader：把es6 转换成es5
    5 css-loader：加载css 支持模块化 压缩 文件 导入等特性
    6 style-loader：把css代码注入到js中国呢 通过 dom操作去加载css
    8 eslint-loader：通过eslint 检查js代码

# bundle chunk module的作用是什么
    1 module：开发中的每一个文件都可以看作是module 模块不局限于js 也包含css 图片
    2 chunk：表示代码块 一个chunk可以由 多个模块组成
    3 bundle：最终打包完成的文件 一般就是和chunk -- 对应关系 bundle就是对chunk进行编码压缩打包等

# webpack优化构建数独
    1 使用CommonsChunkPlugin来提取公共代码
    2 通过externals配置来提取常用库
    3 预编译资源模块 通过 DLLPlugin来对那些我们应用但是不修改
        的npm包进行预编译 在通过DllReferencePlugin将预处理的模块加载进来
    4 使用Happypack 实现多线程加速编译
    5 使用tree-shaking 和Scope Hoisting来提出多余代码
        