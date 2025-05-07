# JavaScript Basics - Notes

## Basics 🍕💭 
 - #### Running JavaScript using an HTML file
    - can be typed directly at the end of the HTML file with the tag &lt;script&gt;
    - an external JavaScript file can be linked with the &lt;script&gt;-tag and "src"
        - it has to be either at the end of the HTML file or if placed in the head has to include type="module" or defer to be read after the HTML
    - **Which option is better?**


- #### 8 Basic Data types in JavaScript
   - Number
      - integer - exact whole number, positive or negative
      - floating point - decimal numbers
      - special numeric values
         - Infinity/-Infinity - represents mathematical Infinity ∞, special value greater than any number, can be result of division by zero (?!)
         - NaN - represents a computational error, is result of incorrect or undefined mathematical operation (like a string divided by a number), is "sticky" (any further after error will return NaN)
   - BigInt - added 2020 to represent integers of arbitrary length bigger than ±(253-1)   range, value is created by appending "n" to end of an integer 
   - String - surrounded by single or double quotes or backticks (Template Literals, ${...})
   - Boolean - only has two values: true or false
   - "null" value - represents "nothing", "empty" or "value unknown"
   - "undefined" value - if a variable is declared but not assigned then it's undefined
   - Objects and Symbols
      - object - can store collections of data and more complex entities
         - 
         -
      - symbol - creates unique identifiers for objects
         - 
         -
   - "typeof" operator - returns type of the operand, useful for quick checks, can be written as typeof(x) or typeof x


 - #### Declaring variables 
    - ~~var~~ -  old way to declare variables,
    it has function scope (not block scope) and gets hoisted (used before declaring variable), which can cause unexpected behavior.
    - let - variables can be reassigned, block-scoped
    - const - variables cannot change after assigning a value, constant, block-scoped
    - What does block-scoped mean?  
      → If a variable is declared inside a block or function, it's only visible there. If it's declared outside, it's available inside too — unless it's redeclared inside, which creates a new, separate variable and leaves the outer one unchanged.  
      **Declared inside? Stays inside. Declared outside? Can be seen inside — unless you shadow (overwrite) it.**


 - #### Number operations
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
      - Number() - converting booleans, dates or strings to numbers, also prepending + possible (like +string)


 - #### String operations
   - String Operators
      - &plus; - Concatenate/ Join two strings
      - += - Add something to end of a string

   -  String Properties 
      - .length → How many characters are in the string

   -  String Methods
      - 🔤 Character-related methods
         - .charAt(index) → Get character at a specific position
         - charCodeAt(index) → returns UTF-16 code of the character at specified index

      - 🧩 Access/Selection
         - .at(index) → returns character at specified index (position), allows negative indexes that starts from -1 on the right
         - .[index] - is a property access and can be unpredictable (if no character found returns undefined)

      - 🔍 Search
         - .includes(substring) → Check if the string contains something
         - .indexOf(substring) → Find the position of the first match
         - .startsWith(text) → Check if the string starts with something
         - .endsWith(text) → Check if the string ends with something

      - 🔪 Extraction
         - .slice(start, end) → Cut out part of the string
         - .substring(start, end) → Similar to .slice() (no negative numbers)
         - .substr() → 

      - 🔄 Convertion
         - .toUpperCase() → Make all letters uppercase
         - .toLowerCase() → Make all letters lowercase

      - ✂️ Trimming
         - .trim() → Remove spaces from start and end
         - .trimstart() →
         - .trimEnd() →

      - 🛏️ Padding
         - .padStart() →
         - .padEnd() →

      - 🔁 Replace
         - .replace(search, newText) → Replace part of the string
         - .replaceAll() →

      - 🔨 Others 
         - .concat()
         - .repeat(n) → Repeat the string n times
         - .split(separator) → Split string into an array
      
   - String() function converts its argument to a string

   - `${variable}` - similar to f-string in Python called "Template Literals", inserts variables into a string using backticks


- #### Interaction's in the Browser
   - alert() - shows a modal window (user cant interact with anything until they closed the window with "ok")
   - prompt(title, [default]) - shows a modal window with a text message, an input field and the buttons Ok/ cancel, default is an optional parameter (initial value for input)  
   → If the user presses Cancel the result will be null
   - confirm() - shows modal window with a question and the buttons Ok/cancel, result will be true if ok is pressed otherwise its false  
   
   → the look and location of all these interactions are limited to the browser, they can't be modified! The best use is for testing.

 - #### console.log() prints something to the developer console in the browser, this can help with finding mistakes


- #### Using Javascript outside of a web browser - Node.js
   #### What is Node.js?  
   It's often used to build back-end services like API's (Application Programming Interface). Node is made for superfast highly-scalable, data-intensive and real-time apps and has a large system of open-source libraries.
   - can be installed with the **NVM (Node Version Manager)**, which makes changing Node versions and upgrading easy  
   → this can be particularly important for different projects that need different versions of Node  
   → NVM is mostly supported on Linux and Mac but there is a version for windows on [ Github by coreybutler](https://github.com/coreybutler/nvm-windows?tab=readme-ov-file#readme) and a good [tutorial](https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/)
      - Most used commands are:
         - nvm -v - shows current version and all commands
         - nvm install latest - installs latest version
         - nvm alias default vX.Y.Z - makes this version default
         - nvm use vA.B.C -  changes to this version
      - Installing Node.js with NVM
         - nvm install --lts/ nvm install lts (windows) - installs stable version of "long-term-support",   
         this avoids incompatibilities with packages and is a guaranteed support for thirty months after its inital release 
      - Using Node console
         - Node has an interactive console in which JavaScript code can be run and edited without having to open a browser, this is perfect for debugging or testing small snippets
         - it can be opened in a terminal/shell/cmd with the command **"node"**
         - and closed with **".exit"**
      - **npm ()** is used for installing various libraries and tools used in JavaScript environmentes. 