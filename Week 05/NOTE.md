学习笔记

## cssom
    CSS 对象模型 (CSSOM)

  ```JavaScript
  document.body.style.backgroundColor = 'lightblue';
  ```
## Map
    一个Map对象在迭代时会根据对象中元素的插入顺序来进行 — 一个  for...of 循环在每次迭代后会返回一个形式为[key，value]的数组。
    Map.prototype.get(key)
    返回键对应的值，如果不存在，则返回undefined。
    Map.prototype.has(key)
    返回一个布尔值，表示Map实例是否包含键对应的值。
## Map vs Object in JavaScript
    Map is a data structure which helps in storing the data in the form of pairs. The pair consists of a unique key and a value mapped to the key. It helps prevent duplicity.
    Object follows the same concept as that of map i.e. using key-value pair for storing data. But there are slight differences which makes map a better performer in certain situations.

    Few basic differences are as follows:

    In Object, the data-type of the key-field is restricted to integer, strings, and symbols. Whereas in Map, the key-field can be of any data-type (integer, an array, even an object!)
    In the Map, the original order of elements is preserved. This is not true in case of objects.
    The Map is an instance of an object but the vice-versa is not true.
  ```JavaScript
    <script> 
      var map = new Map([ 
          [5, 4], 
          [7, 9] 
      ]); 
    
      //output:true 
      console.log(map instanceof Object);  
    
      //output:false 
      var obj = new Object(); 
      console.log(obj instanceof Map);  
    </script> 
  ````

  ## for...of
      for...of语句在可迭代对象（包括 Array，Map，Set，String，TypedArray，arguments 对象等等）上创建一个迭代循环，调用自定义迭代钩子，并为每个不同属性的值执行语句

  ## For vs forEach() vs for/in vs for/of in JavaScript
      Generally, for/of is the most robust way to iterate over an array in JavaScript. It is more concise than a conventional for loop and doesn't have as many edge cases as for/in and forEach(). The major downsides of for/of is that you need to do extra work to access the index (1), and you can't chain like you can with forEach(). forEach() comes with several caveats and should be used sparingly, but there are numerous cases where it makes code more concise.
  
  ```JavaScript
  for (let i = 0; i < arr.length; ++i) {
    console.log(arr[i]);
  }

  // Prints "a, c"
  arr.forEach(v => console.log(v));

  // Prints "a, c"
  for (let i in arr) {
    console.log(arr[i]);
  }

  // Prints "a, undefined, c"
  for (const v of arr) {
    console.log(v);
  }
  ```

  ## Range
    Range 接口表示一个包含节点与文本节点的一部分的文档片段。

    可以用 Document 对象的 Document.createRange 方法创建 Range，也可以用 Selection 对象的 getRangeAt 方法获取 Range。另外，还可以通过 Document 对象的构造函数 Range() 来得到 Range。

    Range.getBoundingClientRect() 返回一个 DOMRect 对象，该对象将范围中的内容包围起来；即该对象是一个将范围内所有元素的边界矩形包围起来的矩形（译者注：关于边界矩形，可以参考 Minimum Bouding Rectangles）。

    一个 DOMRect 代表一个矩形。

    DOMRect 表示的盒子的类型由返回它的方法或属性指定。例如，WebVR API 的 VREyeParameters.renderRect 指定了头戴式显示器的一只眼睛应该呈现的影像所在的 canvas 的视口。
  ## selectstart 
    Selection API 的 selectstart 事件在用户开始一个新的选择时候触发。
  
  ## JavaScript 全局属性
    属性	描述
    Infinity	表示正/负无穷大的数值
    NaN	"Not-a-Number" 值
    undefined	表示尚未为变量分配值


  ## Vue - Basic Reactivity APIs
  https://v3.vuejs.org/api/basic-reactivity.html#reactive