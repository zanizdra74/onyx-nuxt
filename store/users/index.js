export const state = () => ({
  users: [],
})

export const mutations = {
  setError(state, error) {
    state.error = error
  },
  clearError(state) {
    state.error = null
  }
}
export const actions = {
  async createUser({commit}, formData) {
    try {
      console.log('users -> createUser', formData)
      await this.$axios.$post('/api/users/admin/create', formData)
    } catch (e) {}
  },
  async getAllUsers(context){
    try {
      const users = await this.$axios.$get('/api/users/admin/getAllUsers')
      console.log ('users -> ', users)

      return users
    } catch (e) {}
  }
}
export const getters = {
  error: state => state.error,
  users: state => state.users,
}
