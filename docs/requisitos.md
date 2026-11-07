# Especificação de Requisitos - DevHabits

## 1. Requisitos Funcionais (RF)

| ID | Descrição | Prioridade |
| :--- | :--- | :--- |
| **[RF01]** | O sistema deve permitir o cadastro de novos usuários com nome, e-mail e senha. | Alta |
| **[RF02]** | O sistema deve permitir que o usuário autentique-se (login) e receba um token de acesso. | Alta |
| **[RF03]** | O sistema deve permitir a criação de hábitos com título, descrição e frequência (ex: diária). | Alta |
| **[RF04]** | O sistema deve permitir a listagem de todos os hábitos cadastrados pelo usuário autenticado. | Alta |
| **[RF05]** | O sistema deve permitir que o usuário registre a conclusão diária (check-in) de um hábito. | Alta |
| **[RF06]** | O sistema deve permitir a edição e exclusão de um hábito existente. | Média |
| **[RF07]** | O sistema deve disponibilizar um histórico de conclusões dos hábitos do usuário. | Baixa |

## 2. Requisitos Não Funcionais (RNF)

| ID | Categoria | Descrição |
| :--- | :--- | :--- |
| **[RNF01]** | **Persistência** | O sistema deve utilizar o banco de dados PostgreSQL com Prisma ORM para manipulação dos dados. |
| **[RNF02]** | **Linguagem & Runtime** | A API deve ser desenvolvida em TypeScript utilizando o ambiente Node.js. |
| **[RNF03]** | **Segurança** | As senhas dos usuários devem ser criptografadas (hash) antes de serem salvas no banco de dados. |
| **[RNF04]** | **Arquitetura** | O código deve seguir uma estrutura em camadas limpa e modularizada dentro do diretório `src/`. |
| **[RNF05]** | **Versionamento** | O repositório deve seguir a convenção de Conventional Commits e fluxo Git Flow com branches protegidas. |