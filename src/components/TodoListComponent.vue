<template>
  <div class="add-task-container">
    <!-- Card de Adicionar Tarefa -->
    <div class="add-task-card">
      <div class="card-header">
        <v-icon class="plus-icon">mdi-plus-circle</v-icon>
        <h3 class="card-title">New Task</h3>
      </div>

      <div class="input-wrapper">
        <v-text-field
          v-model="taskStore.titleTaskCreating"
          clearable
          label=""
          prepend-inner-icon="mdi-text-box-plus"
          variant="outlined"
          color="#42b883"
          @keyup.enter="handleAddTask"
          :rules="rules"
          class="task-input"
          hide-details="auto"
          density="comfortable"
        >
        
          <template v-slot:append>
            <v-btn
              @click="handleAddTask"
              color="#42b883"
              elevation="0"
              class="add-btn"
              :disabled="!isValid"
            >
              <v-icon left>mdi-plus</v-icon>
              Add
            </v-btn>
          </template>
        </v-text-field>
      </div>

      <!-- Dica rápida -->
      <div class="quick-tip">
        <v-icon class="tip-icon">mdi-lightbulb-outline</v-icon>
        <span class="tip-text">Press <kbd>Enter</kbd>  to quickly add</span>
      </div>
    </div>

    <!-- Lista de Tarefas -->
    <ListaComponent />
  </div>
</template>

<script setup>
import { computed } from "vue";
import ListaComponent from "./ListaComponent.vue";
import { useTaskStore } from "@/stores/task.js";
import { onMounted } from "vue";

const taskStore = useTaskStore();

const rules = [
  value => {
    if (!value || value.length >= 5) return true;
    return 'Mínimo de 5 caracteres';
  },
];

const isValid = computed(() => {
  return taskStore.titleTaskCreating && taskStore.titleTaskCreating.length >= 5;
});

const handleAddTask = () => {
  if (isValid.value) {
    taskStore.addTask();
  }
};

onMounted(() => {
  taskStore.getTasks();
});
</script>

<style scoped>
/* ========== Container Principal ========== */
.add-task-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

/* ========== Card de Adicionar Tarefa ========== */
.add-task-card {
  background: linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 100%);
  border: 2px solid #42b883;
  border-radius: 20px;
  padding: 28px;
  margin-bottom: 32px;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(66, 184, 131, 0.1),
    0 0 20px rgba(66, 184, 131, 0.2);
  position: relative;
  overflow: hidden;
}

.add-task-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #42b883, #35495e, #42b883);
  background-size: 200% 100%;
  animation: shimmer 3s infinite;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

/* ========== Header do Card ========== */
.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.plus-icon {
  color: #42b883;
  font-size: 32px;
  filter: drop-shadow(0 0 10px rgba(66, 184, 131, 0.6));
  animation: pulse-icon 2s infinite;
}

@keyframes pulse-icon {
  0%, 100% { 
    transform: scale(1);
    filter: drop-shadow(0 0 10px rgba(66, 184, 131, 0.6));
  }
  50% { 
    transform: scale(1.05);
    filter: drop-shadow(0 0 15px rgba(66, 184, 131, 0.8));
  }
}

.card-title {
  color: white;
  font-size: 22px;
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.3px;
}

/* ========== Input Wrapper ========== */
.input-wrapper {
  margin-bottom: 16px;
}

.task-input :deep(.v-field) {
  background: #0d0d0d !important;
  border: 2px solid rgba(66, 184, 131, 0.3);
  border-radius: 12px;
  transition: all 0.3s ease;
}

.task-input :deep(.v-field:hover) {
  border-color: rgba(66, 184, 131, 0.6);
  box-shadow: 0 0 20px rgba(66, 184, 131, 0.2);
}

.task-input :deep(.v-field--focused) {
  border-color: #42b883 !important;
  box-shadow: 0 0 25px rgba(66, 184, 131, 0.3) !important;
}

.task-input :deep(.v-label) {
  color: rgba(255, 255, 255, 0.6) !important;
  font-weight: 500;
}

.task-input :deep(.v-field--focused .v-label) {
  color: #42b883 !important;
}

.task-input :deep(input) {
  color: white !important;
  font-size: 16px;
  font-weight: 500;
}

.task-input :deep(.v-icon) {
  color: #42b883 !important;
}

.task-input :deep(.v-messages__message) {
  color: #f44336 !important;
  font-size: 12px;
  margin-top: 4px;
}

/* ========== Botão Adicionar ========== */
.add-btn {
  background: linear-gradient(135deg, #42b883 0%, #35495e 100%) !important;
  color: white !important;
  font-weight: 700;
  text-transform: none;
  letter-spacing: 0.3px;
  padding: 0 24px !important;
  height: 40px !important;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(66, 184, 131, 0.4);
  transition: all 0.3s ease;
}

.add-btn:hover {
  box-shadow: 0 6px 20px rgba(66, 184, 131, 0.6);
  transform: translateY(-2px);
}

.add-btn:active {
  transform: translateY(0);
}

.add-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.add-btn :deep(.v-icon) {
  margin-right: 4px;
}

/* ========== Quick Tip ========== */
.quick-tip {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: rgba(66, 184, 131, 0.1);
  border: 1px solid rgba(66, 184, 131, 0.2);
  border-radius: 10px;
  margin-top: 16px;
}

.tip-icon {
  color: #42b883;
  font-size: 20px;
  filter: drop-shadow(0 0 6px rgba(66, 184, 131, 0.5));
}

.tip-text {
  color: rgba(255, 255, 255, 0.8);
  font-size: 13px;
  font-weight: 500;
}

kbd {
  background: #0d0d0d;
  border: 1px solid #42b883;
  border-radius: 4px;
  padding: 2px 8px;
  font-family: monospace;
  font-size: 12px;
  color: #42b883;
  font-weight: 700;
  box-shadow: 0 2px 4px rgba(66, 184, 131, 0.2);
}

/* ========== Responsivo ========== */
@media (max-width: 768px) {
  .add-task-container {
    padding: 12px;
  }

  .add-task-card {
    padding: 20px;
    border-radius: 16px;
  }

  .card-title {
    font-size: 18px;
  }

  .task-input :deep(.v-field__append-inner) {
    margin-top: 8px;
    width: 100%;
  }

  .add-btn {
    width: 100%;
  }

  .quick-tip {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 600px) {
  .task-input :deep(input) {
    font-size: 14px;
  }

  .plus-icon {
    font-size: 28px;
  }
}
</style>