<template>
  <div class="p-home">
    <div class="p-home-swiper">
      <el-carousel :autoplay="false">
        <el-carousel-item v-for="(item,index) in bannerList" :key="index">
          <img class="-img" :src="item.img"/>
        </el-carousel-item>
      </el-carousel>

      <!--<div class="-search-all">-->
      <!--<div class="-search-wrap">-->
      <!--<div>-->
      <!--<p>类别</p>-->
      <!--<el-select v-model="searchInfo.valueOne" placeholder="请选择" class="-width" @change="changeSelect()">-->
      <!--<el-option-->
      <!--v-for="item in 4"-->
      <!--:key="item.value"-->
      <!--:label="item.label"-->
      <!--:value="item.value">-->
      <!--</el-option>-->
      <!--</el-select>-->
      <!--</div>-->
      <!--<div>-->
      <!--<p>类别</p>-->
      <!--<el-select v-model="searchInfo.valueTwo" placeholder="请选择" class="-width">-->
      <!--<el-option-->
      <!--v-for="item in 2"-->
      <!--:key="item.value"-->
      <!--:label="item.label"-->
      <!--:value="item.value">-->
      <!--</el-option>-->
      <!--</el-select>-->
      <!--</div>-->
      <!--<div>-->
      <!--<p>类别</p>-->
      <!--<el-select v-model="searchInfo.valueThree" placeholder="请选择" class="-width">-->
      <!--<el-option-->
      <!--v-for="item in 3"-->
      <!--:key="item.value"-->
      <!--:label="item.label"-->
      <!--:value="item.value">-->
      <!--</el-option>-->
      <!--</el-select>-->
      <!--</div>-->
      <!--<div>-->
      <!--<p style="visibility: hidden">111</p>-->
      <!--<el-input-->
      <!--class="-width"-->
      <!--suffix-icon="el-icon-search"-->
      <!--placeholder="请输入您要搜索的内容"-->
      <!--v-model="searchInfo.valueInput"-->
      <!--@change="changeSearch()"-->
      <!--clearable>-->
      <!--</el-input>-->
      <!--</div>-->
      <!--</div>-->
      <!--</div>-->

    </div>
    <div class="p-home-c1 p-home-base">
      <p class="-b-p">{{dataAllList.length && dataAllList[1].remark}}</p>
      <img class="-b-img" src="../assets/image/home/fengexian.png"/>
      <p class="-b-title">{{dataAllList.length && dataAllList[1].dictLabel}}</p>
      <div class="-c1-wrap">
        <div class="-c1-wrap-item" v-for="(item,index) of dataOneList" :key="index">
          <div class="-item-bg">0{{index+1}}.</div>
          <div class="-item-title">{{item.title}}</div>
          <div class="-item-text" v-html="item.content"></div>
        </div>
      </div>
    </div>
    <div class="p-home-c2 p-home-base">
      <p class="-b-p">{{dataAllList.length && dataAllList[2].remark}}</p>
      <img class="-b-img" src="../assets/image/home/fengexian.png"/>
      <p class="-b-title">{{dataAllList.length && dataAllList[2].dictLabel}}</p>
      <div class="-c2-wrap">
        <div class="-c2-wrap-left">
          <img class="-left-img" src=""/>
          <p class="-left-title">我是标题我是标题我是标题</p>
          <div class="-left-text">4月5日集团公司召开2021年1季度工作总结会议，各分子公司分别介绍...</div>
        </div>
        <div class="-c2-wrap-right">
          <div class="-right-item" v-for="(item, index) of dataTwoList" :key="index">
            <div class="-index">0{{index+1}}</div>
            <div>
              <p class="-title">{{item.title}}</p>
              <div class="-item-text" v-html="item.content"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="p-home-c3 p-home-base">
      <p class="-b-p">{{dataAllList.length && dataAllList[3].remark}}</p>
      <img class="-b-img" src="../assets/image/home/fengexian.png"/>
      <p class="-b-title">{{dataAllList.length && dataAllList[3].dictLabel}}</p>
      <div class="-c3-wrap">
        <div class="-c3-wrap-item" v-for="(item, index) of dataThreeList" :key="index">
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="item.icon"></use>
          </svg>
          <p class="-title">{{item.title}}</p>
          <div class="-item-text" v-html="item.content"></div>
        </div>
      </div>
    </div>
    <div class="p-home-c4 p-home-base">
      <p class="-b-p">{{dataAllList.length && dataAllList[4].remark}}</p>
      <img class="-b-img" src="../assets/image/home/fengexian.png"/>
      <p class="-b-title">{{dataAllList.length && dataAllList[4].dictLabel}}</p>
      <div class="-c4-wrap">
        <div class="-c4-wrap-flex">
          <div class="-c4-wrap-item" :class="{'-active': dataItem.title === item.title}"
               v-for="(item, index) of dataFourList" :key="index" @click="changeTab(item)">
            {{item.title}}
          </div>
        </div>

        <div class="-c4-wrap-text">{{dataItem.content}}</div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Home',
    data() {
      return {
        searchInfo: {
          valueOne: '',
          valueTwo: '',
          valueThree: '',
          valueInput: ''
        },
        dataItem: '',
        selectList: [],
        dataAllList: [],
        bannerList: [
          {
            img: require('../assets/image/home/banner1.png')
          },
          {
            img: require('../assets/image/home/banner2.jpg')
          },
          {
            img: require('../assets/image/home/banner3.jpg')
          }
        ],
        dataOneList: [
          {
            title: '法律咨询服务',
            content: '良好的技术支持体系是保质保量完成项目的关键因素之一，我公司自成立以来已吸纳多个行业领域的高端技术人'
          },
          {
            title: '资产评估服务',
            content: '良好的技术支持体系是保质保量完成项目的关键因素之一，我公司自成立以来已吸纳多个行业领域的高端技术人'
          },
          {
            title: '法律咨询服务',
            content: '良好的技术支持体系是保质保量完成项目的关键因素之一，我公司自成立以来已吸纳多个行业领域的高端技术人'
          }
        ],
        dataTwoList: [
          {
            title: '标题',
            content: '良好的技术支持体系是保质保量完成项目的关键因素之一，我公司自成立以来已吸纳多个行业领域的高端技术人'
          },
          {
            title: '标题',
            content: '良好的技术支持体系是保质保量完成项目的关键因素之一，我公司自成立以来已吸纳多个行业领域的高端技术人'
          },
          {
            title: '标题',
            content: '良好的技术支持体系是保质保量完成项目的关键因素之一，我公司自成立以来已吸纳多个行业领域的高端技术人'
          },
          {
            title: '标题',
            content: '良好的技术支持体系是保质保量完成项目的关键因素之一，我公司自成立以来已吸纳多个行业领域的高端技术人'
          }
        ],
        dataThreeList: [
          {
            icon: '#icon-falvzixun-copy',
            title: '专业的法律',
            content: '事务所还组建了由经济、会计、工程等领域具备教授级高级工程师、教授职称资格的专家、学者，以及律师组成的专家委员会，' +
                '负责制定内部执业标准，开发服务产品，制定重大项目实施方案、评审重要项目'
          },
          {
            icon: '#icon-dingqipinggu',
            title: '评估能力',
            content: '良好的技术支持体系是保质保量完成项目的关键因素之一，我公司自成立以来已吸纳多个行业领域的高端技术人'
          },
          {
            icon: '#icon-fuwu',
            title: '优质的服务',
            content: '良好的技术支持体系是保质保量完成项目的关键因素之一，我公司自成立以来已吸纳多个行业领域的高端技术人'
          },
          {
            icon: '#icon-shouhou--copy',
            title: '长久的售后',
            content: '良好的技术支持体系是保质保量完成项目的关键因素之一，我公司自成立以来已吸纳多个行业领域的高端技术人'
          }
        ],
        dataFourList: [
          {
            title: '文案一',
            content: '事务所还组建了由经济、会计、工程等领域具备教授级高级工程师、教授职称资格的专家、学者，以及律师组成的专家委员会，' +
                '负责制定内部执业标准，开发服务产品，制定重大项目实施方案、评审重要项目'
          },
          {
            title: '文案二',
            content: '良好的技术支持体系是保质保量完成项目的关键因素之一，我公司自成立以来已吸纳多个行业领域的高端技术人'
          },
          {
            title: '文案三',
            content: '良好的技术支持体系是保质保量完成项目的关键因素之一，我公司自成立以来已吸纳多个行业领域的高端技术人'
          },
          {
            title: '文案四',
            content: '良好的技术支持体系是保质保量完成项目的关键因素之一，我公司自成立以来已吸纳多个行业领域的高端技术人'
          }
        ]
      }
    },
    mounted() {
      this.getDictTypes()
      this.getList()
      this.dataItem = this.dataFourList[0]
    },
    methods: {
      getDictTypes() {
        this.$api.com.getDictTypes({
          key: 'home_position'
        }).then(res => {
          this.dataAllList = res.data[0].list
        })
      },
      getList() {
        this.$api.com.articleList({
          position: '',
          type: '1'
        }).then(res => {
          let storageList = res.data
          this.dataOneList = []
          this.dataTwoList = []
          this.dataThreeList = []
          this.dataFourList = []

          storageList.forEach(item => {
            switch (+item.position) {
              case 1:
                this.dataOneList.push({
                  title: item.title,
                  content: item.content
                })
                break
              case 2:
                this.dataTwoList.push({
                  title: item.title,
                  content: item.content
                })
                break
              case 3:
                this.dataThreeList.push({
                  title: item.title,
                  content: item.content
                })
                break
              case 4:
                this.dataFourList.push({
                  title: item.title,
                  content: item.content
                })
                break
            }
          })
          console.log(this.dataOneList)
          console.log(this.dataTwoList)
          console.log(this.dataThreeList)
          console.log(this.dataFourList)
        })
      },
      changeTab(data) {
        this.dataItem = data
      },
      changeSelect() {
        console.log(2222)
      },
      changeSearch() {
        console.log(11111)
      }
    }
  }
