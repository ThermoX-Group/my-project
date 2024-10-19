<template>
  <div class="mt-20">
    <Teleport to="title">ThermoBook | صفحه اصلی</Teleport>
    <TopBanner></TopBanner>
    <BannerHomePage :datas="datas"></BannerHomePage>
    <div class="px-10 mt-10">
      <BooksContainer :books="audioBooks">
        <template #title>
          <p class="mb-1">کتاب های صوتی</p>
          <LoadingComp v-if="loading"></LoadingComp>
          <router-link v-else :to="`/AllBooks/${'bookType'}/${'صوتی'}`" class="text-blue-500">دیدن همه</router-link>
        </template>
      </BooksContainer>
      <BooksContainer :books="electronicBooks" class="mt-10">
        <template #title>
          <p class="mb-1">کتاب های الکترونیکی</p>
          <LoadingComp v-if="loading"></LoadingComp>
          <router-link v-else :to="`/AllBooks/${'bookType'}/${'الکترونیکی'}`" class="text-blue-500">دیدن همه</router-link>
        </template>
      </BooksContainer>
    </div>
  </div>
</template>

<script>
import { inject, ref, watch } from 'vue';
import BannerHomePage from '../BannerHomePage.vue';
import TopBanner from '../TopBanner.vue';
import BooksContainer from '../BooksContainer.vue';
import LoadingComp from '../LoadingComp.vue';

export default {
  components: {
    BannerHomePage,
    TopBanner,
    BooksContainer,
    LoadingComp
  },
  setup() {
    const datas = ref('')
    let loading = ref(true)
    let loadingText = ref('Loading...')

    fetch('https://thermobooks-b8765-default-rtdb.firebaseio.com/products.json')
      .then(res => res.json())
      .then(data => {
        if (data) {
          datas.value = Object.entries(data);
          loading.value = false
        }
      })
      .catch(err => {
        loading.value = false
      })

    let audioBooks = ref('')
    let electronicBooks = ref('')

    watch(datas, () => {
      audioBooks.value = datas.value.filter(data => data[1].bookType == 'صوتی')
      electronicBooks.value = datas.value.filter(data => data[1].bookType == 'الکترونیکی')
    })
    return {
      datas,
      loading,
      loadingText,
      audioBooks,
      electronicBooks,
    };
  }
}
</script>