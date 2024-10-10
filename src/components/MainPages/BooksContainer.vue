<template>
    <div>
        <div class="flex justify-between items-center text-2xl">
            <slot name="title"></slot>
        </div>
        <swiper :slidesPerView="6" :spaceBetween="30" :freeMode="true" :modules="modules" class="mySwiper mt-2">
            <swiper-slide v-for="(item, index) in books" :key="index" class="h-380">
                <CardBookMain :data="item"></CardBookMain>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import CardBookMain from './CardBookMain.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import "../../style.css"
import { FreeMode, Pagination } from 'swiper/modules';
export default {
    components: {
        CardBookMain,
        Swiper,
        SwiperSlide,
    },
    props: ["books"],
    setup() {

        return {
            modules: [FreeMode, Pagination],
        }
    }
}
</script>





<!-- <swiper :slidesPerView="6" :spaceBetween="25" :freeMode="true" :modules="modules" class="mySwiper mt-2">
    <swiper-slide v-for="item in electroinicBooks" :key="item[0]" class="h-380">
      <CardBookMain :data="item"></CardBookMain>
    </swiper-slide>
  </swiper> -->