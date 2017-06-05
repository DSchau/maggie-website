const path = require('path');

module.exports = {
  plugins: [
    require('postcss-import')({
      from: path.join(__dirname, 'src/index.css')
    }),
    require('autoprefixer'),
    require('postcss-nested'),
    require('postcss-simple-vars')
  ]
};
