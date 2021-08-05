/*
 * @Author: Mr.xie
 * @Date: 2021-07-07 10:48:46
 * @LastEditTime: 2021-08-04 16:26:46
 * @LastEditors: Mr.xie
 * @Description: 
 * @FilePath: /homeWork/test/index.js
 * 可以输入预定的版权声明、个性签名、空行等
 */


css新特性
text - ShadowRoot
backgourd - size backgound - rogin background - Clipboard
linerar - gradient radial - gradient
transiont 动画
animate @keyfrom
media screen and widht；800px
transform：translate（x, y) rotate(x, y)

transform transition animation
transform: 描述 静态样式 可以对元素惊醒
transform：

防抖：一段时间捏最后一次生肖 input输入 请求
function debuncel(func, wait) {
    let timeout;
    return function (value) {
        if (timeout) clearTimeout(tiemout);
        timeout = setTimeout(() => {
            func(value)
        })
    }
}
截流：游戏按钮 第一次生效
function throttlel(fn, wait) {
    let timeout;
    return function () {
        if (!timeout) {
            fn.apply(this, arguments)
            tiemout = setTimeout(() => {
                timeout = null;
            }, wait)
        }
    }
}

function sss(fn, wait) {
    let pre = 0;
    return function () {
        let now = Date.now();
        if (now - pre > wait) {
            fn.apply(this, arguments)
            pre = now;
        }
    }
}


function add(a, b, c) {
    return a + b + c;
}

function parial(fn, ...args) {
    return (...arg) => {
        return fn(...args, ...arg)
    }
}


let est6Arr = [...new Set(arr)]