<template>
  <div class="f-a box">
    <div v-for="item in activeSection" :key="item.id">
      <div class="card">
        <img :src="item.picUrl" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "One",
  props: {
    activeSection:{
      type:Array
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
</style>