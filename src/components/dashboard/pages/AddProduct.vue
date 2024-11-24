<template>
    <div class="p-5 flex flex-col">
        <Teleport to="title">ThermoBookDash | اضافه کردن کتاب </Teleport>
        <div class="flex justify-between text-2xl font-bold">
            <p>کتاب جدید را وارد کنید</p>
            <h1>افزودن کتاب</h1>
        </div>
        <div class="grid grid-cols-2 gap-5 mt-5">
            <div>
                <h3>نام کتاب :</h3>
                <input type="text" class="border-2 border-gray-400 outline-none rounded-full mt-3 w-full p-2"
                    placeholder="نام کتاب..." v-model="bookName">
            </div>
            <div>
                <h3>قیمت کتاب(بر حسب تومان) :</h3>
                <input type="number" class="border-2 border-gray-400 outline-none rounded-full mt-3 w-full p-2"
                    placeholder="قیمت کتاب..." v-model="bookPrice">
            </div>
            <div>
                <h3>تصویر کتاب :</h3>
                <input type="text" class="border-2 border-gray-400 outline-none rounded-full mt-3 w-full p-2"
                    placeholder="تصویر کتاب..." v-model="bookImg">
            </div>
            <div>
                <h3>ژانر کتاب :</h3>
                <select
                    class="border-2 border-gray-400 bg-white mt-3 rounded-full p-2 w-full outline-none cursor-pointer"
                    v-model="selectGenre">
                    <option v-for="(item, index) in genres" :key="index" :value="item">{{ item }}</option>
                </select>
            </div>
            <div>
                <h3>نویسنده کتاب :</h3>
                <input type="text" class="border-2 border-gray-400 outline-none rounded-full mt-3 w-full p-2"
                    placeholder="نویسنده کتاب..." v-model="bookWriter">
            </div>
            <div>
                <h3>مترجم کتاب :</h3>
                <input type="text" max="5" class="border-2 border-gray-400 outline-none rounded-full mt-3 w-full p-2"
                    placeholder="مترجم کتاب..." v-model="translator">
            </div>
            <div>
                <h3>ناشر کتاب :</h3>
                <input type="text" max="5" class="border-2 border-gray-400 outline-none rounded-full mt-3 w-full p-2"
                    placeholder="ناشر کتاب..." v-model="publisher">
            </div>
            <div>
                <h3>امتیاز کتاب :</h3>
                <input type="number" max="5" class="border-2 border-gray-400 outline-none rounded-full mt-3 w-full p-2"
                    placeholder="امتیاز کتاب..." v-model="bookRate">
            </div>
            <div>
                <h3>سال انتشار :</h3>
                <input type="number" max="5" class="border-2 border-gray-400 outline-none rounded-full mt-3 w-full p-2"
                    placeholder="سال انتشار..." v-model="bookYear">
            </div>
            <div>
                <h3>تعداد صفحات :</h3>
                <input type="number" max="5" class="border-2 border-gray-400 outline-none rounded-full mt-3 w-full p-2"
                    placeholder="تعداد صفحات..." v-model="bookPages">
            </div>
        </div>
        <div class="mt-5">
            <h4>معرفی کتاب:</h4>
            <textarea class="border-2 border-gray-400 outline-none rounded-xl w-full mt-3 p-2 resize-none" rows="3"
                placeholder="معرفی کتاب..." v-model="introductionBook"></textarea>
        </div>
        <div class="mt-5">
            <h4>درباره ی کتاب:</h4>
            <textarea class="border-2 border-gray-400 outline-none rounded-xl w-full mt-3 p-2 resize-none" rows="6"
                placeholder="درباره ی کتاب..." v-model="aboutBook"></textarea>
        </div>
        <div class="flex justify-between items-end mt-3 gap-5">
            <button
                class="bg-blue-400 mt-3 rounded-full cursor-pointer text-white w-full h-full transition hover:bg-blue-500"
                @click="addBook()">{{ btnText }}</button>
            <select v-model="bookType" class="rounded-full border-2 bg-white border-gray-400 h-full p-2 cursor-pointer">
                <option value="نوع کتاب را وارد کنید" disabled>نوع کتاب را وارد کنید</option>
                <option value="صوتی">صوتی</option>
                <option value="الکترونیکی">الکترونیکی</option>
            </select>
        </div>
        <Transition enter-active-class="animate__animated animate__zoomInDown"
            leave-active-class="animate__animated animate__zoomOutUp">
            <TheAlert v-if="showAlert" :class="bgAlert">
                <template #text>
                    <p v-text="textAlert"></p>
                </template>
            </TheAlert>
        </Transition>
    </div>
