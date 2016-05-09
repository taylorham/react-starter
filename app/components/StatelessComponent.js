import React from 'react';

// ES6 syntax for defining a STATELESS React component with arrow function. If properties are
// passed to the component, they must be declared as an argument to the function declaration.
export const HelloMessage = (props) => {
  // Rendered React components must always return a single DOM node.
  // Adjacent nodes will throw an error and must be all be wrapped by
  // some container node in order to resolve.
  return (
    // This is how JSX (which we're writing here) assigns a CSS class to
    // an HTML element. Since 'class' is a reserved word in JavaScript,
    // we use the 'className' keyword instead.
    <h1 className="text-center">
      {/* This is the comment syntax for JSX. Both /* and // work as expected with JS.
        Use curly braces {} to access javascript variables and functions within JSX. */}
      Hello {props.name}
    </h1>
  )
}
