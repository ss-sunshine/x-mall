<template>
 <div>

 </div>
</template>

<script>
 export default {
   name: 'DetailItem',
   props: {
   },
   components: {

   },
   data () {
     return {
productId:''
     }
   },
   methods: {

   },
   mounted() {
this.productId = this.$route.query.productId
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>