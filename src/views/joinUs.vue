<template>
  <div class="p-joinUs">
    <top-banner-tem propDes="这个是测试文案"></top-banner-tem>
    <div>
      <breadcrumb-tem class="p-joinUs-bread"></breadcrumb-tem>
      <div class="p-joinUs-content">
        <label-tem class="-content-label" prop-text="为什么选择川宇"></label-tem>
        <div class="-content-itemWrap">
          <div class="-content-item" v-for="(item, index) of dataList" :key="index">
            <div class="-img"></div>
            <div class="-title">{{item.title}}</div>
            <div class="-text">{{item.content}}</div>
          </div>
        </div>
      </div>

      <div class="p-joinUs-down">
        <label-tem class="-down-label" prop-text="在招岗位"></label-tem>
        <el-collapse class="-down-collapse" v-model="activeNames">
          <el-collapse-item :name="item.id" v-for="(item, index) of workList" :key="index">
            <template slot="title">
              <div class="-down-collapse-title">
                <div class="-first-child">{{item.title}}<span class="-color">{{item.price}}</span></div>

                <span>{{item.post}}</span>
                <span>{{item.department}}</span>
              </div>
            </template>
            <div class="-down-collapse-detail">
              <div>
                <div>
                  <p>岗位职责：</p>
                  <div class="-detail-text">{{item.duty}}</div>
                </div>
                <div class="-detail-wrap -detail-top">
                  <p>岗位要求：</p>
                  <div class="-detail-text">{{item.requirement}}</div>
                </div>
                <div class="-detail-top">投递邮箱： {{item.mailbox}}</div>
                <div>邮件主题： {{item.theme}}</div>
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
        <el-pagination background layout="prev, pager, next" :total="1" @size-change="sizePage"></el-pagination>
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
        dataList: [
          {
            imgUrl: '',
            title: '固定工资',
            content: '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案'
          },
          {
            imgUrl: '',
            title: '固定工资',
            content: '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案'
          },
          {
            imgUrl: '',
            title: '固定工资',
            content: '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案'
          },
          {
            imgUrl: '',
            title: '固定工资',
            content: '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案'
          },
          {
            imgUrl: '',
            title: '固定工资',
            content: '文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案'
          }
        ],
        activeNames: '0',
        workList: [
          {
            id: '1',
            title: '测试工程师',
            price: '10k - 20k',
            post: '技术',
            department: '研发部',
            requirement: '1.文案文案文案文案文案\n' +
                '2.文案文案文案文案文案\n' +
                '3.文案文案文案文案文案\n' +
                '4.文案文案文案文案文案',
            duty: '1.文案文案文案文案文案\n' +
                '2.文案文案文案文案文案\n' +
                '3.文案文案文案文案文案\n' +
                '4.文案文案文案文案文案',
            mailbox: 'xxxx@xxxx.com',
            theme: '职位+姓名'
          },
          {
            id: '2',
            title: '测试工程师',
            price: '10k - 20k',
            post: '技术',
            department: '研发部',
            requirement: '1.文案文案文案文案文案\n' +
                '2.文案文案文案文案文案\n' +
                '3.文案文案文案文案文案\n' +
                '4.文案文案文案文案文案',
            duty: '1.文案文案文案文案文案\n' +
                '2.文案文案文案文案文案\n' +
                '3.文案文案文案文案文案\n' +
                '4.文案文案文案文案文案',
            mailbox: 'xxxx@xxxx.com',
            theme: '职位+姓名'
          },
          {
            id: '4',
            title: '测试工程师',
            price: '10k - 20k',
            post: '技术',
            department: '研发部',
            requirement: '1.文案文案文案文案文案\n' +
                '2.文案文案文案文案文案\n' +
                '3.文案文案文案文案文案\n' +
                '4.文案文案文案文案文案',
            duty: '1.文案文案文案文案文案\n' +
                '2.文案文案文案文案文案\n' +
                '3.文案文案文案文案文案\n' +
                '4.文案文案文案文案文案',
            mailbox: 'xxxx@xxxx.com',
            theme: '职位+姓名'
          },
          {
            id: '3',
            title: '测试工程师',
            price: '10k - 20k',
            post: '技术',
            department: '研发部',
            requirement: '1.文案文案文案文案文案\n' +
                '2.文案文案文案文案文案\n' +
                '3.文案文案文案文案文案\n' +
                '4.文案文案文案文案文案',
            duty: '1.文案文案文案文案文案\n' +
                '2.文案文案文案文案文案\n' +
                '3.文案文案文案文案文案\n' +
                '4.文案文案文案文案文案',
            mailbox: 'xxxx@xxxx.com',
            theme: '职位+姓名'
          },
          {
            id: '5',
            title: '测试工程师',
            price: '10k - 20k',
            post: '技术',
            department: '研发部',
            requirement: '1.文案文案文案文案文案\n' +
                '2.文案文案文案文案文案\n' +
                '3.文案文案文案文案文案\n' +
                '4.文案文案文案文案文案',
            duty: '1.文案文案文案文案文案\n' +
                '2.文案文案文案文案文案\n' +
                '3.文案文案文案文案文案\n' +
                '4.文案文案文案文案文案',
            mailbox: 'xxxx@xxxx.com',
            theme: '职位+姓名'
          }
        ]
      }
    },
    methods: {
      handleChange() {

      },
      sizePage () {

      }
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
