# builder_webpack94

webpack

package.json 里面这样配置

```
{
  "name": "test",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --config ./node_modules/builder_webpack_leon/lib/webpack.prod.js",
    "watch": "webpack --watch",
    "dev": "webpack-dev-server --config ./node_modules/builder_webpack_leon/lib/webpack.dev.js --open",
    "build:ssr": "webpack --config ./node_modules/builder_webpack_leon/lib/webpack.ssr.js",
    "build:stats": "webpack --config webpack.prod.js --json > stats.json",
    "dll": "webpack --config webpack.dll.js"
  },
  "devDependencies": {
    "builder_webpack_leon": "^1.0.5"
  },
  "dependencies": {
    "typescript": "^3.9.3"
  }
}
```

.babelrc 文件

```
{
  "presets": [
    [
      "@babel/preset-env"
    ],
    "@babel/preset-react"
  ],
  "plugins": [
    "@babel/plugin-syntax-dynamic-import"
  ]
}
```
