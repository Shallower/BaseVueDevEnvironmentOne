/*
 * 全局状态管理
 * @Author: Hanyz
 * @Date: 2018-07-26 17:57:06
 * @Last Modified by: Hanyz
 * @Last Modified time: 2018-07-26 11:14:30
 */
import Vuex from 'vuex';
import global from './modules/global';
import user from './modules/user';
import permission from './modules/permission';
import errlog from './modules/errLog';
Vue.use(Vuex);

/**Default Module */
const store = new Vuex.Store({
  modules: {
    global,
    user,
    permission,
    errlog
  }
});
export default store;
