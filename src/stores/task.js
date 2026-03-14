// Utilities
import { defineStore } from "pinia";
import { useAlertStore } from "@/stores/alert.js";

export const useTaskStore = defineStore("task", {
  state: () => ({
    tasks: [],
    titleTaskCreating: "",
    showDialogDelete: false,
    showDialogTaskFields: false,
    taskSelecionada: 0,
  }),
  actions: {
    addTask() {
      if (this.titleTaskCreating.length >= 5) {
        this.tasks.push({
          title: this.titleTaskCreating,
          done: false,
        });
        
        // ✅ CORRETO: Chamar useAlertStore DENTRO da action
        const alertStore = useAlertStore();
        alertStore.notifyAlertCreate();
        
        this.titleTaskCreating = "";
        this.salvarNavegador();
      } else {
        return console.log("Digite pelo menos 5 caracteres");
      }
    },
    
    toggleDelete(index) {
      this.showDialogDelete = !this.showDialogDelete;
      if (index != null) {
        this.taskSelecionada = index;
      }
    },
    
    deleteTask() {
      // ✅ CORRETO: Chamar useAlertStore DENTRO da action
      const alertStore = useAlertStore();
      alertStore.notifyAlertDelete();
      
      this.tasks.splice(this.taskSelecionada, 1);
      this.toggleDelete();
      this.salvarNavegador();
    },
    updateTask(){
      this.salvarNavegador();
      this.toggleEdit();
      const alertStore = useAlertStore();
      alertStore.notifyAlertEdit();
    },
    toggleEdit(index) {
      this.showDialogTaskFields = !this.showDialogTaskFields;
      if (index != null) {
        this.taskSelecionada = index;
      }
      
    },
    
    salvarNavegador() {
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
    
    getTasks() {
      let items = localStorage.getItem("tasks");
      if (items) {
        this.tasks = JSON.parse(items);
      }
    },
    
    toggleDoneTask(index) {
      this.tasks[index].done = !this.tasks[index].done;
      this.salvarNavegador();
    },
  },
});