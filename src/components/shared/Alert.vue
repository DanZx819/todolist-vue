<template>
  <transition name="slide-fade">
    <div v-if="alertStore.showAlert" class="alert-notification">
      <v-alert
        closable
        :title="alertStore.title"
        :type="alertStore.type"
        variant="tonal"
        :class="['custom-alert', `alert-${alertStore.type}`]"
        @click:close="alertStore.showAlert = false"
      >
        <template v-slot:prepend>
          <v-icon :class="`icon-${alertStore.type}`">
            {{ getIcon(alertStore.type) }}
          </v-icon>
        </template>
      </v-alert>
    </div>
  </transition>
</template>

<script setup>
import { useAlertStore } from "@/stores/alert.js";
import { computed } from "vue";

const alertStore = useAlertStore();

const getIcon = (type) => {
  const icons = {
    success: "mdi-check-circle",
    error: "mdi-alert-circle",
    warning: "mdi-alert",
    info: "mdi-information",
  };
  return icons[type] || "mdi-information";
};
</script>

<style scoped>
.alert-notification {
  position: fixed;
  z-index: 9999;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 500px;
  animation: slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

/* Transições */
.slide-fade-enter-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(-50%) translateY(30px);
}

.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-30px);
}

/* Alert Base Customizado */
.custom-alert {
  border-radius: 12px !important;
  border: 2px solid;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  font-weight: 600;
  letter-spacing: 0.3px;
}

.custom-alert :deep(.v-alert__close) {
  opacity: 0.8;
  transition: all 0.3s ease;
}

.custom-alert :deep(.v-alert__close:hover) {
  opacity: 1;
  transform: rotate(90deg);
}

.custom-alert :deep(.v-alert-title) {
  font-size: 15px;
  font-weight: 700;
}

/* SUCCESS - Verde do Vue */
.alert-success {
  background: linear-gradient(135deg, rgba(66, 184, 131, 0.2) 0%, rgba(66, 184, 131, 0.1) 100%) !important;
  border-color: #42b883 !important;
  color: #42b883 !important;
}

.alert-success :deep(.v-alert-title) {
  color: #42b883 !important;
}

.icon-success {
  color: #42b883 !important;
  filter: drop-shadow(0 0 8px rgba(66, 184, 131, 0.6));
  animation: successPulse 0.6s ease;
}

@keyframes successPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

.alert-success :deep(.v-alert__close .v-icon) {
  color: #42b883 !important;
}

/* WARNING - Laranja */
.alert-warning {
  background: linear-gradient(135deg, rgba(255, 152, 0, 0.2) 0%, rgba(255, 152, 0, 0.1) 100%) !important;
  border-color: #ff9800 !important;
  color: #ff9800 !important;
}

.alert-warning :deep(.v-alert-title) {
  color: #ff9800 !important;
}

.icon-warning {
  color: #ff9800 !important;
  filter: drop-shadow(0 0 8px rgba(255, 152, 0, 0.6));
  animation: warningShake 0.5s ease;
}

@keyframes warningShake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}

.alert-warning :deep(.v-alert__close .v-icon) {
  color: #ff9800 !important;
}

/* ERROR - Vermelho */
.alert-error {
  background: linear-gradient(135deg, rgba(244, 67, 54, 0.2) 0%, rgba(244, 67, 54, 0.1) 100%) !important;
  border-color: #f44336 !important;
  color: #f44336 !important;
}

.alert-error :deep(.v-alert-title) {
  color: #f44336 !important;
}

.icon-error {
  color: #f44336 !important;
  filter: drop-shadow(0 0 8px rgba(244, 67, 54, 0.6));
  animation: errorShake 0.5s ease;
}

@keyframes errorShake {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
}

.alert-error :deep(.v-alert__close .v-icon) {
  color: #f44336 !important;
}

/* INFO - Azul */
.alert-info {
  background: linear-gradient(135deg, rgba(33, 150, 243, 0.2) 0%, rgba(33, 150, 243, 0.1) 100%) !important;
  border-color: #2196f3 !important;
  color: #2196f3 !important;
}

.alert-info :deep(.v-alert-title) {
  color: #2196f3 !important;
}

.icon-info {
  color: #2196f3 !important;
  filter: drop-shadow(0 0 8px rgba(33, 150, 243, 0.6));
  animation: infoBounce 0.6s ease;
}

@keyframes infoBounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

.alert-info :deep(.v-alert__close .v-icon) {
  color: #2196f3 !important;
}

/* Responsivo */
@media (max-width: 600px) {
  .alert-notification {
    width: 95%;
    bottom: 20px;
  }

  .custom-alert :deep(.v-alert-title) {
    font-size: 14px;
  }
}
</style>