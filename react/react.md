<!--
 * @Author: 谢维林
 * @Date: 2021-07-06 16:38:17
 * @LastEditTime: 2021-07-06 16:41:51
 * @LastEditors: 谢维林
 * @Description: 
 * @FilePath: /homeWork/react/react.md
 * 可以输入预定的版权声明、个性签名、空行等
-->


# 常用包;
    import React from 'react'
    import ReactDom from 'react-dom'

    
# 什么是虚拟DOM？
	虚拟 DOM (VDOM)是真实 DOM 在内存中的表示。UI 的表示形式保存在内存中，并与实际的 DOM 同步。
		这是一个发生在渲染函数被调用和元素在屏幕上显示之间的步骤，整个过程被称为调和。

# 类组件和函数组件之间的区别是啥？
	却别：
		1 类组件可以使用其他特性，如状态 state 和生命周期钩子。
		2 当组件只是接收 props 渲染到页面时，就是无状态组件，就属于函数组件
	函数组件 ：没有 this，生命周期，state
	类组件：有 this，生命周期，state

# React 中 refs 干嘛用的？
	
# 什么是高阶组件？
	高阶组件(HOC)是接受一个组件并返回一个新组件的函数。基本上，这是一个模式，是从 React 的组合特性中衍生出来的，
	称其为纯组件，因为它们可以接受任何动态提供的子组件，但不会修改或复制输入组件中的任何行为。

# 什么是控制组件？（类似vue双向数据绑定）
	1 input、textarea,select 通常维护自己的状态，并根据用户输入进行更新。当用户提交表单时，来自上述元素的值将随表单一起发送。
	2 而 React 的工作方式则不同。包含表单的组件将跟踪其状态中的输入值，并在每次回调函数(例如onChange)触发时重新渲染组件，因为状态被更新。以这种方式由 React 控制其值的输入表单元素称为受控组件
# 讲讲什么是 JSX ？
	js方式书写 html模板 ，必须使用Babel和webpack等工具将其转换为传统的JS。

# React 的生命周期方法有哪些？
	componentWillMount:在渲染之前执行，用于根组件中的 App 级配置。
	componentDidMount：在第一次渲染之后执行，可以在这里做AJAX请求，DOM 的操作或状态更新以及设置事件监听器。
	componentWillReceiveProps：在初始化render的时候不会执行，它会在组件接受到新的状态(Props)时被触发，一般用于父组件状态更新时子组件的重新渲染
	shouldComponentUpdate：确定是否更新组件。默认情况下，它返回true。如果确定在 state 或 props 更新后组件不需要在重新渲染，则可以返回false，这是一个提高性能的方法。
	componentWillUpdate：在shouldComponentUpdate返回 true 确定要更新组件之前件之前执行。
	componentDidUpdate：它主要用于更新DOM以响应props或state更改。
	componentWillUnmount：它用于取消任何的网络请求，或删除与组件关联的所有事件监听器。

# 什么是 React Hooks？
	Hooks是 React 16.8 中的新添加内容。它们允许在不编写类的情况下使用state和其他 React 特性。
	使用 Hooks，可以从组件中提取有状态逻辑，这样就可以独立地测试和重用它。
	Hooks 允许咱们在不改变组件层次结构的情况下重用有状态逻辑，这样在许多组件之间或与社区共享 Hooks 变得很容易。