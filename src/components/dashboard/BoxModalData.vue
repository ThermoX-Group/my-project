<template>
    <div class="fixed top-0 right-0 w-full h-full z-20" @keyup.enter="updateDatas()">
        <div class="blur fixed top-0 right-0 h-full w-full z-0" @click="$emit('openCloseModalBox')"></div>
        <div class="bg-blue-100 absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 py-3 px-5 rounded-xl w-1/2">
            <div class="flex justify-between items-center mb-2">
                <i class="fa-solid fa-x cursor-pointer" @click="$emit('openCloseModalBox')"></i>
                <h2>ویرایش کردن مشخصات</h2>
            </div>
            <div class="grid grid-cols-2 gap-x-5">
                <div>
                    <label>نام کتاب:</label>
                    <input type="text" placeholder="نام کتاب..." class="w-full rounded-full my-3 px-3 py-2 outline-none"
                        v-model="bookName">
                </div>
                <div>
                    <label>قیمت کتاب:</label>
                    <input type="number" placeholder="قیمت کتاب..."
                        class="w-full rounded-full my-3 px-3 py-2 outline-none" v-model="bookPrice">
                </div>
                <div>
                    <label>تصویر کتاب:</label>
                    <input type="text" placeholder="تصویر کتاب..."
                        class="w-full rounded-full my-3 px-3 py-2 outline-none" v-model="bookImg">
                </div>
                <div>
                    <label>ژانر کتاب:</label>
                    <select v-model="selectGenre" class="w-full px-3 py-2 rounded-full outline-none my-3">
                        <option :value="item" v-for="(item, index) in genres" :key="index">{{ item }}</option>
                    </select>
                </div>
                <div>
                    <label>نویسنده کتاب:</label>
                    <input type="text" placeholder="نویسنده کتاب..."
                        class="w-full rounded-full my-3 px-3 py-2 outline-none" v-model="bookWriter">
                </div>
                <div>
                    <label>مترجم کتاب:</label>
                    <input type="text" placeholder="مترجم کتاب..."
                        class="w-full rounded-full my-3 px-3 py-2 outline-none" v-model="translator">
                </div>
                <div>
                    <label>ناشر کتاب:</label>
                    <input type="text" placeholder="ناشر کتاب..."
                        class="w-full rounded-full my-3 px-3 py-2 outline-none" v-model="publisher">
                </div>
                <div>
                    <label>امتیاز کتاب:</label>
                    <input type="number" placeholder="امتیاز کتاب..."
                        class="w-full rounded-full my-3 px-3 py-2 outline-none" v-model="bookRate">
                </div>
                <div>
                    <label>سال انتشار:</label>
                    <input type="number" placeholder="سال انتشار..."
                        class="w-full rounded-full my-3 px-3 py-2 outline-none" v-model="bookYear">
                </div>
                <div>
                    <label>تعداد صفحات:</label>
                    <input type="number" placeholder="تعداد صفحات..."
                        class="w-full rounded-full my-3 px-3 py-2 outline-none" v-model="bookPages">
                </div>
            </div>
            <div class="flex justify-between items-center gap-3">
                <button
                    class="bg-blue-300 border-2 border-blue-300 rounded-full w-1/3 py-2 transition hover:bg-blue-100 hover:border-blue-300"
                    @click="$emit('openModalDes')">ویرایش توضیحات</button>
                <button
                    class="bg-blue-300 w-2/3 px-3 py-2 rounded-full cursor-pointer border-2 border-blue-300 transition-all hover:bg-blue-100 hover:border-blue-300"
                    @click="updateDatas()">{{ btnText }}</button>
                <select v-model="bookType" class="h-full rounded-full p-2 outline-none cursor-pointer">
                    <option value="نوع کتاب را وارد کنید" disabled>نوع کتاب را وارد کنید</option>
                    <option value="صوتی">صوتی</option>
                    <option value="الکترونیکی">الکترونیکی</option>
                </select>
            </div>
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
        let genres = ref(['ژانر را انتخاب کنید', 'رمان', 'ترسناک', 'انگیزشی', 'روانشناسی', 'تاریخ', 'ادبیات', 'آموزشی'])
        let translator = ref(props.data[1].translator)
        let publisher = ref(props.data[1].publisher)
        let bookRate = ref(props.data[1].bookRate)
        let bookType = ref(props.data[1].bookType)
        let bookYear = ref(props.data[1].bookYear)
        let bookPages = ref(props.data[1].bookPages)

        let btnText = ref('بروزرسانی')
        function updateDatas() {
            if (!bookName.value || !bookPrice.value || !bookImg.value || !bookWriter.value || selectGenre.value == 'ژانر را انتخاب کنید' || !bookType.value || !selectGenre.value || !bookImg.value || !publisher.value || !bookYear.value || !bookPages.value) {
                btnText.value = 'اطلاعات را کامل و درست وارد کنید!'
            } else {
                btnText.value = "لطفا کمی صبر کنید..."
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
                    })
                })
                    .then(res => context.emit('closeModal'))
                    .catch(err => btnText.value = "ارتباط با سرور برقرا نشد!")
            }
        }
        return {
            bookName,
            bookPrice,
            bookImg,
            selectGenre,
            genres,
            bookWriter,
            bookRate,
            bookYear,
            bookPages,
            bookType,
            translator,
            publisher,
            updateDatas,
            btnText,
        }
    }
}
</script>

<style>
label {
    display: block;
}

.blur {
    background: rgba(0, 0, 0, 0.3);
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>