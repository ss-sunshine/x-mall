<template>
  <div class="m-b-3">
    <Carousel autoplay v-model="value" loop arrow="never" :radius-dot="true">
      <div v-for="item in banner.panelContents" :key="item.id">
        <CarouselItem>
          <div class="image" @click="detail(item,index)">
            <img :src="item.picUrl" alt class="image1" />
            <img :src="item.picUrl2" alt class="p-r image2" />
            <img :src="item.picUrl3" alt class="p-r image3" />
            <div class="dots p-r f-j">
              <div class="radius-dot" :class="{'radius-dots':id===item.id}"></div>
              <div class="radius-dot" :class="{'radius-dots':id===item.id}"></div>
              <div class="radius-dot" :class="{'radius-dots':id===item.id}"></div>
            </div>
          </div>
        </CarouselItem>
      </div>
    </Carousel>
  </div>
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
      value: 0,
      id: ""
    };
  },
  methods: {
    detail(item, index) {
      this.$router.push({ path: "/detail", query: { id: item.id } });
    },
  },
  mounted() {
    // this.swiperChange()
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
@import "../../style/home/Banner";
</style>