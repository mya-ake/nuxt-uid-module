const path = require('path');
const ROOT_DIR = path.resolve(__dirname, '..', '..', '..');

const moduleOption = {};
if (process.env.TEST_MIXIN) {
  moduleOption.plugin = false;
}

if (process.env.TEST_NAME) {
  moduleOption.name = 'testUid';
}

const configOptoin = {};
if (Object.keys(moduleOption).length > 0) {
  configOptoin['uid-module'] = moduleOption;
}

module.exports = {
  ...configOptoin,
  modules: [path.join(ROOT_DIR, 'src/module.js')],
  env: {
    TEST_MIXIN: process.env.TEST_MIXIN,
    TEST_NAME: process.env.TEST_NAME,
  },
};
