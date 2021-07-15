/*
 * @Author: Mr.xie
 * @Date: 2021-07-15 14:24:59
 * @LastEditTime: 2021-07-15 14:52:43
 * @LastEditors: Mr.xie
 * @Description:
 * @FilePath: /homeWork/js进阶/Promise封装一个Ajax.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

function fetch(method, url, data) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        var method = method || "GET";
        var data = data || null;
        xhr.open(method, url, true);
        xhr.onreadystatechange = function () {
            if (xhr.status === 200 && xhr.readyState === 4) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.responseText);
            }
        }
        xhr.send(data);
    })
}


// 使用
fetch("GET", "/some/url.json", null)
    .then(result => {
        console.log(result);
    })