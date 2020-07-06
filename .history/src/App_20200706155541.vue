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
  }
}
</script>

<style lang="scss">
</style>
