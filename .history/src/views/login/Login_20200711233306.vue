<template>
  <div>
    <div class="background f-a-j">
      <LoginItem @flag1='flag1'></LoginItem>
<registered></registered>
    </div>
  </div>
</template>

<script>
import Registered from "../../components/login/Registered";
import LoginItem from "../../components/login/LoginItem";
export default {
  name: "Login",
  props: {},
  components: {
    LoginItem,
    Registered
  },
  data() {
    return {
      flag1:''
    };
  },
  methods: {
    flag1(data){
      this.flag1=data
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.background{
    background: url("../../assets/bg_9b9dcb65ff.jpg");
    position: fixed;
    height: 100%;
    width: 100%;
}
</style>