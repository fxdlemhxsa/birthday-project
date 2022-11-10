<template>
  <div class="h-screen flex flex-col justify-center items-center content-center">
    <Transition name="fade" mode="out-in">
      <component :is="COMP"></component>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/runtime-core'

//@ts-ignore
import Countdown from '../components/Countdown.vue'
//@ts-ignore
import BirthdayCard from '../components/BirthdayCard.vue'

import {useCountdownStore} from '../stores/countdown'

const COUNT = useCountdownStore()

const COMP = computed(() => {
  return COUNT.DISPLAY.expired ? BirthdayCard : Countdown;
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>