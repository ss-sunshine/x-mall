<template>
  <div class="f-a">
    <div v-for="item in activeSection.panelContents" :key="item.id">
      <div class="card f-1"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "One",
  props: {
    activeSection:{
      type:Object
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