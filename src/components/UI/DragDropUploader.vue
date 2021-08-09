<template>
  <div class="n-drag-drop-uploader">
    <q-uploader>
      <template v-slot:header>
        <div class="row bg-white justify-center">
          <div class="full-width">
            <q-uploader-add-trigger />
            <div
              class="
                items-center
                content-center
                q-pa-sm q-ma-md
                no-wrap
                column
                s-round-sm
              "
              :style="`border: 2px dashed ${color}50`"
            >
              <q-icon
                name="mdi-cloud-upload-outline"
                :style="`opacity: 0.3; color:${color}`"
                size="6rem"
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
            class="
              row
              items-center
              justify-between
              no-wrap
              s-border
              q-mx-md q-mb-md q-pa-sm
            "
          >
            <!-- Thumbnails and icons -->
            <div class="col-2 column items-center">
              <img
                v-if="file.__img"
                :src="file.__img.src"
                style="width: 100%"
              />
              <q-icon
                v-else
                :name="getFileIconName(file)"
                :style="`color:${color}`"
                size="1.8rem"
              />
            </div>

            <!-- File name and Progress Bar -->
            <div class="col-8 column q-pl-sm">
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
            <div class="col-2 column items-center">
              <q-icon
                name="mdi-trash-can-outline"
                @click="scope.removeFile(file)"
                size="sm"
                class="n-delete-file-icon"
              />
            </div>
          </div>
        </div>
      </template>
    </q-uploader>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

interface fileInterface {
  type: string
}

export default defineComponent({
  name: 'NewComponent',

  props: { color: { type: String, default: '#0277BD' } },

  setup() {
    function getFileIconName(file: fileInterface) {
      /** Returns file's icon name in MDI icon library */
      const type = file.type.split('/')
      console.log(type)
      let icon = 'mdi-file-star' // Default

      type[0] === 'audio'
        ? (icon = 'mdi-file-music')
        : type[0] === 'text'
        ? (icon = 'mdi-file-document')
        : type[0] === 'video'
        ? (icon = 'mdi-file-video')
        : type[1] === 'pdf' // check type[1] from this line onwards
        ? (icon = 'mdi-file-pdf')
        : null

      return icon
    }
    return { getFileIconName }
  }
})
</script>

<style lang="scss">
.n-drag-drop-uploader .q-uploader__dnd {
  height: 0px;
}
.n-drag-drop-uploader .q-uploader__list {
  min-height: 0px;
  padding: 0px;
}
.n-drag-drop-uploader .q-uploader {
  max-height: clamp(320px, 60vh, 700px);
  width: 100%;
  max-width: 800px;
}
.n-delete-file-icon {
  color: $grey-7;
}
.n-delete-file-icon:hover {
  color: $red-4;
}
</style>
