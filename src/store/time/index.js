// import IlawService from '@/vue/service/ilaw'

let types = {
  TIMING_INITIAL: 'TIMING_INITIAL',
  TIMING_SYNC_START: 'TIMING_SYNC_START',
  TIMING_SYNC_EDIT: 'TIMING_SYNC_EDIT',
  TIMING_SYNC_DELETE: 'TIMING_SYNC_DELETE',
  TIMING_TOO_LONG: 'TIMING_TOO_LONG',
  TIMING_SYNC_RT: 'TIMING_SYNC_RT'
}
export default {
  state: {
    timing: {},
    curTime: null
  },
  mutations: {
    [types.TIMING_INITIAL] (state, timing) {
      // console.log('TIMING_INITIAL', timing)
      if (timing) {
        state.timing = {
          pkId: timing.pkId,
          taskPkId: timing.taskPkId,
          startTime: timing.startTime
        }
      } else {
        state.timing = {}
      }
    },
    [types.TIMING_SYNC_START] (state, content) {
    //   console.log('TIMING_SYNC_START', content)
      state.timing = {
        pkId: content.id,
        taskPkId: content.taskPkId,
        startTime: content.startTime
      }
    },
    [types.TIMING_SYNC_EDIT] (state, content) {
      // console.log('TIMING_SYNC_EDIT', content)
      // 如果content.state=1则为停止任务，那么清空此时的timing信息
      if (content.state === '1') {
        state.timing = {}
      } else {
        state.timing = {
          pkId: content.id,
          taskPkId: content.taskPkId,
          startTime: content.startTime
        }
      }
    },
    [types.TIMING_SYNC_RT] (state, curTime) {
      state.curTime = curTime
    },
    [types.TIMING_SYNC_DELETE] (state, content) {
    //   console.log('TIMING_SYNC_DELETE', content)
    },
    [types.TIMING_TOO_LONG] (state, content) {
    //   console.log('TIMING_TOO_LONG', content)
    }
  },
  actions: {
    'SYNC.TIMING_SYNC': ({commit}, content) => {
      commit(content.scene, content)
    },
    'SYNC.BUBBLE_SYNC': ({commit}, content) => {
      commit(content.scene, content)
    },
    'SYNC.TIMING_INITIAL': ({commit}, content) => {
      // IlawService.getTiming().then(res => {
      //   commit(types.TIMING_INITIAL, res.data)
      // })
    }
  }
}
