let types = {
  TEMPLATE_TO_TEMPLATE: 'TEMPLATE_TO_TEMPLATE',
  TEMPLATE_TASK: 'TEMPLATE_TASK',
  TEMPLATE_TO_MATTER: 'TEMPLATE_TO_MATTER',
  SHATE_TO_ICOURT: 'SHATE_TO_ICOURT',
  CONTENT_TO_TEMPLATE: 'CONTENT_TO_TEMPLATE',
  MATTER_TO_TEMPLATE: 'MATTER_TO_TEMPLATE'
}
export default {
  state: {
  },
  mutations: {
    [types.TEMPLATE_TO_TEMPLATE] (content) {
    //   console.log('TEMPLATE_TO_TEMPLATE', content)
    },
    [types.TEMPLATE_TASK] (content) {
    //   console.log('TEMPLATE_TASK', content)
    },
    [types.TEMPLATE_TO_MATTER] (content) {
    //   console.log('TEMPLATE_TO_MATTER', content)
    },
    [types.SHATE_TO_ICOURT] (content) {
    //   console.log('SHATE_TO_ICOURT', content)
    },
    [types.CONTENT_TO_TEMPLATE] (content) {
    //   console.log('CONTENT_TO_TEMPLATE', content)
    },
    [types.MATTER_TO_TEMPLATE] (content) {
    //   console.log('MATTER_TO_TEMPLATE', content)
    }
  },
  actions: {
    'TEMPLATE': ({commit}, content) => {
      commit(content.scene, content)
    }
  }
}
