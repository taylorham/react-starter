import React from 'react';

// All STATEFUL components must be constructed with the React.createClass function.
// Unlike ES5, we can select the component for export at its definition. If it is the
// only component we're exporting from the file, we export it with the flag 'default'.
export default class Field extends React.Component {
  // In order to track state in this component, we must define a constructor function
  // which can optionally take an argument of any (props) provided to the component.
  // This component will have ownership of properties, and will store them in its 'state'.
  // This state will enable us to display and edit values for the component within our app.
  constructor() {
    // Always set super() so that we have access to 'this' in our component for binding.
    super();
    this.state = {
      text: 'Type in the box above!'
    }
    // Any custom functions defined by the component must be bound in it's constructor for
    // proper access to it's state with 'this'.
    this.update = this.update.bind(this);
  }
  // This is a custom function that we have defined and will apply to our text field
  // in order to be able to update the state of our component immediately when it changes.
  update(e) {
    // setState must be called on 'this' and requires an object for its parameter.
    this.setState({text: e.target.value})
  }

  render() {
    return (
      <div>
        <br />
        {
          // We pass 'this' components 'update' method to the onChange property of our
          // input in order to bind that function to the DOM element.
        }
        <input className="center-block" type="text" onChange={this.update} />
        {
          // Again, in JSX we access JavaScript variables and functions with curly braces.
        }
        <h2 className="text-center">{this.state.text}</h2>
      </div>
    )
  }
}
