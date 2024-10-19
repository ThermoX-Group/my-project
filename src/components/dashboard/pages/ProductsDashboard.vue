<template>
    <div class="p-5">
        <Teleport to="title">ThermoBookDash | فهرست کتابها</Teleport>
        <div class="mb-2 flex justify-between">
            <div>
                <h1 class="text-2xl font-bold">تمامی کتاب ها</h1>
                <p v-if="!loading">تعداد کتاب ها: {{ datas.length }} عدد</p>
            </div>
            <input type="text" class="border-2 border-gray-300 outline-none p-3 w-10/12 rounded-full"
                placeholder="جست و جوی کتاب" v-model="searchValue" v-if="!loading">
        </div>

        <TransitionGroup name="list" tag="div" class="grid grid-cols-6 gap-3">
            <CardBookDashboard v-for="item in datasDisplayed" :key="item[0]" :data="item" :alldata="datas"
                @openCloseModalBox="openModalDataFunc" @deleteBookFromDB="acceptDelete(item[0])">
            </CardBookDashboard>
        </TransitionGroup>
        <Transition>
            <BoxModalData v-if="openModal" @openCloseModalBox="openModalDataFunc" @closeModal="updatingDatas"
                :data="targetBookCard" @openModalDes="openModalDes = true"></BoxModalData>
        </Transition>
        <Transition>
            <boxModalDes v-if="openModalDes" @openCloseModalDes="openModalDes = false" :data="targetBookCard"
                @updatedDes="updatedDesFunc()"></boxModalDes>
        </Transition>
        <LoadingComp class="fixed bottom-1 left-5 z-10" v-if="loading"></LoadingComp>
    </div>
</template>

<script>
import { onMounted, provide, ref, watch } from 'vue';
import BoxModalData from '../BoxModalData.vue';
import CardBookDashboard from '../CardBookDashboard.vue';
import boxModalDes from '../boxModalDes.vue';
import LoadingComp from '../../MainPages/LoadingComp.vue';

export default {
    components: {
        BoxModalData,
        CardBookDashboard,
        boxModalDes,
        LoadingComp
    },
    setup() {
        let openModal = ref(false);
        let openModalDes = ref(false);
        let datas = ref('');
        let loading = ref(false);
        let targetBookCard = ref(null);
        let searchValue = ref('');

        function getDataFromDB() {
            loading.value = true
            fetch('https://thermobooks-b8765-default-rtdb.firebaseio.com/products.json')
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        datas.value = Object.entries(data);
                        datasDisplayed.value = datas.value;
                    }
                    loading.value = false;
                });
        }
        let datasDisplayed = ref('');

        onMounted(() => {
            getDataFromDB();
        });

        watch(searchValue, (newValue) => {
            if (newValue) {
                datasDisplayed.value = datas.value.filter(data => data[1].bookName.includes(newValue));
            } else {
                datasDisplayed.value = datas.value;
            }
        });

        function updatingDatas() {
            getDataFromDB();
            openModal.value = false;
        }

        function acceptDelete(data) {
            loading.value = true
            fetch(`https://thermobooks-b8765-default-rtdb.firebaseio.com/products/${data}.json`, {
                method: "DELETE"
            }).then(res => {
                datas.value = datas.value.filter(item => item[0] !== data);
                getDataFromDB()
                loading.value = false
            });
        }

        function updatedDesFunc() {
            getDataFromDB();
            openModal.value = false
            openModalDes.value = false
        }

        function openModalDataFunc() {
            openModal.value = !openModal.value;
        }

        function getIdFromCards(data) {
            targetBookCard.value = data;
        }
        provide('getIdFromCards', getIdFromCards);
        return {
            openModal,
            openModalDes,
            datas,
            openModalDataFunc,
            loading,
            targetBookCard,
            updatingDatas,
            searchValue,
            datasDisplayed,
            acceptDelete,
            updatedDesFunc
        };
    }
}
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
    transition: all 0.3s ease;
}

.list-enter-from {
    opacity: 0;
    transform: translateY(30px);
}

.list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}

.list-move {
    transition: transform 0.3s ease;
}
</style>