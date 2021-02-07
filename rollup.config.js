import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import eslint  from '@rollup/plugin-eslint';
import { DEFAULT_EXTENSIONS } from '@babel/core';
import _ from 'lodash';

import pkg from './package.json';

const rollupConfig = {
  input: './src/index.ts',
  output: [
    { file: `lib/${pkg.name}.esm.js`, format: 'es' },
    { file: `lib/${pkg.name}.umd.js`, format: 'umd', name: _.camelCase(pkg.name) },
  ],
  plugins: [
    eslint({
      throwOnError: true,
      throwOnWarning: true,
      include: ['src/**/*.ts', 'src/**/*.js'],
      exclude: ['node_modules/**', 'dist/**', 'test/**', 'docs/**', 'lib/**'],
      rules: {
        "no-var": 0,
        "no-redeclare": 1,
        "no-return-assign": 1,
        "no-undef": 2,
        "no-empty": 1,
        "prefer-const": 2,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/no-unused-vars": 0,
        "@typescript-eslint/no-unnecessary-type-assertion": 0,
        "@typescript-eslint/no-inferrable-types": 0,
        "@typescript-eslint/no-empty-function": 0,
        "@typescript-eslint/no-var-requires": 0,
        "@typescript-eslint/no-this-alias": 0
      }
    }),
    typescript({
      // 默认tslib是peerDependencies
      tslib: require.resolve('tslib'),
      useTsconfigDeclarationDir: true
    }),
    commonjs({ extensions: ['.js', '.ts'] }),
    resolve({
      moduleDirectories: ['node_modules']
    }),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
      extensions: [ ...DEFAULT_EXTENSIONS, '.ts' ],
    }),
  ],
}

export default rollupConfig