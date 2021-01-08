
<h3 align="center">
  Desafio Cryto Moeda
</h3>


## :rocket: Sobre o desafio

um aplicativo da web chamado Cryto Moeda para converter bitcoin na moeda de um país.

### Utilizando API Node  

- **`Instalar as dependecias`**:  Para instalar as dependecias do Node executar o seguinte comando

```js
  yarn 
```

- **`Iniciar o Node`**:  Para iniciar o Node executar o seguinte comando, vai estar rodando na porta 3333  

```js
  yarn dev:server
```


- **`Autenticação de Sessão `**:  Para validação da sessão Método Post:  http://localhost:3333/sessions<br>
 Enviar no corpo <Strong>name</Strong>, <Strong>email</Strong> <br>
 Exemplo

```js
{
   "email":"gui@gui.com",
   "password":"1234"
}

```


- **`Alterar Valor `**:  Para Altear o valor da moeda de um país Método Post:  http://localhost:3333/api/cryto/btc<br>
 Enviar no corpo <Strong>name</Strong>, <Strong>email</Strong> <br>
 Exemplo

```js
{
  "currency": "BRL",
  "value": 10000.0
}

```


- **`Valores Moeda `**:  Para visualizar valores atuais das moedas Método Get:  http://localhost:3333/api/cryto/btc/currency<br>
 Exemplo

```js
Resposta
{
    "BRL": "5.400",
    "EUR": "2.600",
    "CAD": "3.002"
}

```


- **`Moedas `**:  Para visualizar o valor de 1 bitcoin em cada moeda Método Get:  http://localhost:3333/api/cryto/btc<br>
 Exemplo

```js
Resposta
{
    "time": {
        "updated": "Jan 8, 2021 18:27:00 UTC",
        "updatedISO": "2021-01-08T18:27:00+00:00",
        "updateduk": "Jan 8, 2021 at 18:27 GMT"
    },
    "disclaimer": "This data was produced from the CoinDesk Bitcoin Price Index (USD). Non-USD currency data converted using hourly conversion rate from openexchangerates.org",
    "bpi": {
        "USD": {
            "code": "USD",
            "rate": "40,423.3874",
            "description": "United States Dollar",
            "rate_float": 40423.3874
        },
        "BTC": {
            "code": "BTC",
            "rate": "1.0000",
            "description": "Bitcoin",
            "rate_float": 1
        },
        "BRL": {
            "code": "BRL",
            "rate": "218,286.2920",
            "description": "Brazilian Real",
            "rate_float": 218286.292
        },
        "EUR": {
            "code": "EUR",
            "rate": "105,100.8072",
            "description": "Euro",
            "rate_float": 105100.807
        },
        "CAD": {
            "code": "CAD",
            "rate": "121,351.0090",
            "description": "Canadian Dollar",
            "rate_float": 121351.009
        }
    }
}

```




### Utilizando o React 

- **`Instalar as dependecias`**:  Para instalar as dependecias do React executar o seguinte comando

```js
  yarn 
```

- **`Iniciar o React`**:  Para iniciar o React executar o seguinte comando, vai estar rodando na porta 3000 

```js
  yarn start
```



## Solução do desafio

<a href="https://youtu.be/JJ1QdkshgYQ" target="_blank" align="center">
    Link
</a>
