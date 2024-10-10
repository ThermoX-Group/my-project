<template>
    <nav class="fixed top-0 w-full border-b border-black pr-2">
        <div class="navbar bg-base-100">
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
                                        چاپی</router-link></li>
                                <li><router-link :to="`/dashboard`">کتاب های الکترونیکی</router-link></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>درباره ما</a></li>
                </ul>
            </div>
            <div class="navbar-end">
                <input type="search" class="border-2 w-1/2 rounded-full h-14 ml-3 p-3 outline-none"
                    placeholder="جست و جو در سایت">
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
export default {

}
</script>

<style scoped>
.router-link-active {
    background: #93C5FD;
    transition: all .3s;
}
</style>