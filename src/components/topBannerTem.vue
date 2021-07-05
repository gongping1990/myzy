<template>
  <div class="p-topBanner" :style="{'background-image': 'url('+propData.face+')','background-size': '100%'}">
    <div class="p-topBanner-text">
      <p class="-text-p1"><span>{{propData.title || routerInfo[0].name}}</span></p>
      <p class="-text-p2" v-html="propData.content">暂无</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "topBannerTem",
    props: ['propData'],
    data() {
      return {
        routerInfo: [{name: ''}]
      }
    },
    mounted () {
      this.routerInfo = this.$route.meta
    }
  }
</script>

<style lang="less" scoped>
  .p-topBanner {
    position: relative;
    /*background: url("../assets/image/join/top-banner1.png");*/
    height: 200px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &-text {
      span {
        padding: 0 20px;
        letter-spacing: 8px;
      }

      .-text-p1 {
        font-size: 36px;
        font-weight: bold;
        color: #FFFFFF;
        text-shadow: 3px 5px 8px rgba(0, 0, 0, 0.33);
      }

      .-text-p2 {
        margin-top: 20px;
        font-size: 24px;
        font-weight: 400;
        color: #FFFFFF;
        text-shadow: 3px 5px 8px rgba(0, 0, 0, 0.33);
      }
    }
  }
</style>