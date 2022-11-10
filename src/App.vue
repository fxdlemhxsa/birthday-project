<script setup lang="ts">

</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <suspense timeout="0">
        <template #default>
            <component :is="Component" :key="$route.path"></component>
        </template>
        <template #fallback>
            <div class="flex justify-center items-center content-center w-full h-full">
                <div class="self-center font-semibold">SABAR ...</div>
            </div>
        </template>
      </suspense>
    </transition>
  </router-view>
</template>

<style scoped>

</style>
