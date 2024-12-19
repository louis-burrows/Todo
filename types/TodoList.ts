import { TodoType } from "./Todo";

export type TodoListType = {
  id: string;
  name: string;
  createdAt: string;
  items: TodoType[];
};