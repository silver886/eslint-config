/* eslint-disable import-x/extensions */
// eslint-disable-next-line import-x/no-nodejs-modules
import { readFileSync } from 'fs';
import javascript from './javascript.js';
import typescript from './typescript.js';

export const configs = {
    javascript,
    typescript,
};

// eslint-disable-next-line import-x/no-anonymous-default-export
export default {
    meta: JSON.parse(readFileSync(new URL('package.json', import.meta.url), 'utf-8')),
    configs,
};
