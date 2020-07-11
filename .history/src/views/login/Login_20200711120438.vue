<template>
  <div>
    <div class="background">
      <registered></registered>
    </div>
  </div>
</template>

<script>
import Registered from "../../components/login/Registered";
export default {
  name: "Login",
  props: {},
  components: {
    Registered
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