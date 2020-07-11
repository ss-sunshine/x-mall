<template>
  <div>
    <topTitle>
      <template v-slot:title>官方精选</template>
    </topTitle>
    <div class="box f-a">
        <div v-for="(item,index) in featured" :key="index" class="">
            <div v-if="index===0" class="banner1">
                <img :src="item.picUrl" alt="">
            </div>
            <div v-if="index>0&&index<3" class="banner1">
                <img :src="item.picUrl" alt="" class="image2">
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
</style>