Array：Array 的 length 属性会根据最大的下标发生自动变化。

Object.prototype：作为所有正常对象的默认原型，不能再给它设置原型了。

String： 为了支持下标运算，String 的正整数访问会去字符串里面查找。

Arguments：arguments 的非负整数型下标属性跟对应的变量联动。

function f(a,b,c,d,e,f,g) {
	console.log(arguments);
}
// Arguments(7) [1, 2, 3, 4, 5, 6, 7, callee: ƒ, Symbol(Symbol.iterator): ƒ]
function(1,2,3,4,5,6,7)
模块化的 namespace 对象：特殊的地方非常多，跟一般对象完全不一样，建议不使用，用了会被打系列，还是尽量用 import。

类型数组和数组缓冲区：跟内存块相关联，下标运算比较特殊。

bind 后的 function：跟原来的函数相关联