<template>
  <div class="p-about">
    <top-banner-tem propDes="这个是测试文案5"></top-banner-tem>
    <nav-tab-us-tem class="p-about-nav"></nav-tab-us-tem>
    <div class="p-about-wrap">
      <breadcrumb-tem class="p-about-bread"></breadcrumb-tem>
      <label-tem class="-wrap-label" prop-text="公司简介"></label-tem>
      <div class="p-about-content">
        <img class="-content-img" src=""/>
        <div class="-content-text">
          良好的技术支持体系是保质保量完成项目的关键因素之一，我公司自成立以来已吸纳多个行业领域的高端技术人才，形成了完善、
          强大的技术 支持体系良好的技术支持体系是保质保量完成项目的关键因素之一，我公司自成立以来已吸纳多个行业领域的高端技
          术人才，形成了完善、强大 的技术支持体系良好的技术支持体系是保质保量完成项目的关键因素之一，我公司自成立以来已吸纳
          多个行业领域的高端技术人才，形成了完善、 强大 的技术支持体系良好的技术支持体系是保质保量完成项目的关键因素之一，
          我公司自成立以来已吸纳多个行业领域的高端技术人才，形成了完善、强大的技术支持体系良好的技术支持体系是保质保量完成项
          目的关键因素之一 ，我公司自成立以来已吸纳多个行业领域的高端技术人才，形成了完善、强大的技术支持体系良好的技术支持
          体系是保质保量完成项目的关键因素之一，我公司自成立以来已吸纳多个行业领域的高端技术人才，形成了完善、强大的技术支持
          体系良好的技术支持体系是保质保量完成项目的关键因素之一，我公司自成立以来已吸纳多个行业领域的高端技术人才，形成了完
          善、强大的技术支持体系良好的技术支持体系是保质保量完成项目的关键因素之一，我公司自成立以来已吸纳多个行业领域的高端
          技术人才，形成了完善、强大的技术支持体系良好的技术支持体系是保质保量完成项目的关键因素之一，我公司自成立以来已吸纳
          多个行业领域的高端技术人. 体系是保质保量完成项目的关键因素之一，我公司自成立以来已吸纳多个行业领域的高端技术人才，
          形成了完善、强大的技术支持体系良好的技术支持体系是保质保量完成项目的关键因素之一，我公司自成立以来已吸纳多个行业领
          域的高端技术人才，形成了完善、强大的技术支持体系良好的技术支持体系是保质保量完成项目的关键因素之一，我公司自成立以
          来已吸纳多个行业领域的高端技术人才，形成了完善、强大的技术支持体系
        </div>
      </div>
      <label-tem class="-wrap-label" prop-text="发展历程"></label-tem>
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

        ]
      }
    },
    methods: {
      handleChange() {

      },
    }
  }
</script>

<style lang="less" scoped>
  .p-about {

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

      .-content-text {
        text-align: left;
        margin-left: 27px;
        font-size: 14px;
        font-weight: 400;
        color: #999999;
        line-height: 20px;
      }

      .-content-img {
        width: 500px;
        height: 300px;
        border: 1px solid #D8D8D8;
      }
    }

  }
</style>
