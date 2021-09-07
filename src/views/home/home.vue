<template>
  <div class="home-page">
    <content-box title="筛选">
      <div slot="content-right" class="right-tips">
        (默认显示3条，看更多需要登录)
      </div>
      <Form ref="formCustom" :label-width="80">
        <FormItem prop="user_name" label="地区：">
          <div class="select-inlink active">深圳</div>
          <div class="city-all" @click="openCity">全部城市 ></div>
        </FormItem>
        <FormItem prop="user_name" label="类型：">
          <CheckboxGroup>
            <Checkbox
              :label="item.value"
              v-for="(item, index) in typeList"
              :key="index"
              >{{ item.label }}</Checkbox
            >
          </CheckboxGroup>
        </FormItem>
        <FormItem prop="user_name" label="时间：">
          <div class="select-inlink active">2021</div>
          <div class="select-inlink">2020</div>
        </FormItem>
      </Form>
      <div class="form-bottom">全部综合 / 依综合指数排序，每日更新一次</div>
    </content-box>
    <content-box title="律师排行" class="list-content">
      <div slot="content-flex" class="tab-box">
        <div
          class="tab-flex"
          :class="{ active: tabActive == 1 }"
          @click="tabClick(1)"
        >
          胜诉案件数量
        </div>
        <div
          class="tab-flex"
          :class="{ active: tabActive == 2 }"
          @click="tabClick(2)"
        >
          服务评分
        </div>
      </div>
      <div class="item-list">
        <div
          class="item-content"
          v-for="(item, index) in itemList"
          :key="index"
        >
          <div class="item-img-box">
            <img src="" class="item-img" alt="" />
          </div>
          <div class="item-flex">
            <div class="name">张伟</div>
            <div class="flex-row">
              <Row>
                <Col :span="12">
                  <div class="row-inlink">
                    <span class="inlink-title">胜诉:</span>
                    <span class="inlink-number">100</span>
                  </div>
                  <div class="row-inlink">
                    <span class="inlink-title">败诉:</span>
                    <span class="inlink-number">99</span>
                  </div>
                  <div class="row-inlink">
                    <span class="inlink-title">和解:</span>
                    <span class="inlink-number">80</span>
                  </div>
                </Col>
                <Col :span="12">
                  <div class="row-inlink">评分的星星</div>
                </Col>
              </Row>
            </div>
            <div class="flex-row">
              <Row>
                <Col :span="12">
                  <Tag>民事</Tag>
                  <Tag>民事</Tag>
                  <Tag>民事</Tag>
                  <Tag>民事</Tag>
                </Col>
                <Col :span="12"> 查看手联系方式 </Col>
              </Row>
            </div>
          </div>
        </div>
        <div class="login-tips">
          <div class="login-title">// 登录xxx 查看更多信息 //</div>
          <div class="login-btn">
            <Button type="primary" @click="loginClick">立即登录</Button>
          </div>
        </div>
      </div>
    </content-box>
    <select-city ref="selectCity"></select-city>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { objAny } from "@/common/common-interface";
import selectCity from "@/components/select-city/select-city.vue";
@Component({
  components: {
    "select-city": selectCity,
  },
})
export default class HomePage extends Vue {
  private formItem: objAny = {
    type: 1,
  };
  private typeList: objAny[] = [
    { label: "民事案", value: 1 },
    { label: "行政案", value: 2 },
    { label: "刑事案", value: 3 },
    { label: "国家赔偿案", value: 4 },
  ];
  private itemList: objAny[] = [{}, {}, {}, {}, {}, {}];
  private tabActive = 1;

  public tabClick(type: number): void {
    this.tabActive = type;
  }

  public loginClick(): void {
    this.$router.push("/login");
  }

  public openCity(): void {
    let selectCity: any = this.$refs.selectCity;
    selectCity.open();
  }
}
</script>
<style lang="less">
.home-page {
  padding: 15px;
  .right-tips {
    font-size: 14px;
    color: #333;
  }
  .select-inlink,
  .city-all {
    display: inline-block;
    padding: 0 10px;
    line-height: 28px;
    cursor: pointer;
  }
  .select-inlink {
    font-size: 14px;
    margin-right: 10px;
  }
  .select-inlink.active {
    background-color: orangered;
    color: #fff;
  }
  .city-all {
    font-size: 13px;
    color: #2d8cf0;
  }
  .ivu-form-item-content {
    padding-left: 30px;
  }
  .ivu-form-item {
    margin-bottom: 10px;
  }
  .form-bottom {
    line-height: 18px;
    border-top: 1px solid #f5f5f5;
    padding: 15px 0 5px 0;
    padding-left: 15px;
    color: #999;
  }
  .tab-box {
    font-size: 14px;
    color: #666;
    display: flex;
    padding-left: 50px;
    .tab-flex {
      display: inline-block;
      padding: 0 1px;
      margin-right: 40px;
      position: relative;
      cursor: pointer;
    }
    .tab-flex.active {
      color: orangered;
    }
    .tab-flex.active::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: orangered;
      left: 0;
      bottom: 0;
    }
    .tab-flex:last-child {
      margin-right: 0;
    }
  }
  .list-content.content-box .content-div {
    padding: 15px 0;
  }
  .item-list {
    background-color: #f5f5f5;
    position: relative;
    .item-content {
      margin-top: 5px;
      display: flex;
      background-color: #fff;
      padding: 15px 10px;
      .item-img-box,
      .item-img {
        width: 80px;
        height: 106px;
      }
      .item-img-box {
        background-color: #f5f5f5;
      }
      .item-flex {
        flex: 1;
        font-size: 14px;
        color: #333;
        line-height: 18px;
        padding: 10px 20px 0 40px;
        .name {
          font-size: 18px;
          color: #333;
        }
        .inlink-title {
          color: #333;
          font-size: 15px;
        }
        .inlink-number {
          font-size: 18px;
          margin-left: 10px;
        }
        .flex-row {
          margin-top: 15px;
          .row-inlink {
            display: inline-block;
            vertical-align: top;
            margin-right: 20px;
          }
        }
      }
    }
    .item-content:first-child {
      margin-top: 0;
    }
    .login-tips {
      position: absolute;
      left: 0;
      top: 430px;
      background: rgba(0, 0, 0, 0.5);
      height: 270px;
      width: 100%;
      text-align: center;
      .login-title {
        padding-top: 40px;
        font-size: 26px;
        color: #2d8cf0;
      }
      .login-btn {
        margin-top: 60px;
      }
    }
  }
}
</style>
