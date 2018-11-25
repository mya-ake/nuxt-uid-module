# nuxt-uid-module

[vue-uid](https://github.com/mya-ake/vue-uid) for Nuxt.js.

## Install

```bash
$ yarn add nuxt-uid-module
```

### nuxt.config.js

```JavaScript
module.exports = {
  // ...
  modules: [
    'nuxt-uid-module',
  ],
  // ...

  'uid-module': {
    name: 'uid' // property name(option)
    plugin: false,  // when to use vue-uid mixin(option)
  },
};
```

## Usage

[vue-uid Usage](https://github.com/mya-ake/vue-uid#usage)

## Options

### vue-uid options

See [vue-uid Options](https://github.com/mya-ake/vue-uid#option).

- `name` (option)

### nuxt-uid-module options

#### `plugin` (option)

- type: `boolean`
- default: `true`

Set to false when using [vue-uid mixin](https://github.com/mya-ake/vue-uid#mixin).
If false, vue-uid plugins will not be registered.
