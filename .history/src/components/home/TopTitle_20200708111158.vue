<template>
  <div>
    <slot name="title" class="title"></slot>
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
    height: 60px;
    background: linear-gradient(to bottom,rgb(0,0,0),rgb(255,255,255));
}
</style>