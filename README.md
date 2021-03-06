# React Starter
This is the base config that all of our React components should use. Examples exist for stateful and stateless components, and everything is commented heavily to provide plenty of guidance.

### Table of Contents:
* [Getting up and running](#getting-up-and-running)
* [What should I do first?](#what-should-i-do-first)
* [Main.js - the skeleton and brain](#mainjs)
* [Creating components](#creating-components)
  * [Stateful vs Stateless components](#stateful-vs-stateless)
  * [Stateful ("smart" component)](#stateful-component)
  * [Stateless ("dumb"/presentational component)](#stateless-component)
  * [Exporting](#exporting)
  * [Importing](#importing)
  * [Including components in render](#including-components-in-render)
* [JSX Gotchas](#jsx-gotchas)
  * [Single parent element rule](#single-parent-element-rule)
  * [CSS class assignments](#css-class-assignments)
  * [HTML `style` property](#html-style-property)
  * [Self-closing tags](#self-closing-tags)
  * [Comments in JSX](#comments-in-jsx)

## Getting up and running
To use this project as a starting point, clone it and run `npm install` in your terminal.

This will install the following dependencies:

* React
  * ReactDOM
  * Immutability Helpers (Addons-Update)
* Webpack
  * Webpack Dev Server
* Babel
  * Latest ES* Presets (includes ES2015, ES2016, and ES2017)
  * React (JSX) Presets
  * Experimental Presets ([stage-0](http://babeljs.io/docs/plugins/preset-stage-0/))

After installation run `npm start` in the terminal and navigate to `localhost:3333/public` in a browser to see the results.

## What should I do first?
Read this README in its entirety, and then check out [Facebook's *Thinking in React* docs](https://facebook.github.io/react/docs/thinking-in-react.html) to make sure you've got a good idea of why you're using React in the first place.

You can start coding by replacing the HTML in the provided DumbComponent's `return (...)` with the HTML from a page you've already made or worked on. Make sure to change all instances of `class=` with `className=`, save your file and your browser will automatically update. Ta-da! You've just made a React component! It's not very good yet, but it's a start.

Now begin trying to break down your page into smaller parts of repeated or reusable elements. Do you have a table with lots of `<tr>`s showing off some data? That's a good candidate for a component! A twitter widget that you want to display on every page? Exactly. Your own custom `<Bold />` component for bolding text? No. You're getting out of hand.

You may find it useful to break the layout of your page into it's own (or a few) component that acts as a container for your more specialized components. It is recommended to keep this layout file as close to the top of your app's component hierarchy as possible to avoid headaches trying to pass data and function from one component to the next. A good practice is to make your `Main.js` file the one that is responsible for most of the layout, for example:

```javascript
...
import { Navbar } from './Navbar'
import { Sidebar } from './Sidebar'
import { PageBody } from './PageBody'
import { Footer } from './Footer'

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <Navbar />
        <div className="row">
          <div className="col-md-4"
            <Sidebar />
          </div>
          <div className="col-md-8">
            <PageBody />
          </div>
        </div><!-- /row -->
        <Footer />
      </div><!-- /container -->
    )
  }
}
...
```

## <a name="mainjs"></a>Main.js - the skeleton and brain
This component should hold most, if not *all*, **state** and **state updating functions** for your application. It will be your base of operations and the file that uses ReactDOM to actually render your application to the page.

Without an architecture library like Flux or Redux to lend a helping hand, keeping all state in your Main component will save you from a number of headaches down the line. You'll be forced to pass state (and state-modifying methods) through a number of child components to get data/function where it needs to be, but this will safeguard you from unexpected errors when updating state from a child component. Instead of the child setting its own state (which causes a re-render) and passing the result back up the node tree to set state on the parent (causing another re-render), we have the child calling the Main component's `setState` and we maintain the unidirectional flow of data from the top-down.

From [Facebook's *Thinking in React* docs](https://facebook.github.io/react/docs/thinking-in-react.html):
>Remember: React is all about one-way data flow down the component hierarchy. It may not be immediately clear which component should own what state. **This is often the most challenging part for newcomers to understand**, so follow these steps to figure it out:
>
>For each piece of state in your application:
>* Identify every component that renders something based on that state.
>* Find a common owner component (a single component above all the components that need the state in the hierarchy).
>* Either the common owner or another component higher up in the hierarchy should own the state.
>* If you can't find a component where it makes sense to own the state, create a new component simply for holding the state and add it somewhere in the hierarchy above the common owner component.

## Creating components
### <a name="stateful-vs-stateless"></a>Stateful (Class-based, "smart") vs Stateless (functional, "dumb") components
React makes a distinction between components that store **state** and those that don't. State refers to all of the values in your component or module, such as whether a checkbox is checked, the name someone typed into the 'firstName' field, whether a modal is displayed, or the list of items in a todo list. State is stored as an Object (`state = {key: 'value', ...}`) on stateful components.

Keeping in mind the above advice from the *Thinking in React* docs, the best practice for an app is to be built primarily from stateless components which all rely on one (or very few) stateful component(s) for data.

### <a name="stateful-component"></a>Stateful ("smart" component)
Class-based components are capable of storing state, and have access to lifecycle methods such as `ComponentDidMount()` or `ComponentShouldUpdate()` that allow you to run functions during a specific part of the update process (before or after `render()`). They have a `constructor()` function for binding methods to the component, and for calling `super()` to instantiate `this`.

```javascript
class ButtonExample extends React.Component {
  state = {
    isDisplayed: false
  }

  constructor(props) {
    super(props)
    this.toggleDisplay = this.toggleDisplay.bind(this)
  }

  toggleDisplay() {
    this.setState({isDisplayed: !this.state.isDisplayed})
  }

  ComponentWillMount() {
    console.log('The component is about to be mounted!')
  }

  render() {
    return (
      <button type="button" onClick={() => this.toggleDisplay} />
    )
  }
}
```

### <a name="stateless-component"></a>Stateless ("dumb"/presentational component)
Functional components are a lot less boilerplate to set up and they don't have their own state or lifecycle methods. They rely solely on **props** passed to them from other components in order to access data or functions from those parent components. They are considered to be 'pure' because they simply take in props and spit out some HTML. The props this component receives can also be declared (with fancy ES6 destructuring) in the arguments of the function, offering a much shorter syntax within the component: `name` vs `this.props.name`

```javascript
const DumbComponent = ({ first, last }) = {
  const fullName = `${first} ${last}`

  return (
    <div>Hello {fullName}!</div>
  )
}
```

### Exporting
Any newly created components should reside in the `components/` folder, named with capitalized camelCase (PascalCase, eg: `ComponentName.js`), and must be `export`ed from the file it resides in. To `export` a component, do it inline with the declaration of the component like so:

```javascript
// stateful class-based component, optional `default`
export /* default */ class ComponentName extends React.Component {...}

// stateless functional component, props declared as arguments
export const OtherComponent = ({ firstProp, secondProp }) = {...}
```

There are two main differences to take note of with `export` and `export default`:
* Only one `default` can be exported per file, and it will be `import`ed without curly braces
* Any number of non-default exports are allowed per file, and will be `import`ed with curly braces

### Importing
Before a component can be used in another file it must be imported there. This differs depending on how the component was exported from its original file:

```javascript
// `export default`
import ComponentName from './ComponentName'

// `export` (without default)
import { OtherComponent } from './OtherComponent'
```

You can also make multiple imports of multiple types from a single file in one line. This is useful anytime you find yourself using the `Component.SubComponent` syntax often, for example with React.Component or React.Proptypes. To import the default React along with Component and Proptypes (or any other non-default exports) as their own named variables, use the following:

```javascript
// import multiple...
import React, { Component, PropType } from 'react'
```

For more information on importing files, [see the MDN docs here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import).

### Including components in render
To display a component, use the JSX syntax to declare it the same way you would an HTML element:

```javascript
render() {
  return (
    <ComponentName id="component-id" someProp={prop1} anotherProp={prop2} />
  )
}
```

## JSX Gotchas
### Single parent element rule
JSX does not allow the return of multiple sibling elements in `render`, requiring any adjacent elements be contained within one wrapping parent.

```javascript
// BAD!
return (
  <h1>Heading!</h1>
  <MyGreatComponent prop={this.prop} />
  <MyOtherComponent anotherProp={this.anotherProp} />
)

// GOOD!
return (
  <div id="lets-wrap-it-up">
    <h1>Heading!</h1>
    <MyGreatComponent prop={this.prop} />
    <MyOtherComponent anotherProp={this.anotherProp} />
  </div>
)
```

### CSS class assignments
Since `class` is a reserved word in JavaScript, we must declare `className` on HTML/JSX elements instead.

```javascript
// BAD!
<CoolComponent class="btn cool-class" />

// GOOD!
<CoolComponent className="btn cool-class" />

// - or -
const coolComponentClass = 'btn cool-class'

<CoolComponent className={coolComponentClass} />
```

### <a name="html-style-property"></a>HTML `style` property
Styles are written in a new JavaScript-based version of CSS, and are all passed as JS Objects. CSS properties are written in camelCase as object keys, and property values are written as Strings like so:

```javascript
// Inline
<MyComponent style={{marginTop: '10px', border: '1px solid blue', borderBottomRightRadius: '10%'}} />

// As an Object variable
const myComponentStyle = {
  marginTop: '10px',
  border: '1px solid blue',
  borderBottomRightRadius: '10%'  
}

<MyComponent style={myComponentStyle} />
```

### Self-closing tags
JSX requires that all self-closing tags be explicitly closed (eg: `<TagName />`), and stylistically you should always place a space before the closing `/`.

```html
<!-- DOESN'T WORK! -->        <!-- GOOD! -->
<br>                          <br />
<img src="...">               <img src="..." />
<input type="text">           <input type="text" />
```

In addition, always use the self-closing syntax for any JSX elements that don't have children.

```javascript
// BAD!
<MyComponent prop1={someProp}></MyComponent>

// GOOD!
<MyComponent prop1={someProp} />
```

### Comments in JSX
Comments in JSX use the same syntax as CSS/JavaScript, but must be wrapped with `{ }` inside of a JSX block.

```javascript
const CommentExample = ({ someProp }) = {
  // Outside of a JSX block, you can use the typical JavaScript comment syntax.
  /* Multiple lines also
    work the same way */

  return (
    // JSX block begins on next line...
    <div>
      {/* Within a JSX block use curly braces to wrap the comment. */}
      {
        // Single line syntax only works if the comment is
        // on a different line from the closing brace `}`
      }
    </div>
  )
}
```

[⬆ back to top](#table-of-contents)
