const state = () => ({
  app: []
})

const mutations = {
  add(state, text) {
    state.app(text)
  }
}

const actions = {
  add: ({ commit }, text) => {
    commit('add', text)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