</script>
<style lang="less">
  .p-home {
    .el-carousel__container {
      height: 6rem !important;
    }
  }
</style>
<style lang="less" scoped>
  .p-home {
    &-swiper {
      position: relative;

      .-img {
        width: 100%;
      }

      .-search-all {
        position: absolute;
        bottom: 80px;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        padding: 0 330px;
        z-index: 3;
      }

      .-search-wrap {
        display: flex;
        justify-content: space-between;
        text-align: left;
        padding: 32px 16px 51px;
        background: rgba(0, 0, 0, 0.5);
        width: 1200px;
        margin: 0 auto;

        p {
          margin-bottom: 13px;
          font-size: 14px;
          font-weight: 400;
          color: #FFFFFF;
        }

        .-width {
          width: 285px;
        }
      }
    }

    &-base {
      .-b-p {
        font-size: 30px;
        font-weight: 300;
        color: #333333;
      }

      .-b-img {
        margin: 23px 0 19px;
        width: 361px;
      }

      .-b-title {
        font-size: 30px;
        font-weight: 700;
        color: #333333;
      }
    }

    &-c1 {
      text-align: center;
      padding: 53px 330px 97px;

      .-c1-wrap {
        display: flex;
        margin-top: 52px;
        justify-content: space-between;

        &-item {
          .-item-bg {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 313px;
            height: 138px;
            /*height: 100%;*/
            background: url("../assets/image/home/num-bg.png") no-repeat;
            background-size: 100%;
            font-size: 30px;
            font-weight: bold;
            color: #126DE9;
          }

          .-item-title {
            margin: 15px 0 12px;
            font-size: 18px;
            font-weight: bold;
            color: #333333;
          }

          .-item-text {
            font-size: 14px;
            font-weight: 400;
            color: #999999;
            line-height: 20px;
            width: 290px;
          }
        }
      }
    }

    &-c2 {
      background: #EDF1F2;
      padding: 60px 330px 44px;

      .-c2-wrap {
        display: flex;
        justify-content: space-between;
        margin-top: 51px;

        &-left {
          box-sizing: border-box;
          width: 488px;
          height: 454px;
          padding-top: 20px;
          background: #FFFFFF;
          text-align: center;

          .-left-img {
            width: 442px;
            height: 303px;
          }

          .-left-title {
            padding: 0 20px;
            text-align: left;
            margin: 18px 0;
            font-size: 16px;
            font-weight: bold;
            color: #1E3485;
          }

          .-left-text {
            padding: 0 20px;
            text-align: left;
            font-size: 14px;
            font-weight: 400;
            color: #999999;
            line-height: 20px;
          }
        }

        &-right {
          box-sizing: border-box;
          width: 690px;
          height: 454px;
          padding: 0 6px;
          background: #FFFFFF;

          .-right-item {
            display: flex;
            align-items: center;
            text-align: left;
            border-bottom: 1px solid #EEEEEE;
            padding: 30px 0 20px;

            .-index {
              margin: 0 43px 0 60px;
              font-size: 40px;
              font-weight: bolder;
              color: #666666;
              line-height: 18px;
            }

            .-title {
              margin-bottom: 11px;
              font-size: 16px;
              font-weight: bold;
              color: #666666;
              line-height: 18px;
            }

            .-text {
              font-size: 12px;
              font-weight: 400;
              color: #999999;
              line-height: 18px;
            }

            &:last-child {
              border-bottom: none;
            }
          }
        }
      }
    }

    &-c3 {
      background: url("../assets/image/home/pic1.png") no-repeat;
      background-size: cover;
      height: 590px;
      width: 100%;
      padding: 40px 0 0;

      .-b-title {
        color: #ffffff !important;
      }

      .-c3-wrap {
        padding: 54px 330px 0;
        display: flex;
        justify-content: space-between;

        &-item {
          padding: 46px 30px 31px;
          width: 225px;
          /*height: 243px;*/
          font-size: 14px;
          font-weight: 400;
          color: #666666;
          background-color: #ffffff;

          .icon {
            font-size: 60px;
            color: #126DE9;
          }

          .-title {
            margin: 24px 0 20px;
            font-size: 18px;
            font-weight: bolder;
            color: #333333;
          }

          .-text {
            font-size: 14px;
            font-weight: 400;
            color: #666666;
          }
        }
      }
    }

    &-c4 {
      padding: 46px 0 65px;

      .-c4-wrap {
        margin-top: 37px;
        padding: 0 330px;

        &-flex {
          display: flex;
          justify-content: space-between;
        }

        &-item {
          text-align: center;
          width: 290px;
          height: 44px;
          line-height: 44px;
          background: #C2C2C2;
          font-size: 14px;
          font-weight: 500;
          color: #FFFFFF;
          cursor: pointer;

          &.-active {
            background-color: #126DE9;
          }
        }

        &-text {
          text-align: left;
          padding: 39px 28px 52px;
          background: #F8F8F8;
          font-size: 16px;
          font-weight: 400;
          color: #000000;
          line-height: 36px;
        }
      }
    }
  }
</style>
