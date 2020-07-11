<template>
  <div>
    <topTitle>
      <template v-slot:title>官方精选</template>
    </topTitle>
    <div class="box">
      <div class="d-f">
        <div v-for="(item,index) in featured.slice(0,3)" :key="index" class="f-1">
          <div v-if="index===0">
            <img :src="item.picUrl" alt class="image1" />
          </div>
          <div v-if="index!==0" class="banner1 f-1">
            <div>
                <img :src="item.picUrl" alt class="image2" />
            </div>
          </div>
        </div>
      </div>
      <div class="d-f">
        <div v-for="(item,index) in featured.slice(3)" :key="index" class="f-1">
          <!-- <div v-if="index>2"> -->
            <img :src="item.picUrl" alt class="image2" />
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopTitle from "./TopTitle";
export default {
  name: "",
  props: {
    featured: {
      type: Array
    }
  },
  components: {
    TopTitle
  },
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
@import "../../style/home/Three";
</style>