<template>
  <Modal
    :width="800"
    v-model="modalShow"
    title="请选择地区"
    :footer-hide="true"
    class="select-list-modal"
  >
    <div class="select-list">
      <Tag
        type="border"
        closable
        @on-close="handleClose"
        v-for="(item, index) in selectList"
        :key="index"
        >{{ item.name }}</Tag
      >
    </div>
    <div class="city-content">
      <ul class="city-type">
        <li
          class="city-type-item"
          :class="{ active: selectValue == item.value }"
          @click="typeClice(index)"
          v-for="(item, index) in cityTypeList"
          :key="index"
        >
          {{ item.name }}
        </li>
      </ul>
      <div class="city-flex">
        <div class="flex-title">当前定位城市</div>
        <div class="location-city">
          <div class="city-name active">深圳</div>
        </div>
        <div class="flex-title">热门城市</div>
        <div class="city-list">
          <div
            class="city-list-item"
            @click="citySelectClick(item.value)"
            v-for="(item, index) in cityShowList"
            :key="index"
          >
            <div
              class="city-name"
              :class="{ active: citySelectValue == item.value }"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="confirm-btn">
      <Button type="warning">确定</Button>
    </div>
  </Modal>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { objAny } from "@/common/common-interface";
@Component
export default class ContentBox extends Vue {
  @Prop() private title!: string;
  private modalShow = false;
  private selectList: objAny[] = [{ name: "深圳", value: 1 }];
  private cityTypeList: objAny[] = [
    { name: "热门城市", value: 1 },
    { name: "abc", value: 2 },
    { name: "def", value: 3 },
    { name: "jli", value: 4 },
    { name: "wqe", value: 5 },
    { name: "zsd", value: 6 },
  ];
  private cityShowList: objAny[] = [
    { name: "北京", value: "1" },
    { name: "上海", value: "2" },
    { name: "深圳", value: "3" },
    { name: "jli", value: "4" },
    { name: "wqe", value: "5" },
    { name: "zsd", value: "6" },
  ];
  private citySelectValue = "";

  private selectValue = 1;

  public open(): void {
    this.modalShow = true;
  }

  public handleClose(index: number): void {
    this.selectList.splice(index, 1);
  }

  public typeClice(index: number): void {
    this.selectValue = index;
  }

  public citySelectClick(value: string): void {
    this.citySelectValue = value;
  }
}
</script>
<style lang="less">
.select-list-modal {
  .select-list {
    padding: 10px 20px;
    background-color: #f5f5f5;
  }
  .ivu-modal-body {
    padding: 0;
  }
  .city-content {
    display: flex;
    .city-type {
      width: 180px;
      font-size: 16px;
      color: #999;
      height: 410px;
      overflow-y: auto;
      background-color: #f5f5f5;
      .city-type-item {
        line-height: 44px;
        padding-left: 40px;
        position: relative;
        list-style: none;
        cursor: pointer;
      }
      .city-type-item.active {
        color: #f90;
        background-color: #fff;
      }
      .city-type-item.active::after {
        content: "";
        position: absolute;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #f90;
        left: 18px;
        top: 18px;
      }
    }
    .city-flex {
      flex: 1;
      overflow-y: auto;
      padding: 0 20px;
      .flex-title {
        line-height: 44px;
        color: #f90;
        font-size: 14px;
      }
      .city-list {
        display: flex;
        flex-wrap: wrap;

        .city-list-item {
          width: 20%;
          margin-bottom: 20px;
        }
      }
    }
    .city-name {
      display: inline-block;
      padding: 3px 20px;
      border-radius: 2px;
      cursor: pointer;
      font-size: 16px;
      color: #333;
    }
    .city-name.active {
      color: #fff;
      background-color: #f90;
    }
  }
  .confirm-btn {
    text-align: center;
    border-top: 1px solid #e5e5e5;
    padding: 15px 0 15px 0;
  }
}
</style>
