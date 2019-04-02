const matterStore = {
  state: {
    // 这是一个标示，标示的进去我的，还是项目中，以后就可以用这个去判断，开发两边不一样的功能
    mark: '',
    // 项目下任务的相关权限问题
    matterTaskPermission: '',
    isUpdateTaskLists: false,
    // 判读是真实的数据(realData)，还是搜索状态克隆的数据(searchData)
    SearchOrRealData: 'realData',
    // 当前项目的信息
    curMatter: ''
  },
  mutations: {
    // 判断是否从新查询数据
    updateTasksList (state, status) {
      state.isUpdateTaskLists = status
    },
    // 更新这个标示我在“我的” 还是“项目”
    updateMark (state, mark) {
      state.mark = mark
    },
    // 更改真实数据与克隆数据
    updateSearchOrRealData (state, status) {
      state.SearchOrRealData = status
    },
    updateMatterTaskPermission (state, permission) {
      state.matterTaskPermission = permission
    },
    updateCurMatter (state, curMatter) {
      state.curMatter = curMatter
    }
  }
}
export default matterStore
