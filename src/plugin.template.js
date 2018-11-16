import Vue from 'vue';
import VueUid, { uid } from 'vue-uid';

Vue.use(VueUid, {
  ...JSON.parse('<%= options %>'),
});

export default () => {
  uid.reset();
};
