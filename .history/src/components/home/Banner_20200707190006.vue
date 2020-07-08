<template>
  <Carousel autoplay v-model="value2" loop arrow="never">
    <div v-for="item in banner.panelContents.splice(0,2)" :key="item.id">
      <CarouselItem>
        <div class="box p-r">
          <img :src="item.picUrl" alt />
          <img :src="item.picUrl2" alt class="p-a-b z-2" />
          <img :src="item.picUrl3" alt class="p-a-b z-1" />
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
  mounted() {
    this.panelContents = this.banner.panelContents
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
@import "../../style/home/Banner";
</style>