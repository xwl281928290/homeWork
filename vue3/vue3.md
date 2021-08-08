



# 为什么要用setUp函数
	vue2定义了很多 内置函数 当组件比较大难以维护 不好阅读
		例如：data() methods computed directives mixin 

# setup中不能使用this
	原因：created实例化完全初始化之前调用
	
# 常用api
	ref：处理基础类型的数据 为响应式
		1 ref('dell');
		2 放在标签上 也可以获取dom
			 const xxx = ref(null); //固定写法
	reactive：处理 对象 数组 为响应式
		reactive({age:'12'})
	readonly：设置只读不能修改
		readonly(ageObj);
	toRefs：将结构后的数据依然成为响应式
		const { age } = toRefs(ageObj)
	toRef：解构没有的属性不报错 依然可以设置对应的值
		const { xxx } = toRefs(ageObj)
	