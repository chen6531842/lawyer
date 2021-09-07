<template>
  <div class="login-box">
    <div class="login-form-box">
      <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <div class="login-div" v-if="loginType == 1">
          <div class="login-title">登录</div>
          <div class="phone-title">手机号码</div>
          <FormItem prop="user_name" class="frist-input">
            <Input
              size="large"
              type="text"
              v-model="formInline.user_name"
              placeholder="手机号码"
            ></Input>
          </FormItem>
          <FormItem prop="user">
            <Input
              size="large"
              :type="pswShow ? 'text' : 'password'"
              v-model="formInline.pwd"
              placeholder="密码"
            >
              <Icon
                slot="suffix"
                :type="!pswShow ? 'ios-eye' : 'ios-eye-off'"
                @click="pswShow = !pswShow"
              />
            </Input>
          </FormItem>
          <div class="form-tips">
            登录即表明同意 <span class="tips-span">服务协议</span> 和
            <span class="tips-span">隐私条款</span>
          </div>
          <div class="login-btn">
            <Button type="primary" block size="large" @click="submitClick"
              >登录</Button
            >
          </div>
          <div class="other-box">
            <div class="other-flex">
              <div class="other-name" @click="loginType = 2">注册</div>
            </div>
            <div class="other-flex text-right">
              <div class="other-name" @click="loginType = 3">忘了密码</div>
            </div>
          </div>
        </div>
        <div class="login-div" v-if="loginType == 2">
          <div class="login-title">注册</div>
          <div class="phone-title">手机号码</div>
          <FormItem prop="user_name">
            <Input
              size="large"
              type="text"
              v-model="formInline.user_name"
              placeholder="手机号码"
            ></Input>
          </FormItem>
          <FormItem prop="user">
            <div class="code-box">
              <div class="code-flex">
                <Input
                  size="large"
                  type="text"
                  v-model="formInline.code"
                  placeholder="验证码"
                ></Input>
              </div>
              <div class="code-text" @click="codeClick">{{ codeText }}</div>
            </div>
          </FormItem>
          <div class="form-tips">
            <Checkbox v-model="agreement">
              我已同意 <span class="tips-span">服务协议</span> 和
              <span class="tips-span">隐私条款</span></Checkbox
            >
          </div>
          <div class="login-btn">
            <Button type="primary" block size="large" @click="submitClick"
              >登录</Button
            >
          </div>
          <div class="other-box">
            <div class="other-flex">
              <div class="other-name" @click="loginType = 2">注册</div>
            </div>
            <div class="other-flex text-right">
              <div class="other-name" @click="loginType = 3">忘了密码</div>
            </div>
          </div>
        </div>
        <div class="login-div" v-if="loginType == 3">
          <div class="login-title">找回密码</div>
          <!-- <div class="phone-title">手机号码</div> -->
          <FormItem prop="user_name">
            <Input
              size="large"
              type="text"
              v-model="formInline.user_name"
              placeholder="手机号码"
            ></Input>
          </FormItem>
          <FormItem prop="user">
            <Input
              size="large"
              :type="pswShow ? 'text' : 'password'"
              v-model="formInline.pwdNew"
              placeholder="新密码"
            >
              <Icon
                slot="suffix"
                :type="!pswShow ? 'ios-eye' : 'ios-eye-off'"
                @click="pswShow = !pswShow"
              />
            </Input>
          </FormItem>
          <FormItem prop="user">
            <Input
              size="large"
              type="password"
              v-model="formInline.pwdConfirm"
              placeholder="确认密码"
            >
            </Input>
          </FormItem>
          <FormItem prop="user">
            <div class="code-box">
              <div class="code-flex">
                <Input
                  size="large"
                  type="text"
                  v-model="formInline.code"
                  placeholder="验证码"
                ></Input>
              </div>
              <div class="code-text" @click="codeClick">{{ codeText }}</div>
            </div>
          </FormItem>
          <div class="form-tips">
            <Checkbox v-model="agreement">
              我已同意 <span class="tips-span">服务协议</span> 和
              <span class="tips-span">隐私条款</span></Checkbox
            >
          </div>
          <div class="login-btn">
            <Button type="primary" block size="large" @click="submitClick"
              >重置</Button
            >
          </div>
          <div class="other-box">
            <div class="other-flex">
              <div class="other-name" @click="loginType = 1">登录</div>
            </div>
            <div class="other-flex text-right">
              <div class="other-name" @click="loginType = 2">注册</div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { objAny } from "@/common/common-interface";
