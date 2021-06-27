<template>
  <div class="p-serve">
    <top-banner-tem propDes="这个是测试文案3"></top-banner-tem>
    <div>
      <breadcrumb-tem class="p-serve-bread"></breadcrumb-tem>
      <div class="p-serve-content">
        <div class="-content-item" v-for="(item, index) of dataList" :key="index">
          <label-tem class="-content-label" :prop-text="item.dictLabel"></label-tem>
          <div class="-content-des" :class="{'-second': index%2 === 0}">
            <img class="-content-img" :src="item.imgUrl"/>
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
        dataList: [
          {
            imgUrl: '',
            title: '审计',
            content: '良好的技术支持体系是保质保量完成项目的关键因素之一，我公司自成立以来已吸纳多个行业领域的高端技术人才，形成了完善、强大的技术支持体系良好的技术支持体系是保质保量完成项目的关键因素之一，我公司自成立以来已吸纳多个行业领域的高端技术人才，形成了完善、强大的技术支持体系良好的技术支持体系是保质保量完成项目的关键因素之一，我公司自成立以来已吸纳多个行业领域的高端技术人才，形成了完善、强大的技术支持体系良好的技术支持体系是保质保量完成项目的关键因素之一，\n' +
                '我公司自成立以来已吸纳多个行业领域的高端技术人才，形成了完善、强大的技术支持体系良好的技术支持体系是保质保量完成项目的关键因素之一，我公司自成立以来已吸纳多个行业领域的高端技术人才，形成了完善、强大的技术支持体系良好的技术支持体系是保质保量完成项目的关键因素之一，我公司自成立以来已吸纳多个行业领域的高端技术人才，形成了完善、强大的技术支持体系良好的技术支持体系是保质保量完成项目的关键因素之一，我公司自成立以来已吸纳多个行业领域的高端技术人才，形成了完善、强大的技术支持体系良好的技术支持体系是保质保量完成项目的关键因素之一，我公司自成立以来已吸纳多个行业领域的高端技术人才，形成了完善、强大的技术支持体系良好的技术支持体系是保质保量完成项目的关键因素之一，我公司自成立以来已吸纳多个行业领域的高端技术人.\n' +
                '体系是保质保量完成项目的关键因素之一，我公司自成立以来已吸纳多个行业领域的高端技术人才，形成了完善、强大的技术支持体系良好的技术支持体系是保质保量完成项目的关键因素之一，我公司自成立以来已吸纳多个行业领域的高端技术人才，形成了完善、强大的技术支持体系良好的技术支持体系是保质保量完成项目的关键因素之一，我公司自成立以来已吸纳多个行业领域的高端技术人才，形成了完善、强大的技术支持体系'
          },
          {
            imgUrl: '',
            title: '评估',
            content: '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案'
          },
          {
            imgUrl: '',
            title: '科研',
            content: '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案'
          },
          {
            imgUrl: '',
            title: '培训',
            content: '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案'
          }
        ],
        activeNames: '0',
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
          let storageList = res.data
          this.dataList = this.dataAllList
          this.dataList.splice(0,1)
          console.log(this.dataList,1)
          this.dataList.forEach(list=>{
            storageList.forEach(item=>{
              if (list.dictValue === item.position) {
                list.content = item.content
                list.imgurl = item.face
              }
            })
          })
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
