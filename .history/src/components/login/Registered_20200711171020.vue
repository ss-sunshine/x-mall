<template>
  <div>
    <div class="registered">
      <div class="title f-a-j f20 f-w-7">注册 XMall 账号</div>
      <div class="m-4 bored_bottom p-b-1">
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

          <!-- 点击式按钮建议高度介于36px与46px  -->
          <div ref="vaptcha" style="width: 100%;height: 40px;">
            <!--vaptcha-container是用来引入VAPTCHA的容器，下面代码为预加载动画，仅供参考-->
            <div class="vaptcha-init-main">
              <div class="vaptcha-init-loading">
                <a href="https: //www.vaptcha.com/" target="_blank">
                  <img src="https: //cdn.vaptcha.com/vaptcha-loading.gif" />
                </a>
                <span class="vaptcha-text">VAPTCHA启动中...</span>
              </div>
            </div>
          </div>

          <Checkbox v-model="single" class="f14 m-t-1">
            <span>我已阅读并同意</span>
            <span class="m-1r-06 ps">法律声明</span>
            <span>和</span>
            <span class="m-1r-06 ps">隐私条款</span>
          </Checkbox>
          <FormItem class="m-t-3">
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
const extend = (to, _from) => {
  for (const key in _from) {
    to[key] = _from[key];
  }
  return to;
};
export default {
  name: "Registered",
  props: {
    // type: {
    //   type: String,
    //   default: "click"
    // },
    // scene: {
    //   type: String,
    //   default: ""
    // },
    // vpStyle: {
    //   type: String,
    //   default: "dark"
    // },
    // color: {
    //   type: String,
    //   color: "#3C8AFF"
    // },
    // lang: {
    //   type: String,
    //   default: "zh-CN"
    // }
  },
  components: {},
  data() {
    const validatePassword = (rule, value, callback) => {
      if (value !== this.user.password) {
        callback(new Error("两次输入密码不一致"));
      } else {
        callback();
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
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    loadV2Script() {
      if (typeof window.vaptcha === 'function') { //如果已经加载就直接放回
        return Promise.resolve()
      } else {
        return new Promise(resolve => {
          var script = document.createElement('script')
            script.src = 'https://cdn.vaptcha.com/v2.js'
            script.async = true
            script.onload = script.onreadystatechange = function() {
              if (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete') {
                resolve()
                script.onload = script.onreadystatechange = null
              }
            }
            document.getElementsByTagName("head")[0].appendChild(script)
        })
      }
    }
  },
  mounted() {
    var config = extend(
      {
        vid: "5b68f7bffc650e121c835ffc",
        // vid: "5f09749d86e8ce893ab1ca1d",
        container: this.$refs.vaptcha,
        style: this.vpStyle
      },
      this.$props
    );
    this.loadV2Script().then(() => {
      window.vaptcha().then(obj => {
        this.$emit("input", obj);
        obj.render();
      });
    });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
@import "../../style/login";
</style>