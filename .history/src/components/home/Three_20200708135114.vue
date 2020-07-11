<template>
  <div>
    <topTitle>
      <template v-slot:title>官方精选</template>
    </topTitle>
    <div>
        <div v-for="(item,index) in featured.splice(0,1)" :key="index">
            <img :src="item.picUrl" alt="">
        </div>
    </div>
  </div>
</template>

<script>
import TopTitle from "./TopTitle";
export default {
  name: "",
  props: {
    featured: {
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
</style>