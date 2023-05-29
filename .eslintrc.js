module.exports = {
  env: {
    node: true,
    jest: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended',
    'eslint:recommended',
    "./.nuxt/.eslint.gloabls.json"
  ],
  parserOptions: {
    project: '**/tsconfig.json',
    sourceType: 'module',
    ecmaVersion: 2015,
    extraFileExtensions: ['.vue'],
    project: "./.nuxt/tsconfig.json"
  },
  ignorePatterns: ['.eslintrc.js', 'dist/**'],
}
  