<template>
  <div>
    <div class="top f12 f-a">
      <div>
        <div v-for="(item,index) in top" :key="index">
          <div class="p-lr-15">{{item}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AllItem",
  props: {},
  components: {},
  data() {
    return {
      top: ["综合排序", "价格从低到高", "价格从高到低"]
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>