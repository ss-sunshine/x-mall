<template>
  <div>
    <div class="top f-j">
      <div class="T_content f-aj-bw">
        <div>
          <img src="../../../assets/资源 1.png" alt="logo" class="logo" />
        </div>
        <div class="T_right f-a">
          <div>
            <Input suffix="ios-search" placeholder="请输入商品信息" style="width: 305px" class="T_search" />
          </div>
          <div class="T_font-one p-lr-25 f14">全部商品</div>
          <div class="T_font-one p-lr-25 f14">捐赠</div>
          <div class="T_line m-lr-25"></div>
          <Icon type="md-person" size="24" color="rgb(153,153,153)" class="p-lr-25" />
          <div>
              <!-- <img src="../../../assets/微信图片_20200707110924.png" alt="" class="T-cart"> -->
            <Icon type="md-cart" size="24" color="rgb(153,153,153)"/>
            <Badge :count="3" class="T_count">
              <a href="#"></a>
            </Badge>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
        <div class="B_content f-a">
            <div v-for="item in navList" :key="item.id"></div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavItem",
  props: {},
  components: {},
  data() {
    return {
        navList:[
            {
                id:1,
                name:'首页'
            },
            {
                id:2,
                name:'全部'
            },
            {
                id:3,
                name:'品牌周边'
            },
            {
                id:4,
                name:'捐赠名单'
            },
            {
                id:5,
                name:'后台管理系统'
            },
            {
                id:6,
                name:'XPay支付系统'
            },
            {
                id:7,
                name:'XBoot开发平台'
            },
            {
                id:8,
                name:'宣传视频'
            },
            {
                id:9,
                name:'Github'
            },
            {
                id:10,
                name:'商用授权'
            },
        ]
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
@import "../../../style/Layout";
</style>