<template>
    <nav class="fixed top-0 right-0 w-full  pr-2">
        <div class="navbar bg-base-100 w-full fixed right-0 border-b border-black">
            <div class="navbar-start text-2xl">ThermoBook</div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal px-1 text-xl">
                    <li><router-link to="/">صفحه اصلی</router-link></li>
                    <li class="mx-1">
                        <details>
                            <summary>محصولات</summary>
                            <ul class="p-2 w-52 text-lg">
                                <li><router-link :to="`/Allbooks/${'bookType'}/${'صوتی'}`">کتاب های صوتی</router-link>
                                </li>
                                <li><router-link class="my-1" :to="`/Allbooks/${'bookType'}/${'الکترونیکی'}`">کتاب های
                                        الکترونیکی</router-link></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>درباره ما</a></li>
                </ul>
            </div>
            <div class="navbar-end">
                <div class="relative ml-5">
                    <input type="search" class="border-2 w-72 rounded-full h-14 ml-3 p-3 outline-none"
                        v-model="searchValue" @keyup.{keyAlias}.enter="goPageBooks" placeholder="جست و جو در سایت">
                        <i class="fa-solid fa-search absolute left-6 top-1/2 -translate-y-1/2 cursor-pointer" @click="goPageBooks"></i>
                </div>
                <div class="dropdown dropdown-end">
                    <div tabindex="0" role="button" class="m-1">
                        <div class="avatar">
                            <div class="w-14 rounded-full">
                                <img
                                    src="https://image.vip.de/23184942/t/nu/v2/w1440/r1.5/-/ana-de-armas-so-sehr-praegte-sie-ihre-kindheit-auf-kuba-jpg--article-image-62257036-.jpg" />
                            </div>
                        </div>
                    </div>
                    <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-60 p-2 shadow-xl">
                        <li>
                            <router-link to="/Dashboard/MainPage" class="text-xl flex justify-between items-end">داشبورد
                                ادمین</router-link>
                        </li>
                        <li>
                            <a
                                class="text-xl bg-red-400 text-red-800 hover:bg-red-500 mt-1 flex justify-between items-end">خروج
                                از حساب<i class="fa-solid fa-arrow-right-from-bracket"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </nav>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
    setup() {
        let searchValue = ref("")
        let router = useRouter()
        function goPageBooks() {
            // searchValue.value.trim()
            console.log(searchValue.value.trim());

            router.push(`/AllBooks/${'bookName'}/${searchValue.value.trim()}`)
        }
        return {
            searchValue,
            goPageBooks
        }
    }
}
</script>

<style scoped>
.router-link-active {
    background: #93C5FD;
    transition: all .3s;
}
</style>