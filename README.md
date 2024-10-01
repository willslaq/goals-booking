## Goals Booking

App desenvolvido durante a NLW Pocket ministrada pela Rocketseat.

Usando tecnologias como zod, react query, fastify, vite, drizzle-orm, postgres, react-hook-form, docker, radix-ui e tailwind.

## Instalação

Instale o frontend com:

```bash
    cd web
    npm i
```

Instale o backend com:

```bash
    cd server
    docker-compose up
    npm i
```
    
## Documentação da API

#### Retorna todas as metas a serem cumpridas

```http
  GET /pending-goals
```

#### Retorna total de metas a completar, total de metas completas e lista de metades completas na semana separadas por data

```http
  GET /get-week-summary
```

#### Cria uma nova meta
```http
  POST /goals
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `title`      | `string` | **Obrigatório**. Título da meta |
| `desiredWeeklyFrequency`      | `string` | **Obrigatório**. Quantas vezes deverá ser cumprida na semana |

#### Completa uma meta
```http
  POST /completions
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `goalId`      | `string` | **Obrigatório**. Id da meta a ser completada |

## Referência

 - [Fullstack Intermediário (Node + React)](https://docs-rocketseat.notion.site/FullStack-Intermedi-rio-Node-React-b2382e372d1f44f6bfb51a3d7b723dfd)

