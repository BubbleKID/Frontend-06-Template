学习笔记

## 1. Javascript types
    Prior to ES6, JavaScript had six data types. In the ES6 specification, the Symbol type was added. Here is a list of all the types:

    String
    Number
    Boolean (the values true and false)
    null (the value null)
    undefined (the value undefined)
    Symbol
    Object
## 2. Symbol
    ES6引进一种新的原始数据类型Symbol,表示独一无二的值。
    Symbol 值通过Symbol函数生成,也就是对象的属性名可以有两种类型，原有的字符串和新增的 Symbol 类型。
    let s = Symbol();

    typeof s
    // "symbol"
    复制代码注意：注意，Symbol函数前不能使用new命令，否则会报错。这是因为生成的 Symbol 是一个原始类型的值，不是对象。也就是说，由于 Symbol 值不是对象，所以不能添加属性。基本上，它是一种类似于字符串的数据类型。

    https://juejin.cn/post/6845166891820908551

## JS对象分类
概述
我们可以把对象分成几类。

宿主对象（host Objects）：由 JS 宿主环境提供的对象，它们的行为完全由宿主环境决定。
内置对象（Built-in Objects）：由 JS 语言提供的对象。

固有对象（Intrinsic Objects ）：由标准规定，随着 JS 运行时自动创建的对象实例。
原生对象（Native Objects）：可以由用户通过Array、RegExp等内置构造器或者特殊语法创建的对象。
普通对象（Ordinary Objects）：由{}语法、Object构造器或者class关键字定义类创建的对象，它能够被原型继承。



下面讲解普通对象之外的对象类型。

宿主对象
首先我们来看看宿主对象。
JS宿主对象千奇百怪，但是前端最熟悉的无疑是浏览器环境中的宿主了。
在浏览器环境中，我们都知道全局对象是window，window上又有很多属性，如document。
实际上，这个全局对象window上的属性，一部分来自 JS 语言，一部分来自浏览器环境。
JS 标准中规定了全局对象属性，w3c的各种标准中规定了Window对象的其它属性。
宿主对象也分为固有的和用户可创建的两种，比如 document.createElement  就可以创建一些dom对象。
宿主也会提供一些构造器，比如我们可以使用new Image来创建img元素.

https://juejin.cn/post/6844903875435036686