# Especificação de Casos de Uso - DevHabits

## 1. Atores
- **Usuário:** Desenvolvedor ou estudante cadastrado no sistema que deseja gerenciar sua rotina de hábitos.

---

## 2. Casos de Uso Centrais

### [UC01] Cadastrar Usuário
- **Ator Principal:** Usuário.
- **Pré-condições:** Nenhuma.
- **Fluxo Principal:**
  1. O usuário envia nome, e-mail e senha para cadastro.
  2. O sistema valida os dados informados.
  3. O sistema criptografa a senha e armazena o novo usuário no banco de dados.
  4. O sistema retorna a confirmação de cadastro com o perfil criado.
- **Fluxo de Exceção (E1 - E-mail já cadastrado):**
  1. O sistema identifica que o e-mail informado já existe no banco.
  2. O sistema retorna uma mensagem de erro com código 400 (Bad Request).

---

### [UC02] Criar Novo Hábito
- **Ator Principal:** Usuário autenticado.
- **Pré-condições:** O usuário deve estar autenticado.
- **Fluxo Principal:**
  1. O usuário informa o título, descrição e frequência do hábito.
  2. O sistema valida os campos obrigatórios.
  3. O sistema registra o hábito associado ao ID do usuário autenticado.
  4. O sistema retorna os dados do hábito criado.
- **Fluxo de Exceção (E1 - Dados inválidos):**
  1. O sistema valida que o título não foi preenchido.
  2. O sistema recusa a criação e retorna erro informando a ausência de campos obrigatórios.

---

### [UC03] Registrar Conclusão (Check-in)
- **Ator Principal:** Usuário autenticado.
- **Pré-condições:** O hábito deve pertencer ao usuário e estar ativo.
- **Fluxo Principal:**
  1. O usuário solicita o registro de conclusão de um hábito específico na data atual.
  2. O sistema verifica se o hábito existe e se pertence ao usuário.
  3. O sistema registra o check-in no banco de dados com a data e hora atuais.
  4. O sistema confirma a conclusão do hábito.
- **Fluxo Alternativo (A1 - Check-in no mesmo dia):**
  1. O sistema verifica que já existe um check-in para esse hábito no dia de hoje.
  2. O sistema atualiza ou confirma o registro existente sem duplicar registros indevidos.