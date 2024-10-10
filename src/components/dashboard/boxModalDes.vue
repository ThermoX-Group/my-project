<template>
    <div class="fixed top-0 right-0 w-full h-full z-20">
        <div class="blur fixed top-0 right-0 h-full w-full z-5" @click="$emit('openCloseModalDes')"></div>
        <div class="bg-blue-100 absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 py-3 px-5 rounded-xl w-2/3">
            <div class="flex justify-between items-center mb-2">
                <i class="fa-solid fa-x cursor-pointer" @click="$emit('openCloseModalDes')"></i>
                <h2>ویرایش کردن توضیحات</h2>
            </div>
            <div>
                <label>معرفی کتاب</label>
                <textarea class="w-full rounded-xl resize-none mt-3 p-2 outline-none" placeholder="معرفی کتاب..."
                    rows="3" v-model="introductionBook"></textarea>
            </div>
            <div class="mt-2">
                <label>درباره کتاب</label>
                <textarea class="w-full rounded-xl resize-none mt-3 p-2 outline-none" placeholder="درباره کتاب..."
                    rows="6" v-model="aboutBook"></textarea>
            </div>
            <button @click="sendDesDatas()"
                class="bg-blue-300 w-full mt-1 px-3 py-2 rounded-full outline-none cursor-pointer border-2 border-blue-100 transition-all hover:bg-blue-100 hover:border-blue-300">{{
                    btnText }}</button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
export default {
    props: ['data'],
    setup(props, context) {
        let bookName = ref(props.data[1].bookName)
        let bookPrice = ref(props.data[1].bookPrice)
        let bookImg = ref(props.data[1].bookImg)
        let bookWriter = ref(props.data[1].bookWriter)
        let selectGenre = ref(props.data[1].selectGenre)
        let translator = ref(props.data[1].translator)
        let publisher = ref(props.data[1].publisher)
        let bookRate = ref(props.data[1].bookRate)
        let bookType = ref(props.data[1].bookType)
        let bookYear = ref(props.data[1].bookYear)
        let bookPages = ref(props.data[1].bookPages)

        let btnText = ref('بروزرسانی')
        let introductionBook = ref(props.data[1].introductionBook)
        let aboutBook = ref(props.data[1].aboutBook)

        function sendDesDatas() {
            if (!introductionBook.value || !aboutBook.value) {
                btnText.value = 'اطلاعات را کامل و درست وارد کنید!'
            } else {
                btnText.value = 'درحال بروزرسانی...'
                fetch(`https://thermobooks-b8765-default-rtdb.firebaseio.com/products/${props.data[0]}.json`, {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        bookName: bookName.value,
                        bookPrice: bookPrice.value,
                        bookImg: bookImg.value,
                        bookWriter: bookWriter.value,
                        selectGenre: selectGenre.value,
                        translator: translator.value,
                        publisher: publisher.value,
                        bookRate: bookRate.value,
                        bookType: bookType.value,
                        bookYear: bookYear.value,
                        bookPages: bookPages.value,
                        introductionBook: introductionBook.value,
                        aboutBook: aboutBook.value,
                    })

                })
                    .then(res => context.emit('updatedDes',))


            }
        }
        return {
            aboutBook,
            introductionBook,
            btnText,
            sendDesDatas
        }
    }
}
</script>