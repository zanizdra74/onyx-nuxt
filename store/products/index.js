import productsBd from "./productsBd";

export const state = () => ({
  products: [],
})

export const mutations = {
  setProducts(state, payload) {
    state.products = payload
  },
  clearProducts(state) {
    state.products = []
  }
}
export const actions = {
  async createUser({commit}, formData) {
    try {
      console.log('users -> createUser', formData)
      await this.$axios.$post('/api/users/admin/create', formData)
    } catch (e) {}
  },
  async getProducts(context){
    const products = productsBd;
    context.commit("setProducts", products)
    console.log ('actions products = ', products)

    return products

  }
}
export const getters = {
  products: state => {
    console.log('geters product==>', state.products)
    return state.products
  },
}
