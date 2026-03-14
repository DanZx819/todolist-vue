# Todo List com Vue
#Link: https://todolist-vue-xi.vercel.app
Aplicação web moderna de gerenciamento de tarefas desenvolvida com Vue.js 3, Vuetify 3 e Pinia.

## Descrição do Projeto

O Todo List com Vue é uma aplicação completa para gerenciamento de tarefas pessoais, oferecendo uma interface intuitiva, design elegante e experiência de usuário fluida. A aplicação permite criar, editar, deletar e marcar tarefas como concluídas, além de fornecer estatísticas e métricas de produtividade.

O projeto utiliza as mais recentes tecnologias do ecossistema Vue.js, seguindo as melhores práticas de desenvolvimento frontend e design de interface. Todos os dados são armazenados localmente no navegador através do localStorage, garantindo privacidade total e funcionamento offline.

## Funcionalidades Principais

### Gerenciamento de Tarefas
- Adicionar novas tarefas com título e descrição
- Editar tarefas existentes
- Marcar tarefas como concluídas/pendentes
- Deletar tarefas com confirmação
- Validação de entrada (mínimo 5 caracteres)

### Interface e UX
- Design dark moderno com paleta de cores do Vue.js
- Animações e transições suaves
- Sistema de notificações coloridas por tipo de ação
- Interface totalmente responsiva (desktop, tablet, mobile)
- Navegação fluida entre páginas

### Persistência de Dados
- Salvamento automático no localStorage
- Sincronização em tempo real
- Sem necessidade de backend ou cadastro
- Dados 100% privados e locais

### Páginas da Aplicação
- **Landing Page**: Página inicial com apresentação e call-to-action
- **Home**: Lista completa de tarefas com CRUD completo
- **About**: Informações sobre o projeto e tecnologias utilizadas

## Tecnologias Utilizadas

### Frontend Framework
**Vue.js 3.4+**
- Framework JavaScript progressivo para construção de interfaces
- Composition API para lógica de componentes
- Sistema de reatividade com ref e computed
- Single File Components (SFC)

### UI Framework
**Vuetify 3.5+**
- Biblioteca de componentes Material Design
- Componentes prontos: cards, dialogs, alerts, inputs, buttons
- Sistema de grid responsivo
- Ícones Material Design Icons

### Gerenciamento de Estado
**Pinia 2.1+**
- Store oficial do Vue.js (sucessor do Vuex)
- Stores modulares (task.js, alert.js)
- Actions para lógica de negócio
- Integração com localStorage

### Roteamento
**Vue Router 4+**
- Roteador oficial para aplicações SPA
- Navegação declarativa
- Rotas: `/` (landing), `/home` (tarefas), `/about` (sobre)

### Linguagens e Padrões
- **JavaScript ES6+**: Arrow functions, destructuring, modules, async/await
- **HTML5**: Semântica moderna
- **CSS3**: Flexbox, Grid, Animations, Gradients, Custom Properties
- **localStorage API**: Persistência de dados no navegador

## Estrutura do Projeto

```
src/
├── components/
│   ├── AlertNotification.vue      # Sistema de notificações
│   ├── TodoListComponent.vue      # Input de criação de tarefas
│   ├── ListaComponent.vue         # Lista de tarefas
│   ├── DialogTaskFieldComponent.vue  # Dialog de edição
│   └── DialogDeleteComponent.vue  # Dialog de confirmação de exclusão
├── views/
│   ├── LandingPage.vue           # Página inicial
│   ├── HomeView.vue              # Página de tarefas
│   └── AboutView.vue             # Página sobre o projeto
├── stores/
│   ├── task.js                   # Store de tarefas
│   └── alert.js                  # Store de alertas
├── router/
│   └── index.js                  # Configuração de rotas
├── layouts/
│   └── DefaultLayout.vue         # Layout principal com sidebar
└── App.vue                       # Componente raiz
```

## Instalação e Execução

### Pré-requisitos
- Node.js 16.x ou superior
- npm ou yarn

### Instalação

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/todo-list-vue.git

# Entrar no diretório
cd todo-list-vue

