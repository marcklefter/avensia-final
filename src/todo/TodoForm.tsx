import {
  useState
} from 'react';

// ...

const style = {
  width: '100%',
  backgroundColor: '#FFF',
  padding: 16,
  fontSize: 24,
  fontStyle: 'italic',
  fontWeight: 300,
  border: 'none'
};

// ...

type TodoFormProps = {
  createTodo: (title: string) => void
}

export const TodoForm = ({ createTodo }: TodoFormProps) => {
  const [title, setTitle] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const titleToSet = title.trimStart();
    if (titleToSet) {
      createTodo(titleToSet);

      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        style={style}
        value={title}
        placeholder="What do you need to do?"
        onChange={handleChange}
      />
    </form>
  )
}