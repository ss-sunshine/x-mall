<template>
  <div >
    <div v-for="(item,index) in activeSection" :key="index" class="box f-a">
      <div class="p-r img_card">
        <img
          :src="item.picUrl"
          alt
          class="card"
          @mouseenter="enter(item)"
          @mouseleave="leave(item)"
          :class="{'boxShadow':id===item.id,'borderRadius_left':index===0,'borderRadius_right':index===3,'card_border-right':index===3}"
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