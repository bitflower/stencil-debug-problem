# Stencil App Starter with "debug" problem (npm install debug)

The "debug" module is added as `node.js` instead of `browser.js` because the stencil compiler is running "on the server" with node.js during compile time.
However the created bundle is running in the browser later on so the browser.js should be included in the bundle becuase node.js tries to access the node internal "process" property.

Terminal output of npm run dev (see the `node.js` import):

```terminal
[ WARN  ]  app-home, my-app: 'tty' is imported by node_modules/debug/src/node.js, but could not be resolved – treating
           it as an external dependency

[ WARN  ]  app-home, my-app: 'util' is imported by node_modules/debug/src/node.js, but could not be resolved – treating
           it as an external dependency

[ WARN  ]  app-home, my-app: 'tty' is imported by commonjs-external:tty, but could not be resolved – treating it as an
           external dependency

[ WARN  ]  app-home, my-app: 'util' is imported by commonjs-external:util, but could not be resolved – treating it as
           an external dependency
```

In the browser (Chrome 64) we get:

```terminal
TypeError: Failed to resolve module specifier "tty". Relative references must start with either "/", "./", or "../".
```

![alt text](https://github.com/bitflower/stencil-debug-problem/raw/master/console.png 'Logo Title Text 1')
