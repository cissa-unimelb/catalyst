module.exports = {
    extends: [
        'airbnb',
        'prettier',
        'prettier/react',
        'plugin:promise/recommended',
    ],
    env: {
        browser: true,
        jest: true,
    },
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2018,
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['html', 'prettier', 'promise', 'react-hooks'],
    rules: {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': [
            'warn',
            { extensions: ['.js', '.jsx'] },
        ],
        'react/forbid-prop-types': [
            1,
            {
                forbid: ['any', 'array'],
                checkContextTypes: false,
                checkChildContextTypes: false,
            },
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
    },
};
