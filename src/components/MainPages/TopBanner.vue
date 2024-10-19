<template>
    <div class="bg-blue-100 flex justify-center items-center pl-20 pt-5">
        <img src="https://taaghche.com/images/firstpagebanner/Taaghche_Banner.webp" class="" alt="">
        <div class="text-center relative right-20">
            <p class="text-6xl">لذت خواندن و شنیدن کتاب‌ها</p>
            <p class="my-5 text-2xl">خرید نسخه‌ی قانونی بیش از ۱۳۵,۰۰۰ کتاب صوتی و الکترونیکی</p>
            <router-link :to="`/AllBooks/${'all'}`"
                class="bg-blue-300 py-2 px-7 border-2 border-blue-300 rounded-full mt-5 transition duration-200 hover:bg-blue-100">خرید
                کتاب</router-link>
        </div>
    </div>
</template>
