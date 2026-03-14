<template>
  <div class="landing-container">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-background">
        <div class="animated-circles">
          <div class="circle circle-1"></div>
          <div class="circle circle-2"></div>
          <div class="circle circle-3"></div>
        </div>
      </div>
      
      <div class="hero-content">
        <div class="logo-hero">
          <svg class="vue-logo-hero" viewBox="0 0 128 128" width="120" height="120">
            <path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"/>
            <path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"/>
          </svg>
        </div>
        
        <h1 class="hero-title">
          Organize suas tarefas com
          <span class="hero-title-vue">Vue.js</span>
        </h1>
        
        <p class="hero-description">
          Gerencie suas atividades diárias de forma simples, rápida e eficiente. 
          Interface moderna, design elegante e totalmente responsivo.
        </p>
        
        <div class="hero-cta">
          <router-link to="/todo" class="btn-primary">
            <v-icon class="btn-icon">mdi-rocket-launch</v-icon>
            Começar Agora
          </router-link>
          <router-link to="/about" class="btn-secondary">
            <v-icon class="btn-icon">mdi-information</v-icon>
            Saiba Mais
          </router-link>
        </div>
        
        <div class="hero-stats">
          <div class="stat-item">
            <v-icon class="stat-icon">mdi-check-circle</v-icon>
            <div class="stat-info">
              <span class="stat-number">100%</span>
              <span class="stat-label">Grátis</span>
            </div>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <v-icon class="stat-icon">mdi-shield-check</v-icon>
            <div class="stat-info">
              <span class="stat-number">Seguro</span>
              <span class="stat-label">Dados Locais</span>
            </div>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <v-icon class="stat-icon">mdi-flash</v-icon>
            <div class="stat-info">
              <span class="stat-number">Rápido</span>
              <span class="stat-label">Sem Delay</span>
            </div>
          </div>
        </div>
      </div>
    </div>

   </div>
</template>

<script setup>
import { ref } from 'vue';

const features = ref([
  {
    icon: 'mdi-lightning-bolt',
    title: 'Interface Rápida',
    description: 'Adicione e gerencie tarefas em segundos com nossa interface otimizada.'
  },
  {
    icon: 'mdi-palette',
    title: 'Design Moderno',
    description: 'Visual dark elegante com as cores oficiais do Vue.js e animações suaves.'
  },
  {
    icon: 'mdi-content-save',
    title: 'Auto-Save',
    description: 'Suas tarefas são salvas automaticamente no navegador, nunca perca dados.'
  },
  {
    icon: 'mdi-cellphone-check',
    title: 'Responsivo',
    description: 'Funciona perfeitamente em desktop, tablet e smartphone.'
  },
  {
    icon: 'mdi-shield-lock',
    title: 'Privacidade',
    description: 'Todos os dados ficam apenas no seu navegador, 100% privado.'
  },
  {
    icon: 'mdi-chart-line',
    title: 'Estatísticas',
    description: 'Acompanhe seu progresso e produtividade com métricas detalhadas.'
  }
]);

const steps = ref([
  {
    icon: 'mdi-plus-circle',
    title: 'Adicione Tarefas',
    description: 'Digite o que você precisa fazer e pressione Enter ou clique em adicionar.'
  },
  {
    icon: 'mdi-pencil',
    title: 'Organize e Edite',
    description: 'Edite, marque como concluída ou delete tarefas quando necessário.'
  },
  {
    icon: 'mdi-trophy',
    title: 'Seja Produtivo',
    description: 'Acompanhe seu progresso e conquiste suas metas diárias!'
  }
]);

const ctaFeatures = ref([
  'Sem necessidade de cadastro',
  'Totalmente gratuito',
  'Dados armazenados localmente',
  'Interface intuitiva',
  'Acesso instantâneo'
]);
</script>

<style scoped>
/* ========== Container ========== */
.landing-container {
  min-height: 100vh;
  background: #0d0d0d;
}

/* ========== Hero Section ========== */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 24px;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.animated-circles {
  position: relative;
  width: 100%;
  height: 100%;
}

.circle {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(66, 184, 131, 0.15) 0%, transparent 70%);
  animation: float-circle 20s infinite ease-in-out;
}

.circle-1 {
  width: 400px;
  height: 400px;
  top: 10%;
  left: 10%;
  animation-delay: 0s;
}

.circle-2 {
  width: 300px;
  height: 300px;
  top: 50%;
  right: 15%;
  animation-delay: 7s;
}

.circle-3 {
  width: 250px;
  height: 250px;
  bottom: 15%;
  left: 50%;
  animation-delay: 14s;
}

@keyframes float-circle {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 900px;
}

.logo-hero {
  margin-bottom: 32px;
}

