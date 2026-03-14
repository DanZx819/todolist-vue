<template>
  <div class="about-container">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-content">
        <div class="logo-wrapper">
          <svg class="vue-logo-large" viewBox="0 0 128 128" width="100" height="100">
            <path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"/>
            <path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"/>
          </svg>
        </div>
        <h1 class="hero-title">Todo List com Vue</h1>
        <p class="hero-subtitle">Gerenciador de tarefas moderno e eficiente</p>
        <div class="version-badge">
          <v-icon class="badge-icon">mdi-tag</v-icon>
          <span>Versão 1.0.0</span>
        </div>
      </div>
    </div>

    <!-- Sobre o Projeto -->
    <div class="content-section">
      <div class="section-card">
        <div class="card-header">
          <v-icon class="card-icon">mdi-information</v-icon>
          <h2 class="card-title">Sobre o Projeto</h2>
        </div>
        <div class="card-content">
          <p class="card-text">
            O <strong>Todo List com Vue</strong> é uma aplicação web moderna de gerenciamento de tarefas, 
            desenvolvida com foco em produtividade, experiência do usuário e design elegante. 
            O projeto utiliza as mais recentes tecnologias do ecossistema Vue.js para oferecer 
            uma experiência fluida, responsiva e intuitiva.
          </p>
          <p class="card-text">
            A aplicação permite criar, editar, deletar e marcar tarefas como concluídas, 
            além de fornecer um dashboard completo com estatísticas e métricas de produtividade. 
            Todos os dados são armazenados localmente no navegador, garantindo privacidade e 
            acesso offline às suas tarefas.
          </p>
          <p class="card-text">
            O design segue a identidade visual do Vue.js, utilizando a paleta de cores oficial 
            (verde #42b883 e dark #35495e) combinada com um tema dark moderno, resultando em 
            uma interface profissional e agradável aos olhos.
          </p>
        </div>
      </div>
    </div>

    <!-- Funcionalidades -->
    <div class="content-section">
      <h2 class="section-heading">
        <v-icon class="heading-icon">mdi-star</v-icon>
        Principais Funcionalidades
      </h2>
      <div class="features-grid">
        <div class="feature-card" v-for="feature in features" :key="feature.title">
          <div class="feature-icon-wrapper">
            <v-icon class="feature-icon">{{ feature.icon }}</v-icon>
          </div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-description">{{ feature.description }}</p>
        </div>
      </div>
    </div>

    <!-- Tecnologias -->
    <div class="content-section">
      <h2 class="section-heading">
        <v-icon class="heading-icon">mdi-code-tags</v-icon>
        Tecnologias Utilizadas
      </h2>
      
      <!-- Frontend Framework -->
      <div class="tech-category">
        <h3 class="category-title">
          <v-icon class="category-icon">mdi-vuejs</v-icon>
          Framework Frontend
        </h3>
        <div class="tech-grid">
          <div class="tech-card vue-card">
            <v-icon class="tech-icon" style="color: #42b883">mdi-vuejs</v-icon>
            <h3 class="tech-name">Vue.js 3</h3>
            <p class="tech-version">v3.4+</p>
            <p class="tech-description">
              Framework JavaScript progressivo para construção de interfaces de usuário. 
              Utilizamos Composition API, reatividade com ref/computed e sistema de componentes.
            </p>
          </div>
        </div>
      </div>

      <!-- UI Framework -->
      <div class="tech-category">
        <h3 class="category-title">
          <v-icon class="category-icon">mdi-palette</v-icon>
          Framework de UI
        </h3>
        <div class="tech-grid">
          <div class="tech-card vuetify-card">
            <v-icon class="tech-icon" style="color: #1867c0">mdi-vuetify</v-icon>
            <h3 class="tech-name">Vuetify 3</h3>
            <p class="tech-version">v3.5+</p>
            <p class="tech-description">
              Biblioteca de componentes Material Design para Vue.js. Fornece componentes prontos 
              como cards, dialogs, alerts, inputs e muito mais, acelerando o desenvolvimento.
            </p>
          </div>
        </div>
      </div>

      <!-- State Management -->
      <div class="tech-category">
        <h3 class="category-title">
          <v-icon class="category-icon">mdi-database</v-icon>
          Gerenciamento de Estado
        </h3>
        <div class="tech-grid">
          <div class="tech-card pinia-card">
            <v-icon class="tech-icon" style="color: #ffd859">mdi-database</v-icon>
            <h3 class="tech-name">Pinia</h3>
            <p class="tech-version">v2.1+</p>
            <p class="tech-description">
              Store oficial do Vue.js para gerenciamento de estado. Utilizamos stores para 
              tarefas (task.js) e alertas (alert.js), com actions, getters e persistência em localStorage.
            </p>
          </div>
        </div>
      </div>

      <!-- Router -->
      <div class="tech-category">
        <h3 class="category-title">
          <v-icon class="category-icon">mdi-routes</v-icon>
          Roteamento
        </h3>
        <div class="tech-grid">
          <div class="tech-card router-card">
            <v-icon class="tech-icon" style="color: #42b883">mdi-routes</v-icon>
            <h3 class="tech-name">Vue Router</h3>
            <p class="tech-version">v4+</p>
            <p class="tech-description">
              Roteador oficial do Vue.js para navegação SPA (Single Page Application). 
              Gerencia rotas como /home, /dashboard e /about com navegação fluida.
            </p>
          </div>
        </div>
      </div>

      <!-- Other Technologies -->
      <div class="tech-category">
        <h3 class="category-title">
          <v-icon class="category-icon">mdi-tools</v-icon>
          Outras Tecnologias
        </h3>
        <div class="tech-grid-small">
          <div class="tech-card-small">
            <v-icon class="tech-icon-small" style="color: #f7df1e">mdi-language-javascript</v-icon>
            <h4 class="tech-name-small">JavaScript ES6+</h4>
            <p class="tech-desc-small">Arrow functions, destructuring, modules</p>
          </div>
          <div class="tech-card-small">
            <v-icon class="tech-icon-small" style="color: #e34f26">mdi-language-html5</v-icon>
            <h4 class="tech-name-small">HTML5</h4>
            <p class="tech-desc-small">Semântica e estrutura moderna</p>
          </div>
          <div class="tech-card-small">
            <v-icon class="tech-icon-small" style="color: #1572b6">mdi-language-css3</v-icon>
            <h4 class="tech-name-small">CSS3</h4>
            <p class="tech-desc-small">Flexbox, Grid, Animations, Gradients</p>
          </div>
          <div class="tech-card-small">
            <v-icon class="tech-icon-small" style="color: #ff6b6b">mdi-database-outline</v-icon>
            <h4 class="tech-name-small">LocalStorage</h4>
            <p class="tech-desc-small">Persistência de dados no navegador</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Developer Info -->
    <div class="content-section">
      <div class="developer-card">
        <div class="developer-header">
          <div class="developer-avatar">
            <v-icon class="avatar-icon">mdi-account-circle</v-icon>
          </div>
          <div class="developer-info">
            <h2 class="developer-name">Daniel de Oliveira Zanchetta</h2>
            <p class="developer-role">Desenvolvedor Full Stack</p>
          </div>
        </div>
        <div class="developer-content">
          <p class="developer-bio">
            Apaixonado por criar aplicações web modernas, funcionais e com design impecável. 
            Especializado em Vue.js, JavaScript moderno e experiência do usuário. 
            Este projeto demonstra habilidades em desenvolvimento frontend, gerenciamento de estado, 
            design responsivo e boas práticas de código.
          </p>
          <div class="social-links">
            <a href="https://github.com/DanZx819"  class="social-btn" target="_blank">
              <v-icon>mdi-github</v-icon>
              <span>GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/daniel-de-oliveira-zanchetta-512a3b311/" class="social-btn" target="_blank">
              <v-icon>mdi-linkedin</v-icon>
              <span>LinkedIn</span>
            </a>
            
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="about-footer">
      <p class="footer-text">
        Feito com <v-icon class="heart-icon">mdi-heart</v-icon> usando Vue.js
      </p>
      <p class="copyright">© 2024 Todo List com Vue. Todos os direitos reservados.</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const features = ref([
  {
    icon: 'mdi-plus-circle',
    title: 'Criação Fácil',
    description: 'Adicione novas tarefas rapidamente com interface intuitiva e atalhos de teclado.'
  },
  {
    icon: 'mdi-pencil',
    title: 'Edição Completa',
    description: 'Modifique título e descrição das suas tarefas a qualquer momento.'
  },
  {
    icon: 'mdi-check-all',
    title: 'Acompanhamento',
    description: 'Marque tarefas como concluídas e monitore sua produtividade em tempo real.'
  },
  {
    icon: 'mdi-delete',
    title: 'Exclusão Segura',
    description: 'Remova tarefas com dialogs de confirmação para evitar exclusões acidentais.'
  },
  {
    icon: 'mdi-content-save',
    title: 'Salvamento Automático',
    description: 'Dados salvos automaticamente no localStorage, sem risco de perder informações.'
  },
  {
    icon: 'mdi-chart-line',
    title: 'Dashboard Analítico',
    description: 'Visualize estatísticas, métricas e progresso com gráficos e indicadores.'
  },
  {
    icon: 'mdi-bell-ring',
    title: 'Notificações',
    description: 'Alertas visuais coloridos para cada ação (criar, editar, deletar).'
  },
  {
    icon: 'mdi-palette',
    title: 'Design Moderno',
    description: 'Interface dark elegante com cores do Vue.js e animações suaves.'
  },
  {
    icon: 'mdi-cellphone',
    title: 'Responsivo',
    description: 'Funciona perfeitamente em desktop, tablet e smartphone.'
  }
]);
</script>

<style scoped>
/* ========== Container ========== */
.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
}

