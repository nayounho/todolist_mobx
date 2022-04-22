import { makeAutoObservable } from "mobx";
import { createContext, useContext } from "react";
import { TodoModel } from "./models/TodoModel";

export interface ITodoStore {
  todos: TodoModel[];
}

export class TodoStore implements ITodoStore {
  todos: TodoModel[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  get activeTodos() {
    return this.todos.filter((todo) => !todo.completed);
  }
  get completedTodos() {
    return this.todos.filter((todo) => todo.completed);
  }

  add(todo: TodoModel) {
    this.todos = [...this.todos, todo];
  }
  remove(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
  toggle(id: number) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }
  removeAll() {
    this.todos = this.todos.filter((todo) => todo.completed);
  }
  removeCompleted() {
    this.todos = this.todos.filter((todo) => !todo.completed);
  }
  completeAll() {
    this.todos = this.todos.map((todo) => ({ ...todo, completed: true }));
  }
}

export const todosStore = new TodoStore();

const todosContext = createContext(todosStore);

export const useTodosStore = () => useContext(todosContext);
