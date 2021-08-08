<!--
 * @Author: Mr.xie
 * @Date: 2021-08-08 10:40:27
 * @LastEditTime: 2021-08-08 10:51:19
 * @LastEditors: Mr.xie
 * @Description: 
 * @FilePath: /homeWork/移动端/move.md
 * 可以输入预定的版权声明、个性签名、空行等
-->

# 移动端适配几种方法

    一 利用基础的rem适配
        1 indexhtml设置 
            var widht = document.documentElement.clientWidth || document.body.clientWidth;
            var ratio = widht / 375;
            var fontSize = 100 * ratio;
            document.getElementsByTagName('html')[0].style['font-size'] = fontSize + 'px'
        2 base.css 中设置
            html{
                font-size: 100px;
            }
            body{
                font-size: 0.12rem;
            }
    二 使用媒体查询 设置屏幕区间fantsize大小
        html {
            font-size: 20px;
        }
        body {
            font-size: 16px;
            font-family: "微软雅黑";
            background: #fff;
        }
        @media only screen and (max-width: 320px) {    html {
            font-size: 42.7px !important;
        }}
        @media only screen and (min-width: 321px) and (max-width: 360px) {    html {
            font-size: 48px !important;
        }}
        @media only screen and (min-width: 361px) and (max-width: 375px) {    html {
            font-size: 50px !important;
        }}
        @media only screen and (min-width: 376px) and (max-width: 384px) {    html {
            font-size: 52.1px !important;
        }}
        @media only screen and (min-width: 385px) and (max-width: 414px) {    html {
            font-size: 55.2px !important;
        }}
        @media only screen and (min-width: 415px) and (max-width: 480px) {    html {
            font-size: 64px !important;
        }}
        @media only screen and (min-width: 481px) and (max-width: 540px) {    html {
            font-size: 72px !important;
        }}
        @media only screen and (min-width: 750px) {    html {
            font-size: 100px !important;
        }}



# 移动端如果设置10px字体大小
    1 谷歌浏览器最小字体是12px 那么如何实现
    2 使用transform：scale缩放实现
        .font-10px{
            transform:scale(0.5)
            font-size:20px
        }