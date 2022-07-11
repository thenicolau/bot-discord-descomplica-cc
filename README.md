# Bot Discord Descomplica Ciência da Computação

# Sumário
  * [Informações técnicas](#informações-técnicas)
  * [Requisitos](#requisitos)
  * [Clonando o repositório localmente](#clonando-o-repositório-localmente)
  * [Criando um bot para testes](#criando-um-bot-para-testes)
  * [Rodando o projeto localmente](#rodando-o-projeto-localmente)
    * [Ambiente de desenvolvimento](#ambiente-de-desenvolvimento)
    * [Ambiente de produção](#ambiente-de-produção)
      * [Terminal](#terminal)
      * [Docker](#docker)
    

# Informações técnicas

Projeto criado utilizando [TypeScript](https://www.typescriptlang.org/).

# Requisitos
- [Git](https://git-scm.com/)
- [Node](https://nodejs.org/pt-br/)
- [VSCode](https://code.visualstudio.com/) ou outro editor de sua preferência
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable) (opcional)
- [Docker](https://www.docker.com/products/docker-desktop/) (necessário para rodar o container em ambiente de produção)

# Clonando o repositório localmente

Abra o diretório onde clonará o repositório com o terminal e execute o seguinte comando: `git clone https://github.com/GustavoNicolau/bot-discord-descomplica-cc.git`.

# Criando um bot para testes

Esse passo é necessário para conseguir o `token` de autenticação do bot. Com ele você pode convidar seu bot para algum outro servidor para efetuar seus testes durante o desenvolvimento.

1. Faça login na plataforma de [desenvolvedor do Discord](https://discord.com/developers/applications).
2. Clique no botão `New Application` e dê um nome a ela.
3. No menu lateral clique em `Bot` e depois em `Add bot`.
4. Salve o `token` gerado, pois o mesmo será utilizado no projeto. Caso o mesmo não apareça, clique em `Reset Token` para obter um novo.
5. No menu lateral clique em `OAuth2` e depois em `URL Generator`.
6. Marque as seguintes opções na sessão `SCOPES`: `applications.commands` e `bot`. 
7. Copie a URL gerada e a use para convidar seu bot para um servidor onde possa testar.

# Rodando o projeto localmente

Para rodá-lo é necessário primeiro ter clonado o projeto localmente.

## Ambiente de desenvolvimento

1. Para instalar as dependências, execute `yarn` (ou `npm install` se não estiver utilizando yarn).
2. Copie o arquivo `.env.sample` e renomeie-o para `.env`.
3. Altere os valores das variáveis de acordo com as do seu [bot de teste](#criando-um-bot-para-testes)
4. No terminal execute o comando `yarn start:dev` (ou `npm run start:dev` se não estiver utilizando yarn).

Se as variáveis de ambiente no arquivo `.env` estiverem corretas, é só aguardar a mensagem `Connected to Discord!` aparecer e o projeto já estará rodando.

## Ambiente de produção

Para rodar em prod existem duas maneiras. Utilizando o docker ou o terminal (similar ao ambiente dev).

### Terminal

1. Copie o arquivo `.env.sample` e renomeie-o para `.env`.
2. Altere os valores das variáveis de acordo com as do seu [bot de teste](#criando-um-bot-para-testes).
3. No terminal execute o comando `yarn start:prod` (ou `npm run start:prod` se não estiver utilizando yarn).

### Docker

Com o docker já rodando em sua máquina, inicie o passo a passo.

1. Copie o arquivo `.env.sample` e renomeie-o para `.env`.
2. Altere os valores das variáveis de acordo com as do seu [bot de teste](#criando-um-bot-para-testes).
3. Execute o seguinte comando no terminal: `docker-compose up -d`.

Se as variáveis de ambiente no arquivo `.env` estiverem corretas o projeto já estará rodando. O console do mesmo pode ser visualizado pelo próprio docker desktop.
