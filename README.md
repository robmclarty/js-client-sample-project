# JS Client Sample Project

A sample project with some basic build tools for starting a new Javascript
client app. Uses [RollupJS](https://rollupjs.org) to bundle a basic
"hello world" JS app with some basic SASS structure.

It has tasks (using `package.json` scripts) to bundle your JS + SASS into 2
files: `main.js` + `main.css` and output them to the `./build` folder. It then
also copies all static assets from the `./assets` folder and optionall revisions
all files (including references in html, js, css) to them by appending a hash
of each files' contents to their filenames (for production).

In development, there are simple "watch" and "serve" tasks that you can use
to test code in the browser and automatically rebuild bundles based on file
changes.


## Install

`npm install`

Currently setup to install React, but it's not being used directly. Just an
example of how it might be orgnized. Swap out React for whatever you want to use.


## Usage

`npm run watch` - builds + watches (and re-builds) bundles

`npm run serve` - a simple web server that will load contents of `./build`

`npm run build:prod` - builds bundle for production, including file revisions


## Structure

```
/root
  /app - JS application (e.g., React/Vue/Whatever... JS-only)
  /assets - Static assets (html, images, fonts, etc.)
  /styles - SASS files used to build CSS stylesheets
  /build - output target for build/bundle scripts
  /tests - all test cases for application
  /docs - include documentation files/articles (I like using Markdown)
  /bin - binaries (usually shell scripts for deployment and whatnot)
```


## License

MIT
