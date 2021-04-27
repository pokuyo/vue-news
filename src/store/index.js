import Vue from 'vue'
import Vuex from 'vuex'
// import {fetchNewsList, fetchAskList, fetchJobsList} from '../api/index.js'
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        news: [],
        ask: [],
        jobs: [],
        user: {},
        item: []
    },
    
    // mutations: mutations,
    mutations,  // 앞뒤가 같아서 생략 가능
    actions,

    getters: {
        fetchedAsk(state) {
            return state.ask
        }
    }
})