.vue-logo-hero {
  filter: drop-shadow(0 0 30px rgba(66, 184, 131, 0.6));
  animation: float 4s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.hero-title {
  color: white;
  font-size: 64px;
  font-weight: 900;
  margin: 0 0 24px;
  line-height: 1.2;
  letter-spacing: -2px;
}

.hero-title-vue {
  display: block;
  color: #42b883;
  text-shadow: 0 0 40px rgba(66, 184, 131, 0.6);
  animation: glow 2s ease-in-out infinite;
}

@keyframes glow {
  0%, 100% { text-shadow: 0 0 40px rgba(66, 184, 131, 0.6); }
  50% { text-shadow: 0 0 60px rgba(66, 184, 131, 0.9); }
}

.hero-description {
  color: rgba(255, 255, 255, 0.8);
  font-size: 20px;
  line-height: 1.6;
  margin: 0 0 48px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

/* ========== CTA Buttons ========== */
.hero-cta {
  display: flex;
  gap: 16px;
  justify-content: center;
  margin-bottom: 48px;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 18px 36px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
  letter-spacing: 0.3px;
}

.btn-primary {
  background: linear-gradient(135deg, #42b883 0%, #35495e 100%);
  color: white;
  box-shadow: 0 8px 24px rgba(66, 184, 131, 0.4);
}

.btn-primary:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(66, 184, 131, 0.6);
}

.btn-secondary {
  background: transparent;
  border: 2px solid #42b883;
  color: #42b883;
}

.btn-secondary:hover {
  background: rgba(66, 184, 131, 0.1);
  transform: translateY(-4px);
}

.btn-icon {
  font-size: 24px;
}

/* ========== Hero Stats ========== */
.hero-stats {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding: 28px 40px;
  background: rgba(26, 26, 26, 0.6);
  border: 2px solid rgba(66, 184, 131, 0.3);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  max-width: 600px;
  margin: 0 auto;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.stat-icon {
  color: #42b883;
  font-size: 32px;
  filter: drop-shadow(0 0 8px rgba(66, 184, 131, 0.5));
}

.stat-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.stat-number {
  color: white;
  font-size: 18px;
  font-weight: 800;
  line-height: 1;
}

.stat-label {
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
  font-weight: 600;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: rgba(66, 184, 131, 0.3);
}

/* ========== Features Section ========== */
.features-section,
.how-it-works-section,
.cta-section {
  padding: 80px 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 56px;
}

.section-title {
  color: white;
  font-size: 42px;
  font-weight: 800;
  margin: 0 0 16px;
  letter-spacing: -1px;
}

.section-subtitle {
  color: rgba(255, 255, 255, 0.7);
  font-size: 18px;
  margin: 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 28px;
}

.feature-card {
  background: #1a1a1a;
  border: 2px solid rgba(66, 184, 131, 0.3);
  border-radius: 16px;
  padding: 32px;
  text-align: center;
  transition: all 0.3s ease;
}

.feature-card:hover {
  border-color: #42b883;
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(66, 184, 131, 0.3);
}

.feature-icon-wrapper {
  width: 80px;
  height: 80px;
  background: rgba(66, 184, 131, 0.2);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.feature-icon {
  color: #42b883;
  font-size: 40px;
  filter: drop-shadow(0 0 10px rgba(66, 184, 131, 0.5));
}

.feature-title {
  color: white;
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 12px;
}

.feature-description {
  color: rgba(255, 255, 255, 0.7);
  font-size: 15px;
  line-height: 1.6;
  margin: 0;
}

/* ========== How It Works ========== */
.steps-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 32px;
}

.step-card {
  position: relative;
  background: #1a1a1a;
  border: 2px solid rgba(66, 184, 131, 0.3);
  border-radius: 16px;
  padding: 40px 28px 28px;
  text-align: center;
  transition: all 0.3s ease;
}

.step-card:hover {
  border-color: #42b883;
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(66, 184, 131, 0.3);
}

.step-number {
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #42b883 0%, #35495e 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  font-weight: 800;
  box-shadow: 0 4px 16px rgba(66, 184, 131, 0.5);
}

.step-icon {
  color: #42b883;
  font-size: 48px;
  margin-bottom: 16px;
  filter: drop-shadow(0 0 10px rgba(66, 184, 131, 0.5));
}

.step-title {
  color: white;
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 12px;
}

.step-description {
  color: rgba(255, 255, 255, 0.7);
  font-size: 15px;
  line-height: 1.6;
  margin: 0;
}

/* ========== CTA Final ========== */
.cta-section {
  background: linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 100%);
  border: 2px solid #42b883;
  border-radius: 24px;
  padding: 60px 40px;
  text-align: center;
  box-shadow: 0 8px 32px rgba(66, 184, 131, 0.2);
}

.cta-title {
  color: white;
  font-size: 48px;
  font-weight: 800;
  margin: 0 0 16px;
  letter-spacing: -1px;
}

.cta-subtitle {
  color: rgba(255, 255, 255, 0.8);
  font-size: 20px;
  margin: 0 0 40px;
}

.btn-cta-large {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  padding: 24px 48px;
  background: linear-gradient(135deg, #42b883 0%, #35495e 100%);
  color: white;
  font-size: 22px;
  font-weight: 800;
  text-decoration: none;
  border-radius: 16px;
  box-shadow: 0 12px 32px rgba(66, 184, 131, 0.5);
  transition: all 0.3s ease;
  margin-bottom: 32px;
}

.btn-cta-large:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 48px rgba(66, 184, 131, 0.7);
}

.btn-icon-large {
  font-size: 32px;
}

.cta-features-list {
  display: flex;
  justify-content: center;
  gap: 24px;
  flex-wrap: wrap;
}

.cta-feature {
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 15px;
  font-weight: 600;
}

.cta-feature-icon {
  color: #42b883;
  font-size: 20px;
}

/* ========== Footer ========== */
.landing-footer {
  text-align: center;
  padding: 40px 24px;
  border-top: 2px solid rgba(66, 184, 131, 0.3);
}

.footer-text {
  color: rgba(255, 255, 255, 0.7);
  font-size: 16px;
  margin: 0;
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

/* ========== Responsive ========== */
@media (max-width: 768px) {
  .hero-title {
    font-size: 42px;
  }

  .hero-description {
    font-size: 16px;
  }

  .hero-stats {
    flex-direction: column;
    gap: 20px;
  }

  .stat-divider {
    width: 100%;
    height: 1px;
  }

  .section-title {
    font-size: 32px;
  }

  .cta-title {
    font-size: 32px;
  }

  .features-grid,
  .steps-container {
    grid-template-columns: 1fr;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
    justify-content: center;
  }
}
</style>