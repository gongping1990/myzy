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
          <p>公司地址：成都市武侯区武科南路二号1908室</p>
          <p>联系电话：028-88888888888</p>
          <p>公司邮箱：VVVVVVV@qq.com</p>
        </div>
      </div>
    </div>
    <div class="p-footer-down">
      <span class="-span1">@Copyrights 2016-2020 川宇置业有限公司</span>
      <span> 蜀ICP备20012894号-1</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'homeFooter',
    props: ['propList'],
    data () {
      return {
        dataList: this.propList
      }
    },
    methods: {
      jumpUrl (data) {
        this.$router.push(`${data.path}?id=${data.id}`)
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

        p {
          margin-bottom: 8px;
        }
      }
    }

    &-down {
      padding-bottom: 59px;
      font-size: 12px;
      color: #ffffff;
      .-span1 {
        color: #A5A5A5;
      }
    }
  }
</style>