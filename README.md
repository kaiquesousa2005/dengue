# 🦟 Casos da Dengue – Verificador de Sintomas

Este é um projeto desenvolvido como parte do curso de Análise e Desenvolvimento de Sistemas na Unifor. O sistema permite que usuários verifiquem sintomas comuns da **dengue**, com autenticação segura, armazenamento em nuvem e design responsivo.

## 🚀 Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)** – Framework React para aplicações web modernas
- **[Firebase](https://firebase.google.com/)** – Autenticação e banco de dados em tempo real (Firestore)
- **[TailwindCSS](https://tailwindcss.com/)** – Estilização rápida e responsiva com utilitários CSS
- **[Vercel](https://vercel.com/)** – Plataforma de deploy otimizada para Next.js

---

## 🔐 Funcionalidade de Login e Cadastro

- Usuário pode se **cadastrar com e-mail e senha**.
- Os dados são armazenados com segurança no **Firebase Authentication**.
- Após o login, o usuário é redirecionado automaticamente para a **tela inicial**.

> ⚠️ A rota inicial é **protegida** – só pode ser acessada por usuários autenticados.

---

## 🦠 Verificação de Sintomas

Na tela inicial, o usuário encontra uma lista com **5 sintomas comuns da dengue**. Ele pode marcar os sintomas que estiver sentindo e então clicar para verificar:

- Se o usuário marcar **3 ou mais sintomas**, será exibida uma **mensagem de aconselhamento** indicando a busca por atendimento médico.
- Todos os sintomas selecionados são **salvos no Firestore** do Firebase, permitindo registro e consulta futura.

---

## 📱 Estilização e Responsividade

A interface foi construída com **TailwindCSS**, garantindo:

- Design limpo e moderno
- Compatibilidade com dispositivos móveis (responsivo)
- Acessibilidade e foco na experiência do usuário

---

## ☁️ Deploy

O deploy do projeto foi feito na plataforma **Vercel**, com integração contínua a partir do GitHub. A aplicação está disponível de forma pública e otimizada para produção.

---

## 📁 Estrutura de Pastas (resumo)
DENGUE
- app
|--components
|-|-Footer.js -Header.js - FormInput.js
|
|--firebase
|-|--hooks
|---|-useAuth.js
|-|-auth.js -config.js -firestore.js
|
|--login - page.js
|--register - page.js
|
|-global.css
|-layout.js
|-page.js
|-protected-layout.js

---

## 🔒 Requisitos de Segurança

- Autenticação baseada em **e-mail e senha**
- **Proteção de rotas** para impedir acesso não autorizado à tela inicial
- Armazenamento seguro dos dados dos usuários e sintomas no Firebase

---

## 🧪 Demonstração

[🔗 Acesse o Projeto na Vercel](https://dengue-ashen.vercel.app)