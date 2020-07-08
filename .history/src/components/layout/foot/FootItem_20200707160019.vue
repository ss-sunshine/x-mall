<template>
  <div class="foot">
    <div class="F_content f-j">
      <div></div>
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