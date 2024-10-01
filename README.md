
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
