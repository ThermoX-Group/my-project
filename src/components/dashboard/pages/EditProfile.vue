<template>
    <div class="p-5">
        <h1 class="text-2xl font-bold">ویرایش پروفایل شما:</h1>
        <form action="" @submit.prevent="submitFunc()">
            <div class="grid grid-cols-2 gap-5">
                <div>
                    <label for="user-name">نام کاربری:</label>
                    <input type="text" class="w-full border-2 border-gray-400 rounded-full p-3 mt-2 outline-none"
                        id="user-name" placeholder="نام کاربری..." v-model="datas.userName">
                </div>
                <div>
                    <label for="email"> ایمیل:</label>
                    <input type="email" class="w-full border-2 border-gray-400 rounded-full p-3 mt-2 outline-none"
                        id="email" placeholder="ایمیل..." required v-model="datas.email">
                </div>
                <div>
                    <label for="profile"> عکس پروفایل:</label>
                    <input type="text" class="w-full border-2 border-gray-400 rounded-full p-3 mt-2 outline-none"
                        id="profile" placeholder="عکس پروفایل..." v-model="datas.profile">
                </div>
                <div>
                    <label for="bio"> بایوگرافی:</label>
                    <textarea id="bio" rows="5"
                        class="w-full border-2 border-gray-400 rounded-xl p-3 mt-2 outline-none resize-none"
                        placeholder="بایوگرافی" v-model="datas.bio"></textarea>
                </div>
            </div>
            <input type="submit" :value=btnText
                class="bg-blue-500 text-white w-full p-3 rounded-full transition cursor-pointer mt-1 hover:bg-blue-600">
        </form>
    </div>
</template>

<script>
import { reactive, ref } from 'vue';
export default {
    setup(props,context) {
        let datas=reactive({
            userName:'',
            email:'',
            profile:'',
            bio:'',
        })

        let btnText=ref('ثبت مشخصات')
        function submitFunc() {
            btnText.value='درحال ثبت شدن...'
            fetch(`https://thermobooks-b8765-default-rtdb.firebaseio.com/userprofile/${'-O8gvGkAaFHLyrNQ1EdO'}.json`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...datas
                })
            })
            .then(res=>{
                datas.userName=''
                datas.email=''
                datas.profile=''
                datas.bio=''
                btnText.value='ثبت مشخصات'
                context.emit('acceptRequest')
            })
        }
        return {
            datas,
            btnText,
            submitFunc,
        }
    }
}
</script>