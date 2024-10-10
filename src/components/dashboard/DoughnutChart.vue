<template>
    <div>
        <h3 class="text-center text-2xl">خریداران</h3>
        <canvas ref="myChart"></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js/auto';
export default {
    mounted(){
        const ctx = this.$refs.myChart.getContext('2d'); // استفاده از this.$refs برای دسترسی به عنصر
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'],
                datasets: [{
                    label: 'خریداران',
                    data: [26,37,40, 76, 19, 24],
                    backgroundColor:['rgba(255,0,0,0.5)','rgba(0,255,0,0.5)','rgba(0,0,255,0.5)','rgba(255,232,41,0.5)','rgba(105,105,105,0.5)','rgba(250,130,0,0.5)'],
                    borderWidth: 2
                }]
            },
        });
    }
}
</script>
