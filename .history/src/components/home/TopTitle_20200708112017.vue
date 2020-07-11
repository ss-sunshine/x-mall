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
.title {
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border: 1px solid black;
  border-bottom: none;
  height: 60px;
  color: #626262;
  background: linear-gradient(
    to bottom,
    rgb(251, 251, 251),
    rgb(236, 236, 236)
  );
}
</style>