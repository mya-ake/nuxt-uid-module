<template>
  <span>{{ uid }}</span>
</template>

<script>
import { vueUidMixin } from 'vue-uid';

const mixins = [];
if (process.env.TEST_MIXIN) {
  mixins.push(vueUidMixin);
}

export default {
  mixins,

  computed: {
    uid() {
      if (process.env.TEST_NAME) {
        return this.testUid;
      }
      return this.$_uid;
    },
  },
};
</script>
