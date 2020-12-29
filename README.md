# formacao-angular

Formação Angular - Udemy

## 1º App: ola-mundo

Olá Mundo

### Criando o Projeto

```npm
ng new ola-mundo
```

## 2º Calculadora:

Calculadora

### Criando o Projeto

```npm
ng new calculadora
```

### Criando o Módulo Calculadora

```npm
ng g module calculadora
```

### Criando o Componente Calculadora

```npm
ng g component calculadora/calculadora
```

### Criando o Serviço Calculadora

```npm
ng g service calculadora/services/calculadora
```

### Criando a Interface HTML da Calculadora

### Instalando Bootstrap

```npm
npm install --save bootstrap@3
```

### Implementando o Serviço CalculadoraService

### Testando o Serviço CalculadoraService

### Implementando o Componente CalculadoraComopnent

### Implementando a Interface do CalculadoraComponent

### Testando o CalculadoraComponent

```npm
ng test
```

## 3º App: Gerenciador de Tarefas

Gerenciador de Tarefas

### Criando o Projeto

```npm
ng new gerenciador-de-tarefas
```

### Instalando o Bootstrap

```npm
npm install --save bootstrap@3
```

### Configurando as Rotas de Navegação no Componente Principal

### Criando o Módulo de Tarefas

```npm
ng g module tarefas
```

### Criando o Model de Tarefas

### Criando o Serviço de Tarefas - Parte 1/2

```npm
ng g service tarefas/shared/tarefa
```

### Criando o Serviço de Tarefas - Parte 2/2

### Criando o Componente de Listagem de Tarefas

```npm
ng g component tarefas/listar-tarefa
```

### Registrando as Rotas de Listagem de Tarefas

### Nota para a Criação da Interface HTML

### Criando a Interface HTML da Listagem de Tarefas

### Implementando a Listagem de Tarefas - Parte 1/2

### Implementando a Listagem de Tarefas - Parte 2/2

### Criando o Componente de Cadastro de Tarefas

```npm
ng g component tarefas/cadastrar-tarefa
```

### Registrando as Rotas de Cadastro de Tarefas

### Criando a Interface HTML do Cadastro de Tarefas

### Nota Sobre o ViewChild do Video a Seguir

### Implementando o Cadastro de Tarefas - parte 1/2

### Implementando o Cadastro de Tarefas - parte 2/2

### Criando o Componente de Edição de Tarefas

```npm
ng g component tarefas/editar-tarefa
```

### Registrando as Rotas de Edição de Tarefas

### Criando a Interface HTML da Edição de Tarefas

### Nota Sobre o ViewChild do Vídeo a Seguir

### Implementando a Edição de Tarefas

### Removendo Tarefas

### Alterando o Status de uma Tarefa

### Criando uma Diretiva de Tarefa Concluída

```npm
ng g directive tarefas/shared/tarefa-concluida
```

### Implementando a Diretiva de Tarefa Concluída

### Ajustando os Testes Unitários

## 4º App: Jogo da Velha

Jogo da Velha

### Criando o Projeto

```npm
ng new jogo-da-velha
```

### Criando o Módulo Jogo da Velha

```npm
ng g module jogo-da-velha
```

### Criando o Componente Jogo da Velha

```npm
ng g component jogo-da-velha
```

### Criando o Serviço do Jogo da Velha

```npm
ng g service jogo-da-velha/shared/jogo-da-velha
```

### Implementando o Serviço do Jogo da Velha - parte 1/2

### Implementando o Serviço do Jogo da Velha - parte 2/2

### Criando a Interface HTML do Jogo da Velha

### Criando o CSS do Jogo da Velha

### Adicionando uma Fonte ao Jogo da Velha

