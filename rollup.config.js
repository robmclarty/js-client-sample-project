import multi from '@rollup/plugin-multi-entry'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import json from '@rollup/plugin-json'
import postcss from 'rollup-plugin-postcss'
import sizes from 'rollup-plugin-sizes'
import { terser } from 'rollup-plugin-terser'

const isProduction = process.env.ROLLUP_ENV === 'production'

const configProduction = {
  input: ['app/index.js', 'styles/index.scss'],
  output: {
    file: 'build/main.min.js',
    format: 'iife',
    name: 'version',
    plugins: [terser()]
  },
  plugins: [
    multi(),
    resolve(),
    commonjs(),
    babel({ babelHelpers: 'bundled' }),
    postcss({
      extract: 'main.min.css',
      minimize: true,
      extensions: ['.css', '.sass', '.scss']
    }),
    json()
  ]
}

const configDevelopment = {
  input: ['app/index.js', 'styles/index.scss'],
  output: {
    file: 'build/main.js',
    format: 'iife',
    sourcemap: true
  },
  plugins: [
    multi(),
    resolve(),
    commonjs(),
    babel({ babelHelpers: 'bundled' }),
    postcss({
      extract: 'main.css',
      minimize: false,
      extensions: ['.css', '.sass', '.scss']
    }),
    json(),
    sizes()
  ]
}

export default isProduction
  ? configProduction
  : configDevelopment
