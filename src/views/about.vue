<template>
  <div class="p-about">
    <top-banner-tem :propData="bannerInfo"></top-banner-tem>
    <nav-tab-us-tem class="p-about-nav"></nav-tab-us-tem>
    <div class="p-about-wrap">
      <breadcrumb-tem class="p-about-bread"></breadcrumb-tem>
      <label-tem class="-wrap-label" prop-text="公司简介"></label-tem>
      <div class="p-about-content">
        <img class="-content-img" :src="dataInfo.face"/>
        <div class="-content-text" v-html="dataInfo.content"></div>
      </div>
      <!--<label-tem class="-wrap-label" prop-text="发展历程"></label-tem>-->
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
        bannerInfo: '',
        dataList: [],
        dataAllList: [],
        dataInfo: {}
      }
    },
    mounted () {
      this.getDictTypes()
    },
    methods: {
      getDictTypes() {
        this.$api.com.getDictTypes({
          key: 'about_us_position'
        }).then(res => {
          this.dataAllList = res.data[0].list
          this.getList()
        })
      },
      getList() {
        this.$api.com.articleList({
          position: '',
          type: '6'
        }).then(res => {
          let storageList = res.data
          let bannerItem = []
          this.dataList = JSON.parse(JSON.stringify(this.dataAllList))
          this.dataList.splice(0, 1)
          this.dataList.forEach(list => {
            storageList.forEach(item => {
              if (list.dictValue === item.position) {
                switch (+item.position) {
                  case 1:
                    this.dataInfo = {
                      title: item.title,
                      content: item.content,
                      face: `${this.$store.state.baseImgUrl}${item.face}`
                    }
                    break
                  case 2:
                    break
                  case 3:
                    break
                }
              }
            })
          })

          storageList.forEach(item=>{
            if (item.position === '0') {
              bannerItem.push({
                ...item,
                face: `${this.$store.state.baseImgUrl}${item.face}`
              })
            }
          })
          this.bannerInfo = bannerItem.length ? bannerItem[0] : ''
        })
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
