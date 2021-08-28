module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: ['@typescript-eslint'],
  ignorePatterns: [
    'dist',
    'data',
    'node_modules',
    'package-lock.json',
    'package.json',
    'tsconfig.json',
    'Dockerfile',
    'README.md',
    'docker-compose.yml',
  ],
  rules: {
    'import/no-unresolved': 0,
    'class-methods-use-this': 0,
    'no-underscore-dangle': 0,
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
  },
};
