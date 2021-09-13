export const state = () => ({
  meta: {}
})

export const actions = {
  async nuxtServerInit ({ commit }, { $content }) {
    const data = await $content('meta').fetch()
    await commit('load', data)
  }
}

export const mutations = {
  load (state, data) {
    state.meta = data
  }
}
