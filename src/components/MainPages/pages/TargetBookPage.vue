<template>
    <div class="mt-28 ">
        <Teleport to="title">ThermoBook | {{ targetBook[1].bookName }}</Teleport>
        <div v-if="targetBook">
            <div class="flex justify-between items-start px-28">
                <img :src="targetBook[1].bookImg" :alt=targetBook[1].bookName class="rounded-xl w-1/5">
                <DescriptionBook :book="targetBook"></DescriptionBook>
                <AddToBasket :book="targetBook"></AddToBasket>
            </div>
            <div class="mt-10 px-10">
                <BookPars>
                    <template #introductionBook>
                        <h2 class="text-3xl text-gray-500">معرفی کتاب {{ targetBook[1].bookName }}</h2>
                        <p class="text-lg mt-1">{{ targetBook[1].introductionBook }}</p>
                    </template>
                </BookPars>
                <BookPars class="my-10">
                    <template #introductionBook>
                        <h2 class="text-3xl text-gray-500">درباره کتاب {{ targetBook[1].bookName }}</h2>
                        <p class="text-lg mt-1 leading-8">{{ targetBook[1].aboutBook }}</p>
                    </template>
                </BookPars>
                <h2 class="text-3xl text-gray-500">کتاب های مشابه</h2>
                <BooksContainer :books="filterBooks"></BooksContainer>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, inject } from 'vue';
import { useRoute } from 'vue-router';
import DescriptionBook from '../DescriptionBook.vue';
import AddToBasket from '../AddToBasket.vue';
import BookPars from '../BookPars.vue';
import BooksContainer from '../BooksContainer.vue';
export default {
    components: {
        DescriptionBook,
        AddToBasket,
        BookPars,
        BooksContainer
    },
    setup() {
        const route = useRoute();
        const datas = inject('allDatas');

        const targetBook = computed(() => {
            if (!datas.value) {
                return null
            } else {
                return datas.value.find(data => data[1].bookName === route.params.book);
            }
        });

        const filterBooks = computed(() => {
            return datas.value.filter(data => {
                const type = data[1].selectGenre == targetBook.value[1].selectGenre;
                const id = data[0] !== targetBook.value[0];
                return type && id;
            });
        });
        return {
            targetBook,
            filterBooks
        };
    }
}
</script>
