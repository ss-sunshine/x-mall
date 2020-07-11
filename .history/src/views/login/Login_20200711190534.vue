<template>
  <div>
    <div class="f-a-j">
      <LoginItem></LoginItem>
    </div>
  </div>
</template>

<script>
import LoginItem from "../../components/login/LoginItem";
export default {
  name: "Login",
  props: {},
  components: {
    LoginItem
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
@import "../../style/login";
</style>