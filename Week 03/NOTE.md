学习笔记
 ## 1.抽象语法树（Abstract Syntax Tree）
    抽象语法树（Abstract Syntax Tree）
    webpack和Link等很多工具和库的核心都是通过Abstract Syntax Tree抽象语法树这个概念来实现对代码的检查、分析等操作的。
    通过了解抽象语法树这个概念，你也可以随意编写类似的工具。
 ## 1.抽象语法树用途
    代码语法的检查、代码风格的检查、代码格式化、代码高亮、代码错误提示、代码自动补全等

    如JSLint、JSHint对代码错误或风格的检查，发现一些潜在错误IDE的错误提示、格式化、高亮、自动补全等
    代码混淆压缩

    UglifyJS2等
    优化变更代码，改变代码结构使其达到想要的结构

    代码打包工具webpack、rollup等CommonJS、AMD、CMD、UMD等代码规范之间的转化CoffeeScript、TypeScript、JSX等转化为原生Javascript
## 3.抽象语法树定义
    这些工具的原理都是通过Javascript Parser把代码转化为一颗抽象语法树（AST），这颗树定义了代码的结构，通过操纵这棵树，我们可以精准定位到声明语句、赋值语句、运算语句等等，实现对代码的分析、优化、变更等操作

    在计算机科学中，抽象语法树（abstract syntax tree 或者缩写为AST），或者语法树（syntax tree），是源代码的抽象语法结构的树状表现形式，这里特指编程语言的源代码。

    Javascript的语法是为了给开发者更好的编程而设计的，但是不适合程序的理解。所以需要转化为AST来使之更适合程序分析，浏览器编译器一般会把源码转化为AST来进行进一步的分析等其他操作。
```Javascript 
{
    "type": "Program",
    "body": [{
        "type": "VariableDeclaration",
        "kind": "var",
        "declarations": [{
            "type": "VariableDeclarator",
            "id": {
                "type": "Identifier",
                "name": "AST"
            },
            "init": {
                "type": "Literal",  //文本格式
                "value": "is Tree",
                "raw": "\"is Tree\""
            }
        }]
    }]
}

```

More:   https://juejin.im/post/6854573222071894029

## Generator
The Generator object is returned by a generator function and it conforms to both the iterable protocol and the iterator protocol.

```Javascript
function* generator() { 
  yield 1;
  yield 2;
  yield 3;
}

const gen = generator(); // "Generator { }"
```

## Yield是什么
yield是ES6的新关键字，使生成器函数执行暂停，yield关键字后面的表达式的值返回给生成器的调用者。它可以被认为是一个基于生成器的版本的return关键字。
yield关键字实际返回一个IteratorResult（迭代器）对象，它有两个属性，value和done，分别代表返回值和是否完成。
yield无法单独工作，需要配合generator(生成器)的其他函数，如next，懒汉式操作，展现强大的主动控制特性。


## Iterator
    Iterator 是一种接口，目的是为不同的数据结构提供统一的数据访问机制。也可以理解为 Iterator 接口主要为 for of 服务的，供for...of进行消费。
```Javascript
function getIterator(list) {
    var i = 0;
    return {
        next: function() {
            var done = (i >= list.length);
            var value = !done ? list[i++] : undefined;
            return {
                done: done,
                value: value
            };
        }
    };
}
var it = getIterator(['a', 'b', 'c']);
console.log(it.next()); // {value: "a", done: false}
console.log(it.next()); // {value: "b", done: false}
console.log(it.next()); // {value: "c", done: false}
console.log(it.next()); // "{ value: undefined, done: true }"
console.log(it.next()); // "{ value: undefined, done: true }"
console.log(it.next()); // "{ value: undefined, done: true }"
```
