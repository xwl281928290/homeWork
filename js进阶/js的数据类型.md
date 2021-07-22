<!--
 * @Author: Mr.xie
 * @Date: 2021-07-21 16:32:04
 * @LastEditTime: 2021-07-22 11:33:29
 * @LastEditors: Mr.xie
 * @Description: 
 * @FilePath: /homeWork/js进阶/js的数据类型.md
 * 可以输入预定的版权声明、个性签名、空行等
-->
# js的基本数据类型 
    特点：
        1 保存位置在栈中（stack）
        2 占用空间小 大小固定 属于被频繁使用数据
    Null:
        只有一个值的数据类型，这个特殊的值是null
        null值表示一个空对象指针，而这也正是使用typeof操作符检测null时会返回object的原因
            不存在的原因是：
                1､方法不存在
                2､对象不存在
                3､字符串变量不存在
                4､接口类型对象没初始化 
            解决方法：
                做判断处理的时候，放在设定值的最前面
    Undefined:
        类型只有一个值，即特殊的undefined (从null派生出来的)
        在使用var声明变量但未对其加以初始化时，这个变量的值就是undefined
    
    Boolean:
        数据类型	转换为true的值	        转换为false的值
        Boolean	    true	                false
        String	    任何非空的字符串	    ""(空字符串)
        Number	    任何非0数值（包括无穷大）	0和NAN
        Object	    任何对象	                null
        Undefined	不适用	                undefined
    Number:
        表示整数和浮点数值 还有一种特殊的值 NaN
        NaN：这个数值用于表示一个本来要返回数值的操作数未返回数值的情况（这样就不会抛出错误了）
            1 JavaScript中，任何数值除以0会返回NaN
            2 任何涉及NaN的操作（例如NaN/10）都会返回NaN
            3 NaN与任何值都不相等，包括NaN本身
                (NaN == NaN);    //false
        isNaN(): 检测是否是非数值型(NaN)
            isNaN('123') //false
            isNaN(123)  //false
            isNaN(Number('as')) //true

    String:
        由零或多个16位Unicode字符组成的字符序列，即字符串。字符串可以由单引号(')或双引号(")表示

    Symbol: es6新增 
        代表创建后独一无二且不可变的数据类型 解决可能出现全局变量冲突的问题
        let sy = Symbol("key1"); //注意不能使用var
        let syObject = {};
        syObject[sy] = "kk";
        console.log(syObject);    // {Symbol(key1): "kk"}

    BigInt: es10新增 
        是一种数字类型的数据，可以表示任意京都格式的整数，方便存储和操作大整数
# js的引用类型
    特点：
        1 存储在堆中（heap）
        2 占据空间大 大小不固定
        3 在栈中包了对应的指针 指向堆中实体地址
    Object：
        Array：
        Function：
        Date：
# 字符串转换为数字 例如 ‘12.2b’
    1）使用 Number() 方法，前提是所包含的字符串不包含不合法字符。
    2）parseInt() 函数可解析一个字符串，并返回一个整数。还可以设置要解析的数字的基数。当基数的值为 0，或没有设置该参数时，parseInt() 会根据 string 来判断数字的基数。
    3）使用 parseFloat() 方法，该函数解析一个字符串参数并返回一个浮点数。
    4）使用 + 操作符的隐式转换。
    var name = '12.2b'
    
    console.log(Number(name))   //NaN 不能有特殊字符
    console.log(parseInt(name)) //12
    console.log(parseFloat(name)) //12.2
    console.log(+name) //NaN 不鞥有特殊字符

# typeof 操作符
    由于js中的变量是松散类型的，所以它提供了一种检测当前变量的数据类型的方法，也就是typeof关键字.
    通过typeof关键字，对这5种数据类型会返回下面的值（以字符串形式显示)
    undefined ---------- 如果值未定义 Undefined

    boolean ---------- 如果这个值是布尔值 Boolean

    string ---------- 如果这个值是字符串 String

    number ---------- 如果这个值是数值类型 Number

    object ---------- 如果这个值是对象或null Object

    需要注意的是typeof null返回为object,因为特殊值null被认为是一个空的对象引用

# null 和 undefined的区别
    相同：都只有一个值 都是基本类型数据
    不同
        undefined：
            1 含义是代表未定义
            2 一搬变量声明了但还没有定的时候返回 
        null：
            1 含义是代表控对象
            2 主要用于赋值给一些可能会返回对象的变量
            3 typeof 进行判断 null的类型会返回objce
# js基本规范
    1 函数内部声明的变量提升到函数首部 用一个var 声明
    2 变量赋予读经的类型初始值
    3 代码中 地址 时间 字符串使用常量代替
    4 尽量使用=== 代替==
    5 不要在内置对象的原型上添加方法
    6 for if 使用大括号

# {} 和 [] 的 valueOf 和 toString 的结果是什么？
    var obj = {}
    var arr = []
    console.log(obj.toString()) // [object object]
    console.log(obj.valueOf())  // {}
    console.log(arr.toString()) // ""
    console.log(arr.valueOf())  // []

# 变量交换
    var x = 0, y = 1;
    [x, y] = [y, x]
    console.log(x, y)

    var a = 0, b = 1;
    // 第一种
        a = (b = (a ^= b) ^ b) ^ a;
    // 第二种
        a ^= b
        b ^= a
        a ^= b
    console.log(a, b)

# 浮点数 每三位增加一个逗号 
    var num = 12300456700.11
    var format = num => {
        return Intl.NumberFormat().format(num)
    }
    var format1 = num => {
        return num.toLocaleString()
    }
    console.log(format(num)) // 12,300,456,700.11
    console.log(format1(num))  // 12,300,456,700.11