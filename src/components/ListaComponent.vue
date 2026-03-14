<template>
  <div class="todo-container">
    <TodoListComponent />

    <!-- Header da Lista -->
    <div class="list-header">
      <div class="header-content">
        <v-icon class="header-icon">mdi-format-list-checks</v-icon>
        <h2 class="header-title">My Tasks</h2>
        <v-chip class="task-counter" color="#42b883">
          {{ taskStore.tasks.length }}
        </v-chip>
      </div>
    </div>

    <!-- Lista de Tarefas -->
    <v-list class="task-list" lines="three" select-strategy="leaf">
      <transition-group name="task-fade" tag="div">
        <v-list-item
          v-for="(task, index) in taskStore.tasks"
          :key="task.id || index"
          :title="task.title"
          :subtitle="task.subtitle"
          class="task-item"
          :class="{ 'task-done': task.done }"
        >
          <template v-slot:prepend>
            <v-list-item-action start>
              <v-checkbox-btn
                :model-value="task.done"
                @click="taskStore.toggleDoneTask(index)"
                color="#42b883"
                class="task-checkbox"
              ></v-checkbox-btn>
            </v-list-item-action>
          </template>

          <template v-slot:append>
            <v-menu>
              <template v-slot:activator="{ props }">
                <v-btn
                  color="#42b883"
                  v-bind="props"
                  icon="mdi-dots-vertical"
                  variant="text"
                  class="action-btn"
                >
                </v-btn>
              </template>
              <v-list class="action-menu">
                <v-list-item
                  prepend-icon="mdi-pencil"
                  value="1"
                  @click="taskStore.toggleEdit(index)"
                  class="menu-item-edit"
                >
                  <v-list-item-title>Editar</v-list-item-title>
                </v-list-item>
                <v-list-item
                  prepend-icon="mdi-delete"
                  value="2"
                  @click="taskStore.toggleDelete(index)"
                  class="menu-item-delete"
                >
                  <v-list-item-title>Deletar</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </template>
        </v-list-item>
      </transition-group>

      <!-- Empty State -->
      <div v-if="taskStore.tasks.length === 0" class="empty-state">
        <v-icon class="empty-icon">mdi-clipboard-text-outline</v-icon>
        <h3 class="empty-title">Nenhuma tarefa ainda</h3>
        <p class="empty-subtitle">Adicione uma nova tarefa para começar!</p>
      </div>
    </v-list>

    <!-- Dialogs -->
    <DialogTaskComponent
      :dialog="taskStore.showDialogTaskFields"
      @toggle="taskStore.toggleEdit"
      :task="taskStore.tasks[taskStore.taskSelecionada]"
    />
    <DialogDeleteComponent
      :dialog="taskStore.showDialogDelete"
      @toggle="taskStore.toggleDelete"
      @deleteTask="taskStore.deleteTask"
      :task="taskStore.tasks[taskStore.taskSelecionada]"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import DialogTaskComponent from "@/components/dialogs/DialogTaskFieldComponent.vue";
import DialogDeleteComponent from "@/components/dialogs/DialogDeleteComponent.vue";
import { useTaskStore } from "@/stores/task.js";

const taskStore = useTaskStore();
</script>

<style scoped>
/* ========== Container Principal ========== */
.todo-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

/* ========== Header da Lista ========== */
.list-header {
  background: linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 100%);
  border: 2px solid #42b883;
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 4px 20px rgba(66, 184, 131, 0.2);
}

.header-content {
  display: flex;
  align-items: center;
  gap: 16px;
}

.header-icon {
  color: #42b883;
  font-size: 32px;
  filter: drop-shadow(0 0 8px rgba(66, 184, 131, 0.5));
}

.header-title {
  color: white;
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  flex: 1;
  letter-spacing: -0.5px;
}

.task-counter {
  font-weight: 700;
  font-size: 16px;
  height: 36px;
  padding: 0 16px;
  box-shadow: 0 2px 8px rgba(66, 184, 131, 0.3);
}

