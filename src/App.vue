<template>
  <main-header class="z-20" v-if="!hideHeader"></main-header>
  <router-view v-slot="{ Component }">
    <Transition name="fade">
      <component :is="Component"></component>
    </Transition>
  </router-view>
  <MainFooter v-if="!hideHeader"></MainFooter>
</template>
<script>
import { useRoute } from 'vue-router';
import MainHeader from './components/layout/MainHeader.vue';
import MainFooter from './components/layout/MainFooter.vue';
import { computed, provide, ref, watch } from 'vue';
export default {
  components: {
    MainHeader,
    MainFooter
  },
  setup() {
    const route = useRoute();
    const hideHeader = computed(() => route.meta.hideHeader);
    let datas = ref('')
    fetch('https://thermobooks-b8765-default-rtdb.firebaseio.com/products.json')
      .then(res => res.json())
      .then(data => {
        if (data) {
          datas.value = Object.entries(data);
        }
      })
      .catch(err => {
      })
    provide('allDatas', datas)

    watch(route,()=>{
      window.scroll({top:0,behavior:'smooth'})
    })
    return {
      hideHeader,
    };
  }
}
</script>

<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
</style>