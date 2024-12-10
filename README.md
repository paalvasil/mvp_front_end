# Cervejaria App Desktop

## Descrição do Projeto
O Cervejaria App é uma aplicação **desktop** desenvolvida com React para gerenciar cervejas. Ela permite que os usuários cadastrem suas cervejas favoritas, visualizem um ranking das cervejas cadastradas e excluam qualquer item da lista. A interface é simples e intuitiva, com validações nos formulários para garantir que os dados inseridos sejam válidos.


## Design criado no Figma
A interface da aplicação foi projetada no Figma. Você pode visualizar o design clicando no link abaixo:
[https://www.figma.com/design/2Zdob2h8eXVtSpoUnkkZDH/MVP-final?node-id=0-1&t=Sfdq0Ra8DLzeSH9W-1](https://www.figma.com/design/2Zdob2h8eXVtSpoUnkkZDH/MVP-final?node-id=0-1&t=Sfdq0Ra8DLzeSH9W-1)

## Funcionalidades:
**Início:** Tela principal com um botão que direciona o usuário para a página de cadastro de novas cervejas.

**Cadastro de Cerveja:** Formulário para o usuário cadastrar uma nova cerveja. A validação inclui campos obrigatórios como nome da cerveja e avaliação. Também valida que o IBU e o preço sejam números válidos e que a avaliação esteja entre 0 e 10.

**Ranking:** Exibe uma lista das cervejas cadastradas, com a possibilidade de excluir uma cerveja da lista através de um botão de lixeira ou adicionar novas cervejas com o botão de "Adicionar Cerveja".


## Como executar o front

**API** As requisições no servidor são simuladas através do arquivo beers.json 

Será necessário ter o [Nodejs, ou o npm,](https://nodejs.org/en/download/) instalado. 

Após clonar o repositório, é necessário ir ao diretório raiz desse projeto pelo terminal para poder executar os comandos descritos abaixo.

```
$ npm install
```

Este comando instala as dependências/bibliotecas, descritas no arquivo `package.json`. Uma pasta chamada `node_modules` será criada.

Para executar a interface basta executar o comando: 

```
$ npm start
```

Abra o [http://localhost:3000/#/](http://localhost:3000/#/) no navegador.
