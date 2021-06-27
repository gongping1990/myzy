<template>
  <div class="p-home">
    <div class="p-home-swiper">
      <el-carousel :autoplay="false">
        <el-carousel-item v-for="(item,index) in bannerList" :key="index">
          <img class="-img" :src="item.img"/>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="p-home-c1 p-home-base">
      <p class="-b-p">CHUANYU EVALUATION</p>
      <img class="-b-img" src="../assets/image/home/fengexian.png"/>
      <p class="-b-title">川宇房评</p>
      <div class="-c1-wrap">
        <div class="-c1-wrap-item" v-for="(item,index) of dataOneList" :key="index">
          <div class="-item-bg">0{{index+1}}.</div>
          <div class="-item-title">{{item.title}}</div>
          <div class="-item-text">{{item.content}}</div>
        </div>
      </div>
    </div>
    <div class="p-home-c2 p-home-base">
      <p class="-b-p">CHUANYU TAX</p>
      <img class="-b-img" src="../assets/image/home/fengexian.png"/>
      <p class="-b-title">川宇税务</p>
      <div class="-c2-wrap">
        <div class="-c2-wrap-left">
          <img class="-left-img" src=""/>
          <p class="-left-title">我是标题我是标题我是标题</p>
          <div class="-left-text">4月5日集团公司召开2021年1季度工作总结会议，各分子公司分别介绍...</div>
        </div>
        <div class="-c2-wrap-right">
          <div class="-right-item" v-for="(item, index) of dataTwoList" :key="index">
            <div class="-index">0{{index+1}}</div>
            <div>
              <p class="-title">{{item.title}}</p>
              <p class="-text">{{item.content}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Home',
    data() {
      return {
        bannerList: [
          {
            img: require('../assets/image/home/banner1.jpg')
          },
          {
            img: require('../assets/image/home/banner2.jpg')
          },
          {
            img: require('../assets/image/home/banner3.jpg')
          }
        ],
        dataOneList: [
          {
            title: '法律咨询服务',
            content: '良好的技术支持体系是保质保量完成项目的关键因素之一，我公司自成立以来已吸纳多个行业领域的高端技术人'
          },
          {
            title: '资产评估服务',
            content: '良好的技术支持体系是保质保量完成项目的关键因素之一，我公司自成立以来已吸纳多个行业领域的高端技术人'
          },
          {
            title: '法律咨询服务',
            content: '良好的技术支持体系是保质保量完成项目的关键因素之一，我公司自成立以来已吸纳多个行业领域的高端技术人'
          }
        ],
        dataTwoList: [
          {
            title: '标题',
            content: '良好的技术支持体系是保质保量完成项目的关键因素之一，我公司自成立以来已吸纳多个行业领域的高端技术人'
          },
          {
            title: '标题',
            content: '良好的技术支持体系是保质保量完成项目的关键因素之一，我公司自成立以来已吸纳多个行业领域的高端技术人'
          },
          {
            title: '标题',
            content: '良好的技术支持体系是保质保量完成项目的关键因素之一，我公司自成立以来已吸纳多个行业领域的高端技术人'
          },
          {
            title: '标题',
            content: '良好的技术支持体系是保质保量完成项目的关键因素之一，我公司自成立以来已吸纳多个行业领域的高端技术人'
          }
        ]
      }
    }
  }
</script>
<style lang="less">
  .p-home {
    .el-carousel__container {
      height: 600px !important;
    }
  }
</style>
<style lang="less" scoped>
  .p-home {
    &-swiper {
      .-img {
        width: 100%;
      }
    }

    &-base {
      .-b-p {
        font-size: 30px;
        font-weight: 300;
        color: #333333;
      }

      .-b-img {
        margin: 23px 0 19px;
        width: 361px;
      }

      .-b-title {
        font-size: 30px;
        font-weight: 700;
        color: #333333;
      }
    }

    &-c1 {
      text-align: center;
      padding: 53px 330px 97px;

      .-c1-wrap {
        display: flex;
        margin-top: 52px;
        justify-content: space-between;

        &-item {
          .-item-bg {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 313px;
            height: 138px;
            /*height: 100%;*/
            background: url("../assets/image/home/num-bg.png") no-repeat;
            background-size: 100%;
            font-size: 30px;
            font-weight: bold;
            color: #126DE9;
          }

          .-item-title {
            margin: 15px 0 12px;
            font-size: 18px;
            font-weight: bold;
            color: #333333;
          }

          .-item-text {
            font-size: 14px;
            font-weight: 400;
            color: #999999;
            line-height: 20px;
            width: 290px;
          }
        }
      }
    }

    &-c2 {
      background: #EDF1F2;
      padding: 60px 330px 44px;

      .-c2-wrap {
        display: flex;
        justify-content: space-between;
        margin-top: 51px;

        &-left {
          box-sizing: border-box;
          width: 488px;
          height: 454px;
          padding-top: 20px;
          background: #FFFFFF;
          text-align: center;

          .-left-img {
            width: 442px;
            height: 303px;
          }

          .-left-title {
            padding: 0 20px;
            text-align: left;
            margin: 18px 0;
            font-size: 16px;
            font-weight: bold;
            color: #1E3485;
          }

          .-left-text {
            padding: 0 20px;
            text-align: left;
            font-size: 14px;
            font-weight: 400;
            color: #999999;
            line-height: 20px;
          }
        }

        &-right {
          box-sizing: border-box;
          width: 690px;
          height: 454px;
          padding: 0 6px;
          background: #FFFFFF;

          .-right-item {
            display: flex;
            align-items: center;
            text-align: left;
            border-bottom: 1px solid #EEEEEE;
            padding: 30px 0 20px;

            .-index {
              margin: 0 43px 0 60px;
              font-size: 40px;
              font-weight: bolder;
              color: #666666;
              line-height: 18px;
            }

            .-title {
              margin-bottom: 11px;
              font-size: 16px;
              font-weight: bold;
              color: #666666;
              line-height: 18px;
            }

            .-text {
              font-size: 12px;
              font-weight: 400;
              color: #999999;
              line-height: 18px;
            }

            &:last-child {
              border-bottom: none;
            }
          }
        }
      }
    }
  }
</style>
