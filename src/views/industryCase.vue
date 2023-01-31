<template>
  <div class="p-industryCase">
    <top-banner-tem :propData="bannerInfo"></top-banner-tem>
    <div>
      <breadcrumb-tem class="p-industryCase-bread"></breadcrumb-tem>
      <div class="p-industryCase-content">
        <div class="-content-row" v-for="(item,index) of dataList" :key="index">
          <label-tem class="-content-label" :prop-text="item.dictLabel"></label-tem>

          <div class="-content-swiper" v-if="item.imgList.length">
            <div class="-content-itemWrap-j">
              <swiper ref="swiper" class="swiper -content-item-j" :options="item.swiperOption">
                <swiper-slide v-for="(item, index) of item.imgList" :key="index">
                  <img class="-content-img" :src="item.face"/>
                  <p class="-content-title">{{item.title}}</p>
                </swiper-slide>
              </swiper>
              <!--左箭头。如果放置在swiper外面，需要自定义样式。-->
              <img class="-base -left" v-if="item.imgList.length>2" @click="toPrev(item, index)" src="../assets/image/icon/l-arr.png"/>
              <!--右箭头。如果放置在swiper外面，需要自定义样式。-->
              <img class="-base -right" v-if="item.imgList.length>2" @click="toNext(item, index)" src="../assets/image/icon/r-arr.png"/>
            </div>
          </div>
          <div class="-content-noData" v-else>
            暂无数据
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

  import BreadcrumbTem from '../components/breadcrumbTem'
  import LabelTem from '../components/labelTem'
  import TopBannerTem from '../components/topBannerTem'
  import { directive, swiper, swiperSlide } from 'vue-awesome-swiper'
  import 'swiper/swiper-bundle.css'

  export default {
    name: 'serve',
    components: {TopBannerTem, LabelTem, BreadcrumbTem, swiper, swiperSlide,},
    data () {
      return {
        bannerInfo: '',
        dataAllList: [],
        dataList: []
      }
    },
    mounted () {
      this.getDictTypes()

    },
    methods: {
      toNext (item, index) {
        this.$refs.swiper[index].swiper.slideNext()
      },
      toPrev (item, index) {
        this.$refs.swiper[index].swiper.slidePrev()
      },
      getDictTypes () {
        this.$api.com.getDictTypes({
          key: 'industry_position'
        }).then(res => {
          this.dataAllList = res.data[0].list
          this.getList()
        })
      },
      getList () {
        this.$api.com.articleList({
          position: '',
          type: '3'
        }).then(res => {
          let storageList = res.data
          let bannerItem = []
          this.dataList = JSON.parse(JSON.stringify(this.dataAllList))
          this.dataList.splice(0, 1)
          this.dataList.forEach(list => {
            list.imgList = []
            storageList.forEach(item => {
              if (list.dictValue === item.position) {
                list.imgList.push({
                  title: item.title,
                  content: item.content,
                  face: `${this.$store.state.baseImgUrl}${item.face}`
                })
              }
            })
          })

          storageList.forEach(item => {
            if (item.position === '0') {
              bannerItem.push({
                ...item,
                face: `${this.$store.state.baseImgUrl}${item.face}`
              })
            }
          })
          this.bannerInfo = bannerItem.length ? bannerItem[0] : ''
          this.dataList.forEach(item => {
            item.swiperOption = {
              loop: item.imgList.length > 2 ? true : false,
              autoplay: true,
              slidesPerView: 3,
              spaceBetween: 40
            }
          })
        })
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

      .-content-row {
        width: 100%;
        overflow: hidden;
      }

      .-content-label {
        padding: 10px 0 19px;
      }

      .-content-swiper {
        position: relative;

        .-base {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          opacity: 1;
          pointer-events: auto;
          width: 50px;
          height: 50px;
          margin: 0 20px;
          z-index: 111111;
          cursor: pointer;
        }

        .-left {
          left: 0;
        }

        .-right {
          right: 0;
        }
      }

      .-content-noData {
        text-align: center;
        margin: 50px 0 100px;
        font-size: 20px;
      }

      .-content-itemWrap-j {
        margin-bottom: 31px;
        transition: all 0.5s;
      }

      .-content-item-j {
        position: relative;
        display: flex;

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
          background: rgba(0, 0, 0, 0.5);
          font-size: 16px;
          font-weight: 400;
          color: #FFFFFF;
          line-height: 44px;
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
</style>
