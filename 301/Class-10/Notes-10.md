*This lesson is important because it explains Call Stacks and how they function within code and what certain error messages mean*


*Understanding the JavaScript Call Stack*

What is a ‘call’?<br>
-A call is the invocation of a function; a call stack is a data structure that maintains a record of the position of each stack frame, making code execution synchronous.

How many ‘calls’ can happen at once?<br>
-One at a time, in sequence of position (LIFO).

What does LIFO mean?<br>
-Last in, First out; the last entered code will be executed first

Draw an example of a call stack and the functions that would need to be invoked to generate that call stack.<br>
-![Call Stack Example](https://cdn.discordapp.com/attachments/1099368891219710055/1107832695133843496/written_code.png)

What causes a Stack Overflow?<br>
-When there is a recursive function (a function that calls itself) and no exit point

*JavaScript error messages*

What is a ‘reference error’?<br>
-The error you get when you try to use a variable that has not been declared yet

What is a ‘syntax error’?<br>
-The error you get when something cannot be parsed due to a misspelling/syntax

What is a ‘range error’?<br>
-The error you get when trying to manipulate an object with a set value

What is a ‘type error’?<br>
-The error you get when you try to use incompatible data-types

What is a breakpoint?<br>
-The intentional stopping or pausing place in a program for debugging purposes

What does the word ‘debugger’ do in your code?<br>
-It allows you to see the history of executed code before it reached the breakpoint