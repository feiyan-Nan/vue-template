let types = {
  USER_INITIAL: 'USER_INITIAL'
}
export default {
  state: {
    user: {}
  },
  mutations: {
    [types.USER_INITIAL] (state, user) {
      state.user = user
    }
  }
}
