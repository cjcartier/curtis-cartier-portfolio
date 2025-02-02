import baseConfig from './eslint.base.config.mjs';
import tseslint from 'typescript-eslint';

export default tseslint.config(...baseConfig);