/* ========== Hero Section ========== */
.hero-section {
  background: linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 100%);
  border: 2px solid #42b883;
  border-radius: 24px;
  padding: 60px 40px;
  margin-bottom: 40px;
  text-align: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(66, 184, 131, 0.2);
}

.hero-section::before {
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

.logo-wrapper {
  margin-bottom: 24px;
}

.vue-logo-large {
  filter: drop-shadow(0 0 20px rgba(66, 184, 131, 0.6));
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.hero-title {
  color: white;
  font-size: 48px;
  font-weight: 800;
  margin: 0 0 12px;
  letter-spacing: -1px;
}

.hero-subtitle {
  color: rgba(255, 255, 255, 0.7);
  font-size: 18px;
  margin: 0 0 24px;
  font-weight: 500;
}

.version-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(66, 184, 131, 0.2);
  border: 1px solid #42b883;
  padding: 10px 20px;
  border-radius: 12px;
  color: #42b883;
  font-weight: 700;
  font-size: 14px;
}

.badge-icon {
  font-size: 20px;
}

/* ========== Content Section ========== */
.content-section {
  margin-bottom: 40px;
}

.section-heading {
  color: white;
  font-size: 28px;
  font-weight: 800;
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0 0 24px;
}

.heading-icon {
  color: #42b883;
  font-size: 32px;
  filter: drop-shadow(0 0 8px rgba(66, 184, 131, 0.5));
}

/* ========== Section Card ========== */
.section-card {
  background: #0d0d0d;
  border: 2px solid rgba(66, 184, 131, 0.3);
  border-radius: 16px;
  padding: 28px;
  transition: all 0.3s ease;
}

.section-card:hover {
  border-color: #42b883;
  box-shadow: 0 4px 20px rgba(66, 184, 131, 0.2);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.card-icon {
  color: #42b883;
  font-size: 32px;
  filter: drop-shadow(0 0 8px rgba(66, 184, 131, 0.5));
}

.card-title {
  color: white;
  font-size: 24px;
  font-weight: 700;
  margin: 0;
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.card-text {
  color: rgba(255, 255, 255, 0.85);
  font-size: 16px;
  line-height: 1.7;
  margin: 0;
  text-align: justify;
}

.card-text strong {
  color: #42b883;
  font-weight: 700;
}

/* ========== Features Grid ========== */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.feature-card {
  background: #0d0d0d;
  border: 2px solid rgba(66, 184, 131, 0.3);
  border-radius: 16px;
  padding: 28px;
  text-align: center;
  transition: all 0.3s ease;
}

.feature-card:hover {
  border-color: #42b883;
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(66, 184, 131, 0.3);
}

.feature-icon-wrapper {
  width: 70px;
  height: 70px;
  background: rgba(66, 184, 131, 0.2);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.feature-icon {
  color: #42b883;
  font-size: 36px;
  filter: drop-shadow(0 0 8px rgba(66, 184, 131, 0.5));
}

.feature-title {
  color: white;
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 12px;
}

.feature-description {
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
}

/* ========== Tech Categories ========== */
.tech-category {
  margin-bottom: 32px;
}

.category-title {
  color: white;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0 0 16px;
}

.category-icon {
  color: #42b883;
  font-size: 24px;
}

.tech-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.tech-card {
  background: #0d0d0d;
  border: 2px solid rgba(66, 184, 131, 0.3);
  border-radius: 16px;
  padding: 28px;
  transition: all 0.3s ease;
}

.tech-card:hover {
  border-color: #42b883;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(66, 184, 131, 0.3);
}

.tech-icon {
  font-size: 56px;
  margin-bottom: 16px;
}

.tech-name {
  color: white;
  font-size: 24px;
  font-weight: 800;
  margin: 0 0 8px;
}

.tech-version {
  color: #42b883;
  font-size: 14px;
  font-weight: 700;
  margin: 0 0 16px;
}

.tech-description {
  color: rgba(255, 255, 255, 0.8);
  font-size: 15px;
  line-height: 1.6;
  margin: 0;
  text-align: justify;
}

/* ========== Small Tech Grid ========== */
.tech-grid-small {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.tech-card-small {
  background: #0d0d0d;
  border: 2px solid rgba(66, 184, 131, 0.3);
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  transition: all 0.3s ease;
}

.tech-card-small:hover {
  border-color: #42b883;
  transform: translateY(-2px);
}

.tech-icon-small {
  font-size: 40px;
  margin-bottom: 12px;
}

.tech-name-small {
  color: white;
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 8px;
}

.tech-desc-small {
  color: rgba(255, 255, 255, 0.7);
  font-size: 13px;
  margin: 0;
}

/* ========== Developer Card ========== */
.developer-card {
  background: linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 100%);
  border: 2px solid #42b883;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 20px rgba(66, 184, 131, 0.2);
}

.developer-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 24px;
}

.developer-avatar {
  width: 80px;
  height: 80px;
  background: rgba(66, 184, 131, 0.2);
  border: 3px solid #42b883;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 20px rgba(66, 184, 131, 0.4);
}

.avatar-icon {
  color: #42b883;
  font-size: 50px;
}

.developer-name {
  color: white;
  font-size: 24px;
  font-weight: 800;
  margin: 0 0 4px;
}

.developer-role {
  color: #42b883;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
}

.developer-bio {
  color: rgba(255, 255, 255, 0.85);
  font-size: 16px;
  line-height: 1.7;
  margin: 0 0 24px;
  text-align: justify;
}

.social-links {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.social-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(66, 184, 131, 0.1);
  border: 2px solid rgba(66, 184, 131, 0.3);
  padding: 12px 20px;
  border-radius: 10px;
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s ease;
}

.social-btn:hover {
  border-color: #42b883;
  background: rgba(66, 184, 131, 0.2);
  transform: translateY(-2px);
}

.social-btn .v-icon {
  color: #42b883;
  font-size: 20px;
}

/* ========== Footer ========== */
.about-footer {
  text-align: center;
  padding: 32px 0;
  border-top: 2px solid rgba(66, 184, 131, 0.3);
  margin-top: 40px;
}

.footer-text {
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  margin: 0 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.heart-icon {
  color: #f44336;
  animation: heartbeat 1.5s infinite;
}

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

.copyright {
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  margin: 0;
}

/* ========== Responsive ========== */
@media (max-width: 768px) {
  .hero-section {
    padding: 40px 24px;
  }

  .hero-title {
    font-size: 32px;
  }

  .features-grid,
  .tech-grid-small {
    grid-template-columns: 1fr;
  }

  .developer-header {
    flex-direction: column;
    text-align: center;
  }

  .social-links {
    justify-content: center;
  }
}
</style>