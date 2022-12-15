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