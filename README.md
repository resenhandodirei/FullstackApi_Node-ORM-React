# FullstackApi_Node-ORM-React
Este projeto consiste na criação de uma API do zero utilizando **Node.js** e integração com o banco de dados **MongoDB**, além de uma aplicação web usando **React**. O objetivo é fornecer uma base sólida para o desenvolvimento de aplicações completas com um back-end conectado a um front-end dinâmico.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Express**: Framework para criação de APIs em Node.js.
- **MongoDB**: Banco de dados NoSQL utilizado para armazenar dados.
- **React**: Biblioteca JavaScript para criação de interfaces de usuário.
- **Postman**: Ferramenta para teste de rotas e requisições HTTP.

## Funcionalidades da API

- CRUD completo (Create, Read, Update, Delete).
- Tratamento de erros e respostas padronizadas.
- Boas práticas de segurança e estruturação de código.

## Funcionalidades da Aplicação Web

- Integração com o back-end.
- Consumo de APIs para exibição de dados dinâmicos.
- Componentes reutilizáveis e gerenciamento de estado com React.

## Requisitos

- Node.js (versão 14 ou superior)
- npm (gerenciador de pacotes do Node.js)
- MongoDB (local ou na nuvem)
- Postman (opcional para testes de API)

## Instalação

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. **Instale as dependências do back-end:**

   Navegue até a pasta do servidor e execute o comando:

   ```bash
   cd backend
   npm install
   ```

3. **Configuração do MongoDB:**

   Certifique-se de que o MongoDB está rodando. Caso use o MongoDB na nuvem (MongoDB Atlas), atualize a string de conexão no arquivo `.env`:

   ```
   MONGO_URI=mongodb+srv://<usuário>:<senha>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
   ```

4. **Inicie o servidor:**

   ```bash
   npm run dev
   ```

5. **Instale as dependências do front-end:**

   Navegue até a pasta do cliente:

   ```bash
   cd frontend
   npm install
   ```

6. **Inicie a aplicação React:**

   ```bash
   npm start
   ```

## Uso

- **Back-end**: A API estará disponível em `http://localhost:5000`.
- **Front-end**: A aplicação web estará disponível em `http://localhost:3000`.

### Testes da API com Postman

Use o **Postman** para testar as rotas da API:

- **GET** `/api/items` - Retorna todos os itens.
- **POST** `/api/items` - Cria um novo item.
- **PUT** `/api/items/:id` - Atualiza um item existente.
- **DELETE** `/api/items/:id` - Exclui um item.

## Estrutura de Pastas

```bash
.
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── app.js
│   └── server.js
└── frontend
    ├── src
    │   ├── components
    │   ├── pages
    │   ├── App.js
    │   └── index.js
```
## Comandos

| Comando | Explicação |
| ----- | --------|
| node --watch server.js | salva e dá restart no projeto automaticamente |

## Boas Práticas

- Utilização de **middlewares** para tratamento de erros.
- Organização modular do código.
- Segurança com **Helmet** e validação de dados com **Joi**.

## Licença

Este projeto é licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
