<template>
  <div id="app">
    <router-view v-if="isRouterAlive"/>
  </div>
</template>

<script>
export default {
  provide(){
    return{
      reload:this.reload
    }
  },
  data(){
    return{
      isRouterAlive:true
    }
  },
  methods:{
    reload(){
      (this.isRouterAlive = false),
      this.$nextTick(()=>{
        this.isRouterAlive = true
      })
    }
  }
  // inject: ["reload"],  写在name上面
  // this.reload()   调用自动刷新当前页面
}
</script>

<style lang="scss">
</style>
