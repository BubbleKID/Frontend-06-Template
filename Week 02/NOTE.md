学习笔记
1. ** operater.
  Exponentiation
    ```
    x ** y
    ```

2. Destructuring assignment(解构赋值)
    ```JavaScript
      var a, b;

      [a, b] = [1, 2];
      console.log(a); // 1
      console.log(b); // 2
    ```
3. ParentNode.children
    ```Javascript
      var children = node.children;
      var elList = elementNodeReference.children; 
    ```
    "\n", "\r" consider as text node
4. Window.localStorage
The read-only `localStorage` property allows you to access a Storage object for the Document's origin; the stored data is saved across browser sessions. `localStorage` is similar to 1sessionStorage1, except that while data stored in `localStorage` has no expiration time, data stored in `sessionStorage` gets cleared when the page session ends — that is, when the page is closed. (Data in a localStorage object created in a "private browsing" or "incognito" session is cleared when the last "private" tab is closed.)