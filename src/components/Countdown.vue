<template>
  <div class="flex flex-col gap-3 mx-auto text-white text-center">
    <div class="text-center font-light text-xl tracking-widest">
       {{`- going to birthday my bae `+'<'+`3 -`}}
    </div>
    <hr/>
    <div class="flex text-6xl justify-center content-center">
        <div class="mr-4 time">
            {{COUNTDOWN.DISPLAY.days}}
            <div class="labelCount">DAYS</div>
        </div>
        <span class="leading-snug">:</span>
        <div class="mx-4 time">
            {{COUNTDOWN.DISPLAY.hours}}
            <div class="labelCount">HOURS</div>
        </div>
        <span class="leading-snug">:</span>
        <div class="mx-4 time">
            {{COUNTDOWN.DISPLAY.minutes}}
            <div class="labelCount">MINUTES</div>
        </div>
        <span class="leading-snug">:</span>
        <div class="ml-4 time seconds">
            {{COUNTDOWN.DISPLAY.seconds}}
            <div class="labelCount">SECONDS</div>
        </div>
    </div>
    <hr/>
  </div>
</template>

<script setup lang="ts">
import {useCountdownStore} from '../stores/countdown'
const COUNTDOWN = useCountdownStore()
COUNTDOWN.showRemaining()
</script>

<style>

</style>