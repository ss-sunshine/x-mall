<template>
  <Carousel autoplay v-model="value2" loop arrow="never">
    <div v-for="item in banner.panelContents" :key="item.id">
      <CarouselItem>
        <div class="p-a-t">
          <img :src="item.picUrl" alt />
          <img :src="item.picUrl2" alt class="z-2" />
          <img :src="item.picUrl3" alt class="z-1" />
        </div>
      </CarouselItem>
    </div>
  </Carousel>
</template>

<script>
export default {
  name: "Banner",
  props: {
    banner: {
      type: Object
    }
  },
  components: {},
  data() {
    return {
      value2: 0
    };
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
@import "../../style/home/Banner";
</style>