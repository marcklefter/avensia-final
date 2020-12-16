import './style.css';

// ...

type Size = 'small' | 'medium' | 'large';

type Props = {
  title: string;
  image: string;
  size?: Size;
}

export const Card = ({ title, image, size = 'medium' }: Props) => {
  const sizeClass = `Card__${size}`;

  return (
    <div className={`Card ${sizeClass}`}>
      <p className="Card__title">{title.toUpperCase()}</p>
      <div><img className="Card__image" src={image} alt="" /></div>
    </div>
  )
}