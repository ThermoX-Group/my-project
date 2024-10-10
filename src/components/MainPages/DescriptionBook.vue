<template>
    <div>
        <h1 class="text-3xl mb-5">کتاب {{ book[1].bookName }}</h1>
        <div class="leading-8">
            <h4 class="text-gray-400">نویسنده: <router-link :to="`/AllBooks/${'bookWriter'}/${book[1].bookWriter}`"
                    class="text-gray-700 border-b border-black pb-0.5">{{
                        book[1].bookWriter }}</router-link></h4>
            <h4 class="text-gray-400" v-if="book[1].translator">مترجم: <span class="text-gray-700">{{ book[1].translator}}</span></h4>
            <h4 class="text-gray-400">انتشارات: <router-link :to="`/AllBooks/${'publisher'}/${book[1].publisher}`"
                    class="text-gray-700 border-b border-black pb-0.5">{{
                        book[1].publisher }}</router-link></h4>
            <h4 class="text-gray-400">دسته بندی: <router-link :to="`/AllBooks/${'selectGenre'}/${book[1].selectGenre}`"
                    class="text-gray-700 border-b border-black pb-0.5">{{
                        book[1].selectGenre }}</router-link></h4>
            <h4 class="text-gray-400 text">امتیاز: <span class="text-white bg-green-600 px-3 py-1 rounded-full">{{
                book[1].bookRate }}</span></h4>
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
export default {
    props: ['book'],
    setup() {
        // let route = useRoute()
    }
}
</script>