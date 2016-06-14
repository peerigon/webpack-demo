# webpack-demo

This is a small example repo that can be used to demonstrate some webpack features in a "live coding" fashion. The `blueprint` folder contains the finished state of the demo, so you can use that folder to get hints.

## Agenda

- JS bundling
	- You can mix CommonJS + AMD
	- Run `rm -rf dist && webpack` as build script in your `package.json`
	- Webpack looks for a `webpack.config.js` in the pwd
	- Take a look at the output
	- You can also use (some) of node's built-in modules like `events`
- Limitations
	- No dynamic requires
	- If you need dynamic requires, you can use *require contexts*
	- No binary dependencies
- Transpiling via loaders (babel-loader)
	- Install babel-loader + peer dependencies
	- Limit the loader's scope to your app folder via `include` option (build speed!)
	- Use a `.babelrc` in your working directory of options
	- Use the `transform-runtime` plugin to reduce build size
- Devtools
	- Create an `index.html` to see how our bundle looks like in the browser now 
	- `eval` for fast builds but almost no mapping
	- `source-map` for complete mapping but slow builds
	- `eval-source-map` for a good compromise
- HTML and CSS bundling via loaders (html-loader, css-loader, file-loader)
	- Create a `greeting.html` and import it
	- Reference an image inside the `greeting.html`
	- It's not working anymore, it says: `Unexpected character '�'`
	- Install and configure the `file-loader` to be applied on the `.jpg` extension
	- Now the bundle outputs a file into `dist` with a hashed filename (good for HTTP caching)
	- If we take a look at the `bundle.js` we see our HTML module which was translated to a CommonJS module
	- This HTML module contains an ordinary require to a CommonJS module which exports a single path to the image
	- Unfortunately, this path does not work in the browser
	- We need to adjust the `publicPath`
	- We can also include CSS likewise
	- First, log `mainCss.toString()` into the console
	- Now let's just create a `<style>` element on the fly and inject it into the DOM
	- We can now also reference other files from our CSS and webpack resolves the file
	- Take a look at the bundle
	- We don't have to add the styles to the DOM for ourselves: Use the style-loader.
- Loader pipelines (less-loader, postcss-loader, css-loader)
	- Use `display: flex` and a LESS variable and inspect the result in the browser 
- HMR with style-loader
	- Install `webpack-dev-server`
	- Add a `dev` script to your `package.json` and add `webpack-dev-server --hot --inline`
	- `--hot` enables Hot Module Replacement
	- `--inline` says that we want to use our own `index.html`
	- The webpack-dev-server now serves the pwd and adds special code to handle code updates
	- Webpack itself is switched into watch mode which ensures faster rebuilds
	- Styles can be replaced easily without affecting the state
	- Every other code triggeres a full page reload because the code can not be swapped out easily
	- Check out [Dan Abramov's experiments](https://vimeo.com/100010922) with hot code reloading and react
- Code splitting
	- `require.ensure()` marks split points for a new chunk
	- A chunk is a single file that hosts multiple modules
	- By default, the first chunk is called `main` but you can change that
	- In the future, we will use `System.import()`
	- You can use it with webpack 2
	- Splitting code may result in duplicate downloads which is ok to a certain degree
	- You can use the `CommonsChunkPlugin` to move modules into the main chunk again
	- You can also create explicit vendor chunks where you can put modules that do not change often
- Caching
	- Webpack provides great caching possibilities
	- Choose the appriopiate [level](https://gist.github.com/sokra/ff1b0290282bfa2c037bdb6dcca1a7aa) for your applicaton

