<template>
<div>
  <div class="bg-slate-100 sm:w-[765px] w-64 h-60 border border-slate-400 shadow-lg rounded p-5 flex flex-col gap-5">
    <div id="head" class="flex flex-row gap-5">
      <span id="avatar">
        <img class="sm:h-16 h-12 rounded-full w-auto" :src="sources" alt="">
      </span>
      <span class="self-center" id="acc">
        <p class="font-semibold text-[18px] text-slate-800">{{PROPS.tweet.name}}</p>
        <p class="font-medium text-slate-500 text-[14px]">{{PROPS.tweet.at}}</p>
      </span>
    </div>
    <div id="tweet" class="flex flex-col gap-5">
      <span id="thread">
        <p class="font-medium text-slate-800 text-justify">{{PROPS.tweet.caption}}</p>
      </span>
      <span id="info">
        <p class="font-medium text-slate-500">0:00 AM - Nov 11, 2022</p>
      </span>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import {computed, defineProps} from 'vue'
import Levi from '../assets/levi.jpg'
import Killua from '../assets/killua.jpg'
import Toge from '../assets/toge.jpg'
import Ale from '../assets/ale.jpg'

const sources = computed(() => {
    return PROPS.tweet.icon === 'Levi' ? Levi : PROPS.tweet.icon === 'Killua' ? Killua : PROPS.tweet.icon === 'Toge' ? Toge : Ale;
})

const PROPS = defineProps({
    tweet: {
      type: Object,
      required: true
    }
})
</script>

<style>

</style>