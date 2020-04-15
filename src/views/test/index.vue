<template>
  <div>
    <div class="header">
      <h1>洗浴中心数据分析</h1>
    </div>
    <div class="main">
      <div class="left">
        <!-- 线下单数量 -->
        <div class="z-panel applyorder-quantity">
          <div class="title">
            线下单数量
          </div>
          <div class="content">
            <ul>
              <li>
                <label>半日业务数量</label>
                <span>1,000</span>
              </li>
              <li>
                <label>今日业务数量</label>
                <span>1,000</span>
              </li>
              <li>
                <label>本月业务数量</label>
                <span>1,000</span>
              </li>
              <li>
                <label>本月零担业务数量</label>
                <span>1,000</span>
              </li>
              <li>
                <label>业务数量</label>
                <span class="yellow">1,000</span>
              </li>
              <li>
                <label>今日业务数量</label>
                <span class="yellow">1,000</span>
              </li>
              <li>
                <label>本月业务数量</label>
                <span class="yellow">1,000</span>
              </li>
              <li>
                <label>本年业务数量</label>
                <span class="yellow">1,000</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- 线上单数量 -->
        <div class="z-panel order-quantity">
          <div class="title">
            线上单数量
          </div>
          <div class="content">
            <ul>
              <li>
                <label>洗脚</label>
                <span>1,000</span>
              </li>
              <li>
                <label>拔火罐</label>
                <span>1,000</span>
              </li>
              <li>
                <label>推油</label>
                <span>1,000</span>
              </li>
              <li>
                <label>本年单数量</label>
                <span>1,000</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- 业务数量统计图 -->
        <div class="z-panel linechart">
          <div class="title">业务数量统计图</div>
          <div class="content">
              <div class="m-chart" id="businessNumCount"></div>
          </div>
        </div>
        <!-- 用户分布 -->
        <div class="z-panel user-distribute">
          <div class="title">用户分布</div>
          <div class="content">
            <ul>
              <li style="width:100%;">
                 <span class="symbol-col">
                   <img :src="require('@/assets/images/box.png')" alt="广东">
                   <label>广东</label>
                 </span>
                 <span class="count">106,500</span>
              </li>
              <li>
                 <span class="symbol-col">
                   <img :src="require('@/assets/images/person.png')" alt="凯迪拉克">
                   <label>凯迪拉克</label>
                 </span>
                 <span class="count">3,000</span>
              </li>
              <li>
                 <span class="symbol-col">
                   <img :src="require('@/assets/images/buildings.png')" alt="白领">
                   <label>白领</label>
                 </span>
                 <span class="count">999</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- 当天用户增长数量统计 -->
        <div class="z-panel user-increase">
          <div class="title">当天用户增长数量统计</div>
          <div class="content">
             <ul>
              <li>
                 <span class="symbol-col">
                   <img :src="require('@/assets/images/box.png')" alt="凯迪拉克">
                   <label>凯迪拉克</label>
                 </span>
                 <span class="count">100</span>
              </li>
              <li>
                 <span class="symbol-col">
                   <img :src="require('@/assets/images/car.png')" alt="宝马">
                   <label>宝马</label>
                 </span>
                 <span class="count">500</span>
              </li>
              <li>
                 <span class="symbol-col">
                   <img :src="require('@/assets/images/person.png')" alt="奔驰">
                   <label>奔驰</label>
                 </span>
                 <span class="count">10</span>
              </li>
              <li>
                 <span class="symbol-col">
                   <img :src="require('@/assets/images/buildings.png')" alt="法拉利">
                   <label>法拉利</label>
                 </span>
                 <span class="count">33</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="right">
        <!-- 个人次数TOP10 -->
        <div class="z-panel">
          <div class="title">个人次数TOP10</div>
          <div class="content">
            <ol>
              <li v-for="(item,index) in list" :key="index">
                <span><span class="serial-number">{{index+1}}</span> {{item.name}}</span>
                <span>{{item.count}}</span>
              </li>
            </ol>
          </div>
        </div>
        <!-- 公司团体次数TOP10 -->
        <div class="z-panel">
          <div class="title">公司团体次数TOP10</div>
          <div class="content">
            <ol>
              <li v-for="(item,index) in list" :key="index">
                <span><span class="serial-number">{{index+1}}</span> {{item.name}}</span>
                <span>{{item.count}}</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import echarts from "echarts";
  export default {
    data() {
      return {
        list: [{
            name: '飞猪旅行有限公司',
            count: 100
          },
          {
            name: '去哪里旅行有限公司',
            count: 100
          },
          {
            name: '头条抖音文化有限公司',
            count: 100
          },
          {
            name: '快手文化有限公司',
            count: 100
          },
          {
            name: '飞猪旅行有限公司',
            count: 100
          },
          {
            name: '去哪里旅行有限公司',
            count: 100
          },
          {
            name: '头条抖音文化有限公司',
            count: 100
          },
          {
            name: '快手文化有限公司',
            count: 100
          },
          {
            name: '企鹅传媒有限公司',
            count: 16
          },
          {
            name: '哇哈哈哈有限公司',
            count: 5
          }
        ],
        mddateList:["00:20","01:23","01:26","01:29","01:30","07:15","07:17","07:44","07:49","07:55","08:13","08:35","08:43","08:45","08:46","08:54","08:55","09:07","09:12","09:13","09:17","09:19","09:23","09:35","09:39","09:47","09:53","09:58","10:00","10:25","10:40","10:46","10:50","10:57","11:00","11:02","11:03","11:20","11:21","11:22","11:23","11:24","11:25","11:30","11:49","11:54","12:22","13:47","13:52","13:53","14:04","14:16","14:21","14:24","14:28","14:37","14:39","14:41","14:45","14:52","14:59","15:07","15:22","15:26","15:27","15:29","15:43","15:44","15:45","15:46","15:48","15:50","15:51","15:52","15:53","16:08","16:09","16:10","16:24","16:31","16:33","16:35","16:36","16:40","16:49","16:52","16:53","16:55","16:56","16:57","17:06","17:26","17:30","17:36","17:38","17:40","17:43","17:46","18:18","18:20","18:52"],
        dataLDlist:[10,8,8,4,4,12,5,4,2,2,30,16,1,3,15,8,8,1,1,1,1,9,1,5,16,1,2,13,1,1,1,2,1,1,1,1,1,2,1,1,3,1,1,2,1,1,2,2,2,1,1,12,7,8,1,7,3,3,8,1,2,1,1,1,1,1,8,2,1,9,1,1,1,8,8,1,12,1,1,3,1,21,3,1,1,1,1,6,6,4,1,12,7,7,7,12,3,3,1,1,1],
        dataZClist:[1,1,1,1,1,2,3,1,2,1,1,1,1,1,1,1,1,2,3,1,1,1,3,1,1,1,3,6,1,2,2,1,3,2,1,1,2,1,1,2,1,1,1,1,2,1,1,1,5,1,1,1,1,3,1,1,3,1,3,2,1,1,1,1,5,1,1,1,3,3,2,1,1,1,1,6,5,5,6,1,2,2,1,1,1,1,3,1,1,2,1,1,2,1,2,1,5,1,1,1,2,1,1,2,1,2,2,3,2,1,3,1,2,1,1,1,1,2,1,1,1,1,2,2,1,2,1,2,1,1,1,3,1,1,3,2,1,2,4,3,2,3,1,1,1,1,2,1,1,1,3,2,1,1,1,1,1,1,1,2,2,1,1,2,1,1,1,3,1,1,1,1,3,1,1,1,1,2,1,1,1,1,1,1,1,1,1,1,2,1,3,1,1,1,2,2,4,4,3,1,2,1,2,3,2,2,1,2,1,1,1,1,2,1,3,1,2,2,1,3,1,2,1,2,1,1,3,1,2,5,2,4,1,2,2,1,4,1,1,1,2,3,1,1,1,1,2,2,1,1,1,3,1,1,1,2,2,3,1,1,1,2,3,3,3,1,1,4,2,1,2,1,2,2,1,2,1,2,2,1,2,1,1,3,2,1,1,2,1,1,2,1,1,2,1,1,2,1,1,1,1,1,1,2,3,3,4,2,1,1,2,1,1,1,2,1,1,1,1,1,3,3,1,1,1,1,1,1,2,4,2,1,1,2,2,1,1,2,2,1,1,3,2,1,3,2,1,1,1,2,1,1,1,1,1,2,1,3,1,1,1,1,2,1,2,1,1,2,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,1,1]
      }
    },
    mounted(){
      const _self = this
      echarts.init(document.getElementById("businessNumCount")).setOption({
          grid: {
              top: 25,
              left: 30,
              right: 30,
              bottom: 25
          },
          legend: {
              data: ["线上", "线下"],
              right: 20,
              top: 0,
              textStyle: {
                  color: "#8A8E99"
              }
          },
          xAxis: {
              data: _self.mddateList,
              axisLabel: {
                  color: "#8A8E99"
              },
              axisLine: {
                  lineStyle: {
                      color: "#33394f"
                  }
              }
          },
          yAxis: {
              type: "value",
              axisLabel: {
                  color: "#8A8E99"
              },
              splitLine: {
                  lineStyle: {
                      color: "#33394f"
                  }
              },
              axisLine: {
                  show: false
              }
          },
          series: [{
                  name: "线上",
                  data: _self.dataLDlist,
                  type: "line",
                  symbol: "circle",
                  symbolSize: 6,
                  itemStyle: {
                      color: "#333",
                      normal: {
                          color: "#14CC8F"
                      }
                  }
              },
              {
                  name: "线下",
                  data: _self.dataZClist,
                  type: "line",
                  symbol: "circle",
                  symbolSize: 6,
                  itemStyle: {
                      color: "#333",
                      normal: {
                          color: "#FFBF00"
                      }
                  }
              }
          ]
      })
      window.onresize = () => {
        location.reload()
      };
    },
    destroyed(){
      window.onresize = null
    }
  }
