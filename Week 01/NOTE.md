学习笔记
1. How to use powershell cd into a directory with space.
    ```
    cd "Week 01"
    ```

2. Ternary operator can have mutiple conditions.
    ```JavaScript
    cell.innerText = 
              pattern[i][j] == 2 ? "❌" :
              pattern[i][j] == 1 ? "⭕" : "";
    ```
3. Variables declared by ```var ``` keyword are scoped to the immediate function body (hence the function scope) while ```let ``` variables are scoped to the immediate enclosing block denoted by { } (hence the block scope).

4. break vs continue
    The ```break``` statement "jumps out" of a loop.
    The ```continue``` statement "jumps over" one iteration in the loop.

5. break in labeled blocks
The following code uses break statements with labeled blocks. A break statement must be nested within any label it references. Notice that inner_block is nested within outer_block.
    ```
    outer_block: {
      inner_block: {
        console.log('1');
        break outer_block; // breaks out of both inner_block and outer_block
        console.log(':-('); // skipped
      }
      console.log('2'); // skipped
    }
    ```