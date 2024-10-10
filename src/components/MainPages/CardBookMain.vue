<template>
    <div class="border-2 border-gray-300 p-2 rounded-xl flex flex-col justify-between relative h-430">
        <div>
            <div class="relative">
                <router-link :to="`/TargetBookPage/${data[1].bookName}`">
                    <img :src=data[1].bookImg :alt=data[1].bookName class="rounded-lg w-full" id="image-book">
                    <span class="absolute top-1.5 left-1.5 bg-base-200 px-2 py-1 rounded-full opacity-0 transition"
                        id="type-book">{{ data[1].bookType }}</span>
                </router-link>
            </div>
            <h4 class="text-lg">{{ data[1].bookName }}</h4>
            <div class="flex justify-between items-center my-1 text-gray-500">
                <h5>{{ data[1].bookWriter }}</h5>
                <span><i class="fa-solid fa-star"></i> {{ data[1].bookRate }}</span>
            </div>
        </div>
        <div class="flex justify-between items-center">
            <p>{{ data[1].bookPrice.toLocaleString() }} تومان</p>
        </div>
    </div>
</template>

<script>

export default {
    props: ['data'],
    // setup(props) {}

}
</script>