import { Mutation } from "vuex-class";
@Component({
  components: {},
})
export default class Login extends Vue {
  @Mutation("SET_ISLOGIN") SET_ISLOGIN!: any;
  @Mutation("SET_USERINFO") SET_USERINFO!: any;
  private formInline: objAny = {
    user_name: "",
    pwd: "",
    code: "",
    pwdNew: "",
    pwdConfirm: "",
  };
  private agreement = false;
  private loginType = 1;
  private pswShow = false;
  private loading = false;
  private loginShow = true;
  private ruleInline = {
    user_name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
    pwd: [{ required: true, message: "请输入密码", trigger: "blur" }],
  };
  private codeText = "发送验证码";
  private isCode = false;
  private codeTime = 60;
  private codeTimer = 0;

  public codeClick(): void {
    if (!this.isCode) {
      this.isCode = true;
      this.codeTime = 60;
      this.codeText = "60s";
      this.codeTimeFn();
    }
  }
  public codeTimeFn(): void {
    setTimeout(() => {
      this.codeTime--;
      if (this.codeTime == 0) {
        this.codeText = "再次发送";
        this.isCode = false;
      } else {
        this.codeText = this.codeTime + "s";
        this.codeTimeFn();
      }
    }, 1000);
  }
  public submitClick(): void {
    if (this.formInline.user_name == "") {
      this.$Message.error("请输入用户名");
    } else if (this.formInline.pwd == "") {
      this.$Message.error("请输入密码");
    } else {
      this.loginSub();
    }
  }
  public async loginSub(): Promise<void> {
    // this.loading = true;
    // let ret = await login(this.formInline,{headers : this.header});
    // if(ret.code === 0){
    // let data = {};// ret.data;
    // data.user_name = this.formInline.user_name;
    // this.$common.save('loginData',data);
    this.SET_ISLOGIN(true);
    this.$router.push("/");
    this.loginShow = false;
    // }
    this.loading = false;
  }

  created(): void {
    this.SET_ISLOGIN(false);
    this.SET_USERINFO(null);
    this.$common.remove("loginData");
  }
  mounted(): void {
    this.$nextTick(() => {
      document.onkeydown = (event) => {
        if (event.keyCode === 13 && !this.loading) {
          this.submitClick();
        }
      };
    });
  }
  destroyed(): void {
    document.onkeydown = null;
  }
}
</script>
<style lang="less">
.login-box {
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #f5f5f5;
  .login-form-box {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 0 10px #f5f5f5;
    padding: 70px 60px;
    box-sizing: border-box;
    .login-title {
      font-size: 22px;
      color: #333;
    }
    .ivu-form-item-content {
      border-bottom: 1px solid #e5e5e5;
    }
    .ivu-input {
      border: none;
      font-size: 18px;
    }
    .phone-title {
      font-size: 18px;
      color: #2d8cf0;
      display: inline-block;
      line-height: 36px;
      border-bottom: 3px solid #2d8cf0;
      padding: 0 2px;
      margin-top: 3px;
    }
    .frist-input {
      margin-top: 30px;
    }
    .ivu-input-large {
      padding: 30px 7px;
    }
    .ivu-input-wrapper-large .ivu-input-suffix i {
      line-height: 60px;
      font-size: 20px;
      color: #999;
      cursor: pointer;
    }
    .form-tips {
      font-size: 15px;
      color: #999;
      .tips-span {
        color: #333;
      }
    }
    .login-btn {
      margin-top: 20px;
      .ivu-btn {
        width: 100%;
        height: 50px;
        font-size: 20px;
      }
    }
    .other-box {
      margin-top: 5px;
      color: #999;
      display: flex;
      .other-flex {
        flex: 1;
      }
      .text-right {
        text-align: right;
      }
      .other-name {
        display: inline-block;
        cursor: pointer;
      }
    }
    .code-box {
      display: flex;
      .code-flex {
        flex: 1;
      }
      .code-text {
        color: #2d8cf0;
        font-size: 16px;
        line-height: 60px;
        cursor: pointer;
      }
    }
  }
}
</style>
