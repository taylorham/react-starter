React Starter
==

Create from scratch with these commands in the terminal:

```
npm init
npm install --save react react-dom babel webpack webpack-dev-server
npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react
```

## Getting started

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
var ComponentName = require('../app/components/ComponentName');
```

They then have to be included in the `render: function()` for the Main component, eg:

```javascript
<ComponentName props={someProps} />
```

Make sure any component you wish to use in another file is `export`ed from the file it resides in with this code at the bottom of the file:

```javascript
module.exports = ComponentName;
```
