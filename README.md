React Starter
==
This is the base config that all of our React components should use. Examples exist for stateful and stateless components, and everything is commented heavily to provide plenty of guidance.

## Getting up and running

To use this project as a starting point, simply run `npm install` in your terminal.

This will install the following dependencies:

* React
* ReactDOM
* Webpack
* Webpack Dev Server
* Babel
  * Babel Core
  * Babel Loader
  * ES6 Presets
  * React (JSX) Presets

After installation simply run `npm start` in the terminal while in the cloned repository's directory and navigate to `localhost:3333/public` in a browser to see the results.

### Main.js
This is the component that renders all other components. Any newly created components should reside in the `components/` folder and added to the top of Main.js with:

```javascript
// stateful
import ComponentName from './ComponentName'

// stateless, or non-default export
import { OtherComponent } from './OtherComponent'

// import multiple...
import React, { Component, PropType } from 'react'
```

They then have to be included in the `render()` method for the Main component, eg:

```javascript
<ComponentName props={someProps} />
```

Make sure any component you wish to use in another file is `export`ed from the file it resides in with this code at the declaration of the component:

```javascript
// stateful, optional default
export /* default */ class ComponentName extends React.Component {...}

// stateless
export const OtherComponent = ({ firstProp, secondProp }) = {...}
```
