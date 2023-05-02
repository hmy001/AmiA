/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    // parser: '@typescript-eslint/parser',
		// sourceType: 'module',
  },
  // plugins: ['vue', '@typescript-eslint'],
  // overrides: [
	// 	{
	// 		files: ['*.ts', '*.tsx', '*.vue'],
	// 		rules: {
	// 			'no-undef': 'off',
	// 		},
	// 	},
	// ],
  rules: {
    'vue/multi-word-component-names': 'off', // 关闭vue的组件名称命名必须多个单词
    'no-undef': 'off', // 关闭全局未定义 因为eslint无法检测ts的全局声明文件
    'semi': 'warn',
    'prefer-const': 'warn'
  }
};
