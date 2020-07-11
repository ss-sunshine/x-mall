<template>
  <div class="title f-a f18 p-l-2">
    <slot name="title"></slot>
  </div>
</template>

<script>
export default {
  name: "TopTitle",
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
.title{
    border-radius: 6px;
    height: 60px;
    background: linear-gradient(to bottom,rgb(251,251,251),rgb(236,236,236));
}
</style>