import path from 'path';

const defaultOptions = {
  plugin: true,
};

export default function nuxtUidModule(_moduleOption) {
  const moduleOption = {
    ...defaultOptions,
    ...this.options['uid-module'],
    ..._moduleOption,
  };

  const options = {};
  // use plugin option
  if (moduleOption.plugin) {
    options.usePlugin = true;
  }

  // use name option
  if (typeof moduleOption.name === 'string') {
    options.name = moduleOption.name;
  }

  delete moduleOption.plugin;
  options.plugin = JSON.stringify(moduleOption);

  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.template.js'),
    ssr: true,
    options,
  });
}
