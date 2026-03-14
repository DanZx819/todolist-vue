import { defineStore } from 'pinia';

export const useAlertStore = defineStore('alert', {
    state: () => ({
        title: "",
        type: "info",
        showAlert: false
    }),
    actions: {
        notifyAlert(title, type = "info") {
            this.title = title;
            this.type = type;
            this.showAlert = true;
            setTimeout(() => {
                this.showAlert = false;
            }, 2000);
        },
        
        notifyAlertCreate() {
            this.title = "Task Created";
            this.type = "success";
            this.showAlert = true;
            setTimeout(() => {
                this.showAlert = false;
            }, 2000);
        },
        
        notifyAlertEdit() {
            this.title = "Task Updated";
            this.type = "info";
            this.showAlert = true;
            setTimeout(() => {
                this.showAlert = false;
            }, 2000);
        },
        
        notifyAlertDelete() {
            this.title = "Task Deleted";
            this.type = "warning";
            this.showAlert = true;
            setTimeout(() => {
                this.showAlert = false;
            }, 2000);
        }
    }
})