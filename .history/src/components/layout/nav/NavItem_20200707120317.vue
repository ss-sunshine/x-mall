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
            <Icon type="md-cart" size="24" color="rgb(153,153,153)" />
            <Badge :count="3" class="T_count">
              <a href="#"></a>
            </Badge>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom f-j">
      <div class="B_content f-a">
        <div v-for="item in navList" :key="item.id">
          <div class="f-a">
            <div class="srot"></div>
            <div class="f14 p-lr-1 B_nav" @click="clickBottom(item)" :class="{'f-w-7':num===item.id}">{{item.name}}</div>
          </div>
        </div>
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
      navList: [
        {
          id: 1,
          name: "首页",
          path:'/'
        },
        {
          id: 2,
          name: "全部",
          path:'/all'
        },
        {
          id: 3,
          name: "品牌周边",
          path:'/other'
        },
        {
          id: 4,
          name: "捐赠名单",
          path:'/other'
        },
        {
          id: 5,
          name: "后台管理系统",
          path:'/other'
        },
        {
          id: 6,
          name: "XPay支付系统",
          path:'/other'
        },
        {
          id: 7,
          name: "XBoot开发平台",
          path:'/other'
        },
        {
          id: 8,
          name: "宣传视频",
          path:'/other'
        },
        {
          id: 9,
          name: "Github",
          path:'/other'
        },
        {
          id: 10,
          name: "商用授权",
          path:'/other'
        }
      ],
      num:1,
      name:"",
      id:""
    };
  },
  methods: {
      clickBottom(item){
          this.num = item.id
          this.$router.push(item.path)
      }
  },
  mounted() {
      this.navList.map(item=>{
          this.id = item.id
      })
      this.num = this.id
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
@import "../../../style/Layout";
</style>