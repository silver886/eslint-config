// eslint-disable-next-line import-x/no-unresolved
import { defineConfig } from 'eslint/config';
import globals from 'globals';
// eslint-disable-next-line import-x/no-useless-path-segments, import-x/extensions
import { configs } from './index.js';

export default defineConfig({
    extends: [
        configs.javascript,
    ],
    languageOptions: {
        globals: globals.node,
    },
});
