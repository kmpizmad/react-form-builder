const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
  /**
   * @param {import('rollup/dist/rollup').InputOptions} config
   */
  rollup(config, options) {
    config.plugins.push(
      postcss({
        modules: true,
        plugins: [autoprefixer(), cssnano({ preset: 'default' })],
        inject: false,
        extract: !!options.writeMeta, // only write out CSS for the first bundle (avoids pointless extra files)
      })
    );
    return config;
  },
};
