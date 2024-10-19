<template>
    <div
        class="flex flex-col justify-between fixed h-screen top-0 right-0 bg-blue-100 z-10 w-fit pr-5 text-center pt-5 float-right">
        <div>
            <router-link to="/" class="text-3xl mb-5 inline-block">ThermoBook</router-link>
            <ul class="w-full text-xl mb-3">
                <li class="">
                    <router-link to="/Dashboard/MainPage"
                        class="flex justify-center items-center gap-2 rounded-tr-full rounded-br-full p-3 transition duration-300 hover:bg-blue-50"><svg
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        صفحه ی اصلی</router-link>
                </li>
                <li class="my-5">
                    <router-link to="/Dashboard/AddProduct"
                        class="flex justify-center items-center gap-2 rounded-tr-full rounded-br-full p-3 transition duration-300 hover:bg-blue-50"><svg
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        افزودن محصول</router-link>
                </li>
                <li>
                    <router-link to="/Dashboard/ProductsDashboard"
                        class="flex justify-center items-center gap-2  rounded-tr-full rounded-br-full p-3 transition duration-300 hover:bg-blue-50"><svg
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                        </svg>
                        محصولات سایت</router-link>
                </li>
            </ul>
        </div>
        <div class="pl-5 pb-5">
            <div class="text-xl">
                <div>
                    <div class="avatar">
                        <div class="w-20 rounded-full">
                            <img
                                src="https://image.vip.de/23184942/t/nu/v2/w1440/r1.5/-/ana-de-armas-so-sehr-praegte-sie-ihre-kindheit-auf-kuba-jpg--article-image-62257036-.jpg" />
                        </div>
                    </div>
                    <h2>امیرمهدی برزگر</h2>
                    <p class="cursor-pointer">amirbrzgrwork@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>

<script>
import { useRoute } from 'vue-router';

export default {
    setup() {

    }
}
</script>

<style scoped>
.router-link-active {
    background: white;
    transition: all .3s;
}
</style>