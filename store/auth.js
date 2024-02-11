export const state = () => ({
  token: null
//  token: true,
})

export const mutations = {
  setToken(state, token) {
    state.token = token
  },
  clearToken(state) {
    state.token = null
  }
}

export const actions = {
  async login({commit, dispatch}, formData) {
    console.log('auth form Data -> ', formData)
    try {
      const { token } = await this.$axios.$post('/api/auth/admin/login', formData)
      console.log('token', token)
      dispatch('setToken', token)
    } catch (e) {
      console.log('error create users ->', e)
      commit('setError', e, {root: true})
      throw e
    }
  },
  setToken({commit}, token) {
    commit('setToken', token)
  },
  logout({commit}) {
    commit('clearToken')
  }
}

export const getters = {
  isAuthenticated: state => Boolean(state.token)
}
