<template>
    <div class="border-2 border-gray-300 rounded-xl p-2 flex flex-col justify-between relative">
        <div>
            <div class="relative">
                <router-link :to="`/TargetBookPage/${data[1].bookName}`">
                    <img :src="data[1].bookImg" class="rounded-lg w-full" id="image-book" :alt="data[1].bookName">
                    <span class="absolute top-1.5 left-1.5 bg-base-200 px-2 py-1 rounded-full opacity-0 transition"
                        id="type-book">{{ data[1].bookType }}</span>
                </router-link>
            </div>
            <h4 class="text-lg">{{ data[1].bookName }}</h4>
            <div class="flex justify-between items-center my-1 text-gray-500">
                <h5 class="">{{ data[1].bookWriter }}</h5>
                <span><i class="fa-solid fa-star"></i> {{ data[1].bookRate }}</span>
            </div>
        </div>
        <div class="flex justify-between items-center">
            <p>{{ data[1].bookPrice.toLocaleString() }} تومان</p>
            <div>
                <i class="fa-solid fa-trash ml-2 cursor-pointer text-red-500" @click="openDeleteMenu()"></i>
                <i class="fa-solid fa-pen cursor-pointer" @click="openCloseFunc()"></i>
            </div>
        </div>
        <Transition>
            <div class="absolute right-2 bottom-2 bg-gray-700 rounded-lg opacity-90 px-2 py-1 text-white" v-if="deleteMenu">
                <button class="block" @click="deleteBook()">حذف کردن کتاب</button>
                <button @click="deleteMenu=false" class="w-full text-right">لغو</button>
            </div>
        </Transition>
    </div>
</template>

<script>
import { inject, ref } from 'vue';

export default {
    props: ['data', 'alldata'],
    setup(props, context) {
        const getIdFromCards = inject('getIdFromCards');

        let deleteMenu = ref(false)
        let filteredData = ref(null);

        function openCloseFunc() {
            context.emit('openCloseModalBox');

            filteredData.value = props.alldata.find(dataBook => dataBook[0] == props.data[0]);

            getIdFromCards(filteredData.value);
        }
        function openDeleteMenu() {
            deleteMenu.value = true
        }

        function deleteBook() {
            context.emit('deleteBookFromDB')
        }
        return {
            deleteMenu,
            openCloseFunc,
            filteredData,
            deleteMenu,
            openDeleteMenu,
            deleteBook
        };
    }
}
</script>
<style>
#image-book:hover+#type-book {
    opacity: 1;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>