import React from 'react'

/* ES6 syntax for defining a STATELESS React component with arrow function. If properties are
passed to the component, they must be declared as an argument to the function declaration. */
export const DumbComponent = (props) => {
  /* Rendered React components must always return a single DOM node.
  Adjacent nodes will throw an error and must be all be wrapped by
  some container node in order to resolve. */
  return (
    /* This is how JSX assigns a CSS class to an HTML element. Since 'class'
    is a reserved word in JavaScript we use the 'className' keyword instead. */
    <h1 className="text-center">
      {
        /* This is the comment syntax for JSX. Both /* and // work as you're used to with JS/CSS.
        Use curly braces {} to access javascript variables and functions within JSX. */
        // Single line syntax is okay to use only when the closing '}' is on a new line
      }
      {// See how } doesn't close the comment or JS block? }
      }
      Hello {props.name}!
    </h1>
  )
}
