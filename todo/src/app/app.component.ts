import { Component } from '@angular/core';
import { Todo } from './models/todo.model';

@Component({
  selector: 'app-root', //ISSO SE TRANSFORMA EM UMA TAG HTML.
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'todo';
  public todos: Todo[] = []; // SE VISUALIZAR NO CONSOLE, VAI ESTAR VAZIO.
  //public todos2: any[]; // SE VISUALIZAR NO CONSOLE, VAI ESTAR UNDEFINED.
  public title: String = 'Minhas tarefas';

  /**
   *
   */
  constructor() {
    //super();
    this.todos.push(new Todo(1, 'Passear com os filhos', false));
    this.todos.push(new Todo(2, 'Ir ao supermercado', false));
    this.todos.push(new Todo(3, 'Cortar o cabelo', true));
    //this.todos.push({ message: 'teste json' });
  }

  alterarTexto() {
    this.title = 'Novo texto';
  }

  concluirTarefa(todo: Todo) {
    todo.done = true;
  }

  refazerTarefa(todo: Todo) {
    todo.done = false;
  }

  removerTarefa(todo: Todo) {
    const index = this.todos.indexOf(todo); //RETORNA -1 SE NÃO LOCALIZAR
    if (index !== -1) {
      this.todos.splice(index, 1);
    }

  }
}
