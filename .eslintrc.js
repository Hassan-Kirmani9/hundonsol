module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/no-unescaped-entities': 0,
    'react/jsx-closing-tag-location': 0, // Disable closing tag location rule
    'no-multi-spaces': 0, // Disable multi-space rule
    'no-multiple-empty-lines': 0, // Disable multiple empty lines rule
    'jsx-a11y/label-has-associated-control': 0,
    'react/jsx-max-props-per-line': 0, // Disable prop max per line rule
    'react/jsx-first-prop-new-line': 0, // Disable first prop new line rule
    'react/jsx-no-constructed-context-values': 0,
    'max-len': [2, 1050], // You can still adjust the line length if needed
    'no-console': 0, // Allow console.log statements
    'react/prop-types': 0, // Disable prop-types validation
    'linebreak-style': 0, // Disable line break style check
    'react/state-in-constructor': 0, // Allow state in constructor
    'react/react-in-jsx-scope': 'off', // No need to import React in scope
    'react/jsx-props-no-spreading': 'off', // Allow JSX prop spreading
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '_d',
          '_dh',
          '_h',
          '_id',
          '_m',
          '_n',
          '_t',
          '_text',
        ],
      },
    ],
    'off': 0,
    'object-curly-newline': 0, // Disable object curly newline rule
    'react/jsx-filename-extension': 0, // Allow JSX in .js files
    'react/jsx-one-expression-per-line': 0, // Allow multiple expressions in JSX
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/alt-text': 0,
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/no-array-index-key': 0,
    'react/jsx-filename-extension': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: [
          'Link',
        ],
        specialLink: [
          'to',
          'hrefLeft',
          'hrefRight',
        ],
        aspects: [
          'noHref',
          'invalidHref',
          'preferButton',
        ],
      },
    ],
  },
};
