import React from 'react'

// All STATEFUL components must be constructed with 'extends React.Component' syntax.
// To make the component available to import into other files, we export at its definition.
// If it is the only component we're exporting from the file we export it with the flag 'default'.
export default class Field extends React.Component {
  // To have access to 'state' in this component, we must define a constructor function
  // which can optionally take an argument of any 'props' provided to the component.
  // This component will have ownership of properties, and will store them in its 'state'.
  // This state will enable us to display and edit values for the components within our app.
  constructor() {
    // super() is required for access to 'this' in our component.
    super()
    this.state = {
      text: 'Type in the box above!'
    }
  }
  // This is a custom function that we have defined and will pass to our text field
  // so it can update the state of our component immediately when it changes.
  update = (e) => {
    // setState must be called on 'this' and requires an object for its parameter.
    this.setState({text: e.target.value})
  }

  render() {
    return (
      <div>
        <br />
        {/* We pass 'this' component's 'update' method to the onChange property of our input
          in order to call that function to the DOM element's on-change event listener. */}
        <input className="center-block" type="text" onChange={this.update} />
        {/* Again, in JSX we access JavaScript variables and functions with curly braces. */}
        <h2 className="text-center">
          {this.state.text}
        </h2>
      </div>
    )
  }
}
