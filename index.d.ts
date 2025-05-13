import type { Linter } from 'eslint';
import { meta } from 'eslint-plugin-import-x/meta';
import { ConfigArray } from 'typescript-eslint';

export const configs: {
    javascript: Linter.Config[];
    typescript: ConfigArray;
};

declare const _default: {
    meta: typeof meta;
    configs: typeof configs;
};

export default _default;
