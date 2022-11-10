<template>
  <div class="h-screen flex flex-col justify-center items-center content-center">
    <YouTube 
        src="https://youtube.com/shorts/AVeug-Qb0Fk" 
        @ready="onReady"
        :width="360"
        :height="640"
        ref="youtube" />
  </div>
</template>

<script setup lang="ts">
import { ref } from '@vue/reactivity'
import YouTube from 'vue3-youtube'

const youtube = ref(null)

const onReady = () => {
  //@ts-ignore
  youtube.value.playVideo()
}
</script>

<style scoped>

</style>