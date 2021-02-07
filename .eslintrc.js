module.exports = {
  extends: [
    "alloy",
    "alloy/react",
    "alloy/typescript",
  ],
  env: {
    "browser": true,
    "es6": true,
    "node": true,
    "jquery": true
  },
  parserOptions: {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  globals: {
  },
  rules: {
    "no-redeclare": 1,
    "no-return-assign": 1,
    "no-undef": 2,
    "no-empty": 1,
    "prefer-const": 2,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/no-unnecessary-type-assertion": 0,
    "@typescript-eslint/no-inferrable-types": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-this-alias": 0
  }
};