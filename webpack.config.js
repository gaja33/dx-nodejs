const path = require('path');
module.exports = {
   mode: 'none',
   entry: './lib/mercadopago.js',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'mercadopago.js'
   }
};