# B_Angular_Basico

Iniciando os estudos em Angular. Projeto básico para entender os conceitos.

. É necessário ter instalado na máquina
    NodeJS (node --version)
    NPM (npm --version)
    Angular (ng --version)

. Para gerar uma nova aplicação
    No cmd, na pasta desejada, ng new <nome do projeto>
    Irá fazer algumas perguntas, só responder conforme a necessidade do projeto

. Entendendo a estrutura do projeto
    tsLint.json > config de programação do TypeScript
    tsConfig.json > config do TypeScript
    angular.json> Config do angular do projeto
    src > código fonte da aplicação
        styles.css > css da aplicação geral
        main.ts > arquivo principal para rodar a aplicação
        index.html > arquivo da página principal da aplicação
        enviroments > config de ambientes de desenvolvimento
        assets > arquivos adicionais do projeto como imagens, css, etc
        app > código fonte realmente do projeto
    e2e > testes

. Conceitos do Angular
    Trabalha sempre com Modules e Components.
    Um compomente é composto por 3 arquivos (.ts, .html e .css)
    Tanto no module, quando no Component, é usado Decorator para deixar informações do componente de modo público.
    Trabalha com Binds entre o TS e a tela. Sempre que ocorrer alguma alteração já é atualizado de forma automatica. Tipos de Bind
        () = Tela > TS
        [] = TS > Tela
        ([]) = TS <> Tela

. Para rodar a aplicação
    no terminal, ng serve
    para já abrir o browser após a compilação, executar ng serve -o

. Anotações
    No HTML, se você colocar chaves Duplas irá mostrar o texto da variável
    {{title}} por exemplo
        *ngFor > itera a lista, foreach c#
        *ngIf > condição
    Para utilizar formulário reativo no Angular, deve ser importado o 'ReactiveFormsModule'. Verificar no App.module

