<template>
  <div>
    <div class="background f-a-j">
      <registered></registered>
    </div>
  </div>
</template>

<script>
import Registered from "../../components/login/Registered";
export default {
  name: "Register",
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
.background{
    background: url("../../assets/bg_9b9dcb65ff.jpg");
    position: fixed;
    height: 100%;
    width: 100%;
}
</style>