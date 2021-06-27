<template>
  <div class="p-contact">
    <top-banner-tem propDes="这个是测试文案4"></top-banner-tem>
    <nav-tab-us-tem class="p-contact-nav"></nav-tab-us-tem>
    <div class="p-contact-wrap">
      <breadcrumb-tem class="p-contact-bread"></breadcrumb-tem>
      <label-tem class="-wrap-label" prop-text="川宇智业集团"></label-tem>
      <div class="p-contact-content">
        <div class="-content-wrap">
          <div class="-content-item" v-for="(item,index) of dataList" :key="index">
            <p>
              <svg class="icon" aria-hidden="true">
                <use :xlink:href="item.icon"></use>
              </svg>
              {{item.title}}
            </p>
            <p class="-text">{{item.address}}</p>
          </div>
        </div>
        <img class="-content-img" src=""/>
      </div>
    </div>
  </div>
</template>

<script>

  import BreadcrumbTem from "../components/breadcrumbTem";
  import LabelTem from "../components/labelTem";
  import NavTabUsTem from "../components/navTabUsTem";
  import TopBannerTem from "../components/topBannerTem";

  export default {
    name: 'serve',
    components: {TopBannerTem, NavTabUsTem, LabelTem, BreadcrumbTem},
    data() {
      return {
        dataList: [
          {
            title: '地址',
            address: '成都市高新区环球中心',
            icon: '#icon-dizhi-1'
          },
          {
            title: '电话',
            address: '028-8888 8888',
            icon: '#icon-zuoji'
          },
          {
            title: '传真',
            address: '+86 571586943',
            icon: '#icon-fax-fill-copy'
          },
          {
            title: '邮箱',
            address: 'xxx@xxx.com',
            icon: '#icon-tubiao209'
          },

        ]
      }
    },
    mounted () {
      this.getList()
    },
    methods: {
      handleChange() {

      },
      sizePage () {

      },
      getList() {
        this.$api.com.articleList({
          position: '3',
          type: '6'
        }).then(res => {
          this.dataList = res.data

        })
      },
    }
  }
</script>

<style lang="less" scoped>
  .p-contact {

    &-topImg {
      display: inline-block;
      width: 100%;
    }

    &-bread {
      display: flex;
      align-items: center;
      padding: 0 330px;
      height: 55px;
    }

    &-wrap {
      margin-bottom: 20px;

      .-wrap-label {
        padding: 0 330px;
        margin: 21px 0 22px;
      }
    }

    &-nav {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #F2F2F2;
      /*height: 60px;*/
      text-align: center;
      font-size: 18px;
      font-weight: 400;
      color: #333333;
    }

    &-content {
      display: flex;
      justify-content: space-between;
      padding: 0 330px;
      margin: 10px 0 51px;

      .-content-wrap {
        text-align: left;
      }

      .-content-item {
        padding: 20px 0 14px 8px;
        font-size: 16px;
        font-weight: bold;
        color: #333333;
        width: 379px;
        border-bottom: 1px solid #D8D8D8;

        .icon {
          font-size: 20px;
          color: #126DE9;
          margin-right: 15px;
        }

        p {
          line-height: 27px;
        }

        .-text {
          margin-left: 40px;
        }

        &:last-child {
          border-bottom: none;
        }
      }

      .-content-img {
        width: 779px;
        height: 353px;
        border: 1px solid #D8D8D8;
      }
    }

  }
</style>
