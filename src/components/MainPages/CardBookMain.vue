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
        </div>
    </div>
</template>

<script>

export default {
    props: ['data'],
    // setup(props) {}

}
</script>