<template>
  <div class="p-honor">
    <top-banner-tem propDes="这个是测试文案1"></top-banner-tem>
    <nav-tab-us-tem class="p-honor-nav"></nav-tab-us-tem>
    <div class="p-honor-wrap">
      <breadcrumb-tem class="p-honor-bread"></breadcrumb-tem>
      <div class="p-honor-content">
        <div class="-item" v-for="(item, index) of dataList" :key="index">
          <img class="-img" :src="item.imgUrl"/>
          <div class="-text">{{item.title}}</div>
        </div>
      </div>
      <el-pagination background layout="prev, pager, next" :total="1" @size-change="sizePage"></el-pagination>
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
            imgUrl: '',
            title: '高新技术企业证书',
          },
          {
            imgUrl: '',
            title: '高新技术企业证书',
          },
          {
            imgUrl: '',
            title: '高新技术企业证书',
          },
          {
            imgUrl: '',
            title: '高新技术企业证书',
          },
          {
            imgUrl: '',
            title: '高新技术企业证书',
          }
        ]
      }
    },
    methods: {
      handleChange() {

      },
      sizePage () {

      }
    }
  }
</script>

<style lang="less" scoped>
  .p-honor {

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
      flex-flow: wrap;
      padding: 0 330px;
      margin: 10px 0;

      .-item {
        margin-right: 49px;
        margin-bottom: 20px;

        &:nth-child(4n) {
          margin-right: 0;
        }
      }

      .-img {
        display: block;
        width: 263px;
        height: 170px;
      }

      .-text {
        text-align: center;
        line-height: 40px;
        width: 263px;
        height: 40px;
        background: #EDF1F2;
        font-size: 14px;
        font-weight: 400;
        color: #333333;
      }
    }

  }
</style>
