# 🏦 Fintech - Painel de Gerenciamento de Usuários

Aplicação front-end desenvolvida em **React + TypeScript**, com roteamento via **React Router**, focada na gestão de usuários de uma plataforma **FINTECH**.  
O sistema permite **login**, **visualização**, **criação**, **edição** e **exclusão** de usuários, com uma interface moderna, responsiva e popups reutilizáveis.

---

## 🚀 Tecnologias Utilizadas

- **React 18+**
- **TypeScript**
- **Vite**
- **React Router DOM**
- **CSS Modules / Global Styles**
- **Fetch API (para integração com o backend)**
- **JAVA**

---

## 🧱 Estrutura de Pastas

```
src/
├── App.tsx
├── main.tsx
├── api/
│   └── users/
│       └── users.ts          # Métodos GET, POST, PUT, DELETE para usuários
├── components/
│   ├── Header.tsx
│   ├── PopupView.tsx
│   ├── PopupEdit.tsx
│   ├── CriarUsuario.tsx
│   └── ...
├── pages/
│   ├── Login.tsx
│   ├── Users.tsx
├── styles/
│   ├── global.css
│   ├── Header.css
│   ├── Page_Users.css
│   ├── PopupEdit.css
│   └── ...
└── types/
    └── users.ts              # Tipagem dos objetos de usuário
```

---

## 💡 Principais Funcionalidades

### 👥 Gerenciar Usuários (`/users`)
- Lista de todos os usuários cadastrados (GET)
- Botões para:
  - **Analisar** → abre `PopupView`
  - **Editar** → abre `PopupEdit`
  - **Excluir** → executa `DELETE_user`
  - **Criar Usuário** → abre `CriarUsuario`

---

## 🧩 Componentes

### `Header.tsx`
Barra fixa superior com o nome da fintech e botão “Sair”.

### `PopupView.tsx`
Exibe os dados completos de um usuário selecionado (GET by CPF).

### `PopupEdit.tsx`
Formulário de atualização dos dados do usuário (PUT).

### `CriarUsuario.tsx`
Formulário para criar novos usuários (POST).

---

## 🎨 Estilos

- `global.css` define variáveis globais, resets e temas em tons de azul escuro.

---

## 🔗 Integração com Backend

As requisições são centralizadas em `api/users/users.ts`, contendo métodos assíncronos:
```ts
GET_all()
GET_byCpf(user)
POST_user(user)
PUT_user(user)
DELETE_user(user)
```

O backend deve responder com endpoints REST no padrão:
```
GET    /api/user
GET    /api/user/{cpf}
POST   /api/user
PUT    /api/user
DELETE /api/user/{cpf}
```

---

## ⚙️ Execução do Projeto

### 🔧 Instalar dependências
```bash
npm install
```

### ▶️ Executar em modo desenvolvimento
```bash
npm run dev
```

### 🏗️ Build de produção
```bash
npm run build
```

### 🌐 Visualizar build localmente
```bash
npm run preview
```

---

## 👤 Autor

**Mateus Durães dos Santos**  
💻 Designer & Front-End Developer  
📧 [GitHub Portfolio](https://github.com/mateusduraes)
