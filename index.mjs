/* eslint-disable import-x/extensions, import-x/no-nodejs-modules */
import { readFileSync } from 'fs';
import javascript from './javascript.mjs';
import typescript from './typescript.mjs';

export const configs = {
    javascript,
    typescript,
};

// eslint-disable-next-line import-x/no-anonymous-default-export
export default {
    meta: JSON.parse(readFileSync(new URL('package.json', import.meta.url), 'utf-8')),
    configs,
};
