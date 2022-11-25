export interface TodoItem {
  id: number;
  job: string;
  done: boolean;
  description?: string;
  createdAt: string;
  updatedAt: string;
  attributes: {};
}

export const todosParser = (todos: any) => {
  return todos.map((todo: TodoItem) => ({id: todo.id, ...todo.attributes}));
};
