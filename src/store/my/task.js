const taskStore = {
  state: {
    data: {},
    refresh: false,
    update: false
  },
  mutations: {
    refreshTaskList (state) {
      state.refresh = !state.refresh
    },
    updateTaskItem (state, data) {
      state.data = _.cloneDeep(data.data)
      state.update = !state.update
    }
  }
}
export default taskStore
