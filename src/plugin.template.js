import Vue from 'vue';
import VueUid, { uid } from 'vue-uid';

<% if (options.usePlugin) { %>

  Vue.use(VueUid, {
  ...JSON.parse('<%= options.plugin %>'),
});

<% } else if (options.name) { %>

uid.setName('<%= options.name %>')

<% } %>

export default () => {
  uid.reset();
};
