<template>
  <div class="box f-a">
    <div v-for="item in activeSection" :key="item.id">
        <img :src="item.picUrl" alt class="card boxShadow" />
    </div>
  </div>
</template>

<script>
export default {
  name: "One",
  props: {
    activeSection: {
      type: Array
    }
  },
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
@import "../../style/home/One"
</style>