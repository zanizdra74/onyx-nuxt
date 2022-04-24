export const state = () => ({
})

export const mutations = {

}

export const actions = {

  async SET_uploadImage({commit, dispatch}, formData) {
    try {
      console.log('uploadImage -> ', formData)

      await this.$axios.$post('/api/upload/uploadImage', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
    } catch (e) {}
  },
}

export const getters = {
  isAuthenticated: state => Boolean(state.token)
}
