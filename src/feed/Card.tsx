import './style.css';

// ...

type Size = 'small' | 'medium' | 'large';

type CardProps = {
  title: string;
  image: string;
  size?: Size;
}

export const Card = ({ title, image, size = 'medium' }: CardProps) => {
  const sizeClass = `Card__${size}`;

  return (
    <div className={`Card ${sizeClass}`}>
      <p className="Card__title">{title.toUpperCase()}</p>
      <div><img className="Card__image" src={image} alt="" /></div>
    </div>
  )
}