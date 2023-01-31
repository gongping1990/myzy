<template>
  <div class="p-base">
    <div class="p-base-header">
      <div class="-header-top">
        <div class="-header-top-tel">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zuoji"></use>
          </svg>
          服务热线：028-87799029
        </div>
      </div>
      <div class="-header-down">
        <img class="-header-down-logo" src="../assets/image/home/logo1.png"/>
        <div class="-header-down-right">
          <div class="-list" v-for="(list, index) of dataList" :key="index"
               :class="{'-active': dataItem.id === list.id}" @click="changeDropdown(list)">
            <el-dropdown @command="changeTabs" trigger="click" v-if="list.list.length">
              <div class="el-dropdown-link">
                {{list.title}}<i class="el-icon-arrow-down el-icon--right"></i>
              </div>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item :command="item" v-for="(item,index1) of list.list" :key="index1">{{item.title}}
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <div class="-list-title" v-else>{{list.title}}</div>
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
        dataList: [],
        pathUrl: {
          '217': '/home',
          '218': '/serve',
          '219': '/industryCase',
          '220': '',
          '221': '/joinUs',
          '222': ''
        },
        dataItem: '',
        navObj: {
          'index': '0',
          'serve': '1',
          'industryCase': '2',
          'innovate': '3',
          'joinUs': '4'
        }
      }
    },
    mounted() {
      this.getDictTypes()

      // console.log(this.$route,11111)
    },
    methods: {
      changeTabs(data) {
        this.$router.push(`${data.path}?id=${data.id}`)
      },
      getDictTypes() {
        this.$api.com.getDictTypes({
          key: 'sys_article'
        }).then(res => {
          let routeName = this.$route.name
          let storageData = res.data[0].list
          let aboutList = [
            {
              id: '1',
              title: '公司介绍',
              path: '/about'
            },
            // {
            //   id: '2',
            //   title: '董事长寄语',
            //   path: '/about'
            // },
            {
              id: '2',
              title: '荣誉资质',
              path: '/honor'
            },
            {
              id: '3',
              title: '联系我们',
              path: '/contact'
            }
          ]
          storageData.forEach(item => {
            this.dataList.push({
              id: +item.dictValue - 1,
              title: item.dictLabel,
              path: this.pathUrl[item.dictCode],
              list: item.dictCode === 222 ? aboutList : []
            })
          })

          if (['honor', 'contact', 'about'].indexOf(routeName) > -1) {
            this.dataItem = this.dataList[5]
          } else {
            this.dataItem = this.dataList[this.navObj[routeName]]
          }

        })
      },
      changeDropdown(data) {
        this.dataItem = data
        console.log(this.dataItem,1)
        if (!data.list.length) {
          this.$router.push(`${data.path}?id=${data.id}`)
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .p-base {
    min-width: 1366px;
    overflow-x: hidden;

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

            &-title {
              color: #606266;
            }

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
