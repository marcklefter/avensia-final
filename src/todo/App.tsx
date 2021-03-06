import React, {
  useState,
  useEffect
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

// const initialTodos = require('./todos.json').map(
//   ({ userId, ...todo }: ({ userId: number } & TodoType)) => todo
// );

// ...

type Status = 'idle' | 'loading' | 'success' | 'failure';

export const App = () => {
  const [todos, setTodos] = useState<TodoType[] | undefined>();
  const [status, setStatus] = useState<Status>('idle');

  useEffect(() => {
    if (status !== 'idle') {
      return
    }

    const fetchTodos = async () => {
      setStatus('loading');

      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const todos = await response.json();

        setTodos(todos.map(
          ({ userId, ...todo }: ({ userId: number } & TodoType)) => todo
        ));
        setStatus('success');
      } catch (error) {
        setStatus('failure');
      }
    };

    fetchTodos();
  }, [status]);

  useEffect(() => {
    document.title = todos
      ? `Todos (${todos.reduce(
        (count, todo) => (!todo.completed ? ++count : count),
        0
      )})`
      : 'Todos (N/A)'
  });

  const createTodo = (title: string) => {
    setTodos([
      {
        id: Date.now(),
        completed: false,

        title
      },
      ...(todos ?? [])
    ]);
  };

  const deleteTodo = (todoId: number) => {
    setTodos(todos?.filter(todo => todo.id !== todoId));
  };

  const updateTodo = (todoId: number) => {
    setTodos(todos?.map(todo => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }

      return todo;
    }));
  };

  // ...

  if (status === 'idle') {
    return null;
  }

  if (status === 'loading') {
    return <>Loading todos...</>
  }

  if (status === 'failure') {
    return (
      <button onClick={() => setStatus('idle')}>Retry</button>
    )
  }

  return (
    <div style={style}>
      <TodoForm createTodo={createTodo} />
      {todos?.map((todo: TodoType) => (
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