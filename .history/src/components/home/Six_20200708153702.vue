<template>
  <div class="box f-a">
    <div v-for="(item,index) in footer.slice(1)" :key="index">
      <div class="p-r img_card f-1">
        <img
          :src="item.picUrl"
          alt
          class="card"
          @mouseenter="enter(item)"
          @mouseleave="leave(item)"
          :class="{'borderRadius_left':index===0,'borderRadius_right':index===3,'card_border-right':index===3}"
        />
        <a class="cover-link" :class="{'borderRadius_left':index===0,'borderRadius_right':index===3,'card_border-right':index===3}"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "One",
  props: {
    footer: {
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