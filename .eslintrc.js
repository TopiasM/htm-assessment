module.exports = {
  rules: {
    'react/react-in-jsx-scope': 'off'
  },
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended']
}
