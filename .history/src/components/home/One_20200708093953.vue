<template>
  <div>
    <div v-for="item in activeSection" :key="item.id">
      <div class="box f-a">
        <img :src="item.picUrl" alt class="card" />
      </div>
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
</style>