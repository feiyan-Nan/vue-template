/**
 * create by liuhao
 * date 2018-04-13
 * 全局混入，给所有组件增加混入内容
 */
import Vue from 'vue'
// import i18n from '@/utils/i18n'
import store from '@/store'
import db from '@/plugin/db'
import { STORAGE } from '@/utils/constants'

Vue.mixin({
  store: store,
  data () {
    return {
      // 给所有组件增加I18N的对象，用于获取文本信息
      // I18N: i18n.getText(),
      db,
      STORAGE
    }
  }
})
