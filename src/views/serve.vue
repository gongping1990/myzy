<template>
  <div class="p-serve">
    <top-banner-tem :propData="bannerInfo"></top-banner-tem>
    <div>
      <breadcrumb-tem class="p-serve-bread"></breadcrumb-tem>
      <div class="p-serve-content">
        <div class="-content-item" v-for="(item, index) of dataList" :key="index">
          <label-tem class="-content-label" :prop-text="item.dictLabel"></label-tem>
          <div class="-content-des" :class="{'-second': index%2 === 0}">
            <img class="-content-img" :src="item.face"/>
            <div class="-content-text" v-html="item.content"></div>
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
        dataAllList: [],
        dataList: [],
        activeNames: '0',
        bannerInfo: ''
      }
    },
    mounted() {
      this.getDictTypes()
    },
    methods: {
      handleChange() {

      },
      getDictTypes() {
        this.$api.com.getDictTypes({
          key: 'server_position'
        }).then(res => {
          this.dataAllList = res.data[0].list
          this.getList()
        })
      },
      getList() {
        this.$api.com.articleList({
          position: '',
          type: '2'
        }).then(res => {
          let storageList = res.data || []
          let bannerItem = []
          this.dataList = this.dataAllList
          this.dataList.splice(0,1)
          this.dataList.forEach(list=>{
            storageList.forEach(item=>{
              if (list.dictValue === item.position) {
                list.content = item.content
                list.face = `${this.$store.state.baseImgUrl}${item.face}`
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
  .p-serve {

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
      /*background-color: #EDF1F2;*/
      padding: 0 330px;
      margin-bottom: 49px;

      .-content-label {
        padding: 10px 0 19px;
      }

      .-content-item {
        margin-bottom: 20px;
      }

      .-content-des {
        display: flex;
        justify-content: space-between;

        &.-second {
          flex-flow: row-reverse;
        }
      }

      .-content-text {
        width: 661px;
        text-align: left;
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
