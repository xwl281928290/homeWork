/*
 * @Author: Mr.xie
 * @Date: 2021-07-15 14:01:52
 * @LastEditTime: 2021-07-15 14:16:45
 * @LastEditors: Mr.xie
 * @Description:
 * @FilePath: /homeWork/js进阶/class实现promise.js
 * 可以输入预定的版权声明、个性签名、空行等
 */

// 创建一个promise的类

class Promise {
    constructor(executer) {
        this.status = 'pending' //默认的状态pending
        this.value = undefined //成功的值默认undefined
        this.reason = undefined //失败的值默认undefined

        // 状态只有在pending时候才能改变
        let resolevFn = value => {
            // 判断只有等待时才能resolve成功
            if (this.status == pending) {
                this.status = 'resolve';
                this.value = value;
            }
        }

        // 判断只有等待时 才能reject失败
        let rejectFn = reason => {
            if (this.status == pending) {
                this.status = 'reject';
                this.reason = reason;
            }
        }

        try {
            // resolve 和 reject 两个函数传递给执行器 executer
            executer(resolevFn, rejectFn);
        } catch (e) {
            reject(e) //失败的话进catch
        }
    }
    then(onFufilled, onReject) {
        // 如果状态陈工调用onFufilled
        if (this.status == 'resolve') {
            onFufilled(this.value);
        }
        // 如果状态失败调用 onReject
        if (this.status == 'reject') {
            onReject(this.reason)
        }
    }
}