</template>

<script>
import { ref, watch } from 'vue';
import TheAlert from '../../MainPages/TheAlert.vue';
export default {
    components: {
        TheAlert
    },
    setup() {
        let bookName = ref('')
        let bookPrice = ref('')
        let bookImg = ref('')
        let bookWriter = ref('')
        let selectGenre = ref('ژانر را انتخاب کنید')
        let genres = ref(['ژانر را انتخاب کنید', 'رمان', 'ترسناک', 'انگیزشی', 'روانشناسی', 'تاریخ', 'ادبیات', 'آموزشی'])
        let bookRate = ref('')
        let translator = ref('')
        let publisher = ref('')
        let bookType = ref("نوع کتاب را وارد کنید")
        let bookYear = ref('')
        let bookPages = ref('')
        let aboutBook = ref('')
        let introductionBook = ref('')

        let showAlert = ref(false)
        let textAlert = ref('')
        let bgAlert = ref('')

        let btnText = ref('افزودن کتاب')
        function showAlertFunc(text, bg) {
            showAlert.value = true
            textAlert.value = text
            bgAlert.value = bg
            setTimeout(() => {
                showAlert.value = false
            }, 3000)
        }

        function addBook() {
            if (!bookImg.value || !bookPrice.value || !bookRate.value || !bookWriter.value || selectGenre.value == 'ژانر را انتخاب کنید' || bookType.value == 'نوع کتاب را وارد کنید' || !selectGenre.value || !bookImg.value || !publisher.value) {
                showAlertFunc("اطلاعات کتاب را درست و کامل وارد کنید!", 'bg-red-500')
            } else if (bookRate.value > 5) {
                showAlertFunc('امتیاز کتاب نباید از 5 بیشتر باشد', 'bg-red-500')
            } else {
                btnText.value = 'در حال افزودن کتاب...'
                fetch('https://thermobooks-b8765-default-rtdb.firebaseio.com/products.json', {
                    method: 'POST',
                    headers: {
                        'ContentType': 'application/json',
                    },
                    body: JSON.stringify({
                        bookName: bookName.value,
                        bookPrice: bookPrice.value,
                        bookImg: bookImg.value,
                        bookWriter: bookWriter.value,
                        selectGenre: selectGenre.value,
                        bookRate: bookRate.value,
                        bookType: bookType.value,
                        bookYear: bookYear.value,
                        bookPages: bookPages.value,
                        translator: translator.value,
                        publisher: publisher.value,
                        aboutBook: aboutBook.value,
                        introductionBook: introductionBook.value
                    })
                })
                    .then(res => {
                        showAlertFunc('کتاب با موفقیت اضافه شد :)', 'bg-green-500')
                        bookName.value = '',
                            bookPrice.value = '',
                            bookImg.value = '',
                            bookWriter.value = '',
                            selectGenre.value = '',
                            bookRate.value = '',
                            bookType.value = '',
                            bookYear.value = '',
                            bookPages.value = '',
                            translator.value = '',
                            publisher.value = '',
                            aboutBook.value = '',
                            introductionBook.value = ''
                        btnText.value = 'افزودن کتاب'
                    })
                    .catch(err => {
                        btnText.value = 'متاسفانه کتاب اضافه نشد :('
                    })
                    .finally(res => loading.value = false)
            }
        }
        watch(aboutBook, (newVal) => {
            console.log(newVal);

        })
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
            addBook,
            showAlert,
            textAlert,
            bgAlert,
            btnText,

            aboutBook,
            introductionBook
        }
    }
}
</script>