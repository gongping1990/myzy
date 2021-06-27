<template>
  <div class="p-breadcrumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zhuye"></use>
        </svg>
        首页
      </el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item, index) of routerInfo" :key="index">{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  export default {
    name: "breadcrumbTem",
    data() {
      return {
        routerInfo: []
      }
    },
    mounted() {
      this.routerInfo = this.$route.meta
    }
  }
</script>

<style lang="less" scoped>
  .p-breadcrumb {

    .icon {
      transform: translateY(-1px);
      font-size: 14px;
      margin-right: 9px;
      color: #AEAEAE;

    }
  }
</style>