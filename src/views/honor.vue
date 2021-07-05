<template>
  <div class="p-honor">
    <top-banner-tem :propData="bannerInfo"></top-banner-tem>
    <nav-tab-us-tem class="p-honor-nav"></nav-tab-us-tem>
    <div class="p-honor-wrap">
      <breadcrumb-tem class="p-honor-bread"></breadcrumb-tem>
      <div class="p-honor-content">
        <div class="-item" v-for="(item, index) of dataOneList" :key="index">
          <img class="-img" :src="item.face"/>
          <div class="-text">{{item.title}}</div>
        </div>
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
        bannerInfo: '',
        dataList: [],
        dataAllList: [],
        dataOneList: []
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
          this.dataOneList = []
          this.dataList = JSON.parse(JSON.stringify(this.dataAllList))
          this.dataList.splice(0, 1)
          this.dataList.forEach(list => {
            storageList.forEach(item => {
              if (list.dictValue === item.position) {
                switch (+item.position) {
                  case 1:
                    break
                  case 2:
                    this.dataOneList.push({
                      title: item.title,
                      content: item.content,
                      face: `${this.$store.state.baseImgUrl}${item.face}`
                    })
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
