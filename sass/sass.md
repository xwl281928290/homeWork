<!--
 * @Author: Mr.xie
 * @Date: 2021-07-28 15:39:06
 * @LastEditTime: 2021-07-28 16:00:56
 * @LastEditors: Mr.xie
 * @Description: 
 * @FilePath: /homeWork/sass/sass.md
 * 可以输入预定的版权声明、个性签名、空行等
-->

# sass 常用
    1 css层级
    2 混入 ：@mixin声明  @include引用
    3 共用变量：$声明  $引用

# 导入方式
    @import "../../style/mixins.scss";
    @import "../../style/viriables.scss";

# 使用方式
    混入：
        @include 关键字 使用外部带入的 css模块
        例如：
            @include ellipsis;
    变量：
        $+变量名称 使用外部导入的 css共用样式
        例如：
            color: $content-fontColor;

