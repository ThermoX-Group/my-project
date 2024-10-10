<template>
    <div class="relative">
      <div class="rounded-2xl fex">
        <SideBarDashboard></SideBarDashboard>
        <router-view class="w-4/5 absolute left-0 h-screen overflow-auto" v-slot="{ Component }">
          <Transition name="fade-scale">
            <component :is="Component"></component>
          </Transition>
        </router-view>
      </div>
    </div>
  </template>
  
  <script>
  import SideBarDashboard from '../SideBarDashboard.vue';
  import { useRoute } from 'vue-router';
  import { useRouter } from 'vue-router';
  export default {
    components: {
      SideBarDashboard,
    },
    setup() {
      let route = useRoute();
      let router=useRouter()
    },
  };
  </script>
  
  <style scoped>
.fade-scale-enter-from {
  transform: scale(0.8);
  opacity: 0;
}
.fade-scale-leave-to {
  transform: scale(0.8);
  opacity: 0;
}
.fade-scale-enter-active, .fade-scale-leave-active {
  transition: all 0.5s ease;
}
  </style>
  