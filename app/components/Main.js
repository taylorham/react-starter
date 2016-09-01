// This boilerplate code is required at the start of all React components.
import React from 'react';

// We're using ReactDOM to manage the rendering of our app.
import ReactDOM from 'react-dom';

/* Any components we create must be required at the top of the document.
If the component is not the 'default' export from its file, we have to wrap the
component name in curly braces for proper import. */
import { HelloMessage } from './StatelessComponent';
import Field from './StatefulComponent';

// ES6 syntax for defining a STATEFUL React component.
class Main extends React.Component {
  // Components extending React.Component must have a render function.
  render() {
    // This function must return no more than 1 node (with unlimited children).
    return (
      <div>
        {
           /* Components are included in the page by typing them as though they were
           a custom HMTL element and can be passed properties in the same way. */
        }
        <HelloMessage name="World" />
        <Field />
      </div>
    )
  }
}

/* The 'Main' class takes care of rendering our entire app. We use ReactDOM to manage this.
In the render() function, we must specify the React component we wish to render as well
as the html node it will inhabit in our public/index.html file. */
ReactDOM.render(<Main />, document.getElementById('app'))
