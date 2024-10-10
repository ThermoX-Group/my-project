<template>
    <div class="bg-blue-300 text-blue-950 pt-5">
        <h2 class="text-center text-3xl">کتاب های موجود</h2>
        <div class="flex justify-evenly items-center p-10 text-3xl">
            <router-link :to="`/AllBooks/${'selectGenre'}/${'تاریخ'}`" class="transition duration-200 hover:-translate-y-2">تاریخ</router-link>
            <router-link :to="`/AllBooks/${'selectGenre'}/${'رمان'}`"  class="transition duration-200 hover:-translate-y-2">رمان</router-link>
            <router-link :to="`/AllBooks/${'selectGenre'}/${'انگیزشی'}`"  class="transition duration-200 hover:-translate-y-2">انگیزشی</router-link>
            <router-link :to="`/AllBooks/${'selectGenre'}/${'روانشناسی'}`"  class="transition duration-200 hover:-translate-y-2">روانشناسی</router-link>
            <router-link :to="`/AllBooks/${'selectGenre'}/${'ادبیات'}`"  class="transition duration-200 hover:-translate-y-2">ادبیات</router-link>
            <router-link :to="`/AllBooks/${'selectGenre'}/${'ترسناک'}`"  class="transition duration-200 hover:-translate-y-2">ترسناک</router-link>
            <router-link :to="`/AllBooks/${'selectGenre'}/${'آموزشی'}`"  class="transition duration-200 hover:-translate-y-2">آموزشی</router-link>
        </div>
    </div>
</template>

<script>
let kir='salam'
</script>