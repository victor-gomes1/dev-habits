# 🏛️ Arquitetura de Contêineres (C4 Model) - DevHabits

Este diagrama detalha os blocos de contêineres e as tecnologias envolvidas na execução do ecossistema *DevHabits*.

```mermaid
C4Container
    title Container Diagram - DevHabits Platform

    Person(user, "Utilizador / Desenvolvedor", "Acessa a plataforma para gerenciar hábitos e rotinas.")
    
    System_Boundary(system, "DevHabits System") {
        Container(webApp, "Front-End Web", "Next.js, TypeScript, Tailwind CSS", "Fornece a interface visual de painel, listagens e gráficos de progresso.")
        Container(api, "Back-End API", "Node.js, TypeScript, Zod", "Processa regras de negócio, valida dados e gere autenticação JWT.")
        ContainerDb(db, "Base de Dados", "PostgreSQL, Prisma ORM", "Armazena dados persistentes de utilizadores, hábitos e logs de conclusão.")
    }

    Rel(user, webApp, "Interage via HTTPS", "Browser")
    Rel(webApp, api, "Consome API REST (JSON)", "Fetch / Axios")
    Rel(api, db, "Lê e escreve dados", "Prisma Client / SQL")