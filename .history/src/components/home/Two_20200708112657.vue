<template>
  <div class="m-tb-3">
    <topTitle>
      <template v-slot:title>热门商品</template>
    </topTitle>
    <div>
      <div v-for="(item,index) in hot" :key="index">
        <div class="H_item f-1">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopTitle from "./TopTitle"
export default {
  name: "Two",
  props: {
    hot: {
      type: Array
    }
  },
  components: {
    TopTitle
  },
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
@import "../../style/home/Two"
</style>