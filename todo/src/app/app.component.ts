import { Component } from '@angular/core';
import { Todo } from './models/todo.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  public form: FormGroup;
  _constData: string = 'todos';

  /**
   *
   */
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(60),
        Validators.required
      ])]
    });

    this.carregarStorage();
  }

  alterarTexto() {
    this.title = 'Novo texto';
  }

  adicionarTarefa() {
    const title = this.form.controls['title'].value;
    const id = this.todos.length + 1;
    this.todos.push(new Todo(id, title, false));

    this.salvarStorage();
    this.limparForm();
  }

  concluirTarefa(todo: Todo) {
    todo.done = true;
    this.salvarStorage();
  }

  refazerTarefa(todo: Todo) {
    todo.done = false;
    this.salvarStorage();
  }

  removerTarefa(todo: Todo) {
    const index = this.todos.indexOf(todo); //RETORNA -1 SE NÃO LOCALIZAR
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
    this.salvarStorage();
  }

  limparForm() {
    this.form.reset();
  }

  salvarStorage() {
    const data = JSON.stringify(this.todos);
    localStorage.setItem(this._constData, data);
  }

  carregarStorage() {
    const data = localStorage.getItem(this._constData);
    this.todos = JSON.parse(data);
  }

}
