module.exports = {
  env: {
    node: true,
    jest: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'eslint:recommended',
  ],
  parserOptions: {
    project: '**/tsconfig.json',
    sourceType: 'module',
    ecmaVersion: 2015
  },
  ignorePatterns: ['.eslintrc.js', 'dist/**'],
}
  