</script>
<style lang="less" scoped>
  .m-chart{
    width: 100%;
    height: 300px;
    box-sizing: border-box;
  }
  .header {
    width: 1920px;
    height: 90px;
    line-height: 90px;
    background: rgba(34, 42, 65, 1);

    h1 {
      font-weight: bold;
      color: rgba(210, 212, 217, 1);
      font-size: 26px;
      text-align: center;
      margin: 0;
    }
  }

  .main {
    margin: 30px 50px; 
    width: 1820px;
    height: 930px; 
    display: flex;
    .left {
      display: flex;
      width: 1200px;
      height: 100%;
      flex-direction: row;
      flex-wrap: wrap;

      .applyorder-quantity {
        width: 720px;
        height: 246px;
        margin-right: 20px;

        ul {
          display: flex;
          flex-wrap: wrap;
          margin: 0;
          padding: 10px 0 10px 20px;

          li {
            list-style-type: none;
            display: flex;
            width: 175px;
            flex-direction: column;
            text-align: center;
            margin: 10px 0;
            line-height: 30px;

            &:first-child,
            &:nth-child(5) {
              width: 150px;
            }

            &:nth-child(n+5) {
              margin-top: 20px;
            }
          }
        }
      }

      .order-quantity {
        width: 460px;
        height: 246px;

        ul {
          display: flex;
          flex-wrap: wrap;
          margin: 0;
          padding: 10px 0 10px 10px;

          li {
            list-style-type: none;
            display: flex;
            width: 215px;
            flex-direction: column;
            text-align: center;
            margin: 10px 0;
            line-height: 30px;

            &:nth-child(n+3) {
              margin-top: 20px;
            }

            span {
              color: rgba(230, 0, 76, 1);
            }
          }
        }
      }

      .linechart {
        width: 100%;
        height: 364px;
        margin: 20px 0;
      }

      .user-distribute,
      .user-increase {
        width: 590px;
        height: 280px;
        margin-right: 20px;
        font-family:'MicrosoftYaHei';
        color:rgba(210,212,217,1);
        ul{
          display: flex;
          flex-wrap: wrap;
          margin: 0;
          padding: 30px 20px;
          li{
            display: flex;
            height: 70px;
            align-items: center;
            width: 50%;
            margin-bottom: 30px;
          }
        }
        .symbol-col{
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 60px;
          font-size:12px;
          text-align: center;
          margin-right: 20px;
          color:rgba(210,212,217,1);
          img{
            width: 40px;
            height: 40px;
            margin-bottom: 10px;
          }
        }
        .count{
          font-size:40px;
          color:rgba(210,212,217,1);
        }
      }

      .user-increase {
        margin-right: 0;
      }

      label {
        font-size: 14px;
        font-family: 'MicrosoftYaHei';
        color: rgba(138, 142, 153, 1);
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap
      }

      span {
        font-size: 18px;
        font-family: 'Arial-BoldMT', 'Arial';
        font-weight: normal;
        color: rgba(20, 204, 143, 1);
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap
        &.yellow {
          color: rgba(255, 191, 0, 1);
        }
      }
    }

    .right {
      width: 600px;
      height: 100%;
      margin-left: 20px;

      >div {
        width: 100%;
        height: 455px;

        &:first-child {
          margin-bottom: 20px;
        }

        ol {
          padding: 20px 0 0;
          margin: 0;

          li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 36px;
            font-size: 14px;
            font-family: 'MicrosoftYaHei';
            color: rgba(210, 212, 217, 1);
            padding: 0 30px;

            .serial-number {
              margin-right: 30px;
              display: inline-block;
              width: 20px;
              text-align: center;
            }
          }
        }
      }
    }
  }

  .z-panel {
    width: auto;
    height: auto;
    background: rgba(34, 42, 65, 1);
    border-radius: 5px;
    box-sizing: border-box;
    overflow: hidden;

    .title {
      width: 100%;
      height: 50px;
      box-sizing: border-box;
      text-align: left;
      background: rgba(37, 46, 71, 1);
      font-weight: bold;
      color: rgba(210, 212, 217, 1);
      font-size: 16px;
      padding: 0 20px;
      display: flex;
      align-items: center;

      &::before {
        display: block;
        content: '';
        width: 6px;
        height: 16px;
        background: rgba(20, 204, 143, 1);
        border-radius: 3px;
        margin-right: 8px;
      }
    }
  }

</style>
