<template>
  <p>completed {{ completed }}</p>
  <div>
    <p>total {{ list.length }}</p>
    <span v-if="completed > 0">
      <button type="button" class="btn btn-danger" @click="clear">Clear</button>
    </span>
  </div>
</template>
<script>
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  name: "NavFooter",
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  setup(props, ctx) {
    let store = useStore();
    let completed = computed(() => {
      let arr = props.list.filter((task) => {
        return task.status;
      });
      return arr.length;
    });

    let clear = () => {
      //completed
      console.log(props.list);
      let arr = props.list.filter((item) => {
        return !item.status;
      });
      console.log("after filter:");
      console.log(arr);
      store.commit("clear", arr);
    };

    return {
      completed,
      clear,
    };
  },
});
</script>
<style scoped>
</style>