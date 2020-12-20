import React, {
  useState,
  useEffect,
  useContext
} from 'react';

import {
  TodoForm
} from './TodoForm';

import {
  Todo
} from './Todo';

import {
  TodoType,
  FetchedTodoType,
  Status
} from './types';

import {
  DependencyContext
} from './DependencyContext';

// ...

const style = {
  width: 'calc(100% / 3)',
  margin: '150px auto auto'
};

// ...

export const App = () => {
  const [
    todos, 
    setTodos
  ] = useState<TodoType[] | undefined>();
  
  const [
    status, 
    setStatus
  ] = useState<Status>('idle');

  const {
    apiFetch
  } = useContext(DependencyContext);

  useEffect(() => {
    if (status !== 'idle') {
      return
    }

    const fetchTodos = async () => {
      setStatus('loading');

      try {
        const fetchedTodos = (await apiFetch<FetchedTodoType[]>('todos')).map(
          ({ userId, ...todo }) => todo
        );

        // TBD: fetchedTodos validation, e.g. using a library such as ajv.

        setTodos(fetchedTodos);
        setStatus('success');
      } catch (error) {
        setStatus('failure');
      }
    };

    fetchTodos();
  }, [status, apiFetch]);

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