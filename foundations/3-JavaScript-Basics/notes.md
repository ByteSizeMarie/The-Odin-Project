# JavaScript Basics - Notes

## Basics 🍕💭 
 - #### running JavaScript using an HTML file
    - can be typed directly at the end of the HTML file with the tag &lt;script&gt;
    - an external JavaScript file can be linked with the &lt;script&gt;-tag and "src"
        - it has to be either at the end of the HTML file or if placed in the head has to include type="module" or defer to be read after the HTML
    - **Which option is better?**
 - #### console.log() prints something to the developer console in the browser, this can help with finding mistakes
 - #### declaring variables 
    - ~~var~~ -  old way to declare variables,
    it has function scope (not block scope) and gets hoisted (used before declaring variable), which can cause unexpected behavior.
    - let - variables can be reassigned, block-scoped
    - const - variables cannot change after assigning a value, constant, block-scoped
    - What does block-scoped mean?  
      → If a variable is declared inside a block or function, it's only visible there. If it's declared outside, it's available inside too — unless it's redeclared inside, which creates a new, separate variable and leaves the outer one unchanged.  
      **Declared inside? Stays inside. Declared outside? Can be seen inside — unless you shadow (overwrite) it.**
 - #### performing number operations
   - LOGICAL OPERATORS 
      - equal to ==
      - equal value and equal type ===
      - not equal !=
      - not equal value or not equal type !==
      - greater than >
      - less than < 
      - greater than or equal to >=
      - less than or equal to <=
   - ARITHMETIC OPERATORS - division, multiplication, addition, division, Modulo (remainder) %, exponentiation **
      - Increment and Decrement
         - var++ - increases a variable by 1, same as var = var + 1
         - var-- - decreases a variable by 1, same as var = var - 1
      - Difference between prefixing ++X and postfixing X++ (also possible with decrement)
         - prefixing ++X - increases variable by 1 and then **returns the new value**
         - postfixing X++ - **returns value of variable first** and then increases by 1 
         - When do I need pre- or postfixing?  
            → Use postfix when you need to do something with the old value before it changes.
            Use prefix when you need to immediately work with the new value.
   - BITWISE OPERATORS - AND ( & ),
   OR ( | ), XOR ( ^ ), NOT ( ~ ), LEFT SHIFT ( << ), RIGHT SHIFT ( >> ), ZERO-FILL RIGHT SHIFT ( >>> )
      - rarely used in JavaScript
   - COMMA OPERATOR 
      - , - used to write shorter code, allows to evaluate several expressions but will only return the last one, it needs to be used with parentheses because it has a low precedence, lower than =
   - Number Methods
      - Number() - converting booleans, dates or strings to numbers, also prepending + possible 


 - #### performing string operations
   - String Operators
      - &plus; - Concatenate/ Join two strings
      - += - Add something to end of a string
   -  String Properties & Methods
      - .length → How many characters are in the string
      - .charAt(index) → Get character at a specific position
      - .includes(substring) → Check if the string contains something
      - .indexOf(substring) → Find the position of the first match
      - .slice(start, end) → Cut out part of the string
      - .substring(start, end) → Similar to .slice() (no negative numbers)
      - .toUpperCase() → Make all letters uppercase
      - .toLowerCase() → Make all letters lowercase
      - .trim() → Remove spaces from start and end
      - .replace(search, newText) → Replace part of the string
      - .split(separator) → Split string into an array
      - .repeat(n) → Repeat the string n times
      - .startsWith(text) → Check if the string starts with something
      - .endsWith(text) → Check if the string ends with something

   - `${variable}` - similar to f-string in Python called "Template Literals", inserts variables into a string using backticks