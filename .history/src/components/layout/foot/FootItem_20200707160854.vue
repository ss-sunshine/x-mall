<template>
  <div class="foot">
    <div class="F_content f-j">
      <div>
          <div v-for="item in title" :key="item.id" class="f-a">
              <div class="f12 F_title">{{item.name}}</div>
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