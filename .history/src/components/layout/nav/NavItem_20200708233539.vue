<template>
  <div>
    <div class="nav_one" v-if="flag1===false">
      <div class="top f-j">
        <div class="T_content f-aj-bw">
          <div>
            <img src="../../../assets/资源 1.png" alt="logo" class="logo" />
          </div>
          <div class="T_right f-a">
            <div>
              <Dropdown trigger="custom" :visible="visible" style="margin-left: 20px">
                <a href="javascript:void(0)" 
                  @focus="handleOpen"
                  @blur="handleClose">
                  <Input
                  suffix="ios-search"
                  placeholder="请输入商品信息"
                  style="width: 305px"
                  class="T_search"
                />
                </a>
                <DropdownMenu slot="list">
                  <p>常用于各种自定义下拉内容的场景。</p>
                  <div style="text-align: right;margin:10px;">
                    <Button type="primary">关闭</Button>
                  </div>
                </DropdownMenu>
              </Dropdown>
            </div>
            <div v-for="item in list" :key="item.id">
              <div class="T_font-one p-lr-25 f14" @click="clickTop(item)">{{item.name}}</div>
            </div>
            <div class="T_line m-lr-25"></div>
            <Icon
              type="md-person"
              size="24"
              color="rgb(153,153,153)"
              class="p-lr-25 icon"
              @click="clickPerson"
            />
            <Poptip trigger="hover" placement="bottom-end" width="330">
              <div class="api f-c-a-j cart_content" slot="content">
                <img src="../../../assets/微信图片_20200707110924.png" alt />
                <div class="f16 m-t-1">您的购物车尽然是空的...</div>
              </div>
              <div class="T-cart f-a" @mouseenter="enter" @mouseleave="leave">
                <Icon
                  type="md-cart"
                  size="24"
                  color="rgb(153,153,153)"
                  :class="{'md-cart':flag===true}"
                />
                <div class="T_count f-a-j f-color-w">1</div>
              </div>
            </Poptip>
          </div>
        </div>
      </div>
      <div class="bottom f-j">
        <div class="B_content f-a">
          <div v-for="item in navList" :key="item.id">
            <div class="f-a">
              <div class="srot"></div>
              <div
                class="f14 p-lr-1 B_nav"
                @click="clickBottom(item)"
                :class="{'f-w-7':num===item.path}"
              >{{item.name}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="nav_two f-j" v-if="flag1===true">
      <div class="B_content f-aj-bw">
        <div class="f-a">
          <div v-for="item in navList" :key="item.id">
            <div class="f-a">
              <div class="srot"></div>
              <div
                class="f14 p-lr-1 B_nav"
                @click="clickBottom(item)"
                :class="{'f-w-7':num===item.path}"
              >{{item.name}}</div>
            </div>
          </div>
        </div>
        <div>
          <Icon
            type="md-person"
            size="24"
            color="rgb(153,153,153)"
            class="p-r-25 iconItem"
            @click="clickPerson"
          />
          <Poptip trigger="hover" placement="bottom-end" width="330">
            <div class="api f-c-a-j cart_content" slot="content">
              <img src="../../../assets/微信图片_20200707110924.png" alt />
              <div class="f16 m-t-1">您的购物车尽然是空的...</div>
            </div>
            <div class="T-cart f-a" @mouseenter="enter" @mouseleave="leave">
              <Icon
                type="md-cart"
                size="24"
                color="rgb(153,153,153)"
                :class="{'md-cart':flag===true}"
              />
              <div class="T_count f-a-j f-color-w">1</div>
            </div>
          </Poptip>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavItem",
  props: {},
  components: {},
  data() {
    return {
      list: [
        {
          name: "全部商品",
          path: "/all"
        },
        {
          name: "捐赠",
          path: "/other_two"
        }
      ],
      navList: [
        {
          id: 1,
          name: "首页",
          path: "/"
        },
        {
          id: 2,
          name: "全部",
          path: "/all"
        },
        {
          id: 3,
          name: "品牌周边",
          path: "/other_one"
        },
        {
          id: 4,
          name: "捐赠名单",
          path: "/other_two"
        },
        {
          id: 5,
          name: "后台管理系统",
          path: "/other_three"
        },
        {
          id: 6,
          name: "XPay支付系统",
          path: "/other_frou"
        },
        {
          id: 7,
          name: "XBoot开发平台",
          path: "/other_five"
        },
        {
          id: 8,
          name: "宣传视频",
          path: "/other_six"
        },
        {
          id: 9,
          name: "Github",
          path: "/other_seven"
        },
        {
          id: 10,
          name: "商用授权",
          path: "/other_eight"
        }
      ],
      num: "",
      name: "",
      flag: false,
      flag1: false,
      visible: false
    };
  },
  methods: {
    handleOpen() {
      this.visible = true;
    },
    handleClose() {
      this.visible = false;
    },
    clickPerson() {
      this.$router.push("/login");
    },
    enter() {
      this.flag = true;
    },
    leave() {
      this.flag = false;
    },
    clickTop(item) {
      this.num = item.path;
      this.$router.push(item.path);
    },
    clickBottom(item) {
      this.num = item.path;
      this.$router.push(item.path);
    }
  },
  mounted() {
    this.num = this.$route.path;

    // 监听导航
    window.addEventListener("scroll", () => {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // console.log(top);
      if (top > 90) {
        this.flag1 = true;
      }
      if (top <= 90) {
        this.flag1 = false;
      }
    });
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
@import "../../../style/Layout";
</style>