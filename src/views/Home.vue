<template>
  <navHeader @enter="add"></navHeader>
  <navMain :list="list"></navMain>
  <navFooter :list="list"></navFooter>
</template>

<script>
import NavHeader from "../components/navHeader/NavHeader";
import NavMain from "../components/navMain/NavMain";
import NavFooter from "../components/navFooter/NavFooter";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";

export default {
  name: "Home",
  components: {
    NavHeader,
    NavMain,
    NavFooter,
  },
  setup() {
    let store = useStore();
    let list = computed(() => {
      return store.state.list;
    });
    let add = (val) => {
      let flag = true;
      if (val == "") {
        flag = false;
      }
      list.value.map((item) => {
        if (val === item.task) {
          flag = false;
          alert("This task has been added.");
        }
      });
      if (flag) {
        store.commit("addTask", {
          task: val,
          status: false,
        });
      }

      // console.log(val);
    };
    // console.log(store.state.list);
    // console.log(list);
    return {
      store,
      list,
      add,
    };
  },
};
</script>
