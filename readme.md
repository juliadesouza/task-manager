# 🇬🇧 English

## Task Manager

This project is an API for a Task Management system, enabling users to create accounts, authenticate, and manage tasks efficiently. Tasks can be assigned to team members, categorized by status and priority, and tracked for progress.

### Technologies Used

- **Node.js**: Used as the runtime environment for the server.
- **Express.js**: Handles routing and middleware for the API.
- **TypeScript**: Provides type safety and improved developer experience.
- **JavaScript**: Implements application logic and functionality.
- **Zod**: Validates and parses API request data.
- **Prisma**: Manages database interactions and migrations.

### Features

- **User Authentication and Authorization**: Securely authenticate users and manage their access to resources.
- **Task Management**: Create, read, update, and delete tasks efficiently.
- **Team Management**: Create, read, and update teams, including managing their associated tasks.
- **Team Member Management**: Add and remove team members as needed.
- **User Management**: Create and manage user accounts seamlessly.

### API Endpoints/Routes

| **Resource** | **Method** | **Endpoint**           | **Description**                          |
|--------------|------------|------------------------|------------------------------------------|
| **Users**    | `GET`      | `/users`              | List all users                           |
|              | `POST`     | `/users`              | Create a new user                        |
| **Login**    | `POST`     | `/login`              | Authenticate user                        |
| **Teams**    | `POST`     | `/teams`              | Create a new team                        |
|              | `PATCH`    | `/teams/:id`          | Update a team by ID                      |
|              | `GET`      | `/teams`              | Get all teams                            |
|              | `GET`      | `/teams/:id/tasks`    | Get all tasks for a specific team        |
|              | `POST`     | `/teams/members`      | Add a team member                        |
|              | `DELETE`   | `/teams/members/:id`  | Remove a team member                     |
| **Tasks**    | `GET`      | `/tasks`              | Get all tasks                            |
|              | `GET`      | `/tasks/:id`          | Get a specific task by ID                |
|              | `POST`     | `/tasks`              | Create a new task                        |
|              | `PUT`      | `/tasks/:id`          | Update a task by ID                      |
|              | `DELETE`   | `/tasks/:id`          | Delete a task by ID                      |

### How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/task-manager.git
   ```
2. Navigate to the project directory:
   ```bash
   cd task-manager
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables in a `.env` file:
   ```
   PORT=3000
   DATABASE_URL=your_base_url
   JWT_SECRET=your_jwt_secret
   ```
5. Run the database migration to create the PostgreSQL database:
   ```bash
   npx prisma migrate dev
   ```
6. Start the development server:
   ```bash
   npm run dev
   ```
7. Access the application at `http://localhost:3000`.

---

# 🇧🇷 Português

## Gerenciador de Tarefas

Este projeto é uma API para um sistema de Gerenciamento de Tarefas, permitindo que os usuários criem contas, autentiquem-se e gerenciem tarefas de forma eficiente. As tarefas podem ser atribuídas a membros da equipe, categorizadas por status e prioridade, e acompanhadas para progresso.

### Tecnologias Utilizadas

- **Node.js**: Usado como ambiente de execução para o servidor.
- **Express.js**: Gerencia o roteamento e middleware da API.
- **TypeScript**: Fornece segurança de tipos e melhora a experiência do desenvolvedor.
- **JavaScript**: Implementa a lógica e funcionalidade da aplicação.
- **Zod**: Valida e analisa os dados das requisições da API.
- **Prisma**: Gerencia interações e migrações do banco de dados.

### Funcionalidades

- **Autenticação e Autorização de Usuários**: Autentique usuários de forma segura e gerencie seu acesso a recursos.
- **Gerenciamento de Tarefas**: Crie, leia, atualize e exclua tarefas de forma eficiente.
- **Gerenciamento de Equipes**: Crie, leia e atualize equipes, incluindo o gerenciamento de suas tarefas associadas.
- **Gerenciamento de Membros da Equipe**: Adicione e remova membros da equipe conforme necessário.
- **Gerenciamento de Usuários**: Crie e gerencie contas de usuários de forma simples.

### Endpoints/Rotas da API

| Recurso       | Método  | Endpoint                  | Descrição                              |
|---------------|---------|---------------------------|----------------------------------------|
| **Usuários**  | `GET`   | `/users`                 | Lista todos os usuários                |
|               | `POST`  | `/users`                 | Cria um novo usuário                   |
| **Login**     | `POST`  | `/login`                 | Autentica o usuário                    |
| **Equipes**   | `POST`  | `/teams`                 | Cria uma nova equipe                   |
|               | `PATCH` | `/teams/:id`             | Atualiza uma equipe pelo ID            |
|               | `GET`   | `/teams`                 | Obtém todas as equipes                 |
|               | `GET`   | `/teams/:id/tasks`       | Obtém todas as tarefas de uma equipe específica |
|               | `POST`  | `/teams/members`         | Adiciona um membro à equipe            |
|               | `DELETE`| `/teams/members/:id`     | Remove um membro da equipe             |
| **Tarefas**   | `GET`   | `/tasks`                 | Obtém todas as tarefas                 |
|               | `GET`   | `/tasks/:id`             | Obtém uma tarefa específica pelo ID    |
|               | `POST`  | `/tasks`                 | Cria uma nova tarefa                   |
|               | `PUT`   | `/tasks/:id`             | Atualiza uma tarefa pelo ID            |
|               | `DELETE`| `/tasks/:id`             | Exclui uma tarefa pelo ID              |

### Como Executar o Projeto

1. Clone o repositório:
    ```bash
    git clone https://github.com/your-username/task-manager.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd task-manager
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```
4. Configure as variáveis de ambiente em um arquivo `.env`:
    ```
    PORT=3000
    DATABASE_URL=seu_base_url
    JWT_SECRET=seu_jwt_secret
    ```
5. Execute a migração do banco de dados para criar o banco PostgreSQL:
    ```bash
    npx prisma migrate dev
    ```
6. Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```
7. Acesse a aplicação em `http://localhost:3000`.