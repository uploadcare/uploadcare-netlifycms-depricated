import jscc from 'rollup-plugin-jscc'
import license from 'rollup-plugin-license'
import pkg from './package.json'
import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.js',
  plugins: [
    license({
      banner: `
        <%= pkg.name %> <%= pkg.version %>
        <%= pkg.description %>
        <%= pkg.homepage %>
        Date: <%= moment().format('YYYY-MM-DD') %>
      `,
    }),
    jscc({values: {_WIDGET_VERSION: pkg.widgetVersion}}),
    babel({
      exclude: 'node_modules/**',
      presets: [['@babel/preset-react']],
    }),
  ],
  output: {
    file: 'dist/uploadcare-netlifycms.js',
    format: 'es',
  },
}
