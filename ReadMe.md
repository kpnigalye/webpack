# Sample JS project to explain how to configure Webpack

## What is a Webpack?

- Webpack bundles your JS files and bundles everything into a single file.
- [This](https://webpack.js.org/) is the official website of the webpack.
- There are few important concepts we need to remember. They are as follow.

### Entry

- An entry point indicates which module webpack should use to begin building out its internal dependency graph. 
- Webpack then figures out which other modules and libraries that entry point depends on.

### Output

- The output property tells webpack where to emit the bundles it creates and how to name these files.

### Loader

- As per the official documentation, Webpack only understands JavaScript and JSON files. Loaders allow webpack to process other types of files and convert them into valid modules that can be consumed by your application and added to the dependency graph.
- Check this [link](https://webpack.js.org/concepts/#loaders) for more information

### Plugins

- While loaders are used to transform certain types of modules, plugins can be leveraged to perform a wider range of tasks like bundle optimization, asset management and injection of environment variables.
- Check this [link](https://webpack.js.org/concepts/#plugins) for more information

### Mode

- By setting the mode parameter to either development, production or none, you can enable webpack's built-in optimizations that correspond to each environment.