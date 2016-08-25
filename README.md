React Starter
==
This is the base config that all of our React components should use. Examples exist for stateful and stateless components, and everything is commented heavily to provide plenty of guidance.

## Getting up and running

To use this project as a starting point, simply run `npm install` in your terminal.

This will install the following dependencies:

* React
  * ReactDOM
  * Immutability Helpers (Addons-Update)
* Webpack
* Webpack Dev Server
* Babel
  * Babel Core
  * Babel Loader
  * ES6 Presets
  * React (JSX) Presets
  * ES7 Presets ([stage-0](http://babeljs.io/docs/plugins/preset-stage-0/))

After installation simply run `npm start` in the terminal while in the cloned repository's directory and navigate to `localhost:3333/public` in a browser to see the results.

### Main.js
This component should hold all state and state updating functions for your application. It will be your base of operations and the file that uses ReactDOM to actually render your application to the page.

Without an architecture library like Flux or Redux to lend a helping hand, keeping all state in your Main component will save you from a number of headaches down the line. You'll be forced to pass state (and state-modifying methods) through a number of child components to get data/function where it needs to be, but this will safeguard you from unexpected errors when updating state from a child component. Instead of the child setting its own state and passing the result back up the node tree, we have the child calling the Main component's setState and we maintain the unidirectional flow of data from the top-down.

It also makes your app completely declarative, in that you'll be able to control and know exactly how your app will look when it renders given a certain current state.

## Creating components
### Exporting
Any newly created components should reside in the `components/` folder, named with capitalized camel-case (eg: `ComponentName.js`), and must be `export`ed from the file it resides in with this code at the declaration of the component like so:

```javascript
// stateful, class-based component, optional `default`
export /* default */ class ComponentName extends React.Component {...}

// stateless functional component
export const OtherComponent = ({ firstProp, secondProp }) = {...}
```

> The only difference in `export` and `export default` in Class components is the way you'll declare that component when you want to import it...

### Importing
Before a component can be used in another file it must be imported there. This differs depending on how the component was exported from its original file:

```javascript
// `export default`
import ComponentName from './ComponentName'

// `export` (no default)
import { OtherComponent } from './OtherComponent'
```

For more information on importing files, [see the MDN docs here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import).

You can also make multiple imports of multiple types from a single file. This is useful anytime you find yourself using the `Component.SubComponent` syntax often, for example with React.Component or React.Proptypes. To import the default React along with Component and Proptypes (or any other non-default exports) as their own named variables, use the following:

```javascript
// import multiple...
import React, { Component, PropType } from 'react'
```

### Including components in render
To use a component, use the JSX syntax to declare it the same way you would an HTML element:
```javascript
render() {
  return (
    <ComponentName someProp={prop1} anotherProp={prop2} />
  )
}
```

## JSX Gotchas
#### Single
