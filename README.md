<p align="center"><img  alt="GoStack" src="https://imgur.com/NJ0nj3K.png" /></p>

<p align="center">

<img alt="GitHub language count" src="https://img.shields.io/github/languages/count/allexis096/nlw2-proffy-web">

<img alt="Repository size" src="https://img.shields.io/github/repo-size/allexis096/nlw2-proffy-web">

<a href="https://github.com/allexis096/nlw2-proffy-web/graphs/commit-activity">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/allexis096/nlw2-proffy-web?color=blue%22">
</a>

<img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen?color=blue">
</p>

<p align="center">

<a target="_blank" href="https://nodejs.org/">
    <img alt="Node.js" src="https://img.shields.io/static/v1?color=brightgreen&label=Node&message=JS&?style=plastic&logo=Node.js">
</a>

<a href="https://reactjs.org/">
  <img alt="ReactJS" src="https://img.shields.io/static/v1?color=blue&label=React&message=JS&?style=plastic&logo=React">
</a>

<a href="https://reactnative.dev/">
  <img alt="React Native" src="https://img.shields.io/static/v1?color=blue&label=React%20Native&message=JS&?style=plastic&logo=React">
</a>

<a href="https://www.typescriptlang.org/">
  <img alt="Typescript" src="https://img.shields.io/static/v1?color=blue&label=Typescript&message=JS&?style=plastic&logo=Typescript">
</a>

</p>
<h2 align="center">
  Proffy
</h2>

<p align="center">“A plataforma que une a educação da melhor forma possível!”</p>

## 🏁 Sobre a página web

Em conjunto com a <a href="https://rocketseat.com.br/">Rocketseat</a>, este projeto foi feito durante a <a href="https://nextlevelweek.com/">Next Level Week</a>, e consiste em reunir alunos e professores para estimular a aprendizagem on-line.

A aplicação deverá se conectar ao backend do [NLW #2](https://github.com/allexis096/nlw2-proffy-backend), para cadastrar e listar novos registros no banco de dados.


## 🔨 Tecnologias:

- [ReactJS][reactjs]
- [React Native][reactnative]
- [Node.js][nodejs]
- [TypeScript][typescript]
- [Axios][axios]



## 🚀 Como rodar este projeto

Para clonar e executar este aplicativo, você precisará de [Git](https://git-scm.com), [NodeJs][nodejs] Instalado em seu computador.

O projeto é composto por três aplicações:

1. Back-End ([Link do Repositório](https://github.com/allexis096/nlw2-proffy-backend))
2. Front-End (Este repositório)
3. Mobile ([Link do Repositório](https://github.com/allexis096/nlw2-proffy-mobile))

💡 É preciso efetuar o clone e seguir os passos de instalação do [Repositório da API](https://github.com/allexis096/nlw2-proffy-backend)

💡 O Front-End precisa que o Back-End esteja sendo executado na porta 3333 para funcionar.

### 🌀 Clonando o repositório do backend

```bash
# Clone este repositório
$ git clone https://github.com/allexis096/nlw2-proffy-backend

# Acesse a pasta do projeto no terminal/cmd
$ cd nlw2-proffy-backend
```

### 🧭 Rodando o backend

```bash
# Instale as dependências
$ yarn

# Execute a Aplicação
$ yarn start

# O servidor inciará na porta:3333 (http://localhost:3333)
```

### 🌀 Clonando o repositório web

```bash
# Clone este repositório
$ git clone https://github.com/allexis096/nlw2-proffy-web

# Acesse a pasta do projeto no terminal/cmd
$ cd nlw2-proffy-web
```

### 🧭 Rodando a aplicação web

```bash
# Instale as dependências
$ yarn

# Execute a Aplicação
$ yarn start

# O servidor inciará na porta:3000 - acesse http://localhost:3000
```

### 🌀 Clonando o repositório mobile

```bash
# Clone este repositório
$ git clone https://github.com/allexis096/nlw2-proffy-mobile

# Acesse a pasta do projeto no terminal/cmd
$ cd nlw2-proffy-mobile
```

### 🧭 Rodando a aplicação mobile

```bash
# Instale o expo globalmente
$ yarn add expo-cli --global

# Instale as dependências
$ yarn

# Execute a Aplicação
$ yarn start

# O servidor inciará na porta:19000 - acesse exp://10.0.0.108:19000
# (pode variar de acordo com o computador)
```


## 🛠 Funcionalidades da aplicação


- **`Cadastrar os professores da API`**: Clicando em `Dar aulas` na home page, A página `give-classes` deve cadastrar os professores no backend, contendo as informações de `Nome completo`, o link do `Avatar`, `Whatsapp`, `Biografia`, `Matéria`, `Custo da sua hora por aula` (somente números). Selecionar o `Dia da semana`, `de` qual horário `até` qual horário (Tem a opção de selecionar `+ Novo horário`) e no final de tudo clicar em `Salvar cadastro`.

- **`Listar os professores da API`**: Clicando em `Estudar` na home page, A página `study` deve ser capaz de exibir uma listagem através de uma tabela, com o campo `Matéria`, `Dia da semana` e `Hora` de todos os dados que estão cadastrados na API.



## 🤔 Como contribuir para o projeto

- Faça um **fork** do projeto;
- Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
- Salve as alterações e crie uma mensagem de commit contando o que você fez:`git commit -m "feature: My new feature"`
- Envie as suas alterações: `git push origin my-feature`

> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](https://github.com/firstcontributions/first-contributions)

## 📝 Licença

Este projeto esta sobe a licença MIT. Veja a [LICENÇA][license] para saber mais.

Feito com ❤️ por Allexis Figueiredo 👋🏽 [Entre em contato!](https://www.linkedin.com/in/allexis-figueiredo/)

[nodejs]: https://nodejs.org/
[express]: https://expressjs.com/
[license]: https://opensource.org/licenses/MIT
[reactjs]: https://reactjs.org/
[reactnative]: https://reactnative.dev/
[axios]: https://www.npmjs.com/package/axios
[rs]: https://rocketseat.com.br
[license]: https://opensource.org/licenses/MIT
[typescript]: https://www.typescriptlang.org/