/* ========== Lista de Tarefas ========== */
.task-list {
  background: #0d0d0d !important;
  border: 2px solid rgba(66, 184, 131, 0.3);
  border-radius: 16px;
  padding: 16px 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

.task-item {
  background: #1a1a1a !important;
  border: 1px solid rgba(66, 184, 131, 0.2);
  border-radius: 12px !important;
  margin: 8px 0;
  padding: 16px !important;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.task-item::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 100%;
  background: #42b883;
  transform: scaleY(0);
  transition: transform 0.3s ease;
}

.task-item:hover {
  background: #242424 !important;
  border-color: #42b883;
  transform: translateX(4px);
  box-shadow: 0 4px 16px rgba(66, 184, 131, 0.3);
}

.task-item:hover::before {
  transform: scaleY(1);
}

/* Título e subtítulo da tarefa */
.task-item :deep(.v-list-item-title) {
  color: white !important;
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 4px;
  transition: all 0.3s ease;
}

.task-item :deep(.v-list-item-subtitle) {
  color: rgba(255, 255, 255, 0.7) !important;
  font-size: 14px;
  transition: all 0.3s ease;
}

/* Tarefa completada (CORRIGIDO) */
.task-item.task-done {
  opacity: 0.7;
  background: #151515 !important;
  border-color: rgba(66, 184, 131, 0.1) !important;
}

.task-item.task-done :deep(.v-list-item-title) {
  text-decoration: line-through;
  color: rgba(255, 255, 255, 0.5) !important;
}

.task-item.task-done :deep(.v-list-item-subtitle) {
  text-decoration: line-through;
  color: rgba(255, 255, 255, 0.4) !important;
}

.task-item.task-done:hover {
  opacity: 0.85;
}

.task-item.task-done::before {
  background: rgba(66, 184, 131, 0.3);
}

/* ========== Checkbox ========== */
.task-checkbox :deep(.v-selection-control__input) {
  color: #42b883 !important;
}

.task-checkbox :deep(.v-icon) {
  color: #42b883 !important;
  filter: drop-shadow(0 0 4px rgba(66, 184, 131, 0.5));
  transition: all 0.3s ease;
}

.task-checkbox:hover :deep(.v-icon) {
  filter: drop-shadow(0 0 8px rgba(66, 184, 131, 0.8));
  transform: scale(1.1);
}

.task-done .task-checkbox :deep(.v-icon) {
  color: #42b883 !important;
  filter: drop-shadow(0 0 6px rgba(66, 184, 131, 0.6));
}

/* ========== Botão de Ação ========== */
.action-btn {
  transition: all 0.3s ease;
}

.action-btn:hover {
  background: rgba(66, 184, 131, 0.2) !important;
  transform: rotate(90deg);
}

/* ========== Menu de Ações ========== */
.action-menu {
  background: #1a1a1a !important;
  border: 2px solid #42b883 !important;
  border-radius: 12px;
  overflow: hidden;
}

.menu-item-edit,
.menu-item-delete {
  transition: all 0.3s ease;
  color: white !important;
}

.menu-item-edit:hover {
  background: rgba(66, 184, 131, 0.2) !important;
}

.menu-item-edit :deep(.v-icon) {
  color: #42b883 !important;
}

.menu-item-delete:hover {
  background: rgba(244, 67, 54, 0.2) !important;
}

.menu-item-delete :deep(.v-icon) {
  color: #f44336 !important;
}

.menu-item-edit :deep(.v-list-item-title),
.menu-item-delete :deep(.v-list-item-title) {
  color: white !important;
  font-weight: 500;
}

/* ========== Empty State ========== */
.empty-state {
  text-align: center;
  padding: 60px 20px;
}

.empty-icon {
  font-size: 80px;
  color: rgba(66, 184, 131, 0.3);
  margin-bottom: 16px;
}

.empty-title {
  color: white;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
}

.empty-subtitle {
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
}

/* ========== Animações ========== */
.task-fade-enter-active,
.task-fade-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.task-fade-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.task-fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.task-fade-move {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ========== Responsivo ========== */
@media (max-width: 600px) {
  .todo-container {
    padding: 12px;
  }

  .list-header {
    padding: 16px;
  }

  .header-title {
    font-size: 20px;
  }

  .task-item {
    padding: 12px !important;
  }
}
</style>