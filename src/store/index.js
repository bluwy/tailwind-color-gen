import Vue from 'vue'
import Vuex from 'vuex'
import chroma from 'chroma-js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    primaryColor: '#ff9faf',
    baseInfoColor: '#3df',
    baseWarningColor: '#fd0',
    baseSuccessColor: '#3e4',
    baseDangerColor: '#f34',
    baseGrayColor: '#bfbfbf',
    baseBlendRatio: 0.2,
    shades: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    mainShade: 500
  },
  mutations: {
    SET_PRIMARY_COLOR (state, { color }) {
      state.primaryColor = color
    }
  },
  actions: {
  },
  getters: {
    darkenValue: (state) => (shade) => {
      return (shade - state.mainShade) / 100 / 2
    },
    primaryShadeColor: (state, getters) => (shade = 500) => {
      return chroma(state.primaryColor).darken(getters.darkenValue(shade)).hex()
    },
    infoColor: (state, getters) => (shade = 500) => {
      const color = chroma.mix(state.baseInfoColor, state.primaryColor, state.baseBlendRatio, 'lab')
      return chroma(color).darken(getters.darkenValue(shade)).hex()
    },
    warningColor: (state, getters) => (shade = 500) => {
      const color = chroma.mix(state.baseWarningColor, state.primaryColor, state.baseBlendRatio, 'lab')
      return chroma(color).darken(getters.darkenValue(shade)).hex()
    },
    successColor: (state, getters) => (shade = 500) => {
      const color = chroma.mix(state.baseSuccessColor, state.primaryColor, state.baseBlendRatio, 'lab')
      return chroma(color).darken(getters.darkenValue(shade)).hex()
    },
    dangerColor: (state, getters) => (shade = 500) => {
      const color = chroma.mix(state.baseDangerColor, state.primaryColor, state.baseBlendRatio, 'lab')
      return chroma(color).darken(getters.darkenValue(shade)).hex()
    },
    grayColor: (state, getters) => (shade = 500) => {
      const color = chroma.mix(state.baseGrayColor, state.primaryColor, state.baseBlendRatio, 'lab')
      return chroma(color).darken(getters.darkenValue(shade)).hex()
    }
  }
})