# Instalar dependências
npm install
```

### Execução em Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### Build para Produção

```bash
# Gerar build otimizado
npm run build

# Prévia do build de produção
npm run preview
```

## Stores (Pinia)

### Task Store (task.js)
Gerencia o estado e operações das tarefas.

**State:**
- `tasks`: Array de tarefas
- `titleTaskCreating`: Título da nova tarefa
- `showDialogDelete`: Controle do dialog de exclusão
- `showDialogTaskFields`: Controle do dialog de edição
- `taskSelecionada`: Index da tarefa selecionada

**Actions:**
- `addTask()`: Adiciona nova tarefa
- `deleteTask()`: Remove tarefa selecionada
- `toggleEdit(index)`: Abre/fecha dialog de edição
- `saveEdit(updatedTask)`: Salva alterações da tarefa
- `toggleDelete(index)`: Abre/fecha dialog de exclusão
- `toggleDoneTask(index)`: Marca/desmarca tarefa como concluída
- `salvarNavegador()`: Persiste no localStorage
- `getTasks()`: Carrega tarefas do localStorage

### Alert Store (alert.js)
Gerencia notificações do sistema.

**State:**
- `title`: Título da notificação
- `type`: Tipo (success, info, warning, error)
- `showAlert`: Controle de exibição

**Actions:**
- `notifyAlertCreate()`: Notificação de tarefa criada
- `notifyAlertEdit()`: Notificação de tarefa editada
- `notifyAlertDelete()`: Notificação de tarefa deletada
- `notifyAlert(title, type)`: Notificação genérica

## Sistema de Notificações

As notificações são exibidas automaticamente após cada ação:

- **Success (Verde)**: Tarefa criada
- **Info (Azul)**: Tarefa editada
- **Warning (Laranja)**: Tarefa deletada
- **Error (Vermelho)**: Erros do sistema

Cada notificação possui:
- Ícone animado específico
- Cor de destaque
- Duração de 2 segundos
- Animação de entrada e saída

## Design System

### Paleta de Cores
- **Primary (Verde Vue)**: `#42b883`
- **Dark (Vue)**: `#35495e`
- **Background**: `#0d0d0d`, `#1a1a1a`
- **Success**: `#4caf50`
- **Warning**: `#ff9800`
- **Error**: `#f44336`
- **Info**: `#2196f3`

### Tipografia
- **Títulos**: 24px - 48px, peso 700-800
- **Subtítulos**: 16px - 20px, peso 600
- **Corpo**: 14px - 16px, peso 400-500

### Animações
- Transições: `cubic-bezier(0.4, 0, 0.2, 1)`
- Duração: 300ms - 400ms
- Hover effects em todos os elementos interativos
- Animações de entrada/saída em listas

## Responsividade

Breakpoints:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 0px - 767px

Adaptações mobile:
- Menu sidebar colapsável
- Cards em coluna única
- Botões full-width
- Tamanhos de fonte reduzidos
- Touch-friendly (44px mínimo)

## Boas Práticas Implementadas

### Código
- Composition API do Vue 3
- Separação de responsabilidades (components, stores, views)
- Nomenclatura consistente em português
- Comentários em seções críticas
- Validação de entrada de dados

### Performance
- Lazy loading de rotas
- Uso de computed properties
- Transições otimizadas
- LocalStorage para persistência

### UX/UI
- Feedback visual para todas as ações
- Confirmação antes de ações destrutivas
- Estados de loading quando necessário
- Mensagens de erro claras
- Design consistente em todas as telas

## Melhorias Futuras

- Categorias e tags para tarefas
- Filtros e ordenação
- Busca de tarefas
- Modo claro/escuro toggle
- Exportação para PDF/JSON
- Notificações push
- Integração com backend (opcional)
- Autenticação e sincronização na nuvem (opcional)

## Autor

**Daniel de Oliveira Zanchetta**
Desenvolvedor Full Stack

## Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## Agradecimentos

- Comunidade Vue.js
- Equipe Vuetify
- Material Design Icons
- Todos que contribuíram com feedback e sugestões
