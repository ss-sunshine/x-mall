<template>
  <div>
    <div class="top f-j">
      <div class="T_content f-aj-bw">
        <div>
            <img src="../../../assets/资源 1.png" alt="logo" class="logo" />
        </div>
        <div class="T_right f-a">
          <div>
            <Input suffix="ios-search" placeholder="请输入商品信息" style="width: 305px" class="T_search"/>
          </div>
          <div class="T_font-one p-lr-25">全部商品</div>
          <div class="T_font-one p-lr-25">捐赠</div>
          <div class="T_line  m-lr-25"></div>
          <Icon type="md-person" size="20" color="#c8c8c8"/>
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
    return {};
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