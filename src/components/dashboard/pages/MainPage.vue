<template>
  <div class="p-5">
    <Teleport to="title">ThermoBookDash | صفحه ی اصلی</Teleport>
    <div class="flex justify-between items-center text-2xl font-bold">
      <p>سلام، امیرمهدی</p>
      <h1>صفحه ی اصلی</h1>
    </div>
    <p class="text-xl mt-1">امروز: {{ today }}</p>
    <div class="grid grid-cols-2 gap-5 flex-grow">
      <div class="p-2">
        <BarChart class="w-full" />
      </div>
      <div class="p-2">
        <LineChart class="" />
      </div>
      <div class="p-2">
        <DoughnutChart />
      </div>
      <div class="p-2">
        <TableComponent />
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from '../BarChart.vue';
import LineChart from '../LineChart.vue';
import DoughnutChart from '../DoughnutChart.vue';
import TableComponent from '../TableComponent.vue';
export default {
  components: {
    BarChart,
    LineChart,
    DoughnutChart,
    TableComponent
  },
  setup() {
    let options = { year: 'numeric', month: 'long', day: 'numeric' };
    let today = new Date().toLocaleDateString('fa-IR', options);
    return {
      today,
    };
  }
};
</script>

<style scoped>
canvas{
  width: 100%;
}
</style>