const path = require('path');
const ROOT_DIR = path.resolve(__dirname, '..', '..', '..');

module.exports = {
  modules: [path.join(ROOT_DIR, 'src/module.js')],
};
