import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';
import dts from 'rollup-plugin-dts';

import { readFileSync } from 'fs';
const packageJson = JSON.parse(readFileSync('./package.json', 'utf8'));

export default [
  // Main bundle (CJS + ESM)
  {
    input: 'src/index.js',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      resolve({
        browser: true,
      }),
      commonjs(),
    ],
    external: ['vue', 'react', 'react-dom'],
  },
  // UMD bundle for unpkg
  {
    input: 'src/index.js',
    output: {
      file: 'dist/notifio.umd.js',
      format: 'umd',
      name: 'Notifio',
      sourcemap: true,
    },
    plugins: [
      resolve({
        browser: true,
      }),
      commonjs(),
    ],
    external: ['vue', 'react', 'react-dom'],
  },
];