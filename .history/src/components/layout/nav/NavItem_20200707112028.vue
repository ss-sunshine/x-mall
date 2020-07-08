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
          <div class="T_font-one p-lr-25">全部商品</div>
          <div class="T_font-one p-lr-25">捐赠</div>
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
    <div class="bottom"></div>
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
                name:'首页'
            },
            {
                name:'全部'
            },
            {
                name:'品牌周边'
            },
            {
                name:'捐赠名单'
            },
            {
                name:'后台管理系统'
            },
            {
                name:'XPay支付系统'
            },
            {
                name:'XBoot开发平台'
            },
            {
                name:'宣传视频'
            },
            {
                name:'Github'
            },
            {
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