<template>
  <Carousel autoplay v-model="value2" loop arrow="never">
      <CarouselItem>
          <img :src="image1.picUrl" alt/>
          <img :src="image1.picUrl2" alt class="p-r z-1"/>
          <img :src="image1.picUrl3" alt class="p-r z-2"/>
      </CarouselItem>
    <CarouselItem>
          <img :src="image2.picUrl" alt/>
          <img :src="image2.picUrl2" alt class="p-r z-1"/>
          <img :src="image2.picUrl3" alt class="p-r z-2"/>
      </CarouselItem>
    <CarouselItem>
          <img :src="image3.picUrl" alt class="p-r z-1"/>
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
      image1:{},
      image2:{},
      image3:{},
    };
  },
  methods: {},
  mounted() {
    this.banner.map(item=>{
      item.panelContents.map(item1=>{
        this.image1 = item1[0]
        this.image1 = item1[0]
        this.image1 = item1[0]
      })
    })
    console.log(this.image1);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
@import '../../style/home/Banner'
</style>