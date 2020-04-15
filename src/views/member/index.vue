<template>
  <div>
    <div class="map-col">
      <group-title title="会员分布数据" />
      <img :src="require('@/assets/images/nhzd.png')" alt="南海诸岛" />
      <div id="map-chart-col"></div>
    </div>
    <div class="chart-group-col">
      <div class="graphchart-col">
        <group-title title="会员专项消费曲线图" />
      </div>
      <div class="graphchart-col">
        <group-title title="会员总消费曲线图" />
        <div id="tendency-chart-col"></div>
      </div>
      <div class="piechart-col">
        <group-title title="会员种类占比" />
        <div id="pie-chart-col"></div>
      </div>
      <div class="table-summarize-col">
        <group-title title="会员消费排行" />
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
  import echarts from "echarts";
  import '../../../node_modules/echarts/map/js/china.js'
  export default {
    data() {
      return {
        seriesData: [{
          "name": "云南省",
          "value": [101.33205, 24.519289],
          "provinceName": "云南省",
          "totalOrder": 3226,
          "totalPlan": 3342
        }, {
          "name": "北京市",
          "value": [116.491423, 40.229532],
          "provinceName": "北京市",
          "totalOrder": 4,
          "totalPlan": 10
        }, {
          "name": "吉林省",
          "value": [126.646731, 43.635236],
          "provinceName": "吉林省",
          "totalOrder": 1707,
          "totalPlan": 1797
        }, {
          "name": "四川省",
          "value": [102.656656, 30.61413],
          "provinceName": "四川省",
          "totalOrder": 2653,
          "totalPlan": 2808
        }, {
          "name": "安徽省",
          "value": [117.153726, 31.941421],
          "provinceName": "安徽省",
          "totalOrder": 385,
          "totalPlan": 434
        }, {
          "name": "山东省",
          "value": [117.963207, 36.344966],
          "provinceName": "山东省",
          "totalOrder": 2291,
          "totalPlan": 2528
        }, {
          "name": "山西省",
          "value": [112.076072, 37.585044],
          "provinceName": "山西省",
          "totalOrder": 0,
          "totalPlan": 1
        }, {
          "name": "广东省",
          "value": [113.400677, 23.505264],
          "provinceName": "广东省",
          "totalOrder": 96505,
          "totalPlan": 118665
        }, {
          "name": "新疆维吾尔自治区",
          "value": [85.583964, 41.403594],
          "provinceName": "新疆维吾尔自治区",
          "totalOrder": 692,
          "totalPlan": 731
        }, {
          "name": "江苏省",
          "value": [119.50858, 33.61985],
          "provinceName": "江苏省",
          "totalOrder": 4823,
          "totalPlan": 4961
        }, {
          "name": "河北省",
          "value": [115.240407, 38.400392],
          "provinceName": "河北省",
          "totalOrder": 2887,
          "totalPlan": 3087
        }, {
          "name": "河南省",
          "value": [113.474266, 33.988466],
          "provinceName": "河南省",
          "totalOrder": 3700,
          "totalPlan": 4039
        }, {
          "name": "浙江省",
          "value": [120.023704, 29.203656],
          "provinceName": "浙江省",
          "totalOrder": 6,
          "totalPlan": 18
        }, {
          "name": "海南省",
          "value": [109.663959, 19.015225],
          "provinceName": "海南省",
          "totalOrder": 2997,
          "totalPlan": 3061
        }, {
          "name": "湖北省",
          "value": [112.22325, 31.248526],
          "provinceName": "湖北省",
          "totalOrder": 4641,
          "totalPlan": 4890
        }, {
          "name": "湖南省",
          "value": [111.560948, 27.838737],
          "provinceName": "湖南省",
          "totalOrder": 3459,
          "totalPlan": 3584
        }, {
          "name": "澳门特别行政区",
          "value": [113.557054, 22.188029],
          "provinceName": "澳门特别行政区",
          "totalOrder": 0,
          "totalPlan": 1
        }, {
          "name": "贵州省",
          "value": [106.924829, 26.720902],
          "provinceName": "贵州省",
          "totalOrder": 9157,
          "totalPlan": 9647
        }, {
          "name": "陕西省",
          "value": [108.316357, 32.969116],
          "provinceName": "陕西省",
          "totalOrder": 3620,
          "totalPlan": 3824
        }],
        seriesData2: [{
          "name": "吉林",
          "value": [126.646731, 43.635236],
          "provinceName": "吉林",
          "totalOrder": 1707,
          "totalPlan": 1797
        }, {
          "name": "四川",
          "value": [102.656656, 30.61413],
          "provinceName": "四川",
          "totalOrder": 2653,
          "totalPlan": 2808
        }, {
          "name": "广东",
          "value": [113.400677, 23.505264],
          "provinceName": "广东",
          "totalOrder": 96506,
          "totalPlan": 118665
        }, {
          "name": "新疆",
          "value": [85.583964, 41.403594],
          "provinceName": "新疆",
          "totalOrder": 692,
          "totalPlan": 731
        }, {
          "name": "河南",
          "value": [113.474266, 33.988466],
          "provinceName": "河南",
          "totalOrder": 3700,
          "totalPlan": 4039
        }, {
          "name": "海南",
          "value": [109.663959, 19.015225],
          "provinceName": "海南",
          "totalOrder": 2997,
          "totalPlan": 3061
        }, {
          "name": "贵州",
          "value": [106.924829, 26.720902],
          "provinceName": "贵州",
          "totalOrder": 9157,
          "totalPlan": 9647
        }],
        regions: [{
          "itemStyle": {
            "areaColor": "#1B5573"
          }
        }, {
          "name": "云南",
          "itemStyle": {
            "areaColor": "#1B5573"
          }
        }, {
          "name": "北京",
          "itemStyle": {
            "areaColor": "#1B5573"
          }
        }, {
          "name": "吉林",
          "itemStyle": {
            "areaColor": "#1B5573"
          }
        }, {
          "name": "四川",
          "itemStyle": {
            "areaColor": "#1B5573"
          }
        }, {
          "name": "安徽",
          "itemStyle": {
            "areaColor": "#1B5573"
          }
        }, {
          "name": "山东",
          "itemStyle": {
            "areaColor": "#1B5573"
          }
        }, {
          "name": "山西",
          "itemStyle": {
            "areaColor": "#1B5573"
          }
        }, {
          "name": "广东",
          "itemStyle": {
            "areaColor": "#1B5573"
          }
        }, {
          "name": "新疆",
          "itemStyle": {
            "areaColor": "#1B5573"
          }
        }, {
          "name": "江苏",
          "itemStyle": {
            "areaColor": "#1B5573"
          }
        }, {
          "name": "河北",
          "itemStyle": {
            "areaColor": "#1B5573"
          }
        }, {
          "name": "河南",
          "itemStyle": {
            "areaColor": "#1B5573"
          }
        }, {
          "name": "浙江",
          "itemStyle": {
            "areaColor": "#1B5573"
          }
        }, {
          "name": "海南",
          "itemStyle": {
            "areaColor": "#1B5573"
          }
        }, {
          "name": "湖北",
          "itemStyle": {
            "areaColor": "#1B5573"
          }
        }, {
          "name": "湖南",
          "itemStyle": {
            "areaColor": "#1B5573"
          }
        }, {
          "name": "澳门",
          "itemStyle": {
            "areaColor": "#1B5573"
          }
        }, {
          "name": "贵州",
          "itemStyle": {
            "areaColor": "#1B5573"
          }
        }, {
          "name": "陕西",
          "itemStyle": {
            "areaColor": "#1B5573"
          }
        }]
      }
    },
    mounted() {
      const seriesData = this.seriesData,
        seriesData2 = this.seriesData,
        regions = this.regions
      echarts.init(document.getElementById("map-chart-col")).setOption({
        tooltip: {
          show: false
        },
        legend: {
          show: false
        },
        geo: {
          map: 'china',
          center: [104.114129, 37.550339],
          label: {
            show: false
          },
          zoom: 1.22,
          top: '5%',
          left: '10%',
          layoutSize: '100%',
          roam: false,
          itemStyle: {
            normal: {
              areaColor: '#193351',
              borderColor: '#1A2239',
              borderWidth: 1.1
            }
          },
          emphasis: {
            label: {
              show: false
            },
            itemStyle: {
              areaColor: '#193351',
              borderColor: '#1A2239',
              borderWidth: 1.1
            }
          },
          regions: [{
              name: '南海诸岛',
              value: 0,
              label: {
                show: false
              },
              itemStyle: {
                normal: {
                  opacity: 0,
                  label: {
                    show: false
                  }
                }
              }
            },
            ...regions
          ],
        },
        series: [{
          type: 'effectScatter',
          coordinateSystem: 'geo',
          data: seriesData,
          symbolSize: function (val, obj) {
            let size = obj.data.totalOrder / 15
            if (size < 1) {
              size = 1
            } else
            if (size > 15) {
              size = 15
            }
            return size
          },
          showEffectOn: 'render',
          rippleEffect: {
            color: 'rgba(20,204,143,0.5)',
            brushType: 'stroke'
          },
          hoverAnimation: true,
          label: {
            show: false
          },
          itemStyle: {
            normal: {
              color: '#14CC8F',
              shadowBlur: 2,
              shadowColor: '#1A6075'
            }
          },
          zlevel: 1
        }, {
          type: 'scatter',
          coordinateSystem: 'geo',
          data: seriesData2,
          symbolSize: 1,
          label: {
            show: true,
            backgroundColor: 'rgba(0,0,0,0.5)',
            textBorderWidth: 0,
            borderRadius: 5,
            position: [-50, -75],
            padding: [5, 10],
            lineHeight: 16,
            align: 'left',
            rich: {
              a: {
                color: '#90AECB'
              },
              b: {
                color: '#24E0FF'
              },
              c: {
                color: '#14CC8F'
              },
            },
            formatter: function (options) {
              return `{a|${options.data.provinceName}} \n{b|计划：${options.data.totalPlan}}\n{c|实际：${options.data.totalOrder}}`
            }
          },
          itemStyle: {
            normal: {
              color: 'rgba(0,0,0,0)'
            }
          },
          zlevel: 5
        }, {
          name: '北京',
          type: 'lines',
          zlevel: 10,
          symbol: ['none'],
          symbolSize: 10,
          lineStyle: {
            normal: {
              color: '#0000FF',
              width: 1,
              opacity: 0.6,
              curveness: 0.2
            }
          },
          data: [{
            fromName: '新疆',
            toName: '广东',
            coords: [
              [85.583964, 41.403594],
              [113.400677, 23.505264]
            ]
          }]
        }, {
          name: '北京',
          type: 'lines',
          zlevel: 10,
          symbol: ['none'],
          symbolSize: 10,
          lineStyle: {
            normal: {
              color: '#FF0000',
              width: 1,
              opacity: 0.6,
              curveness: 0.2
            }
          },
          data: [{
            coords: [
              [85.583964, 41.403594],
              [126.646731, 43.635236]
            ]
          }]
        }]
      })
      const legendData = ["学生", "老板", "职员", "自由工作者"]
      const pieData = [{
        "name": "学生",
        "value": 56421,
        "rate": "39.50%"
      }, {
        "name": "老板",
        "value": 64376,
        "rate": "45.07%"
      }, {
        "name": "职员",
        "value": 10621,
        "rate": "7.44%"
      }, {
        "name": "自由工作者",
        "value": 11433,
        "rate": "8.00%"
      }]
      echarts.init(document.getElementById("pie-chart-col")).setOption({
        color: ['#24E0FF', '#FF1717', '#64BD3D', '#DD8369'],
        tooltip: {
          trigger: 'item',
          formatter: "{b}: {c} ({d}%)"
        },
        grid: {
          top: 25,
          left: 30,
          right: 0,
          bottom: 25
        },
        legend: {
          orient: 'vertical',
          x: 'right',
          icon: 'circle',
          itemWidth: 8,
          itemHeight: 8,
          align: 'left',
          data: legendData,
          textStyle: {
            color: '#90AECB'
          }
        },
        series: [{
          name: '近十二个月运单累计分布',
          type: 'pie',
          radius: ['65%', '85%'],
          center: ['25%', '50%'],
          animation: true,
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: false,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: pieData
        }]
      });
      const xAxisDataTendency = ["19/05", "19/06", "19/07", "19/08", "19/09", "19/10", "19/11", "19/12", "20/01",
        "20/02", "20/03", "20/04"
      ]
      const seriesDataTendency = [0, 0, 0, 0, 1, 202, 225, 223, 80, 17, 236, 128]
      echarts.init(document.getElementById("tendency-chart-col")).setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'none'
          }
        },
        color: ['#24E0FF'],
        grid: {
          top: 30,
          left: 50,
          right: 12,
          bottom: 30
        },
        xAxis: {
          type: 'category',
          boundaryGap: true,
          data: xAxisDataTendency,
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#90AECB',
              opacity: 0.7,
              type: 'dashed'
            }
          },
          axisLabel: {
            interval: 0
          },
        },
        yAxis: {
          type: 'value',
          splitNumber: 3,
          min: -1,
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#90AECB',
              width: 0
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(144,174,203,0.2)',
              type: 'dashed'
            }
          }
        },
        series: [{
          data: seriesDataTendency,
          type: 'line',
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(
                0, 0, 0, 1,
                [{
                    offset: 0,
                    color: 'rgba(36,224,255,0.7)'
                  },
                  {
                    offset: 0.5,
                    color: 'rgba(36,224,255,0.55)'
                  },
                  {
                    offset: 1,
                    color: 'rgba(36,224,255,0.15)'
                  }
                ]
              )
            }
          }
        }]
      });
      window.onresize = _ => location.reload()
    },
    methods: {

    },
    destroyed() {
      window.onresize = null
    }
  }

</script>
<style lang="less" scoped>
  #map-chart-col,
  #pie-chart-col,
  #tendency-chart-col {
    width: 100%;
    height: 100%;
  }

  .map-col {
    width: 900px;
    height: 686px;
    float: left;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;

    img {
      position: absolute;
      width: 146px;
      height: 194px;
      bottom: 0;
      right: 0;
    }
  }

  .chart-group-col {
    width: 1000px;
    height: 686px;
    box-sizing: border-box;
    float: right;

    >div {
      border: 1px solid rgba(38, 88, 138, 0.5);
      background: rgba(5, 71, 136, 0.2);
      box-sizing: border-box;
      float: left;
      overflow: hidden;
    }

    .graphchart-col {
      width: 100%;
      height: 213px;
      margin-bottom: 10px;
    }

    .piechart-col {
      width: 395px;
      height: 240px;
    }

    .table-summarize-col {
      width: 595px;
      height: 240px;
      margin-left: 10px;
    }
  }

</style>
