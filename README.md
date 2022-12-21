## Aplicação back-end para revenda de carros
A aplicação foi criada utilizando utilizando as seguintes tecnologias:
- Node + Express;
- Typescript;
- TypeORM com MySQL.

### Endpoints da aplicação:

#### Endpoints não protegidos por token:
- `POST` `users/register`:
    - Exemplo de `body`:
        ```json
        {
            "name": "Felipe Cechin",
            "email": "ficechin@hotmail.com",
            "password": "123456",
            "confirmPassword": "123456"
        }
        ```

- `POST` `users/login`:
    - Exemplo de `body`:
        ```json
        {
            "email": "ficechin@hotmail.com",
            "password": "123456"
        }
        ```

#### Endpoints protegidos por token:

Token deve ser enviado no cabeçalho da requisição, contendo `Authorization`: `Bearer <<TOKEN>>`

- `GET` `users`;
- `GET` `cars`;
- `POST` `cars`:
    - Exemplo de `body`:
        ```json
        {
            "brand": "Fiat",
            "model": "Uno",
            "km": 120,
            "color": "Branco",
            "transmission": "Manual"
        }
        ```
- `PUT` `cars/:id`:
    - Exemplo de `body`:
        ```json
        {
            "brand": "Fiat",
            "model": "Uno",
            "km": 120,
            "color": "Branco",
            "transmission": "Manual"
        }
        ```
- `DELETE` `cars/:id`;
- `GET` `actions/history`;
- `GET` `actions/dashboard`;

### Para rodar a aplicação:

Depois de clonar o repositório e com o Node v16+, NPM e Yarn corretamente instalados, faça os seguintes passos:

1. Criar `.env` de acordo com o arquivo `.env.example` e definir a `SECRET_KEY` e os parâmetros de conexão com MySQL;
2. Criar banco de dados no MySQL, conforme a variável `MYSQL_DATABASE` definida no `.env`, e deixar o MySQL ativo;
3. Executar comando `yarn` para instalar dependências;
4. Executar comando `yarn typeorm migration:run -d src/config/database.ts` para rodar as `migrations`;
5. Executar comando `yarn start:dev` para rodar a aplicação.
    - Deve aparecer as mensagens `Server is running on port 3333` e `Connected to database` no console.