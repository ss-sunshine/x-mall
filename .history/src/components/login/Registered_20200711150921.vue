<template>
  <div>
    <div class="registered">
      <div class="title f-a-j f20 f-w-7">注册 XMall 账号</div>
      <div class="m-4">
        <Form ref="user" :model="user" :rules="ruleInline">
          <FormItem prop="username">
            <Input type="text" v-model="user.username" placeholder="账号" class="registered_ipt" />
          </FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="user.password" placeholder="密码" class="registered_ipt" />
          </FormItem>
          <FormItem prop="password1">
            <Input
              type="password"
              v-model="user.password1"
              placeholder="重复密码"
              class="registered_ipt"
            />
          </FormItem>
          <FormItem>
            <Button
              v-if="user.username===''||user.password===''||user.password1===''"
              type="primary"
              disabled
              long
              class="registered_btn"
            >
              <span class="f18">注册</span>
            </Button>
            <Button
              v-if="user.username!==''&&user.password!==''&&user.password1!==''"
              type="primary"
              long
              @click="handleSubmit('formInline')"
              class="registered_btn1 f18"
            >
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
        password: "",
        password1: ""
      },
      ruleInline: {
        username: [
          {
            required: true,
            message: "账号不能为空",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "密码不能为空.",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            max: 15,
            message: "密码在6~15位之间",
            validator: validatePass,
            trigger: "blur"
          }
        ],
        password1: [
          {
            required: true,
            message: "密码不能为空",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            max: 15,
            validator: validatePassCheck,
            message: "两次输入密码不一致",
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