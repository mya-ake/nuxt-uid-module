<template>
  <div>
    <div id="env">{{ env }}</div>
    <base-text id="base-text" />
  </div>
</template>

<script>
import BaseText from '@/components/BaseText';

export default {
  components: {
    BaseText,
  },

  computed: {
    env() {
      return JSON.stringify({
        name: !!process.env.TEST_NAME,
        mixin: !!process.env.TEST_MIXIN,
      });
    },
  },
};
</script>
