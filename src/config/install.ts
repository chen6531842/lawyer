/*
 * @Autor: 陈钊贤
 * @Version: 1.0
 * @Date: 2020-05-22 09:40:20
 * @LastEditors: 陈钊贤
 * @Description:
 * @LastEditTime: 2021-09-06 15:41:06
 */
// import Vue from "vue";
import config from "./config";
import common from "../common/common";
import { objAny } from "../common/common-interface";

const install = (Vue: objAny): void => {
  Vue.prototype.$config = config;
  Vue.prototype.$common = common;
};

declare module "vue/types/vue" {
  interface Vue {
    $common: objAny;
    $config: objAny;
  }
}

export default install;
