<template>
    <div class="mt-24 px-10">
        <h1 class="text-3xl" v-if="route.params.data=='all'">تمامی کتاب ها</h1>
        <h1 class="text-3xl" v-else>فیلتر : کتاب های {{ route.params.value }}</h1>
        <div class="grid grid-cols-6 gap-5 mt-5">
            <CardBookMain v-for="item in filterBooks" :key="item[0]" :data="item"></CardBookMain>
        </div>
    </div>
</template>

<script>
import { computed, inject } from 'vue';
import CardBookMain from '../CardBookMain.vue';
import { useRoute } from 'vue-router';

export default {
    components: {
        CardBookMain
    },
    setup() {
        let route = useRoute();
        let allDatas = inject('allDatas');

        let filterBooks = computed(() => {
            if (route.params.data == 'all') {
                return allDatas.value
            } else {
                if (route.params.data && route.params.value) {
                    return allDatas.value.filter(data => data[1][route.params.data] == route.params.value)
                }
            }
        });

        return {
            filterBooks,
            route
        };
    }
}
</script>
