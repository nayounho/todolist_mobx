import { makeAutoObservable } from "mobx";
import { createContext, useContext } from "react";

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

export class TodoStore {
  todos: ITodo[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  get activeTodos() {
    return this.todos.filter((todo) => !todo.completed);
  }
  get completedTodos() {
    return this.todos.filter((todo) => todo.completed);
  }

  add(todo: ITodo) {
    this.todos.push(todo);
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
