<template>
  <div>
    <div class="registered">
      <div class="title f-a-j f20 f-w-7">注册 XMall 账号</div>
      <div class="m-4">
        <Form ref="user" :model="user" :rules="user">
        <FormItem prop="username">
          <Input type="text" v-model="user.username" placeholder="账号"/>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="user.password" placeholder="密码"/>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="user.password" placeholder="重复密码"/>
        </FormItem>
        <FormItem>
          <Button type="primary" disabled long class="registered_btn">
            <span class="f18">注册</span>
          </Button>
          <Button type="primary" long @click="handleSubmit('formInline')" class="registered_btn1 f18">
            <span class="f18">注册</span>
          </Button>
        </FormItem>
      </Form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Registered",
  props: {},
  components: {},
  data() {
    return {
      user: {
        username: "",
        password: ""
      },
      user: {
        username: [
          {
            required: true,
            message: "Please fill in the user name",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
@import "../../style/login";
</style>