# Testes E2E com Nightwatch
* Automação de testes na camada de UI (User Interface) das especificações descritas nos arquivos `(/.feature)` para validação das regras de negócio, design e usabilidade do sistema.

## Bibliotecas utilizadas
* Framework de automação: [Nightwath](http://nightwatchjs.org/)
* integração com cucumber: [NightWatch-cucumber](http://mucsi96.github.io/nightwatch-cucumber/)
* Geração de steps baseados dos cenários: [CucumberJS](https://github.com/cucumber/cucumber-js)

## Estrutura de organização do projeto
* Estrutura de Pastas:
    - `/features` contém os cenários de testes
    - `/page-objects` contém os elementos de tela e o comportamento esperado do cenário
    - `/step-definitions` contém os steps (Dado, Quando, Então) descritos nas features e carregadas no page-objects

## Browsers testados
* Chrome (automação)

## Pre-requisitos para rodar os testes
* Instalar [NodeJS](http://nodejs.org/)

## Setup
* Instalar dependencias do projeto

```shell
npm install
```

## Run testes utilizando default
* Executar tests 

```shell
npm start
```
