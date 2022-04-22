import { makeAutoObservable } from "mobx";

export interface ITodoModel {
  id: number;
  title: string;
  completed: boolean;
}

export class TodoModel implements ITodoModel {
  id: number;
  title: string;
  completed: boolean;

  constructor(
    model: ITodoModel = {
      id: -1,
      title: "",
      completed: false,
    }
  ) {
    makeAutoObservable(this);
    this.id = model.id;
    this.title = model.title;
    this.completed = model.completed;
  }
}
