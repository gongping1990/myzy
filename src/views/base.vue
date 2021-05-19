<template>
  <div class="p-base">
    <div class="p-base-header">
      <div class="-header-top">
        <div class="-header-top-icon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-weixin"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-qq"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-weibo"></use>
          </svg>
        </div>
        <div class="-header-top-tel">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zuoji"></use>
          </svg>
          服务热线：400-500-900
        </div>
      </div>
      <div class="-header-down">
        <img class="-header-down-logo" src="../assets/image/home/logo1.png"/>
        <div class="-header-down-right">
          <div class="-list" v-for="(list, index) of dataList" :key="index"
               :class="{'-active': dataItem.id === list.id}" @click="changeDropdown(list)">
            <el-dropdown @command="changeTabs" trigger="click">
              <div class="el-dropdown-link">
                {{list.title}}<i v-if="list.list.length" class="el-icon-arrow-down el-icon--right"></i>
              </div>
              <el-dropdown-menu slot="dropdown" v-if="list.list.length">
                <el-dropdown-item :command="item" v-for="(item,index1) of list.list" :key="index1">{{item.title}}
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>

      </div>
    </div>
    <router-view></router-view>
    <home-footer :prop-list="dataList"></home-footer>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HomeFooter from "../components/footer";

  export default {
    name: 'Home',
    components: {
      HomeFooter,
    },
    data() {
      return {
        dataList: [
          {
            id: '1',
            title: '服务',
            list: [
              {
                id: '1-1',
                title: '内容',
                path: ''
              },
              {
                id: '1-2',
                title: '内容',
                path: ''
              },
              {
                id: '1-3',
                title: '内容',
                path: ''
              },
              {
                id: '1-4',
                title: '内容',
                path: ''
              },
              {
                id: '1-5',
                title: '内容',
                path: ''
              }
            ]
          },
          {
            id: '2',
            title: '行业方案',
            list: [
              {
                id: '2-1',
                title: '企业新闻',
                path: ''
              },
              {
                id: '2-2',
                title: '行业动态',
                path: ''
              }
            ]
          },
          {
            id: '3',
            title: '创新研究',
            list: [
              {
                id: '3-1',
                title: '企业新闻',
                path: ''
              },
              {
                id: '3-2',
                title: '行业动态',
                path: ''
              },
              {
                id: '3-3',
                title: '荣誉纸质',
                path: ''
              }
            ]
          },
          {
            id: '4',
            title: '加入我们',
            path: '/joinUs',
            list: []
          },
          {
            id: '5',
            title: '关于我们',
            list: [
              {
                id: '5-1',
                title: '企业新闻',
                path: ''
              },
              {
                id: '5-2',
                title: '行业动态',
                path: ''
              },
              {
                id: '5-3',
                title: '荣誉纸质',
                path: ''
              },
              {
                id: '5-4',
                title: '公司环境',
                path: ''
              }
            ]
          },
        ],
        bannerList: [
          {
            img: require('../assets/image/home/banner1.jpg')
          },
          {
            img: require('../assets/image/home/banner2.jpg')
          },
          {
            img: require('../assets/image/home/banner3.jpg')
          },
        ],
        dataItem: ''
      }
    },
    mounted() {
      this.dataList.unshift({
        id: '0',
        title: '首页',
        path: '/home',
        list: []
      })
      this.dataItem = this.dataList[0]
    },
    methods: {
      changeTabs(data) {
        console.log(data)
      },
      changeDropdown(data) {
        this.dataItem = data
        if (!data.list.length) {
          this.$router.push(data.path)
        }
        console.log(data)
      }
    }
  }
</script>
<style lang="less">
  .p-base {
    .el-carousel__container {
      height: 451px !important;
    }
  }
</style>
<style lang="less" scoped>
  .p-base {
    min-width: 1366px;

    &-header {

      .-header-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: black;
        padding: 0 330px;
        height: 40px;
        color: #ffffff;

        &-icon {
          display: flex;

          .icon {
            font-size: 20px;
            margin-right: 16px;
          }
        }

        &-tel {
          display: flex;
          align-items: center;
          font-size: 16px;
          font-weight: 500;
          color: #FFFFFF;

          .icon {
            font-size: 20px;
            margin-right: 6px;
          }
        }
      }

      .-header-down {
        height: 120px;
        padding: 0 330px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        &-logo {
          width: 22%;
        }

        &-right {
          display: flex;
          border-top: 1px solid #E5E7E6;
          padding: 0 16px 0;

          .-list {
            margin-right: 28px;
            font-size: 14px;
            font-weight: bolder;
            color: #333333;
            cursor: pointer;
            padding: 20px 10px 0;
            border-top: 4px solid transparent;

            &:last-child {
              margin-right: 0;
            }

            &.-active {
              border-top: 4px solid #126DE9;
            }
          }
        }
      }
    }
  }
</style>
