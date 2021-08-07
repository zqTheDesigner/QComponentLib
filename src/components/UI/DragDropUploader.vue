<template>
  <div class="n-drag-drop-uploader">
    <q-uploader>
      <template v-slot:header="scope">
        <div class="row bg-white">
          <div>
            <q-uploader-add-trigger />
            <div
              class="items-center content-center q-pa-sm q-ma-md no-wrap"
              :class="scope.files.length === 0 ? 'column' : 'row'"
              :style="`border: 2px dashed ${color}50`"
            >
              <q-icon
                name="mdi-cloud-upload-outline"
                :style="`opacity: 0.3; color:${color}`"
                :size="scope.files.length === 0 ? '6rem' : '2rem'"
              />
              <p
                class="q-my-sm q-mx-sm"
                :style="`color:${color} ; filter: brightness(50%); filter:saturate(40%)`"
              >
                Click to browse files of drag and drop files here to upload.
              </p>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:list="scope">
        <div>
          <div
            v-for="file in scope.files"
            :key="file.name"
            class="row items-center justify-between full-width no-wrap"
          >
            <!-- Thumbnails -->
            <div>
              <img
                v-if="file.__img"
                :src="file.__img.src"
                style="width: 60px"
              />
            </div>

            <!-- File name and Progress Bar -->
            <div class="column full-width q-px-md">
              <p class="q-mb-xs q-mt-none" style="word-break: break-all">
                {{ file.name }}
              </p>
              <q-linear-progress :value="file.__progressLabel" />
              <div class="row justify-between">
                <span>{{ file.__sizeLabel }}</span>
                <span>{{ file.__progressLabel }}</span>
              </div>
            </div>

            <!-- Remove File -->
            <div>
              <q-icon
                name="mdi-trash-can-outline"
                @click="scope.removeFile(file)"
                size="sm"
              />
            </div>
          </div>
        </div>
      </template>
    </q-uploader>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NewComponent',

  props: { color: { type: String, default: '#0277BD' } },
  setup() {
    return {}
  }
})
</script>

<style lang="scss">
.n-drag-drop-uploader .q-uploader__dnd {
  height: 0px;
}
</style>
