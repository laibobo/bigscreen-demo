<template>
  <div>
    <div class="header">
      <h1>系统数据分析</h1>
    </div>
    <div class="main">
      <div class="left">
        <!-- 申请单数量 -->
        <div class="z-panel applyorder-quantity">
          <div class="title">
            申请单数量
          </div>
          <div class="content">
            <ul>
              <li>
                <label>零担业务数量</label>
                <span>1,000</span>
              </li>
              <li>
                <label>今日零担业务数量</label>
                <span>1,000</span>
              </li>
              <li>
                <label>本月零担业务数量</label>
                <span>1,000</span>
              </li>
              <li>
                <label>本月零担业务数量</label>
                <span>1,000</span>
              </li>
              <li>
                <label>整车业务数量</label>
                <span class="yellow">1,000</span>
              </li>
              <li>
                <label>今日整车业务数量</label>
                <span class="yellow">1,000</span>
              </li>
              <li>
                <label>本月整车业务数量</label>
                <span class="yellow">1,000</span>
              </li>
              <li>
                <label>本年整车业务数量</label>
                <span class="yellow">1,000</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- 订单数量 -->
        <div class="z-panel order-quantity">
          <div class="title">
            订单数量
          </div>
          <div class="content">
            <ul>
              <li>
                <label>整车订单数量</label>
                <span>1,000</span>
              </li>
              <li>
                <label>今日整车订单数量</label>
                <span>1,000</span>
              </li>
              <li>
                <label>本月整车订单数量</label>
                <span>1,000</span>
              </li>
              <li>
                <label>本年整车订单数量</label>
                <span>1,000</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- 业务数量统计图 -->
        <div class="z-panel linechart">
          <div class="title">业务数量统计图</div>
          <div class="content"></div>
        </div>
        <!-- 用户分布 -->
        <div class="z-panel user-distribute">
          <div class="title">用户分布</div>
          <div class="content">
            <ul>
              <li style="width:100%;">
                 <span class="symbol-col">
                   <img :src="require('@/assets/images/box.png')" alt="货主">
                   <label>货主</label>
                 </span>
                 <span class="count">106,500</span>
              </li>
              <li>
                 <span class="symbol-col">
                   <img :src="require('@/assets/images/person.png')" alt="司机">
                   <label>司机</label>
                 </span>
                 <span class="count">3,000</span>
              </li>
              <li>
                 <span class="symbol-col">
                   <img :src="require('@/assets/images/buildings.png')" alt="物流公司">
                   <label>物流公司</label>
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
                   <img :src="require('@/assets/images/box.png')" alt="货主">
                   <label>货主</label>
                 </span>
                 <span class="count">100</span>
              </li>
              <li>
                 <span class="symbol-col">
                   <img :src="require('@/assets/images/car.png')" alt="车辆">
                   <label>车辆</label>
                 </span>
                 <span class="count">500</span>
              </li>
              <li>
                 <span class="symbol-col">
                   <img :src="require('@/assets/images/person.png')" alt="司机">
                   <label>司机</label>
                 </span>
                 <span class="count">10</span>
              </li>
              <li>
                 <span class="symbol-col">
                   <img :src="require('@/assets/images/buildings.png')" alt="物流公司">
                   <label>物流公司</label>
                 </span>
                 <span class="count">33</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="right">
        <!-- 公司发货数量TOP10 -->
        <div class="z-panel">
          <div class="title">公司发货数量TOP10</div>
          <div class="content">
            <ol>
              <li v-for="(item,index) in list" :key="index">
                <span><span class="serial-number">{{index+1}}</span> {{item.name}}</span>
                <span>{{item.count}}</span>
              </li>
            </ol>
          </div>
        </div>
        <!-- 物流公司发货数量TOP10 -->
        <div class="z-panel">
          <div class="title">物流公司发货数量TOP10</div>
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
        ]
      }
    }
  }

</script>
<style lang="less" scoped>
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
