<template>
    <div class="shadow-lg rounded-xl p-5 w-1/4 mt-5">
        <h4 class="border-b-2 border-blue-300 pb-2 text-3xl text-blue-500 text-center mb-1.5">{{ book[1].bookType }}
        </h4>
        <div class="text-center flex justify-between">
            <div>
                <h4>سال انتشار:</h4>
                <span> {{ book[1].bookYear }}</span>
            </div>
            <div>
                <h4>تعداد صفحات:</h4>
                <span> {{ book[1].bookPages }}</span>
            </div>
        </div>
        <div class="text-2xl flex justify-between my-7">
            <h4>قیمت:</h4>
            <span>{{ book[1].bookPrice.toLocaleString() }}</span>
        </div>
        <div class="flex justify-between">
            <button class="bg-base-300 rounded-full px-3 py-1 text-md">هدیه به دیگری</button>
            <button class="bg-blue-500 text-white rounded-full px-3 py-1 text-md">خرید و مطالعه کردن</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['book'],
    setup(props) {
    }
}
</script>