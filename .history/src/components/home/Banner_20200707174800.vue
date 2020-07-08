<template>
  <Carousel autoplay v-model="value2" loop>
    <div v-for="item in banner.panelContents" :key="item.id">
      <CarouselItem>
        <div>
          <img :src="item.picUrl" alt class="p-r"/>
          <img :src="item.picUrl2" alt class="p-r"/>
          <img :src="item.picUrl3" alt class="p-r"/>
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
</style>