<template>
  <div>
    <div class="registered">
      <div class="f-c-a f20">
        <img src="../../assets/login.png" alt class="login m-t-4" />
        <div class="m-t-25">使用 XMall 账号登陆官网</div>
      </div>
      <div class="bored_bottom">
        <Form ref="user" :model="user" :rules="ruleInline">
          <FormItem prop="username">
            <Input type="text" v-model="user.username" placeholder="账号" class="registered_ipt" />
          </FormItem>
          <FormItem prop="password">
            <Input type="password" v-model="user.password" placeholder="密码" class="registered_ipt" />
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

          <div class="f-aj-bw">
            <Checkbox v-model="single" class="f14 m-t-15 check">
              <span>记住密码</span>
            </Checkbox>
            <div class="f-a">
              <div class="ps">注册 XMall 账号</div>
              <div class="line m-lr-1"></div>
              <div class="ps">忘记密码？</div>
            </div>
          </div>
          <FormItem class="m-t-25">
            <Button
              v-if="user.username===''||user.password===''||user.password1===''"
              type="primary"
              disabled
              long
              class="registered_btn"
            >
              <span class="f18">{{text}}</span>
            </Button>
            <Button
              v-if="user.username!==''&&user.password!==''&&user.password1!==''"
              type="primary"
              long
              @click="handleSubmit('user')"
              :loading="loading"
              class="registered_btn1"
            >
              <span class="f18">{{text}}</span>
            </Button>
          </FormItem>
        </Form>
        <Button long @click="clickGoback" class="registered_btn2">
          <span class="f18">返回</span>
        </Button>
      </div>
      <div class="f12 ps_bottom m-l-4">
        <span>其他账号登陆：</span>
        <span class="m-l-1 ps" @click="register">注册</span>
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
  name: "LoginItem",
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
    return {
      text:'登陆',
      flag:false,
      single: false,
      user: {
        username: "",
        password: ""
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
        ]
      }
    };
  },
  methods: {
    clickGoback() {
      this.$router.go(-1);
    },
    register() {
      this.$router.push("/register");
    },
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.text = '登陆中...';
          this.flag=true,
          this.$Message.success("登陆成功");
        } else {
          this.$Message.error("输入错误");
        }
      });
    },
    loadV2Script() {
      if (typeof window.vaptcha === "function") {
        //如果已经加载就直接放回
        return Promise.resolve();
      } else {
        return new Promise(resolve => {
          var script = document.createElement("script");
          script.src = "https://v.vaptcha.com/v3.js";
          script.async = true;
          script.onload = script.onreadystatechange = function() {
            if (
              !this.readyState ||
              this.readyState == "loaded" ||
              this.readyState == "complete"
            ) {
              resolve();
              script.onload = script.onreadystatechange = null;
            }
          };
          document.getElementsByTagName("head")[0].appendChild(script);
        });
      }
    }
  },
  mounted() {
    var config = extend(
      {
        vid: "5f09749d86e8ce893ab1ca1d",
        container: this.$refs.vaptcha,
        style: this.vpStyle
      },
      this.$props
    );
    this.loadV2Script().then(() => {
      window.vaptcha(config).then(obj => {
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