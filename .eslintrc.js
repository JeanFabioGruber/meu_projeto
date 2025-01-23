module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
      'plugin:prettier/recommended'
    ],
    plugins: ['@typescript-eslint'],
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    env: {
      es6: true,
      node: true,
    },
    rules: {
      'no-var': 'error',
      'prefer-const': 'error',
      'no-multi-spaces': 'error',
      'space-in-parens': 'error',
      'no-multiple-empty-lines': 'error',
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
    },
  };
  