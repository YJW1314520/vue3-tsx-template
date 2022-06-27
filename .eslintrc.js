module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      tsx: true
    }
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    'no-console': 'error',
    'no-template-curly-in-string': 'error',
    'consistent-return': 'error',
    'dot-notation': 'error',
    eqeqeq: 'error',
    'no-empty-function': 'error',
    'no-eval': 'error',
    'no-else-return': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'error',
    'jsx-quotes': ['error', 'prefer-single'],
    'max-statements-per-line': ['error', { max: 1 }],
    'multiline-comment-style': ['error', 'starred-block'],
    'new-parens': 'error',
    'newline-per-chained-call': ['error', { ignoreChainWithDepth: 1 }],
    'no-lonely-if': 'error',
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: false }],
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'object-shorthand': ['error', 'always'],
    'prefer-destructuring': ['error', {
      array: false,
      object: true
    }],
    'prefer-template': 'error',
    'sort-imports': ['error', {
      ignoreCase: false,
      ignoreDeclarationSort: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
    }],
    'template-curly-spacing': ['error', 'always']
  }
}
