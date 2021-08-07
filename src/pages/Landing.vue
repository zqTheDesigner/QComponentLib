<template>
  <div>
    <DragDropUploader />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import DragDropUploader from '../components/UI/DragDropUploader.vue';

export default defineComponent({
  name: 'Landing',
  components: { DragDropUploader },

  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
