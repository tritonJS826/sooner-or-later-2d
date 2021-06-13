module.exports = {
    env: {
        browser: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    plugins: [
      'react',
      '@typescript-eslint',
    ],
    rules: {
      'react/jsx-props-no-spreading': 'off',
      'import/extensions': 'off',
      // 'react/jsx-indent': ['warn', 2],
      // indent: ['warn', 2],
      'import/no-unresolved': 0,
      'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['error'],
    },
    globals: {
      React: true,
      google: true,
      mount: true,
      mountWithRouter: true,
      shallow: true,
      shallowWithRouter: true,
      context: true,
      expect: true,
      jsdom: true,
      JSX: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
  },
};
