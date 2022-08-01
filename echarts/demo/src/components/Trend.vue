<template>
  <div class="com-container">
    <div class="com-chart" ref="trend_ref"></div>
  </div>
</template>

<script>
import trend from '@/data/trend.json'
export default {
  data() {
    return {
      chartInstane: null,
      trendList: null
    }
  },
  methods: {
    initChart() {
      this.chartInstane = this.$echarts.init(this.$refs.trend_ref)
      const initOption = {}
      this.chartInstane.setOption(initOption)
    },
    getData() {
      this.trendList = trend
      console.log(this.trendList)
      this.updataChart()
    },
    updataChart() {
      const dataOption = {}
      this.chartInstane.setOption(dataOption)
    },
    screenAdapter() {
      const adapterOption = {}
      this.chartInstane.setOption(adapterOption)
      this.chartInstane.resize()
    }
  },
  destroyed() {
    window.removeEventListener('resize', this.screenAdapter)
  },
  created() {},
  mounted() {
    this.initChart()
    this.getData()
    window.addEventListener('resize', this.screenAdapter)
    this.screenAdapter()
  },
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
