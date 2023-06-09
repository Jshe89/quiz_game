module.exports = {
	env: {
		browser: true,
		es6: true,
	},
	extends: ['airbnb', 'prettier', 'plugin:prettier/recommended'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['react', 'prettier'],
	rules: {
		quotes: ['error', 'single'],
		'react/jsx-indent-props': [2, 'tab'],
		'react/jsx-indent': ['error', 'tab'],
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'comma-dangle': 0,
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
		'max-len': [1, { code: 140 }],
		'arrow-parens': 0,
		'import/prefer-default-export': 0,
		'space-before-function-paren': 0,
		'react/react-in-jsx-scope': 0,
		'jsx-a11y/anchor-is-valid': 0,
		'react/forbid-prop-types': 0,
		'no-shadow': 0,
		'operator-linebreak': 0,
		'object-curly-newline': 0,
		'react/jsx-one-expression-per-line': 0,
		'implicit-arrow-linebreak': 0,
		'func-names': 0,
		'react/button-has-type': 0,
		'jsx-a11y/no-static-element-interactions': 0,
		'jsx-a11y/click-events-have-key-events': 0,
		'prettier/prettier': 0,
		'no-return-assign': 0,
		'no-param-reassign': 0,
		'jsx-a11y/no-noninteractive-element-interactions': 0,
		'no-case-declarations': 0,
		'no-nested-ternary': 0,
		'react/no-array-index-key': 0,
		'react/jsx-wrap-multilines': 0,
		'react/require-default-props': 0,
		camelcase: 0,
		'jsx-a11y/label-has-for': [
			2,
			{
				components: [],
				required: {
					every: ['nesting', 'id'],
				},
				allowChildren: true,
			},
		],
		'jsx-a11y/label-has-associated-control': 'off',
	},
};