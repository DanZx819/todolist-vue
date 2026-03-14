<template>
  <div class="text-center pa-4">
    <v-dialog
      v-model="taskStore.showDialogTaskFields"
      min-width="400"
      max-width="600"
      persistent
    >
      <!--
    <template v-slot:activator="{ props: activatorProps }">
        <v-btn v-bind="activatorProps">
          Open Dialog
        </v-btn>
      </template>
    -->

      <v-card>
        <br />

        <v-card-title class="text-h5">Edit Task</v-card-title>
        <v-card-text>
          <v-text-field
            clearable
            label="Title"
            v-model="props.task.title"
          ></v-text-field>
          <v-text-field
            clearable
            label="Description"
            v-model="props.task.subtitle"
          ></v-text-field>
        </v-card-text>
        <template v-slot:actions>
          <v-spacer></v-spacer>

          <v-btn @click="taskStore.updateTask()"> Ok </v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useTaskStore } from "@/stores/task.js";

const taskStore = useTaskStore();

const props = defineProps({
  task: Object,
});
</script>