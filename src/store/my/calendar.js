import db from '@/plugin/db'
import { STORAGE } from '@/utils/constants'
let ls = db.ls
/**
 * 日历模块查询任务的参数
*/
let reqParams = {
  matters: [],
  users: [],
  rangeFrom: '',
  rangeTo: '',
  random: 0,
  status: ''
}
/**
 * 创建任务参数
 */
let createTaskParams = {
}
let viewType = {
  type: '',
  date: 0
}
const calendarStore = {
  state: {
    reqParams: reqParams,
    tasks: [],
    createTaskParams: createTaskParams,
    viewType: viewType,
    draggingTask: {},
    dragDropStatus: {random: 0}
  },
  mutations: {
    updateCalendarParams (state, payload = {}) {
      for (let key in state.reqParams) {
        if (state.reqParams.hasOwnProperty(key) && payload.hasOwnProperty(key)) {
          state.reqParams[key] = payload[key]
        }
      }
      // 每次更新查询数据后更新localStorage
      ls.set(STORAGE.TRANS_TASK_FILTERS, {
        users: state.reqParams.users ? state.reqParams.users : [],
        status: state.reqParams.status ? state.reqParams.status : '',
        matters: state.reqParams.matters ? state.reqParams.matters : []
      })
      state.reqParams.random = Math.floor(Math.random() * 1000)
    },
    // 添加这个方法的目的是让项目那边筛选条件不存到本地(默认是未完成)
    updateStatusType (state, statusType = 1) {
      state.reqParams.status = statusType
    },
    updateCalendarTasks (state, payload) {
      state.tasks = payload
    },
    createTask (state, payload) {
      state.createTaskParams = payload
    },
    setCalendarViewType (state, payload) {
      state.viewType = payload
    },
    setDraggingTask (state, payload) {
      state.draggingTask = payload
    },
    clearCalendarDragDrop: (state, payload) => {
      state.dragDropStatus.random = Math.floor(Math.random() * 1000)
    }
  }
}
export default calendarStore
