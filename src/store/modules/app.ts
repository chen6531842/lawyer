import { objAny } from "@/common/common-interface";
const state = {
  isLogin: false,
  userInfo: null,
};

// 筛选数据、改变状态的方法
const getters = {};
// 同步操作 是变更参数的方法
const mutations = {
  SET_ISLOGIN(state: objAny, status: boolean): void {
    state.isLogin = status;
  },
  SET_USERINFO(state: objAny, userInfo: objAny): void {
    state.userInfo = userInfo;
  },
};

// 异步操作
const actions = {};

export default {
  state,
  mutations,
  actions,
  getters,
};
