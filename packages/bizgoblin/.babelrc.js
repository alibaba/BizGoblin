const BABEL_ENV = process.env.BABEL_ENV
const building = BABEL_ENV != undefined && BABEL_ENV !== 'cjs'

const plugins = [
  "@babel/plugin-proposal-export-default-from",
  "@babel/plugin-proposal-export-namespace-from",
  "@babel/plugin-transform-runtime",
  ["@babel/plugin-proposal-class-properties", { "loose": true }],
  "@babel/plugin-proposal-object-rest-spread",
];


module.exports = {
  plugins: plugins,
  presets: [
    [ "@babel/preset-env", {
      modules: building ? false : 'commonjs',
      targets: {
        "browsers": ["last 2 versions"]
      }
    } ],
    '@babel/preset-react'
  ],
};
