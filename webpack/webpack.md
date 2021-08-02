<!--
 * @Author: 谢维林
 * @Date: 2021-07-06 15:31:23
 * @LastEditTime: 2021-08-02 17:33:28
 * @LastEditors: Mr.xie
 * @Description: 
 * @FilePath: /homeWork/webpack/webpack.md
 * 可以输入预定的版权声明、个性签名、空行等
-->

mkdir testWebpack 
cd testWebpack
mkdir src dist 

npm init
npm install webpack --save-dev


# webpack参数
    --module-bind :模块绑定 （‘css=style-loader!css-loader'）
        
    --progress:现实打包过程百分比进度
    --display-modules：查看打包过程引用的所有模块
    --display-reasons：打包相关模块的原因
    --watch：监听模块变化自动打包
    --config: 指定读文文件 例如 wepack --config webpack.dev.config.js

# webpack插件

style-loader:   以style标签形式引入到 header标签内
css-loader: 识别css并打包
html-webpack-plugin： 版本号插件


# webpack 配置文件

<!-- 引用webpack中plugins提前设置的熟属性 -->
<html>
<!-- webpack 支持模版语言 -->
    <title><%= htmlWebpackPlugin.options.title%></title>
    <body>
        <%= htmlWebpackPlugin.options.data%>
        <% for ( var key in htmlWebpackPlugin.files) { %>
            <%= key %> : <%= JSON.style(htmlWebpackplugin.files[key])%>
        <% } %>
    </body>
<html>

var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path')

module.exports = {
    entry:{ //设置读取入口 可以是 字符串 数组 和对象
        main:'./src/script/main.js',
    },
    output:{ //输入入口
        path:'./dist',
        filename:'js/[name]-[chunkhash].js'
    },
    module:{ 
        loaders:[
            {
                test:/\.js$/,
                loader:'babel',  //es6转换
                include:path.resolve(__dirname,'src), //只解析src
                exclude:path:resolve(__dirname,'node_modules'),
                query:{
                    presets:['latest']
                }
            },
            {
                test:/\.css$/, //转换css 添加前缀 @import 处理
                loaders:['style-loader','css-loader?importLoaders=1','postcss-loader']
            },
            {
                test:/\.less$/,
                loader:'style!css!postcss!less'
            },
            {
                test:/\.scss$/,
                loader:'style!css!postcss!sass'
            }

        ]
    },
    postcss:[ //css属性兼容浏览器 自动添加前坠
        require('qutoprefixer')({
            broswers:['last 5 versions']
        })
    ]
    plugins:[ //处理html
        new htmlWebpackPlugin([
            filename:'index-【hash】.html', //设置倒出名称 添加hash版本号
            template:'index.html',      //默认度度根目录 index。html
            injext：‘head’，        //设置标签插入到header内部
            title：‘webpack is good', //自定义属性
            data: new Date(),
            minify：{       //html 压缩
                removeComments:true,
                collapseWhitespace:true,
            }
        ])
    ]
}