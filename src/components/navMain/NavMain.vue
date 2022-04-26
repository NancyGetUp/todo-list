<template>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th>Task</th>
        <th>Check</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in list">
        <td>
          <input type="checkbox" v-model="item.status" />
        </td>
        <td>{{ item.task }}</td>
        <td>
          <button type="button" class="btn btn-danger" @click="del(index)">
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "NavMain",
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    let store = useStore();
    let del = (index) => {
      store.commit("delTask", index);
    };
    return { store, del };
  },
});
</script>
