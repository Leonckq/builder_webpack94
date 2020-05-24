module.exports = {
  "parser": "@typescript-eslint/parser",// 定义eslint的解析器
  "env": {
    "browser": true,
    "es6": true,
    // browser: true,
    node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  // "extends": [
  //   'alloy',
  //   'alloy/react',
  //   'alloy/typescript',
  // ],
  // "extends": ["prettier"],
  extends: [
    // "plugin:react/recommended",
    // "plugin:@typescript-eslint/recommended"
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  // "parser": "babel-eslint",
  // "plugins": ["prettier"],
  settings: {
    "react": {
      pragma: "React",
      version: "detect"
    }
  },
  plugins: ["@typescript-eslint"],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  // "parser": "@typescript-eslint/parser",
  // "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "legacyDecorators": true,
      "modules": true,
      "jsx": true,
      "forOf": true,
      "blockBindings": true,
      "arrowFunctions": true,
      "classes": true,
      "defaultParams": true,
      "destructuring": true,
      "generators": true,
      "restParams": true,
      "spread": true,
      "superInFunctions": true,
      "templateStrings": true,
      "experimentalObjectRestSpread": true
    }
  },
  // "parserOptions": {
  //     "ecmaFeatures": {
  //         "jsx": true
  //     },
  //     "ecmaVersion": 2018,
  //     "sourceType": "module"
  // },
  // "plugins": [
  //   "react",
  //   "@typescript-eslint"
  // ],
  "rules": {
    "prettier/prettier": "error",
    "no-unused-vars": "off",
    "no-undef": "off"
  }
}