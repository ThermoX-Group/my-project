<template>
    <div class="flex flex-col justify-between border-gray-300 fixed h-screen top-0 right-0 bg-blue-100 z-10 w-fit pr-5 text-center pt-5 float-right">
        <div>
            <router-link to="/" class="text-3xl mb-5 inline-block">ThermoBook</router-link>
            <ul class="w-full text-xl mb-3">
                <li class="">
                    <router-link to="/Dashboard/MainPage" class="block rounded-tr-full rounded-br-full p-3 transition duration-300 hover:bg-blue-50"><i class="fa-solid fa-chart-simple ml-2"></i>صفحه ی اصلی</router-link>
                </li>
                <li class="my-5">
                    <router-link to="/Dashboard/AddProduct" class="block rounded-tr-full rounded-br-full p-3 transition duration-300 hover:bg-blue-50"><i class="fa-solid fa-plus ml-2"></i>افزودن محصول</router-link>
                </li>
                <li>
                    <router-link to="/Dashboard/ProductsDashboard" class="block rounded-tr-full rounded-br-full p-3 transition duration-300 hover:bg-blue-50"><i class="fa-solid fa-book ml-2"></i>محصولات سایت</router-link>
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

<style scoped>
</style>

<script>
import { useRoute } from 'vue-router';

export default{
    setup(){
        // const router=useRoute()
        // const url=router.fullPath

        // return{
        //     url
        // }
    }
}
</script>

<style scoped>
.router-link-active {
    background: white;
    transition: all .3s;
}
</style>