[Google Fonts](https://fonts.google.com/)

### Adicionando Imagens ao Jogo da Velha

### Implementando a Tela Inicial do Jogo da Velha

### Implementando a Tela do Tabuleiro do Jogo da Velha

### Implementando a Tela Final do Jogo da Velha

### Ajustando os Testes Unitários do Jogo da Velha

## 5º App: Conversor de Moedas

Conversor de Moedas

### Criando o Projeto

```npm
ng new conversor-de-moedas
```

### Instalando o Bootstrap e jQuery

```npm
npm install --save bootstrap@3
npm install --save jquery
npm install --save rxjs-compat
```

### Criando o Módulo Conversor

```npm
ng g module conversor
```

### Criando o Model Moeda

### Criando o Model Conversão

### Criando o Model de Resposta de uma Conversão

### Criando o Componente do Conversor de Moedas

```npm
ng g component conversor/conversor
```

### Criando o Serviço de Gerenciamento de Moedas

```npm
ng g service conversor/services/moeda
```

### Implementando o Serviço Gerenciamento de Moedas

### Criando o Serviço de Conversão de Moedas

```npm
ng g service conversor/services/conversor
```

### Implementando o Serviço de Conversão de Moedas

### Criando o HTML do Formulário de Conversão de Moedas

### Implementando o Formulário de Conversão de Moedas

### Criando uma Diretiva de Validação de Números

```npm
ng g directive conversor/directives/numero
```

### Implementando a Diretiva de Validação de Números - Parte 1/2

### Implementando a Diretiva de Validação de Números - Parte 2/2

### Implementando a Ação de Conversão de Moedas

### Criando o Componente Modal de Conversão de Moedas

```npm
ng g component conversor/modal-cotacao
```

### Criando o HTML do Componente Modal de Conversão de Moedas

### Implementando o Componente Modal de Conversão de Moedas

### Criando um filtro (Pipe) de Formatação de Data (dd/mm/yyyy)

```npm
ng g pipe conversor/pipes/data-br
```

### Implementando o Filtro (Pipe) de Formatação de Data

### Ajustando os Testes Unitários do Conversor de Moedas

## 6º App: Dashboard

Dashboard

### Criando o Projeto

```npm
ng new dashboard
cd dashboard
npm install rxjs-compat --save
```

### Criando o Módulo Dashboard

```npm
ng g module dashboard
```

### Criando o Componente do Dashboard

```npm
ng g component dashboard
```

### Criando o Serviço de Dados do Dashboard

```npm
ng g service dashboard/dados
```

### Implementando o Serviço de Dados do Dashboard

### Importando a API de Gráficos no Projeto

[Google Chart](https://developers.google.com/chart)

### Criando o HTML e CSS dos Gráficos do Dashboard

### Implementando os Gráficos no Componente - parte 1/2

### Implementando os Gráficos no Componente - parte 2/2

### Ajustando os Testes Unitários do Dashboard

## 7º App: Projeto Final

Projeto Final

### Criando o Projeto

```npm
ng new projeto-final
cd projeto-final
npm install rxjs-compat --save
```

### Instalando o Bootstrap e jQuery

```npm
npm install --save bootstrap@3
npm install --save jquery
```

### Importando a API de Gráficos no Projeto

### Configurando as Rotas de Navegação no Componente Principal

### Criando o HTML do Menu Principal da Aplicação

### Integrando o Módulo Dashboard

### Criando as Rotas do Módulo Dashboard

### Integrando o Módulo Calculadora

### Criando as Rotas do Módulo Calculadora

### Integrando o Módulo Conversor de Moedas

### Criando as Rotas do Módulo Conversor de Moedas

### Integrando o Módulo Gerenciador de Tarefas

### Criando as Rotas do Módulo Gerenciador de Tarefas

### Integrando o Módulo Jogo da Velha

### Importando os Assets (Imagens) do Jogo da Velha

### Importando a Fonte do Jogo da Velha

### Notas para o Projeto Jogo da Velha no Angular 9

### Criando as Rotas do Módulo Jogo da Velha

### Ajustando os Testes Unitários do Projeto final
