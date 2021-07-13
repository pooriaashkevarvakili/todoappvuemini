<template>

  <div>
  <label>
  pooria
    <input v-model="input"/>

  </label>
  <div>
  <select style="margin-top:100px;width:200px">
  <option v-for="states in state " :key="states.id">
  {{states.name}}
  </option>
  </select>
   <select style="margin-top:20px;width:200px;margin-left:50px" >
  <option v-for="todo in todos" :key="todo.id" >
  {{todo.name}}
  </option>
  </select>
  </div>
  </div>

</template>
<script lang="ts">
import {useStore} from "vuex"
import {defineComponent,ref,UnwrapRef,reactive,computed} from "vue"
interface Input{
  name:string;
  id:number
}
export default defineComponent({
  name:'app',
  setup(){
const state=reactive([
  {
    name:"pooria",
id:1
  },
  {
    name:"mohamad",
    id:2
  },
  {
    name:"ali",
    id:3
  }
])
       const Form: UnwrapRef<Input> = reactive({
      name: '',
      id:''
    });
    const store=useStore()
    store.dispatch('todos/gettodos')
     const todos= computed(() => store.state.todos),
const input=ref('')
return{input,Form,state,todos}
  }
})
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
