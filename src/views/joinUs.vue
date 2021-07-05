<template>
  <div class="p-joinUs">
    <top-banner-tem :propData="bannerInfo"></top-banner-tem>
    <div>
      <breadcrumb-tem class="p-joinUs-bread"></breadcrumb-tem>

      <div class="p-joinUs-down">
        <label-tem class="-down-label" :prop-text="dataAllList.length && dataAllList[1].dictLabel"></label-tem>

        <el-collapse class="-down-collapse" v-model="activeNames">
          <el-collapse-item :name="item.id" v-for="(item, index) of workList" :key="index">
            <template slot="title">
              <div class="-down-collapse-title">
                <div>{{item.title}}</div>
              </div>
            </template>
            <div class="-down-collapse-detail">
              <div v-html="item.content"></div>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<script>

  import BreadcrumbTem from '../components/breadcrumbTem'
  import LabelTem from '../components/labelTem'
  import TopBannerTem from '../components/topBannerTem'

  export default {
    name: 'serve',
    components: {TopBannerTem, LabelTem, BreadcrumbTem},
    data() {
      return {
        bannerInfo: '',
        dataAllList: [],
        dataList: [],
        activeNames: '0',
        workList: []
      }
    },
    mounted () {
      this.getDictTypes()
    },
    methods: {
      getDictTypes() {
        this.$api.com.getDictTypes({
          key: 'jion_us_position'
        }).then(res => {
          this.dataAllList = res.data[0].list
          console.log(this.dataAllList, 1111)
          this.getList()
        })
      },
      getList() {
        this.$api.com.articleList({
          position: '',
          type: '5'
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
                    this.workList.push({
                      title: item.title,
                      content: item.content,
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
  .p-joinUs {

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
      background-color: #EDF1F2;
      padding: 0 330px;

      .-content-label {
        padding: 23px 0 73px;
      }

      .-content-itemWrap {
        display: flex;
        flex-flow: wrap;
      }

      .-content-item {
        position: relative;
        text-align: center;
        box-sizing: border-box;
        padding: 0 23px 13px;
        margin-right: 68px;
        width: 355px;
        /*height: 150px;*/
        background: #FFFFFF;
        border: 1px solid #E8E8E8;
        margin-bottom: 70px;

        .-img {
          position: absolute;
          top: -35px;
          left: 50%;
          transform: translateX(-50%);
          width: 70px;
          height: 70px;
          background: #126DE9;
          border-radius: 50%;
        }

        .-title {
          margin: 44px 0 14px;
          font-size: 16px;
          font-weight: 500;
          color: #126DE9;
        }

        .-text {
          text-align: left;
          font-size: 14px;
          font-weight: 400;
          color: #999999;
          line-height: 24px;
        }

        &:nth-child(3n) {
          margin-right: 0;
        }
      }
    }

    &-down {
      padding: 0 330px;
      margin-bottom: 30px;

      .-down-label {
        padding: 28px 0 38px;
      }

      .-down-collapse {
        margin-bottom: 47px;

        &-title {
          width: 100%;
          display: flex;
          font-size: 14px;
          font-weight: 400;
          color: #333333;
          justify-content: space-between;

          .-first-child {
            display: flex;
            align-items: center;

            &:before {
              content: '';
              display: inline-block;
              width: 1px;
              height: 22px;
              background: #126DE9;
              margin-right: 14px;
            }
          }

          .-color {
            margin-left: 18px;
            color: #09B82A;
          }
        }

        &-detail {
          text-align: left;
          display: flex;

          .-detail-wrap {
            font-size: 14px;
            font-weight: 400;
            color: #333333;
          }

          .-detail-text {
            margin-top: 18px;
            font-size: 12px;
            color: #999999;
          }

          .-detail-top {
            margin-top: 23px;
          }

          &:before {
            content: '';
            display: inline-block;
            width: 1px;
            background: #126DE9;
            margin-right: 14px;
          }
        }

      }
    }
  }
</style>
