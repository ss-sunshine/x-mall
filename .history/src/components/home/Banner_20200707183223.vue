<template>
  <Carousel autoplay v-model="value2" loop arrow="never">
    <CarouselItem>
      <div v-for="item in panelContents[0]" :key="item.id">
        <img :src="item.picUrl" alt />
        <img :src="item.picUrl2" alt class="p-r z-1" />
        <img :src="item.picUrl3" alt class="p-r z-2" />
      </div>
    </CarouselItem>
    <CarouselItem>
      <div v-for="item in panelContents[1]" :key="item.id">
        <img :src="item.picUrl" alt />
        <img :src="item.picUrl2" alt class="p-r z-1" />
        <img :src="item.picUrl3" alt class="p-r z-2" />
      </div>
    </CarouselItem>
    <CarouselItem>
      <div v-for="item in panelContents[2]" :key="item.id">
        <img :src="item.picUrl" alt />
      </div>
    </CarouselItem>
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
      value2: 0,
      panelContents: []
    };
  },
  methods: {},
  mounted() {
    this.panelContents = this.banner.panelContents;
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
@import "../../style/home/Banner";
</style>