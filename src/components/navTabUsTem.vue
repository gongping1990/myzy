<template>
  <div class="p-tab">
    <div class="p-tab-item"  v-for="(item, index) of tabList" :key="index" @click="changeTab(item)">
      <div class="-div" :class="{'-active': item.id === dataItem.id}">{{item.title}}</div><span v-if="index!==(tabList.length-1)">/</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "navTabUsTem",
    data() {
      return {
        dataItem: '',
        tabList: [
          {
            id: '1',
            title: '公司介绍',
            path: '/about'
          },
          // {
          //   id: '2',
          //   title: '董事长寄语',
          //   path: '/'
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
      }
    },
    mounted () {
      this.dataItem = this.tabList[+this.$route.query.id - 1]
    },
    methods: {
      changeTab(data) {
        this.dataItem = data
        this.$router.push(`${data.path}?id=${data.id}`)
      }
    }
  }
</script>

<style lang="less" scoped>
  .p-tab {
    display: flex;

    &-item {
      display: flex;
      box-sizing: border-box;
      border-bottom: 2px solid transparent;
      padding-top: 18px;
      font-weight: bolder;

      span {
        margin: 0 10px;
      }

      .-div {
        cursor: pointer;
        padding-bottom: 18px;
      }

      .-active {
        color: #126DE9;
        border-bottom: 2px solid #126DE9;
      }
    }
  }
</style>