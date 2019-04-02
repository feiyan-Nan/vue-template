const noticeStore = {
  state: {
    curActivedFeature: ''
  },
  mutations: {
    changeActivedFeature (state, featureType = '') {
      state.curActivedFeature = featureType
    }
  }
}
export default noticeStore
