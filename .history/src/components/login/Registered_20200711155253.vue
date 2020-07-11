<template>
  <div>
    <div class="registered">
      <div class="title f-a-j f20 f-w-7">注册 XMall 账号</div>
      <div class="m-4 bored_bottom">
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
          <Checkbox v-model="single" class="f14">
            <span>我已阅读并同意</span>
            <span class="m-1r-06 ps">法律声明</span>
            <span>和</span>
            <span class="m-1r-06 ps">隐私条款</span>
          </Checkbox>
          <FormItem class="m-t-3 m-b-4">
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
              @click="handleSubmit('user')"
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
    const validatePassword = (rule, value, callback) => {
      if (value !== this.user.password) {
        callback(new Error("两次输入密码不一致"));
      }else{
        callback()
      }
    };
    return {
      single: false,
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
            validator: validatePassword,
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
          console.log(valid);
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