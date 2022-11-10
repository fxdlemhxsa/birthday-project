<template>
  <div v-if="!SHOW" class="flex flex-col">
    <div>
      <img class="w-[30rem] h-auto" :src="Pii" alt="">
    </div>
    <div class="flex justify-center relative transition-all duration-500" :class="SHOWBTN ? 'opacity-1': 'opacity-0'">
      <button @click="() => SHOW = true" class="btn absolute top-[-3rem] shadow">Liat kartu ucapan dari husbu? cek di mari</button>
    </div>
  </div>
  <Confetti v-if="!SHOW"/>
  <Transition name="fade" mode="out-in">
    <div v-if="SHOW" class="relative inline-block h-64 w-full">
        <Transition name="slide-up">
            <TweetCard :tweet="TWEET[0]" class="absolute top-1/5 left-[23%]" v-if="TWEETSTATE == 1"/>
            <TweetCard :tweet="TWEET[1]" class="absolute top-1/5 left-[23%]" v-else-if="TWEETSTATE == 2"/>
            <TweetCard :tweet="TWEET[2]" class="absolute top-1/5 left-[23%]" v-else-if="TWEETSTATE == 3"/>
            <TweetCard :tweet="TWEET[3]" class="absolute top-1/5 left-[23%]" v-else-if="TWEETSTATE == 4"/>
        </Transition>
    </div>
  </Transition>
  <Transition name="fade" mode="out-in">
    <div v-if="SHOW" class="flex flex-row gap-5">
        <button @click="min()" class="btn">PREV</button>
        <button @click="plus()" class="btn">NEXT</button>
        <router-link :to="{name: 'present'}">
            <button v-show="TWEETSTATE == 4" class="btn">FINALLLLY</button>
        </router-link>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from '@vue/reactivity'
import Pii from '../assets/pii.gif'
//@ts-ignore
import Confetti from './Confetti.vue'
//@ts-ignore
import TweetCard from './TweetCard.vue'

const SHOWBTN = ref(false)
const SHOW = ref(false)

setTimeout(() => {
    SHOWBTN.value = true
}, 5000)


  const TWEETSTATE = ref(1)
  const TWEET = [{
    icon: 'Levi',
    name: 'Levi Arckeman',
    at: '@capt_levisabubuknyah',
    caption: 'Oii Bocil!! HDB LU.'
  },{
    icon: 'Killua',
    name: 'Killua Zoldyck',
    at: '@killxx_zolozol',
    caption: 'gua killua. HBD ya buat lu! GAUSAH KE PEDEAN LU ini bukan gara gara suka lo balik, lo duluan kan yang suka sama gue. wlee!'
  },{
    icon: 'Toge',
    name: 'Toge Inumaki',
    at: '@togehelpokoknyamah',
    caption: 'Okaka, Tuna Mayo.'
  },{
    icon: 'Ale',
    name: 'Fadlee Mahesa',
    at: '@fxdle_mhxsa',
    caption: 'Haduuu itu yang masih 2D bacot amat dah. anyway, Happy Birthday my bae, semoga segala yang terbaik buat kamu, semangat kuliahnya, jadi lebih baik dari hari ke hari ya! LOVE YOU~'
  }
]

  const plus = () => {
    if(TWEETSTATE.value == 4){
        return
    }
    TWEETSTATE.value = TWEETSTATE.value + 1
  }

  const min = () => {
    if(TWEETSTATE.value == 1){
        return
    }
    TWEETSTATE.value = TWEETSTATE.value - 1
  }
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(300px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-300px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>