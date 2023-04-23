*This lesson is important because it is detailing the use of lists & keys, showing how the Spread Operator, and showing how to properly pass functions/methods through components*

*React Docs - lists and keys*

1. What does .map() return?
-An array thats double the original value

2. If I want to loop through an array and display each value in JSX,
how do I do that in React?
-Loop the array with `map()`, return a `<li>` element for each item, then assign the
resulting array to `listItems`, which will display the numbers in an ordered bullet list

3. Each list item needs a unique ____.
-Key

4. What is the purpose of a key?
-To help React identify which items have changed, been added, or have been removed.
They are given to allow elements to have a stable identity


*The Spread Operator*

1. What is the spread operator?
-The Spread operator `(...)` is used to make deep copies of JS objects, usually used for 
nested arrays or nested data in an object

2. List 4 things that the spread operator can do.
-The spread operator can also copy arrays, concatenate arrays, add items into lists, and adding
to state in React

3. Give an example of using the spread operator to combine two arrays.
-`[...["😋😛😜🤪😝"]] // Array [ "😋😛😜🤪😝" ]
[..."🙂🙃😉😊😇🥰😍🤩!"] // Array(9) [ "🙂", "🙃", "😉", "😊", "😇", "🥰", "😍", "🤩", "!" ]

const hello = {hello: "😋😛😜🤪😝"}
const world = {world: "🙂🙃😉😊😇🥰😍🤩!"}

const helloWorld = {...hello,...world}
console.log(helloWorld) // Object { hello: "😋😛😜🤪😝", world: "🙂🙃😉😊😇🥰😍🤩!" }`

4. Give an example of using the spread operator to add a new item to an array.
-`const fruits = ['Apple', 'Orange', 'Pineapple']
const moreFruits = [...fruits];
console.log(moreFruits) ['Apple', "Orange', 'Pineapple', 'Watermelon', 'Grapes']
fruits[0] = 'Plum'
console.log(...[...fruits,'...',...moreFruits])`

5. Give an example of using the spread operator to combine two objects into one.
-`const myArray = [`🤪`,`🐻`,`🎌`]
const yourArray = [`🙂`,`🤗`,`🤩`]
const ourArray = [...myArray,...yourArray]
console.log(...ourArray) // 🤪 🐻 🎌 🙂 🤗 🤩`


*How to Pass Functions Between Components*

1. In the video, what is the first step that the developer does to pass 
functions between components?
-The developer created a function within the parent that controls the state

2. In your own words, what does the increment function do?
-The increment function increases the value of an object based on input by the coder

3. How can you pass a method from a parent component into a child component?
-By callling the method down from the parent into the child component

4. How does the child component invoke a method that was passed to it from a parent component?
-it calls the method that was passed to it as a prop