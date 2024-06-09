import articlesBd from "./articlesBd";

export const state = () => ({
  articles: [],
})

export const mutations = {
  setArticles(state, payload) {
    state.articles = payload
  },
}
export const actions = {
  async getArticles(context){

    const articles = articlesBd;
    context.commit("setArticles", articles)
    console.log ('actions products = ', articles)

    return articles
  }
}
export const getters = {
  articles: state => state.articles,
}
