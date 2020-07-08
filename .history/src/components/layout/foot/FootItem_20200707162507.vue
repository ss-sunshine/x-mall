<template>
  <div class="foot f-j">
    <div class="F_content f-j">
      <div class="f-a F_content_top">
        <div v-for="item in title" :key="item.id">
          <div class="f12 F_title">{{item.name}}</div>
          <div v-for="item1 in item.list" :key="item1.id">
            <div class="f12 F_title_item">{{item1}}</div>
          </div>
        </div>
        <div class="F_content_right">
            <div class="F_content_right_one">1012139570</div>
            <div class="F_content_right_two f12">周一至周日 10:00-23:00 (限Starrer或捐赠人联系)</div>
            <div>在线联系</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FootItem",
  props: {},
  components: {},
  data() {
    return {
      title: [
        {
          name: "订单服务",
          list: ["购买指南", "支付方式", "送货政策"]
        },
        {
          name: "服务支持",
          list: ["官方开源", "项目前端", "项目后端"]
        },
        {
          name: "自助服务",
          list: ["个人博客", "个人简介", "个人视频"]
        },
        {
          name: "其他项目",
          list: ["XPay支付系统", "数据共享", "待开发..."]
        },
        {
          name: "友情链接",
          list: ["宇cccc", "Smartisan", "Vue"]
        },
        {
          name: "关注我吧",
          list: ["腾讯QQ", "新浪微博", "官方邮箱"]
        }
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