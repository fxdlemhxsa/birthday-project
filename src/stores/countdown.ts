import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useCountdownStore = defineStore('countdown', () => {
  
  const DISPLAY = reactive({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false,
    view: 'birthday'
  })

  //Fot Calculate Time
  const SECONDSFORMAT = 1000
  const MINUTESFORMAT = SECONDSFORMAT * 60
  const HOURSFORMAT = MINUTESFORMAT * 60
  const DAYSFRORMAT = HOURSFORMAT * 24

  const formatNum = (number: Number) : String | Number => {
    return number < 10 ? '0' + number : number
  }

  const showRemaining = () => {
    const timer = setInterval(() => {
      const NOW = new Date()
      const END = new Date(2022, 10, 11)
      const DISTANCE = END.getTime() - NOW.getTime()

      if(DISTANCE < 0){
        clearInterval(timer)
        DISPLAY.expired = true
        return
      }

      const DAYS = Math.floor((DISTANCE / DAYSFRORMAT))
      const HOURS = Math.floor((DISTANCE % DAYSFRORMAT) / HOURSFORMAT)
      const MINUTES = Math.floor((DISTANCE % HOURSFORMAT) / MINUTESFORMAT)
      const SECONDS = Math.floor((DISTANCE % MINUTESFORMAT) / SECONDSFORMAT)

      //@ts-ignore
      DISPLAY.days = formatNum(DAYS)
      //@ts-ignore
      DISPLAY.hours = formatNum(HOURS)
      //@ts-ignore
      DISPLAY.minutes = formatNum(MINUTES)
      //@ts-ignore
      DISPLAY.seconds = formatNum(SECONDS)

    }, 1000)
  }

  return { DISPLAY, showRemaining }
})
