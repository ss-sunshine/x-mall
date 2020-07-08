<template>
  <Carousel autoplay v-model="value2" loop arrow="never">
    <div v-for="item in banner.panelContents" :key="item.id">
      <CarouselItem>
        <div class="image p-r">
          <img :src="item.picUrl" alt class="image1"/>
          <img :src="item.picUrl2" alt class="p-a-b image2" />
          <img :src="item.picUrl3" alt class="p-a-b image3" />
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
      value2: 0,
      panelContents:[],
      image1:[]
    };
  },
  methods: {},
  mounted() {
    this.panelContents = this.banner.panelContents
    console.log(this.panelContents);
    this.image1 = this.panelContents.splice(0,2)
    console.log(this.panelContents);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
@import "../../style/home/Banner";
</style>