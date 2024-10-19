<template>
    <div class="border-2 border-gray-300 rounded-xl p-2 flex overflow-hidden flex-col justify-between relative">
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
                <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="size-6 inline-block">
                        <path fill-rule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                            clip-rule="evenodd" />
                    </svg>

                    {{ data[1].bookRate }}</span>
            </div>
        </div>
        <div class="flex justify-between items-center">
            <p>{{ data[1].bookPrice.toLocaleString() }} تومان</p>
            <div>
                <svg @click="openDeleteMenu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    class="size-6 text-red-500 ml-1 cursor-pointer inline-block">
                    <path fill-rule="evenodd"
                        d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                        clip-rule="evenodd" />
                </svg>
                <svg @click="openCloseFunc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 inline-block cursor-pointer">
                    <path
                        d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
                </svg>

            </div>
        </div>
        <div class="absolute right-2 bg-gray-700 rounded-lg opacity-90 px-2 transition-all duration-500 py-1 text-white"
            :class="{ 'bottom-2': deleteMenu, '-bottom-16': !deleteMenu }">
            <button class="block" @click="deleteBook()">{{ deleteText }}</button>
            <button @click="deleteMenu = false" class="w-full text-right mt-1">لغو</button>
        </div>
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
        let deleteText = ref("حذف کردن کتاب")

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
            deleteBook,
            deleteText
        };
    }
}
</script>
<style>
#image-book:hover+#type-book {
    opacity: 1;
}
</style>