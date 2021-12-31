module.exports = {
    extends: [
        './index',
    ],
    plugins: [
        '@typescript-eslint',
    ],
    rules: {
        /* eslint-disable array-bracket-newline, no-magic-numbers */
        // Possible Errors (https://eslint.org/docs/rules/#possible-errors)
        'no-extra-parens':      ['off'],
        'no-loss-of-precision': ['off'],

        // Best Practices (https://eslint.org/docs/rules/#best-practices)
        'default-param-last':    ['off'],
        'dot-notation':          ['off'],
        'no-empty-function':     ['off'],
        'no-invalid-this':       ['off'],
        'no-loop-func':          ['off'],
        'no-magic-numbers':      ['off'],
        'no-redeclare':          ['off'],
        'no-return-await':       ['off'],
        'no-throw-literal':      ['off'],
        'no-unused-expressions': ['off'],
        'no-void':               ['error',
            {
                allowAsStatement: true,
            },
        ],
        'require-await': ['off'],

        //  Variables (https://eslint.org/docs/rules/#variables)
        'init-declarations':    ['off'],
        'no-shadow':            ['off'],
        'no-use-before-define': ['off'],

        // Stylistic Issues (https://eslint.org/docs/rules/#stylistic-issues)
        'brace-style':                 ['off'],
        'camelcase':                   ['off'],
        'comma-dangle':                ['off'],
        'comma-spacing':               ['off'],
        'func-call-spacing':           ['off'],
        'indent':                      ['off'],
        'keyword-spacing':             ['off'],
        'lines-between-class-members': ['off'],
        'object-curly-spacing':        ['off'],
        'quotes':                      ['off'],
        'semi':                        ['off'],
        'space-before-function-paren': ['off'],
        'space-infix-ops':             ['off'],

        // ECMAScript 6 (https://eslint.org/docs/rules/#ecmascript-6)
        'no-dupe-class-members':  ['off'],
        'no-duplicate-imports':   ['off'],
        'no-useless-constructor': ['off'],

        // Extension Rules (https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#extension-rules)
        '@typescript-eslint/brace-style': ['error',
            '1tbs',
            {
                allowSingleLine: true,
            },
        ],
        '@typescript-eslint/comma-dangle': ['error',
            'always-multiline',
        ],
        '@typescript-eslint/comma-spacing':      ['error'],
        '@typescript-eslint/default-param-last': ['error'],
        '@typescript-eslint/dot-notation':       ['error'],
        '@typescript-eslint/func-call-spacing':  ['error'],
        '@typescript-eslint/indent':             ['error',
            4,
        ],
        '@typescript-eslint/init-declarations':           ['error'],
        '@typescript-eslint/keyword-spacing':             ['error'],
        '@typescript-eslint/lines-between-class-members': ['error'],
        '@typescript-eslint/no-dupe-class-members':       ['error'],
        '@typescript-eslint/no-duplicate-imports':        ['error',
            {
                includeExports: true,
            },
        ],
        '@typescript-eslint/no-empty-function': ['error',
            {
                allow: [
                    'protected-constructors',
                ],
            },
        ],
        '@typescript-eslint/no-extra-parens':      ['error'],
        '@typescript-eslint/no-invalid-this':      ['error'],
        '@typescript-eslint/no-loop-func':         ['error'],
        '@typescript-eslint/no-loss-of-precision': ['error'],
        '@typescript-eslint/no-magic-numbers':     ['error',
            {
                ignoreEnums:                   true,
                ignoreReadonlyClassProperties: true,
            },
        ],
        '@typescript-eslint/no-redeclare':           ['error'],
        '@typescript-eslint/no-shadow':              ['error'],
        '@typescript-eslint/no-throw-literal':       ['error'],
        '@typescript-eslint/no-unused-expressions':  ['error'],
        '@typescript-eslint/no-use-before-define':   ['error'],
        '@typescript-eslint/no-useless-constructor': ['error'],
        '@typescript-eslint/object-curly-spacing':   ['error'],
        '@typescript-eslint/quotes':                 ['error',
            'single',
        ],
        '@typescript-eslint/return-await':                ['error'],
        '@typescript-eslint/semi':                        ['error'],
        '@typescript-eslint/space-before-function-paren': ['error',
            {
                anonymous:  'always',
                named:      'never',
                asyncArrow: 'always',
            },
        ],
        '@typescript-eslint/space-infix-ops': ['error'],

        // @typescript-eslint
        '@typescript-eslint/array-type': ['error',
            {
                default: 'array-simple',
            },
        ],
        '@typescript-eslint/class-literal-property-style':    ['error'],
        '@typescript-eslint/consistent-indexed-object-style': ['error'],
        '@typescript-eslint/consistent-type-assertions':      ['error'],
        '@typescript-eslint/consistent-type-definitions':     ['error'],
        '@typescript-eslint/consistent-type-imports':         ['error'],
        '@typescript-eslint/explicit-function-return-type':   ['error'],
        '@typescript-eslint/explicit-member-accessibility':   ['error'],
        '@typescript-eslint/member-delimiter-style':          ['error',
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
        '@typescript-eslint/member-ordering':        ['error'],
        '@typescript-eslint/method-signature-style': ['error'],
        '@typescript-eslint/naming-convention':      ['error',
            {
                selector: [
                    'variable',
                    'function',
                    'parameter',
                    'parameterProperty',
                    'classProperty',
                    'objectLiteralProperty',
                    'typeProperty',
                    'classMethod',
                    'objectLiteralMethod',
                    'typeMethod',
                    'accessor',
                ],
                format: ['strictCamelCase'],
                filter: {
                    regex: '^_$',
                    match: false,
                },
                leadingUnderscore:  'forbid',
                trailingUnderscore: 'forbid',
            },
            {
                selector: [
                    'class',
                    'interface',
                    'typeAlias',
                    'typeParameter',
                    'enum',
                ],
                format: ['StrictPascalCase'],
                filter: {
                    regex: '^_$',
                    match: false,
                },
                leadingUnderscore:  'forbid',
                trailingUnderscore: 'forbid',
            },
            {
                selector: [
                    'enumMember',
                ],
                format: ['UPPER_CASE'],
                filter: {
                    regex: '^_$',
                    match: false,
                },
                leadingUnderscore:  'forbid',
                trailingUnderscore: 'forbid',
            },
            {
                selector: [
                    'variable',
                ],
                modifiers: ['global'],
                format:    ['UPPER_CASE'],
                filter:    {
                    regex: '^_$',
                    match: false,
                },
                leadingUnderscore:  'forbid',
                trailingUnderscore: 'forbid',
            },
        ],
        '@typescript-eslint/no-base-to-string':               ['error'],
        '@typescript-eslint/no-confusing-non-null-assertion': ['error'],
        '@typescript-eslint/no-confusing-void-expression':    ['error'],
        '@typescript-eslint/no-dynamic-delete':               ['error'],
        '@typescript-eslint/no-extraneous-class':             ['error'],
        '@typescript-eslint/no-invalid-void-type':            ['error'],
        '@typescript-eslint/no-namespace':                    ['error',
            {
                allowDeclarations:    true,
                allowDefinitionFiles: true,
            },
        ],
        '@typescript-eslint/no-parameter-properties': ['error'],
        '@typescript-eslint/no-require-imports':      ['error'],
        '@typescript-eslint/no-type-alias':           ['error',
            {
                allowAliases:          'in-unions-and-intersections',
                allowCallbacks:        'always',
                allowConditionalTypes: 'always',
                allowConstructors:     'always',
                allowLiterals:         'in-unions-and-intersections',
                allowMappedTypes:      'always',
                allowTupleTypes:       'always',
            },
        ],
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['error'],
        '@typescript-eslint/no-unnecessary-condition':               ['error'],
        '@typescript-eslint/no-unnecessary-qualifier':               ['error'],
        '@typescript-eslint/no-unnecessary-type-arguments':          ['error'],
        '@typescript-eslint/no-unnecessary-type-constraint':         ['error'],
        '@typescript-eslint/non-nullable-type-assertion-style':      ['error'],
        '@typescript-eslint/prefer-enum-initializers':               ['error'],
        '@typescript-eslint/prefer-for-of':                          ['error'],
        '@typescript-eslint/prefer-function-type':                   ['error'],
        '@typescript-eslint/prefer-includes':                        ['error'],
        '@typescript-eslint/prefer-literal-enum-member':             ['error'],
        '@typescript-eslint/prefer-nullish-coalescing':              ['error'],
        '@typescript-eslint/prefer-optional-chain':                  ['error'],
        '@typescript-eslint/prefer-readonly':                        ['error'],
        '@typescript-eslint/prefer-reduce-type-parameter':           ['error'],
        '@typescript-eslint/prefer-string-starts-ends-with':         ['error'],
        '@typescript-eslint/prefer-ts-expect-error':                 ['error'],
        '@typescript-eslint/promise-function-async':                 ['error'],
        '@typescript-eslint/require-array-sort-compare':             ['error'],
        '@typescript-eslint/sort-type-union-intersection-members':   ['error'],
        '@typescript-eslint/strict-boolean-expressions':             ['error',
            {
                allowString:                                            true,
                allowNumber:                                            true,
                allowNullableObject:                                    true,
                allowNullableBoolean:                                   true,
                allowNullableString:                                    true,
                allowNullableNumber:                                    true,
                allowAny:                                               true,
                allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: true,
            },
        ],
        '@typescript-eslint/switch-exhaustiveness-check': ['error'],
        '@typescript-eslint/triple-slash-reference':      ['error'],
        '@typescript-eslint/type-annotation-spacing':     ['error'],
        '@typescript-eslint/unified-signatures':          ['error'],
        /* eslint-enable */
    },
};
