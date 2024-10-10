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
            type: 'line',
            data: {
                labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'],
                datasets: [{
                    label: 'بازدید از محصولات',
                    data: [239,496,347, 402, 105, 275,550],
                    borderColor:['black'],
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
