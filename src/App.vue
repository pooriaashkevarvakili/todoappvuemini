<template>

  <div>
  <label>
  pooria
    <input v-model="input"/>
{{input}}
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
  <div style="margin-top:20px" class="list-demo">
    <button @click="add">Add</button>
  <button style="margin-left:10px" @click="remove">Remove</button>
  <transition-group name="list" tag="p">
    <span v-for="item in items" :key="item" class="list-item">
      {{ item }}
    </span>
  </transition-group>

  </div>
<router-view v-slot="{ Component }">
  <template v-if="Component">
    <transition mode="out-in">
      <keep-alive>
        <suspense>
          <component :is="Component"></component>
          <template #fallback>
            <div>
              Loading...
            </div>
          </template>
        </suspense>
      </keep-alive>
    </transition>
  </template>
</router-view>
<div>
<EmitButton :firstName="firstName" :lastName="lastName" @onRemove="onRemove"/>
</div>
<div>
<teleport to="#pooria">
<div>
p
</div>
</teleport>
</div>
</template>
<script lang="ts">
import EmitButton from '@/EmitButton.vue'
import {useStore} from "vuex"
import {defineComponent,ref,UnwrapRef,reactive,computed,onMounted,onUpdated,onUnmounted} from "vue"
interface Input{
  name:string;
  id:number|string;
}
export default defineComponent({
  name:'app',
  components:{
    EmitButton
  },
    data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10
    }
  },
  methods:{
    randomIndex() {
      return Math.floor(Math.random() * this.items.length)
    },
    add() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove() {
      this.items.splice(this.randomIndex(), 1)
    }
  },
  setup(){
    onUnmounted(()=>{
      console.log('unmouted')
    })
 onMounted(()=>{
   console.log('mounted')
 })
   onUpdated(()=>{
     console.log('updated')
   })

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
    id:'',
    name:''
    });
    const store=useStore()
    store.dispatch('todos/gettodos')
     const todos= computed(() => store.state.todos)
const input=ref('')
return{Form,input,state,todos


}
  }
})
</script>
<style>

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
