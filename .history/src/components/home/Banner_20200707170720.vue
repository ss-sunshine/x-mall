<template>
 <div>

 </div>
</template>

<script>
 export default {
   name: 'Banner',
   props: {
   },
   components: {

   },
   data () {
     return {

     }
   },
   methods: {
     getHome(){
       this.$api.getHome().then(res=>{
         console.log(res);
       }).catch(err=>{
         console.log(err);
       })
     }
   },
   mounted() {
     this.getHome()
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>