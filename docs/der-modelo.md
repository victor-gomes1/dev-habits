# 📊 Diagrama Entidade-Relacionamento (DER) - DevHabits

Abaixo encontra-se a arquitetura relacional do banco de dados projetada para suportar os utilizadores, o sistema de categorias, o cadastro de hábitos e o rastreamento de progresso (*streaks*).

```mermaid
erDiagram
    User ||--o{ Habit : creates
    Habit ||--o{ HabitLog : tracks
    Category ||--o{ Habit : categorizes

    User {
        string id PK
        string name
        string email
        string passwordHash
        datetime createdAt
    }

    Category {
        string id PK
        string name
        string color
    }

    Habit {
        string id PK
        string title
        string description
        int targetDaysPerWeek
        string userId FK
        string categoryId FK
        datetime createdAt
    }

    HabitLog {
        string id PK
        boolean completed
        datetime date
        string habitId FK
    }