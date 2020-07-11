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
          <Checkbox v-model="single" class="f14">
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

<script >
export default {
  name: "Registered",
  props: {},
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
          console.log(valid);
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    }
  },
  mounted() {
    vaptcha({
      vid: "****", // 验证单元id
      type: "click", // 显示类型 点击式
      scene: 0, // 场景值 默认0
      container: "#vaptchaContainer", // 容器，可为Element 或者 selector
      offline_server: "" //离线模式服务端地址，若尚未配置离线模式，请填写任意地址即可。
      //可选参数
      //lang: 'auto', // 语言 默认auto,可选值auto,zh-CN,en,zh-TW,jp
      //https: true, // 使用https 默认 true
      //style: 'dark' //按钮样式 默认dark，可选值 dark,light
      //color: '#57ABFF' //按钮颜色 默认值#57ABFF
    }).then(function(vaptchaObj) {
      obj = vaptchaObj; //将VAPTCHA验证实例保存到局部变量中
      vaptchaObj.render(); // 调用验证实例 vpObj 的 render 方法加载验证按钮
      //获取token的方式一：
      //vaptchaObj.renderTokenInput('.login-form')//以form的方式提交数据时，使用此函数向表单添加token值
      //获取token的方式二：
      vaptchaObj.listen("pass", function() {
        // 验证成功进行后续操作
        var data = {
          //表单数据
          token: vaptchaObj.getToken()
        };
        $.post("login", data, function(r) {
          if (r.code !== 200) {
            console.log("登录失败");
            vaptchaObj.reset(); //重置验证码
          }
        });
      });
      //关闭验证弹窗时触发
      vaptchaObj.listen("close", function() {
        //验证弹窗关闭触发
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