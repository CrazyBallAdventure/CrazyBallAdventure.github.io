*this lesson is important because it is showing the difference between Props and State so the coder does not get confused and ruin their code.*

*The Lifecycle of React.JS*

1. Based off the diagram, what happens first, the ‘render’ or the ‘componentDidMount’?
-The render happens 2 steps before the "componentDidMount" event

2. What is the very first thing to happen in the lifecycle of React?
-Mounting the constructor

3. Put the following things in the order that they happen: componentDidMount, render, 
constructor, componentWillUnmount, React Updates
-Constructor, render, componentDidMount react updates, componentsWillUnmount

4. What does componentDidMount do?
-After a component is mounted, this method is invoked to load data using a 
network request or initialize the DOM

*React State Vs Props*

1. What types of things can you pass in the props?
-Any type of data (objects, arrays, functions) can be passed as props. Information
in a component can also be passed as a prop

2. What is the big difference between props and state?
-State is internal and controlled by the component itself and props are external and controlled by whatever renders the component

3. When do we re-render our application?
-you should re-render an application when the value or information has been updated or changed.

4. What are some examples of things that we could store in state?
-You can store data that can be changed later inside state; things like a form, a counter, or input elements.