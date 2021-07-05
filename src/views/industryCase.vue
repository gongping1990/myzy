<template>
  <div class="p-industryCase">
    <top-banner-tem :propData="bannerInfo"></top-banner-tem>
    <div>
      <breadcrumb-tem class="p-industryCase-bread"></breadcrumb-tem>
      <div class="p-industryCase-content">
        <div class="-content-row">
          <label-tem class="-content-label" :prop-text="dataAllList.length && dataAllList[0].dictLabel"></label-tem>
          <div id="classifyScroll" class="-content-swiper">
            <img class="-base -left" @click="leftClick()" src="../assets/image/icon/l-arr.png"/>
            <div class="-content-itemWrap-j">
              <div class="-content-item-j" v-for="(item, index) of dataOneList" :key="index">
                <img class="-content-img" :src="item.face"/>
                <p class="-content-title">{{item.title}}</p>
              </div>
            </div>
            <img class="-base -right" @click="rightClick()"  src="../assets/image/icon/r-arr.png"/>
          </div>

        </div>

        <div>
          <label-tem class="-content-label" :prop-text="dataAllList.length && dataAllList[1].dictLabel"></label-tem>

          <div class="-content-itemWrap-c">
            <div class="-content-item-c" v-for="(item, index) of dataTwoList" :key="index">
              <img class="-content-img" :src="item.face"/>
              <div>
                <p class="-content-title">{{item.title}}</p>
                <p class="-content-text" v-html="item.content"></p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <label-tem class="-content-label" :prop-text="dataAllList.length && dataAllList[2].dictLabel"></label-tem>
          <div class="-content-item-s" v-for="(item, index) of dataThreeList" :key="index">
            <p class="-content-title">{{index+1}}、{{item.title}}</p>
            <p class="-content-text" v-html="item.content"></p>
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
        bannerInfo: '',
        dataAllList: [],
        dataOneList: [],
        dataTwoList: [],
        dataThreeList: [],
        dataList: [],
        activeNames: '0',
        lastLeft: 0,
        clickNum: 0,
        maxClickNum: 0,
      }
    },
    mounted() {
      this.getDictTypes()
    },
    methods: {
      rightClick(num) {
        // 如果点击次数小于数组长度-1时，执行左滑动效果。
        if (this.clickNum < this.dataOneList.length - 1) {
          // 获取当前元素宽度
          let width = document.querySelectorAll('.-content-item-j')[this.clickNum].offsetWidth
          // 获取最后一个元素距离左侧的距离
          let lastItemOffsetLeft = document.getElementsByClassName('-content-item-j')[this.dataOneList.length - 1].offsetLeft
          // 获取可视区域宽度
          const lookWidth = document.getElementById('classifyScroll').clientWidth
          // 如果最后一个元素距离左侧的距离大于可视区域的宽度，表示最后一个元素没有出现，执行滚动效果
          if (lastItemOffsetLeft > lookWidth) {
            // 公示：滚动距离（元素的magin-left值） = 负的它自己的长度 + 上一次滑动的距离
            document.getElementsByClassName('-content-itemWrap-j')[0].style.marginLeft = `${-width + this.lastLeft}px`
            this.lastLeft = -width + this.lastLeft
            // 点击次数+1
            this.clickNum += 1
            // 记录到最后一个元素出现在可视区域时，点击次数的最大值。用于后面点击左侧箭头时判断右侧箭头的显示
            this.maxClickNum = this.clickNum
          }

          console.log(width, lastItemOffsetLeft, lookWidth)
        }
      },
      // 点击左箭头（右侧滚动）
      leftClick() {
        // 当点击次数大于0时才触发，这样当点击次数clickNum等于1的到时候，clickNum--等于0.根据计算属性的判断会隐藏掉左箭头
        if (this.clickNum > 0) {
          // 获取当前元素宽度
          let width = document.querySelectorAll('.-content-item-j')[this.clickNum - 1].offsetWidth
          // 公示：滚动距离（元素的magin-left值） = 它自己的长度 + 上一次滑动的距离
          document.getElementsByClassName('-content-itemWrap-j')[0].style.marginLeft = `${this.lastLeft + width}px`
          this.lastLeft = width + this.lastLeft
          // 点击次数-1
          this.clickNum--
        }
      },
      getDictTypes() {
        this.$api.com.getDictTypes({
          key: 'industry_position'
        }).then(res => {
          this.dataAllList = res.data[0].list
          this.getList()
        })
      },
      getList() {
        this.$api.com.articleList({
          position: '',
          type: '3'
        }).then(res => {
          let storageList = res.data
          let bannerItem = []
          this.dataOneList = []
          this.dataTwoList = []
          this.dataThreeList = []
          this.dataList = JSON.parse(JSON.stringify(this.dataAllList))
          this.dataList.splice(0, 1)
          this.dataList.forEach(list => {
            storageList.forEach(item => {
              if (list.dictValue === item.position) {
                switch (+item.position) {
                  case 1:
                    this.dataOneList.push({
                      title: item.title,
                      content: item.content,
                      face: `${this.$store.state.baseImgUrl}${item.face}`
                    })
                    break
                  case 2:
                    this.dataTwoList.push({
                      title: item.title,
                      content: item.content,
                      face: `${this.$store.state.baseImgUrl}${item.face}`
                    })
                    break
                  case 3:
                    this.dataThreeList.push({
                      title: item.title,
                      content: item.content,
                      face: `${this.$store.state.baseImgUrl}${item.face}`
                    })
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
          transform: translate(-50%, -50%);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.3);
          z-index: 9999;
          cursor: pointer;
        }

        .-left {
          left: 30px;
        }

        .-right {
          right: 30px;
        }
      }

      .-content-itemWrap-j {
        display: flex;
        justify-content: space-between;
        margin-bottom: 31px;
        transition: all 0.5s;
      }

      .-content-item-j {
        position: relative;
        margin-right: 40px;

        .-content-img {
          width: 380px;
          height: 240px;
          display: inherit;
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
          display: inline-block;
          width: 805px;
          height: 374px;
          margin: 22px auto 0;
        }
      }

    }
  }
</style>
