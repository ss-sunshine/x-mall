<template>
  <div class="box f-a">
    <div v-for="item in activeSection" :key="item.id">
      <div class="p-r">
        <img
          :src="item.picUrl"
          alt
          class="card"
          @mouseenter="enter(item)"
          @mouseleave="leave(item)"
          :class="{'boxShadow':id===item.id}"
        />
        <a class="cover-link"></a>
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
    return {
      flag: false,
      id: ""
    };
  },
  methods: {
    enter(item) {
      this.id = item.id;
      console.log(item.id);
    },
    leave(item) {
      this.id = "";
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
@import "../../style/home/One";
</style>