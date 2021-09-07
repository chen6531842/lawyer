<template>
  <div id="app">
    <Layout class="app-content">
      <Header class="app-header">
        <div class="header-title">找个好律师，不花冤枉钱</div>
        <div class="login-name" v-if="!app.isLogin && $route.path != '/login'">
          登录
        </div>
      </Header>
      <Layout>
        <Content>
          <router-view />
        </Content>
      </Layout>
      <!-- <Footer class="app-footer"  v-if="app.isLogin">Footer</Footer> -->
    </Layout>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { objAny } from "@/common/common-interface";
import { State } from "vuex-class";
@Component({
  components: {},
})
export default class HomePage extends Vue {
  @State("app") app!: objAny;
}
</script>
<style lang="less">
#app {
  font-family: "微软雅黑";
  font-size: 14px;
  .app-content {
    height: 100%;
  }
  .app-sider {
    background: #fff;
    overflow: hidden;
  }
  .app-footer {
    padding: 10px 50px;
    text-align: center;
  }
  .app-header {
    background-color: #1a73e7;
    position: relative;
    .header-title {
      color: #fff;
      text-align: center;
      font-size: 16px;
    }
    .login-name {
      position: absolute;
      right: 20px;
      top: 0;
      color: #fff;
    }
  }
  .ivu-layout-header {
    padding-left: 20px;
  }
}
</style>
