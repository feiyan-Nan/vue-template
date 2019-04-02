let types = {
  RELEASE_WEB_REFRESH: 'RELEASE_WEB_REFRESH'
}
export default {
  state: {
    releaseContent: {}
  },
  mutations: {
    [types.RELEASE_WEB_REFRESH] (content) {
    //   console.log('RELEASE_WEB_REFRESH', content)
    }
  },
  actions: {
    'RELEASE.WEB_RELEASE': ({commit}, content) => {
      // 调用release接口 /api/v2/release 获取release信息
      commit(content.scene, content)
    }
  }
}
