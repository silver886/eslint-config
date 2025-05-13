import { flatConfigs as importConfig } from 'eslint-plugin-import-x';
// eslint-disable-next-line import-x/no-unresolved
import tseslint from 'typescript-eslint';
// eslint-disable-next-line import-x/extensions
import configs from './javascript.js';

export default tseslint.config({
    extends: [
        configs,
        tseslint.configs.recommendedTypeChecked,
        tseslint.configs.strictTypeChecked,
        tseslint.configs.stylisticTypeChecked,
        importConfig.typescript,
    ],
    languageOptions: {
        parserOptions: {
            project: 'eslint.tsconfig.json',
        },
    },
    rules: {
        // Possible Errors (https://eslint.org/docs/rules/#possible-errors)
        'no-loss-of-precision': [
            'off',
        ],
        'no-undef': [
            'off',
        ],

        // Best Practices (https://eslint.org/docs/rules/#best-practices)
        'default-param-last': [
            'off',
        ],
        'dot-notation': [
            'off',
        ],
        'no-empty-function': [
            'off',
        ],
        'no-invalid-this': [
            'off',
        ],
        'no-loop-func': [
            'off',
        ],
        'no-magic-numbers': [
            'off',
        ],
        'no-redeclare': [
            'off',
        ],
        'no-return-await': [
            'off',
        ],
        'no-unused-expressions': [
            'off',
        ],
        'no-void': [
            'error',
            {
                allowAsStatement: true,
            },
        ],
        'require-await': [
            'off',
        ],

        //  Variables (https://eslint.org/docs/rules/#variables)
        'init-declarations': [
            'off',
        ],
        'no-shadow': [
            'off',
        ],
        'no-use-before-define': [
            'off',
        ],

        // Stylistic Issues (https://eslint.org/docs/rules/#stylistic-issues)
        'camelcase': [
            'off',
        ],

        // ECMAScript 6 (https://eslint.org/docs/rules/#ecmascript-6)
        'no-dupe-class-members': [
            'off',
        ],
        'no-duplicate-imports': [
            'off',
        ],
        'no-useless-constructor': [
            'off',
        ],

        // Stylistic Formatting
        '@stylistic/type-annotation-spacing': [
            'error',
        ],

        // Extension Rules (https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#extension-rules)
        '@typescript-eslint/default-param-last': [
            'error',
        ],
        '@typescript-eslint/dot-notation': [
            'error',
        ],
        '@typescript-eslint/init-declarations': [
            'error',
        ],
        '@typescript-eslint/no-dupe-class-members': [
            'error',
        ],
        '@typescript-eslint/no-empty-function': [
            'error',
            {
                allow: [
                    'protected-constructors',
                ],
            },
        ],
        '@typescript-eslint/no-invalid-this': [
            'error',
        ],
        '@typescript-eslint/no-loop-func': [
            'error',
        ],
        '@typescript-eslint/no-loss-of-precision': [
            'error',
        ],
        '@typescript-eslint/no-magic-numbers': [
            'error',
            {
                ignoreEnums:                   true,
                ignoreReadonlyClassProperties: true,
            },
        ],
        '@typescript-eslint/no-redeclare': [
            'error',
        ],
        '@typescript-eslint/no-shadow': [
            'error',
        ],
        '@typescript-eslint/only-throw-error': [
            'error',
        ],
        '@typescript-eslint/no-unused-expressions': [
            'error',
        ],
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                argsIgnorePattern:              '^_$',
                destructuredArrayIgnorePattern: '^_',
            },
        ],
        '@typescript-eslint/no-use-before-define': [
            'error',
        ],
        '@typescript-eslint/no-useless-constructor': [
            'error',
        ],
        '@typescript-eslint/return-await': [
            'error',
        ],

        // @typescript-eslint
        '@typescript-eslint/array-type': [
            'error',
            {
                default: 'array-simple',
            },
        ],
        '@typescript-eslint/class-literal-property-style': [
            'error',
        ],
        '@typescript-eslint/consistent-indexed-object-style': [
            'error',
        ],
        '@typescript-eslint/consistent-type-assertions': [
            'error',
        ],
        '@typescript-eslint/consistent-type-definitions': [
            'error',
        ],
        '@typescript-eslint/consistent-type-imports': [
            'error',
        ],
        '@typescript-eslint/explicit-function-return-type': [
            'error',
        ],
        '@typescript-eslint/explicit-member-accessibility': [
            'error',
        ],
        '@typescript-eslint/member-ordering': [
            'error',
        ],
        '@typescript-eslint/method-signature-style': [
            'error',
        ],
        '@typescript-eslint/naming-convention': [
            'error',
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
                format: [
                    'strictCamelCase',
                ],
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
                format: [
                    'StrictPascalCase',
                ],
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
                format: [
                    'UPPER_CASE',
                ],
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
                modifiers: [
                    'global',
                ],
                format: [
                    'UPPER_CASE',
                ],
                filter: {
                    regex: '^_$',
                    match: false,
                },
                leadingUnderscore:  'forbid',
                trailingUnderscore: 'forbid',
            },
        ],
        '@typescript-eslint/no-base-to-string': [
            'error',
        ],
        '@typescript-eslint/no-confusing-non-null-assertion': [
            'error',
        ],
        '@typescript-eslint/no-confusing-void-expression': [
            'error',
        ],
        '@typescript-eslint/no-dynamic-delete': [
            'error',
        ],
        '@typescript-eslint/no-extraneous-class': [
            'error',
        ],
        '@typescript-eslint/no-invalid-void-type': [
            'error',
        ],
        '@typescript-eslint/no-namespace': [
            'error',
            {
                allowDeclarations:    true,
                allowDefinitionFiles: true,
            },
        ],
        '@typescript-eslint/no-require-imports': [
            'error',
        ],
        '@typescript-eslint/no-type-alias': [
            'error',
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
        '@typescript-eslint/no-unnecessary-boolean-literal-compare': [
            'error',
        ],
        '@typescript-eslint/no-unnecessary-condition': [
            'error',
        ],
        '@typescript-eslint/no-unnecessary-qualifier': [
            'error',
        ],
        '@typescript-eslint/no-unnecessary-type-arguments': [
            'error',
        ],
        '@typescript-eslint/no-unnecessary-type-constraint': [
            'error',
        ],
        '@typescript-eslint/non-nullable-type-assertion-style': [
            'error',
        ],
        '@typescript-eslint/parameter-properties': [
            'error',
        ],
        '@typescript-eslint/prefer-enum-initializers': [
            'error',
        ],
        '@typescript-eslint/prefer-for-of': [
            'error',
        ],
        '@typescript-eslint/prefer-function-type': [
            'error',
        ],
        '@typescript-eslint/prefer-includes': [
            'error',
        ],
        '@typescript-eslint/prefer-literal-enum-member': [
            'error',
        ],
        '@typescript-eslint/prefer-nullish-coalescing': [
            'error',
        ],
        '@typescript-eslint/prefer-optional-chain': [
            'error',
        ],
        '@typescript-eslint/prefer-readonly': [
            'error',
        ],
        '@typescript-eslint/prefer-reduce-type-parameter': [
            'error',
        ],
        '@typescript-eslint/prefer-string-starts-ends-with': [
            'error',
        ],
        '@typescript-eslint/prefer-ts-expect-error': [
            'error',
        ],
        '@typescript-eslint/promise-function-async': [
            'error',
        ],
        '@typescript-eslint/require-array-sort-compare': [
            'error',
        ],
        '@typescript-eslint/sort-type-constituents': [
            'error',
        ],
        '@typescript-eslint/strict-boolean-expressions': [
            'error',
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
        '@typescript-eslint/switch-exhaustiveness-check': [
            'error',
        ],
        '@typescript-eslint/triple-slash-reference': [
            'error',
        ],
        '@typescript-eslint/unified-signatures': [
            'error',
        ],
    },
});
