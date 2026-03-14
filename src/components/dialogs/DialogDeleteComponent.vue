<template>
  <div class="text-center pa-4">
    <v-dialog v-model="taskStore.showDialogDelete" max-width="400" persistent>
      <v-card title="Delete task ?" text="Do you want delete this task ?">
        <v-card-text>{{ props.task?.title }}</v-card-text>
        <template v-slot:actions>
          <v-spacer></v-spacer>

          <v-btn @click="taskStore.toggleDelete()"> No </v-btn>

          <v-btn @click="taskStore.deleteTask()"> Yes </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {useTaskStore} from "@/stores/task.js";

const taskStore = useTaskStore();

const props = defineProps({
  task: Object,
});

</script>