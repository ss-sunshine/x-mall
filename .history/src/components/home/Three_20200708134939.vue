<template>
  <div>
    <topTitle>
      <template v-slot:title>官方精选</template>
    </topTitle>
    <div>
        <div v-for="(item,index) in featured" :key="index" class="f-1"></div>
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