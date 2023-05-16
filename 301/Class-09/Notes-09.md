*This lesson is important because it explains what Functional Programming is and why its useful and the definition of a module is and how to import a function from one module to another*


*Functional Programming Concepts*

What is functional programming?<br>
-Functional programming is a programming paradigm — a style of building the structure and elements of computer programs — that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data

What is a pure function and how do we know if something is a pure function?<br>
-A pure function is a function that returns the same result if given the same arguments and does not cause any observable side effects.

What are the benefits of a pure function?<br>
-It will always give the same result when the argument is the same and there are no side effects

What is immutability?<br>
-When data is immutable, its state cannot change after its created; if you wanted to change the state of an immutable object, you would just have to create an object with the new value

What is Referential transparency?<br>
-pure function + immutable data = referential transparency; a function that consistently yields the same results for the same input

*Node JS Tutorial for Beginners #6 - Modules and require()*

What is a module?<br>
-A simple or complex functionality organized in a one or more JavaScript files that can be reused throughtout the Node.js app; essentially another JS file

What does the word ‘require’ do?<br>
-require() is a built-in function that read a JS file, excutes it, then proceeds to return the export object.

How do we bring another module into the file the we are working in?<br>
-We bring modules into files by invoking them using the require()

What do we have to do to make a module available?<br>
-Using module.exports and setting it equal to an element outside of the original module. ![example of module.export](https://cdn.discordapp.com/attachments/1099368891219710055/1107798543516831855/written_code.png)