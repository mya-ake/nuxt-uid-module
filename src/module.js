import path from 'path';

export default function nuxtUidModule(_moduleOption) {
  const moduleOption = {
    ...this.options['uid-module'],
    ..._moduleOption,
  };

  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.template.js'),
    ssr: true,
    options: JSON.stringify(moduleOption),
  });
}
