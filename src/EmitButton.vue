<template>
  <div>
  <div>hello {{beforeAdd}}</div>
  </div>
</template>

<script lang="ts">
import {defineComponent,computed} from "vue"

export default defineComponent({
    name:'emitbutton',
props:['firstName','lastName'],
    setup(props,context){
        const beforeAdd=computed(()=>{
return `${props.firstName} ${props.lastName}`
        })
const beforeEvent=()=>{
    context.emit('onRemove',beforeAdd.value)
}
return{
    beforeAdd,
    beforeEvent
}

    }
}) 


</script>

<style>

</style>