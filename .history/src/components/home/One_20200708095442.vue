<template>
  <div class="box f-a">
    <div v-for="item in activeSection" :key="item.id">
      <img
        :src="item.picUrl"
        alt
        class="card"
        @mouseenter="enter"
        @mouseleave="leave"
        :class="{'boxShadow':flag===true}"
      />
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
      flag: false
    };
  },
  methods: {
    enter() {
      this.flag = true;
    },
    leave(){
      this.flag = false;
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