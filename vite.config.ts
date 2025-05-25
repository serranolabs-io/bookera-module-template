import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import babel from 'vite-plugin-babel';

export default defineConfig({
  plugins: [
    dts(),
    babel({
      babelConfig: {
        babelrc: false,
        configFile: false,
        plugins: [
          [
            '@babel/plugin-proposal-decorators',
            { loose: true, version: '2022-03' },
          ],
        ],
      },
    }),
  ],
  build: {
    minify: 'terser',
    lib: {
      entry: {
        '{module_name_kc}': resolve(__dirname, 'src/main.ts'),
        shortcuts: resolve(__dirname, 'src/shortcuts.json'),
      },
      name: '{package_name}',
      formats: ['es'],
    },
    target: 'esnext',
    terserOptions: {
      keep_classnames: true,
    },
  },
});
