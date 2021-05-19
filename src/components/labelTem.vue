<template>
  <div class="p-labelTem">
    {{propText}}
  </div>
</template>

<script>
  export default {
    name: "labelTem",
    props: ['propText']
  }
</script>

<style lang="less" scoped>
  .p-labelTem {
    display: flex;
    font-size: 20px;
    font-weight: bold;
    color: #126DE9;

    &:before {
      content: '';
      background: url("../assets/image/home/title-bg1.png");
      background-size: 100%;
      width: 4px;
      height: 25px;
      /*background: #126DE9;*/
      display: inline-block;
      margin-right: 8px;
    }
  }
</style>
