<template>
  <h1>{{ author }}'s Todo List</h1>
  <input
    class="form-control input-lg"
    type="text"
    placeholder="Please enter you Task"
    v-model="task"
    @keydown.enter="enter"
  />
  <button type="button" class="btn btn-primary" @click="enter">Add</button>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "navHeader",
  emits: ["enter"],
  //一定要先有props，因为ctx是第二个参数
  setup(props, ctx) {
    let author = ref("Nancy");
    let task = ref("");
    let enter = () => {
      let val = task.value;
      ctx.emit("enter", val);
      // console.log(task.value);
      task.value = "";
    };
    return {
      author,
      task,
      enter,
    };
  },
});
</script>

<style scoped>
</style>