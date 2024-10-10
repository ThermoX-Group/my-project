<template>
    <div>
        <canvas ref="myChart"></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js/auto';
export default {
    mounted(){
        const ctx = this.$refs.myChart.getContext('2d'); // استفاده از this.$refs برای دسترسی به عنصر
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'],
                datasets: [{
                    label: 'فروش محصولات',
                    data: [37, 46, 52, 23, 19, 40],
                    backgroundColor:['rgba(255,0,0,0.5)','rgba(0,255,0,0.5)','rgba(0,0,255,0.5)','rgba(255,232,41,0.5)','rgba(105,105,105,0.5)','rgba(250,130,0,0.5)'],
                    borderColor:['rgba(255,0,0,1)','rgba(0,255,0,1)','rgba(0,0,255,1)','rgba(255,232,41,1)','rgba(105,105,105,1)','rgba(250,130,0,1)'],
                    borderRadius:5,
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}
</script>
