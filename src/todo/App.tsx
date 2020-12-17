import {
  useState
} from 'react';

import {
  TodoForm
} from './TodoForm';

import {
  Todo
} from './Todo';

import {
  TodoType
} from './types';

// ...

const style = {
  width: 'calc(100% / 3)',
  margin: '150px auto auto'
};

const initialTodos = require('./todos.json').map(
  ({ userId, ...todo }: ({ userId: number } & TodoType)) => todo
);

// ...

export const App = () => {
  const [todos, setTodos] = useState<TodoType[]>(initialTodos);

  const createTodo = (title: string) => {
    setTodos([
      {
        id: Date.now(),
        completed: false,

        title
      },
      ...todos
    ]);
  };  

  const deleteTodo = (todoId: number) => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  };

  const updateTodo = (todoId: number) => {
    setTodos(todos.map(todo => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }

      return todo;
    }));
  };

  return (
    <div style={style}>
      <TodoForm createTodo={createTodo} />
      {todos.map((todo: TodoType) => (
        <Todo
          key={todo.id}

          {...todo}

          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  )
}