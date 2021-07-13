import { createStore } from 'vuex'

export default createStore({
  state: {
    todos:[
      {
        id:'1',
        name:"mohamad"
      },
      {
        id:2,
        name:"ali"
      },
      {
        id:3,
        name:"sajad"
      }
    ]
  },
  mutations: {
    statetodos(state,todos){
state.todos=todos
    }
  },
  actions: {
    gettodos(state){
      state.commit('statetodos')
          }
  },
  modules: {
  }
})
