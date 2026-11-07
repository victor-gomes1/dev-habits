# Histórias de Utilizador (User Stories) - DevHabits

Este documento descreve as principais funcionalidades do sistema sob a perspetiva do utilizador, acompanhadas pelos critérios de aceitação em formato BDD (*Given-When-Then*).

---

## US01: Registo de Novo Utilizador
- **Como** um novo estudante ou programador,
- **Quero** criar uma conta na plataforma utilizando o meu email e password,
- **Para que** eu possa ter um ambiente personalizado para gerir os meus hábitos.

### Critérios de Aceitação (BDD):
- **Dado** que estou na página/endpoint de registo,
- **Quando** informo um email válido e uma password segura,
- **Então** o sistema deve criar o registo na base de dados e retornar uma resposta de sucesso (201 Created).

---

## US02: Criação de Hábito
- **Como** utilizador autenticado,
- **Quero** cadastrar um novo hábito diário (ex: "Estudar TypeScript por 1 hora"),
- **Para que** eu possa monitorizar as minhas metas de produtividade.

### Critérios de Aceitação (BDD):
- **Dado** que estou autenticado na aplicação,
- **Quando** envio o título do hábito e os dias da semana desejados,
- **Então** o hábito deve ser associado ao meu perfil e gravado com sucesso.

---

## US03: Registo de Check-in Diário
- **Como** utilizador da plataforma,
- **Quero** marcar um hábito como concluído no dia de hoje,
- **Para que** eu possa acompanhar a minha constância e histórico de progresso.

### Critérios de Aceitação (BDD):
- **Dado** que possuo um hábito cadastrado,
- **Quando** realizo a ação de *check-in* para a data atual,
- **Então** o sistema deve registar a conclusão e atualizar o meu indicador de progresso.