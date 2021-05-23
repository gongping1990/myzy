<template>
  <div class="p-industryCase">
    <top-banner-tem propDes="这个是测试文案2"></top-banner-tem>
    <div>
      <breadcrumb-tem class="p-industryCase-bread"></breadcrumb-tem>
      <div class="p-industryCase-content">
        <div>
          <label-tem class="-content-label" prop-text="技术产品"></label-tem>
          <div class="-content-itemWrap-j">
            <div class="-content-item-j" v-for="(item, index) of dataList" :key="index">
              <img class="-content-img" :src="item.imgUrl"/>
              <p class="-content-title">{{item.title}}</p>
            </div>
          </div>
        </div>
        <div>
          <label-tem class="-content-label" prop-text="数据产品"></label-tem>

          <div class="-content-itemWrap-c">
            <div class="-content-item-c" v-for="(item, index) of dataList" :key="index">
              <img class="-content-img" :src="item.imgUrl"/>
              <div>
                <p class="-content-title">{{item.title}}</p>
                <p class="-content-text">{{item.content}}</p>
              </div>
            </div>
          </div>

        </div>
        <div>
          <label-tem class="-content-label" prop-text="解决方案"></label-tem>
          <div class="-content-item-s" v-for="(item, index) of dataList" :key="index">
            <p class="-content-title">{{index+1}}、{{item.title}}</p>
            <p class="-content-text">{{item.content}}</p>
            <img class="-content-img" :src="item.imgUrl"/>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

  import BreadcrumbTem from "../components/breadcrumbTem";
  import LabelTem from "../components/labelTem";
  import TopBannerTem from "../components/topBannerTem";

  export default {
    name: 'serve',
    components: {TopBannerTem, LabelTem, BreadcrumbTem},
    data() {
      return {
        dataList: [
          {
            imgUrl: '',
            title: 'xxx解决方案',
            content: '我公司自成立以来已吸纳多个行业领域的高端技术人才，形成了完善、强大的技术支持体系'
          },
          {
            imgUrl: '',
            title: '评估',
            content: '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案'
          },
          {
            imgUrl: '',
            title: '产品名称',
            content: '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案'
          }
        ],
        activeNames: '0',
      }
    },
    methods: {
      handleChange() {

      },
    }
  }
</script>

<style lang="less" scoped>
  .p-industryCase {

    &-topImg {
      width: 100%;
    }

    &-bread {
      display: flex;
      align-items: center;
      padding: 0 330px;
      height: 55px;
    }

    &-content {
      text-align: left;
      padding: 0 330px;

      .-content-label {
        padding: 10px 0 19px;
      }

      .-content-itemWrap-j {
        display: flex;
        justify-content: space-between;
        margin-bottom: 31px;
      }

      .-content-item-j {
        position: relative;

        .-content-img {
          width: 380px;
          height: 240px;
        }

        .-content-title {
          position: absolute;
          left: 0;
          bottom: 0;
          text-align: center;
          width: 380px;
          height: 44px;
          background: rgba(0,0,0, 0.5);
          font-size: 16px;
          font-weight: 400;
          color: #FFFFFF;
          line-height: 44px;
        }
      }

      .-content-itemWrap-c {
        display: flex;
        justify-content: space-between;
        flex-flow: wrap;
        margin-bottom: 30px;
      }

      .-content-item-c {
        display: flex;
        margin-bottom: 17px;

        .-content-title {
          font-size: 16px;
          font-weight: bold;
          color: #126DE9;
          line-height: 20px;
        }

        .-content-text {
          margin-top: 10px;
          text-indent: 36px;
          width: 234px;
          font-size: 14px;
          font-weight: 400;
          color: #999999;
          line-height: 30px;
        }

        .-content-img {
          width: 305px;
          height: 213px;
          margin-right: 22px;
        }
      }

      .-content-item-s {
        margin-bottom: 47px;
        text-align: center;

        .-content-title {
          text-align: left;
          font-size: 16px;
          font-weight: bold;
          color: #333333;
          line-height: 20px;
        }

        .-content-text {
          text-align: left;
          padding: 16px 9px 0;
          font-size: 14px;
          font-weight: 400;
          color: #999999;
          line-height: 30px;
        }

        .-content-img {
          width: 805px;
          height: 374px;
          margin: 22px auto 0;
        }
      }

    }
  }
</style>
