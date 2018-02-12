<template>
  <div id="app" class="container">
    <section>
      <canvas id="planet-chart"></canvas>
    </section>
  </div>
</template>

<script>
import Chart from 'chart.js'
import planetChartData from './chart-data.js'

export default {
  name: 'app',
  mounted(){
      this.createChart('planet-chart',this.planetChartData);
  },
  data () {
    return {
      planetChartData: planetChartData,
    }
  },
  methods:{
    createChart(chartId, chartData){
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx,{
        type: chartData.type,
        data: chartData.data,
        options: chartData.options
      });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
}

section{
  width: 100%;
  margin-top: 10%;
}
</style>
