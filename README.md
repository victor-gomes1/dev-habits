# DevHabits API 🚀

> Um gerenciador de hábitos e rotinas diárias voltado para desenvolvedores e estudantes de tecnologia, desenvolvido como parte de uma atividade prática de engenharia de software, versionamento e rastreabilidade.

## 📋 Sumário
- [Sobre o Projeto](#-sobre-o-projeto)
- [Stack Tecnológica](#-stack-tecnológica)
- [Estrutura de Pastas e Documentação (`docs/`)](#-estrutura-de-pastas)
- [Configuração e Execução Local](#-configuração-e-execução-local)
- [Fluxo de Branches e Git Flow](#-fluxo-de-branches-e-git-flow)

---

## 💡 Sobre o Projeto
O **DevHabits** ajuda usuários a manterem constância em seus estudos de programação, commits e hábitos diários, aplicando conceitos de especificação de requisitos, modelagem de casos de uso, histórias de usuário com BDD e versionamento semântico (SemVer).

---

## 🛠 Stack Tecnológica
- **Runtime:** Node.js
- **Linguagem:** TypeScript
- **Banco de Dados & ORM:** PostgreSQL com Prisma ORM
- **Controle de Versão:** Git & GitHub (com Git Flow e Conventional Commits)

---

## 📂 Estrutura de Pastas (`docs/`)
A documentação completa do ciclo de vida do software encontra-se na pasta `docs/`:
- [`Project Charter (Termo de Abertura)`](docs/project-charter.md)
- [`Requisitos Funcionais e Não Funcionais`](docs/requisitos.md)
- [`Casos de Uso`](docs/casos-de-uso.md)
- [`Histórias de Usuário (User Stories)`](docs/user-stories.md)

---

## 🌿 Fluxo de Branches e Git Flow

O projeto segue rigorosamente o fluxo de trabalho **Git Flow** para garantir a estabilidade do código em produção e a organização das entregas académicas:

- **`main`**: Branch principal de produção. Contém apenas versões estáveis e testadas do código. Nenhuns commits são feitos diretamente aqui.
- **`develop`**: Branch de integração para o desenvolvimento contínuo. Todas as novas funcionalidades e ajustes são integrados aqui antes de irem para a `main`.
- **`feature/*`**: Branches temáticas criadas a partir da `develop` para resolver *Issues* específicas do backlog (ex: `feature/issue-01-setup-projeto`, `feature/issue-05-cadastro-tarefa`).

Utilizamos o padrão de **Conventional Commits** (ex: `feat:`, `docs:`, `fix:`) e **Semantic Versioning (SemVer)** para marcar os marcos de entrega.

---

## ⚙️ Configuração e Execução Local

1. Clone o repositório:
   ```bash
   git clone [https://github.com/SEU-USUARIO/dev-habits.git](https://github.com/SEU-USUARIO/dev-habits.git)
   cd dev-habits
