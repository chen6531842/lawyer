<template>
  <div class="content-box">
    <div class="content-title-box">
      <div class="content-title">
        {{ title }}
        <slot name="content-title"></slot>
      </div>
      <div class="content-flex">
        <slot name="content-flex"></slot>
      </div>
      <div class="content-right">
        <slot name="content-right"></slot>
      </div>
    </div>
    <div class="content-div">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class ContentBox extends Vue {
  @Prop() private title!: string;
}
</script>
<style lang="less">
.content-box {
  background-color: #fff;
  box-shadow: 0 0 0 10px #f5f5f5;
  border-radius: 4px;
  margin-bottom: 20px;
  .content-title-box {
    display: flex;
    height: 44px;
    line-height: 44px;
    border-bottom: 1px solid #f5f5f5;
    padding-right: 20px;
    .content-title {
      font-size: 16px;
      padding-left: 20px;
      position: relative;
    }
    .content-title::after {
      content: "";
      position: absolute;
      width: 2px;
      height: 20px;
      background-color: #45b8ff;
      top: 50%;
      transform: translateY(-50%);
      left: 10px;
    }
    .content-flex {
      flex: 1;
    }
  }
  .content-div {
    padding: 15px;
  }
}
</style>
