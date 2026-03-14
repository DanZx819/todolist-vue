<template>
  <v-app id="inspire">
    <!-- Navigation Drawer com estilo moderno -->
    <v-navigation-drawer 
      v-model="drawer"
      :class="drawerClass"
      width="280"
    >
      <!-- Header do Drawer com gradiente Vue -->
      <div class="drawer-header">
        <div class="user-section">
          <v-avatar size="80" class="user-avatar">
            <img src="/public/download.jfif" alt="Daniel" />
          </v-avatar>
          <h3 class="user-name">Daniel de Oliveira Zanchetta</h3>
          
        </div>
      </div>

      <v-divider class="custom-divider"></v-divider>

      <!-- Menu Items -->
      <v-list class="menu-list" nav>
        <router-link 
          v-for="(item, i) in items" 
          :key="i" 
          :to="item.to" 
          class="menu-link"
        >
          <v-list-item 
            :value="item"
            class="menu-item"
            rounded="xl"
          >
            <template v-slot:prepend>
              <v-icon :icon="item.icon" class="menu-icon"></v-icon>
            </template>
            <v-list-item-title class="menu-text">{{ item.text }}</v-list-item-title>
          </v-list-item>
        </router-link>
      </v-list>

      <!-- Vue Logo no rodapé -->
      <div class="drawer-footer">
        <div class="vue-logo-container">
          <svg class="vue-logo" viewBox="0 0 128 128" width="40" height="40">
            <path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"/>
            <path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"/>
          </svg>
          <span class="powered-text">Powered by Vue.js</span>
        </div>
      </div>
    </v-navigation-drawer>

    <!-- App Bar com gradiente e logo -->
    <v-app-bar 
      :class="appBarClass"
      elevation="0"
      height="70"
    >
      <v-app-bar-nav-icon 
        @click="drawer = !drawer"
        class="nav-icon"
      ></v-app-bar-nav-icon>

      <div class="header-content">
        <!-- Logo Vue -->
        <svg class="header-vue-logo" viewBox="0 0 128 128" width="35" height="35">
          <path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"/>
          <path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"/>
        </svg>
        
        <!-- Título -->
        <h1 class="app-title">
          <span class="title-todo">Todo List</span>
          <span class="title-with">with</span>
          <span class="title-vue">Vue</span>
        </h1>
      </div>

      <v-spacer></v-spacer>

      <!-- Badge de status -->
      <div class="status-badge">
        <span class="status-dot"></span>
        <span class="status-text">Online</span>
      </div>
    </v-app-bar>

    <!-- Main Content -->
    <v-main class="main-content">
      <div class="content-wrapper">
        <slot/>
      </div>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, computed } from "vue";

const drawer = ref(false);
const items = [
  { text: "Home", icon: "mdi-home", to: "/" },
  { text: "About", icon: "mdi-information", to: "about" },
];

const drawerClass = computed(() => "custom-drawer");
const appBarClass = computed(() => "custom-app-bar");
</script>

<style scoped>
/* ========== Cores do Vue ========== */
:root {
  --vue-green: #42b883;
  --vue-dark: #35495e;
  --vue-black: #0d0d0d;
  --gradient-primary: linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%);
  --gradient-dark: linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 100%);
}

/* ========== App Bar ========== */
.custom-app-bar {
  background: #0d0d0d !important;
  backdrop-filter: blur(10px);
  border-bottom: 2px solid var(--vue-green);
  box-shadow: 0 2px 20px rgba(66, 184, 131, 0.2);
}

.nav-icon {
  color: white !important;
  transition: transform 0.3s ease;
}

.nav-icon:hover {
  transform: rotate(90deg);
}

.header-content {
  display: flex;
  align-items: center;
  gap: 16px;
}

.header-vue-logo {
  filter: drop-shadow(0 2px 8px rgba(66, 184, 131, 0.4));
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
}

.app-title {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin: 0;
  font-weight: 700;
  letter-spacing: -0.5px;
}

.title-todo {
  font-size: 28px;
  color: white;
  text-shadow: 0 0 10px rgba(66, 184, 131, 0.5), 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.title-with {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 400;
  font-style: italic;
}

.title-vue {
  font-size: 28px;
  color: var(--vue-green);
  text-shadow: 0 0 15px rgba(66, 184, 131, 0.6);
  font-weight: 800;
}

.status-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.2);
  padding: 6px 16px;
  border-radius: 20px;
  margin-right: 12px;
  backdrop-filter: blur(10px);
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #4ade80;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.status-text {
  color: white;
  font-size: 13px;
  font-weight: 600;
}

/* ========== Navigation Drawer ========== */
.custom-drawer {
  background: #0d0d0d !important;
  border-right: 2px solid var(--vue-green);
  box-shadow: 2px 0 20px rgba(66, 184, 131, 0.15);
}

.drawer-header {
  background: linear-gradient(180deg, rgba(66, 184, 131, 0.1) 0%, transparent 100%);
  padding: 32px 20px 24px;
  border-bottom: 1px solid rgba(66, 184, 131, 0.2);
}

.user-section {
  text-align: center;
}

.user-avatar {
  border: 4px solid var(--vue-green);
  box-shadow: 0 0 20px rgba(66, 184, 131, 0.5), 0 4px 12px rgba(66, 184, 131, 0.3);
  margin-bottom: 12px;
}

.user-name {
  color: white;
  font-size: 16px;
  font-weight: 700;
  margin: 8px 0 4px;
  letter-spacing: 0.3px;
}

.user-subtitle {
  color: var(--vue-green);
  font-size: 13px;
  margin: 0;
  font-weight: 500;
}

.custom-divider {
  border-color: rgba(66, 184, 131, 0.3);
  margin: 0 0 16px;
}

/* ========== Menu Items ========== */
.menu-list {
  padding: 8px 12px;
}

.menu-link {
  text-decoration: none;
  display: block;
  margin-bottom: 4px;
}

.menu-item {
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.menu-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 4px;
  height: 100%;
  background: var(--vue-green);
  transform: scaleY(0);
  transition: transform 0.3s ease;
}

.menu-item:hover {
  background: rgba(66, 184, 131, 0.25) !important;
  transform: translateX(8px);
  box-shadow: 0 4px 12px rgba(66, 184, 131, 0.3);
}

.menu-item:hover::before {
  transform: scaleY(1);
}

.menu-icon {
  color: var(--vue-green) !important;
  font-size: 22px;
}

.menu-text {
  color: white !important;
  font-weight: 500;
  font-size: 15px;
}

.router-link-active .menu-item {
  background: rgba(66, 184, 131, 0.2) !important;
}

.router-link-active .menu-item::before {
  transform: scaleY(1);
}

.router-link-active .menu-icon {
  color: #4ade80 !important;
}

/* ========== Drawer Footer ========== */
.drawer-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(0deg, #0d0d0d 0%, transparent 100%);
  border-top: 1px solid rgba(66, 184, 131, 0.2);
}

.vue-logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.vue-logo {
  filter: drop-shadow(0 2px 6px rgba(66, 184, 131, 0.4));
}

.powered-text {
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
  font-weight: 500;
}

/* ========== Main Content ========== */
.main-content {
  background: #1a1a1a !important;
  min-height: 100vh;
}

.content-wrapper {
  padding: 24px;
  max-width: 1400px;
  margin: 0 auto;
}

/* ========== Responsivo ========== */
@media (max-width: 960px) {
  .app-title {
    font-size: 20px;
  }
  
  .title-todo,
  .title-vue {
    font-size: 22px;
  }
  
  .status-badge {
    display: none;
  }
}
</style>