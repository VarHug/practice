module.exports = {
  extends: ['standard'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    // style
    semi: ['error', 'always'],
    'comma-dangle': [2, 'only-multiline'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
  },
};
