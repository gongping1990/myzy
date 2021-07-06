<template>
  <div class="p-footer">
    <div class="p-footer-top">
      <div class="p-footer-left">
        <div class="-left-list" v-for="(list, index) of dataList" :key="index">
          <div class="-left-list-title">{{list.title}}</div>
          <div class="-left-list-item" v-for="(item, index1) of list.list" :key="index1" @click="jumpUrl(item)">
            {{item.title}}
          </div>
        </div>
      </div>
      <div class="p-footer-right">
        <div class="-right-top">
          <img class="-logo" src="../assets/image/home/logo2.png"/>
          <div class="-code">
            <img src="../assets/image/home/qzy.png"/>
            <div>微信公众号</div>
          </div>
        </div>
        <div class="-right-down">
          <div class="-right-down-item" v-for="(item,index) of companyList" :key="index">
            <span>{{item.title}}:</span> <span class="-text" v-html="item.content"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="p-footer-down" v-html="keepInfo">

    </div>
  </div>
</template>

<script>
  export default {
    name: 'homeFooter',
    props: ['propList'],
    data () {
      return {
        dataList: this.propList,
        keepInfo: '',
        companyList: []
      }
    },
    mounted() {
      this.getList()
    },
    methods: {
      jumpUrl (data) {
        this.$router.push(`${data.path}?id=${data.id}`)
      },
      getList() {
        this.$api.com.articleList({
          position: '',
          type: '6'
        }).then(res => {
          let storageList = res.data
          storageList.forEach(item=>{
             if (item.position === '3' && item.title !== '地图' && item.title !== '备案号') {
               this.companyList.push ({
                 ...item,
                 face: `${this.$store.state.baseImgUrl}${item.face}`
               })
            } else if (item.title === '备案号') {
               this.keepInfo = item.content
             }
          })
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .p-footer {
    background: #34363A;
    padding: 0 330px;
    color: #ffffff;

    &-top {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #5D5E61;
      padding-bottom: 44px;
      margin-bottom: 13px;
    }

    &-left {
      display: flex;
      margin-top: 46px;

      .-left-list {
        margin-right: 99px;

        &-title {
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 24px;
        }

        &-item {
          font-size: 14px;
          font-weight: 300;
          margin-bottom: 24px;
          cursor: pointer;

          &:hover {
            color: #479AFF;
          }
        }

        &:last-child {
          margin-right: 0
        }
      }
    }

    &-right {
      margin-top: 21px;

      .-right-top {
        display: flex;
        justify-content: space-between;
        margin-bottom: 23px;

        .-logo {
          width: 128px;
          height: 128px;
        }

        .-code {
          margin-left: 50px;
          text-align: center;
          font-size: 14px;
          font-weight: 400;

          img {
            margin-bottom: 8px;
            width: 122px;
            height: 125px;
          }
        }
      }

      .-right-down {
        text-align: left;

        &-item {
          display: flex;
          margin-bottom: 8px;

          .-text {
            margin-left: 10px;
          }
        }
      }
    }

    &-down {
      padding-bottom: 59px;
      font-size: 12px;
      color: #ffffff;
    }
  }
</style>