/* eslint-disable max-lines */
import jsConfig from '@eslint/js';
import stylisticPlugin from '@stylistic/eslint-plugin';
import { defineConfig } from 'eslint/config';
import { createNodeResolver, flatConfigs as importConfig } from 'eslint-plugin-import-x';

export default defineConfig({
    extends: [
        jsConfig.configs.recommended,
        stylisticPlugin.configs.customize({
            indent:       4,
            quotes:       'single',
            semi:         true,
            jsx:          true,
            arrowParens:  true,
            braceStyle:   '1tbs',
            blockSpacing: true,
            quoteProps:   'consistent-as-needed',
            commaDangle:  'always-multiline',
        }),
        importConfig.recommended,
    ],
    languageOptions: {
        ecmaVersion: 'latest',
    },
    plugins: {
        stylisticPlugin,
    },
    settings: {
        'import-x/resolver-next': [
            createNodeResolver(),
        ],
    },
    rules: {
        // Possible Errors (https://eslint.org/docs/rules/#possible-errors)
        'no-await-in-loop': [
            'error',
        ],
        'no-console': [
            'warn',
        ],
        'no-loss-of-precision': [
            'error',
        ],
        'no-promise-executor-return': [
            'error',
        ],
        'no-unsafe-optional-chaining': [
            'error',
            {
                disallowArithmeticOperators: true,
            },
        ],
        'require-atomic-updates': [
            'error',
        ],

        // Best Practices (https://eslint.org/docs/rules/#best-practices)
        'accessor-pairs': [
            'error',
        ],
        'array-callback-return': [
            'error',
            {
                checkForEach: true,
            },
        ],
        'block-scoped-var': [
            'error',
        ],
        'class-methods-use-this': [
            'error',
        ],
        'consistent-return': [
            'error',
        ],
        'curly': [
            'error',
            'multi-line',
            'consistent',
        ],
        'default-case': [
            'error',
        ],
        'default-case-last': [
            'error',
        ],
        'default-param-last': [
            'error',
        ],
        'dot-notation': [
            'error',
        ],
        'eqeqeq': [
            'error',
        ],
        'grouped-accessor-pairs': [
            'error',
            'getBeforeSet',
        ],
        'guard-for-in': [
            'error',
        ],
        'max-classes-per-file': [
            'warn',
        ],
        'no-alert': [
            'warn',
        ],
        'no-caller': [
            'error',
        ],
        'no-constructor-return': [
            'error',
        ],
        'no-div-regex': [
            'error',
        ],
        'no-else-return': [
            'error',
        ],
        'no-empty-function': [
            'error',
        ],
        'no-eq-null': [
            'error',
        ],
        'no-eval': [
            'error',
        ],
        'no-extend-native': [
            'error',
        ],
        'no-extra-bind': [
            'error',
        ],
        'no-extra-label': [
            'error',
        ],
        'no-implicit-coercion': [
            'error',
        ],
        'no-implicit-globals': [
            'error',
        ],
        'no-implied-eval': [
            'error',
        ],
        'no-invalid-this': [
            'error',
        ],
        'no-iterator': [
            'error',
        ],
        'no-labels': [
            'error',
        ],
        'no-lone-blocks': [
            'error',
        ],
        'no-loop-func': [
            'error',
        ],
        'no-magic-numbers': [
            'error',
        ],
        'no-multi-str': [
            'error',
        ],
        'no-new': [
            'error',
        ],
        'no-new-func': [
            'error',
        ],
        'no-new-wrappers': [
            'error',
        ],
        'no-nonoctal-decimal-escape': [
            'error',
        ],
        'no-octal-escape': [
            'error',
        ],
        'no-param-reassign': [
            'error',
        ],
        'no-proto': [
            'error',
        ],
        'no-return-assign': [
            'error',
            'always',
        ],
        'no-return-await': [
            'error',
        ],
        'no-script-url': [
            'error',
        ],
        'no-self-compare': [
            'error',
        ],
        'no-sequences': [
            'error',
        ],
        'no-throw-literal': [
            'error',
        ],
        'no-unmodified-loop-condition': [
            'error',
        ],
        'no-unused-expressions': [
            'error',
        ],
        'no-useless-call': [
            'error',
        ],
        'no-useless-concat': [
            'error',
        ],
        'no-useless-return': [
            'error',
        ],
        'no-void': [
            'error',
        ],
        'prefer-named-capture-group': [
            'error',
        ],
        'prefer-promise-reject-errors': [
            'error',
        ],
        'prefer-regex-literals': [
            'error',
            {
                disallowRedundantWrapping: true,
            },
        ],
        'radix': [
            'error',
        ],
        'require-await': [
            'error',
        ],
        'require-unicode-regexp': [
            'error',
        ],
        'vars-on-top': [
            'error',
        ],
        'yoda': [
            'error',
        ],

        // Strict Mode (https://eslint.org/docs/rules/#strict-mode)
        'strict': [
            'error',
            'never',
        ],

        // Variables (https://eslint.org/docs/rules/#variables)
        'init-declarations': [
            'error',
        ],
        'no-label-var': [
            'error',
        ],
        'no-shadow': [
            'error',
        ],
        'no-undef-init': [
            'error',
        ],
        'no-undefined': [
            'error',
        ],
        'no-use-before-define': [
            'error',
        ],

        // Stylistic Issues (https://eslint.org/docs/rules/#stylistic-issues)
        'camelcase': [
            'error',
        ],
        'capitalized-comments': [
            'error',
            'always',
            {
                ignorePattern: '^\\s*(?:spell-checker:)',
            },
        ],
        'consistent-this': [
            'error',
        ],
        'func-name-matching': [
            'error',
        ],
        'func-names': [
            'error',
            'as-needed',
        ],
        'func-style': [
            'error',
            'declaration',
        ],
        'max-depth': [
            'warn',
        ],
        'max-lines': [
            'warn',
            {
                max:            512,
                skipBlankLines: true,
                skipComments:   true,
            },
        ],
        'max-lines-per-function': [
            'warn',
            {
                max:            64,
                skipBlankLines: true,
                skipComments:   true,
                IIFEs:          true,
            },
        ],
        'max-nested-callbacks': [
            'warn',
        ],
        'max-params': [
            'warn',
        ],
        'max-statements': [
            'warn',
            {
                max: 16,
            },
        ],
        'new-cap': [
            'error',
        ],
        'no-array-constructor': [
            'error',
        ],
        'no-bitwise': [
            'error',
        ],
        'no-continue': [
            'error',
        ],
        'no-inline-comments': [
            'error',
            {
                ignorePattern: 'NOTE|OPTIMIZE|TODO|HACK|XXX|FIXME|BUG',
            },
        ],
        'no-lonely-if': [
            'error',
        ],
        'no-multi-assign': [
            'error',
        ],
        'no-negated-condition': [
            'error',
        ],
        'no-new-object': [
            'error',
        ],
        'no-plusplus': [
            'error',
        ],
        'no-underscore-dangle': [
            'error',
        ],
        'no-unneeded-ternary': [
            'error',
        ],
        'one-var': [
            'error',
            {
                initialized:   'never',
                uninitialized: 'always',
            },
        ],
        'operator-assignment': [
            'error',
        ],
        'prefer-exponentiation-operator': [
            'error',
        ],
        'prefer-object-spread': [
            'error',
        ],
        'sort-vars': [
            'error',
        ],

        // ECMAScript 6 (https://eslint.org/docs/rules/#ecmascript-6)
        'arrow-body-style': [
            'error',
        ],
        'no-duplicate-imports': [
            'error',
            {
                includeExports: true,
            },
        ],
        'no-useless-computed-key': [
            'error',
            {
                enforceForClassMembers: true,
            },
        ],
        'no-useless-constructor': [
            'error',
        ],
        'no-useless-rename': [
            'error',
        ],
        'no-var': [
            'error',
        ],
        'object-shorthand': [
            'error',
        ],
        'prefer-arrow-callback': [
            'error',
            {
                allowUnboundThis: false,
            },
        ],
        'prefer-const': [
            'error',
            {
                destructuring: 'all',
            },
        ],
        'prefer-destructuring': [
            'error',
        ],
        'prefer-numeric-literals': [
            'error',
        ],
        'prefer-rest-params': [
            'error',
        ],
        'prefer-spread': [
            'error',
        ],
        'prefer-template': [
            'error',
        ],
        'sort-imports': [
            'error',
            {
                allowSeparatedGroups:  true,
                ignoreDeclarationSort: true,
            },
        ],
        'symbol-description': [
            'error',
        ],

        // Stylistic Formatting
        '@stylistic/array-bracket-newline': [
            'error',
            'consistent',
        ],
        '@stylistic/array-bracket-spacing': [
            'error',
        ],
        '@stylistic/array-element-newline': [
            'error',
            'consistent',
        ],
        '@stylistic/arrow-spacing': [
            'error',
        ],
        '@stylistic/comma-spacing': [
            'error',
        ],
        '@stylistic/comma-style': [
            'error',
        ],
        '@stylistic/computed-property-spacing': [
            'error',
        ],
        '@stylistic/dot-location': [
            'error',
        ],
        '@stylistic/eol-last': [
            'error',
        ],
        '@stylistic/func-call-spacing': [
            'error',
        ],
        '@stylistic/function-call-argument-newline': [
            'error',
            'consistent',
        ],
        '@stylistic/function-paren-newline': [
            'error',
        ],
        '@stylistic/generator-star-spacing': [
            'error',
        ],
        '@stylistic/implicit-arrow-linebreak': [
            'error',
        ],
        '@stylistic/key-spacing': [
            'error',
            {
                align: 'value',
            },
        ],
        '@stylistic/keyword-spacing': [
            'error',
        ],
        '@stylistic/lines-around-comment': [
            'error',
            {
                beforeBlockComment: true,
                beforeLineComment:  true,
                allowBlockStart:    true,
                allowObjectStart:   true,
                allowArrayStart:    true,
                allowClassStart:    true,
                ignorePattern:      '^\\s*(?:spell-checker:)',
            },
        ],
        '@stylistic/lines-between-class-members': [
            'error',
        ],
        '@stylistic/max-len': [
            'warn',
            {
                code:                   128,
                ignoreUrls:             true,
                ignoreStrings:          true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals:   true,
                ignorePattern:          '^(?: *\\/\\* eslint-(?:dis|en)able .+ \\*\\/|.*\\/\\/ eslint-disable-line .+| *\\/\\/ eslint-disable-next-line .+)$',
            },
        ],
        '@stylistic/max-statements-per-line': [
            'warn',
        ],
        '@stylistic/member-delimiter-style': [
            'error',
            {
                multiline: {
                    delimiter:   'semi',
                    requireLast: true,
                },
                singleline: {
                    delimiter:   'semi',
                    requireLast: false,
                },
            },
        ],
        '@stylistic/multiline-comment-style': [
            'error',
        ],
        '@stylistic/multiline-ternary': [
            'error',
            'always-multiline',
        ],
        '@stylistic/new-parens': [
            'error',
        ],
        '@stylistic/newline-per-chained-call': [
            'error',
        ],
        '@stylistic/no-confusing-arrow': [
            'error',
        ],
        '@stylistic/no-extra-parens': [
            'error',
        ],
        '@stylistic/no-floating-decimal': [
            'error',
        ],
        '@stylistic/no-mixed-operators': [
            'error',
        ],
        '@stylistic/no-multi-spaces': [
            'error',
        ],
        '@stylistic/no-multiple-empty-lines': [
            'error',
        ],
        '@stylistic/no-tabs': [
            'error',
        ],
        '@stylistic/no-trailing-spaces': [
            'error',
        ],
        '@stylistic/no-whitespace-before-property': [
            'error',
        ],
        '@stylistic/nonblock-statement-body-position': [
            'error',
        ],
        '@stylistic/object-curly-newline': [
            'error',
            {
                multiline:  true,
                consistent: true,
            },
        ],
        '@stylistic/object-curly-spacing': [
            'error',
        ],
        '@stylistic/object-property-newline': [
            'error',
        ],
        '@stylistic/one-var-declaration-per-line': [
            'error',
        ],
        '@stylistic/operator-linebreak': [
            'error',
            'after',
        ],
        '@stylistic/padded-blocks': [
            'error',
            'never',
        ],
        '@stylistic/padding-line-between-statements': [
            'error',
        ],
        '@stylistic/rest-spread-spacing': [
            'error',
        ],
        '@stylistic/semi-spacing': [
            'error',
        ],
        '@stylistic/semi-style': [
            'error',
        ],
        '@stylistic/space-before-blocks': [
            'error',
        ],
        '@stylistic/space-before-function-paren': [
            'error',
            {
                anonymous:  'always',
                named:      'never',
                asyncArrow: 'always',
            },
        ],
        '@stylistic/space-in-parens': [
            'error',
        ],
        '@stylistic/space-infix-ops': [
            'error',
        ],
        '@stylistic/space-unary-ops': [
            'error',
        ],
        '@stylistic/spaced-comment': [
            'error',
        ],
        '@stylistic/switch-colon-spacing': [
            'error',
        ],
        '@stylistic/template-curly-spacing': [
            'error',
        ],
        '@stylistic/template-tag-spacing': [
            'error',
        ],
        '@stylistic/wrap-iife': [
            'error',
        ],
        '@stylistic/wrap-regex': [
            'error',
        ],
        '@stylistic/yield-star-spacing': [
            'error',
        ],

        // Import static analysis
        'import-x/no-unresolved': [
            'error',
        ],
        'import-x/named': [
            'error',
        ],
        'import-x/default': [
            'error',
        ],
        'import-x/namespace': [
            'error',
        ],
        'import-x/no-absolute-path': [
            'error',
        ],
        'import-x/no-dynamic-require': [
            'error',
        ],
        'import-x/no-self-import': [
            'error',
        ],
        'import-x/no-useless-path-segments': [
            'error',
            {
                noUselessIndex: true,
            },
        ],
        'import-x/no-relative-packages': [
            'error',
        ],

        // Import helpful warnings
        'import-x/export': [
            'error',
        ],
        'import-x/no-named-as-default': [
            'error',
        ],
        'import-x/no-named-as-default-member': [
            'error',
        ],
        'import-x/no-deprecated': [
            'error',
        ],
        'import-x/no-extraneous-dependencies': [
            'error',
        ],
        'import-x/no-mutable-exports': [
            'error',
        ],
        'import-x/no-unused-modules': [
            'error',
        ],

        // Import module systems
        'import-x/unambiguous': [
            'error',
        ],
        'import-x/no-commonjs': [
            'error',
        ],
        'import-x/no-amd': [
            'error',
        ],
        'import-x/no-nodejs-modules': [
            'error',
        ],
        'import-x/no-import-module-exports': [
            'error',
        ],

        // Import style guide
        'import-x/first': [
            'error',
        ],
        'import-x/no-duplicates': [
            'error',
        ],
        'import-x/no-namespace': [
            'error',
        ],
        'import-x/extensions': [
            'error',
        ],
        'import-x/order': [
            'error',
            {
                'groups': [
                    'builtin',
                    'external',
                    'internal',
                    'parent',
                    'sibling',
                    'index',
                    'object',
                    'type',
                    'unknown',
                ],
                'alphabetize': {
                    order: 'asc',
                },
                'newlines-between': 'never',
            },
        ],
        'import-x/newline-after-import': [
            'error',
        ],
        'import-x/max-dependencies': [
            'warn',
            {
                max:               8,
                ignoreTypeImports: true,
            },
        ],
        'import-x/no-unassigned-import': [
            'error',
        ],
        'import-x/no-named-default': [
            'error',
        ],
        'import-x/no-anonymous-default-export': [
            'error',
        ],
    },
});
