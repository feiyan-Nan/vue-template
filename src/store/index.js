import Vue from 'vue'
import Vuex from 'vuex'
import release from './release'
import time from './time'
import template from './template'
import user from './user'
import calendar from './my/calendar'
import task from './my/task'
import noticeCenter from './notice'
import matter from './matter/matter'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    release,
    time,
    template,
    calendar,
    user,
    noticeCenter,
    task,
    matter
  }
})
