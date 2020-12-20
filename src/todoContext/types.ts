export type TodoType = {
  id: number;
  title: string;
  completed: boolean;
}

export type FetchedTodoType = {
  userId: number;
} & TodoType;

export type Status = 'idle' | 'loading' | 'success' | 'failure';