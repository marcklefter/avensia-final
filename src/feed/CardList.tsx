import {
  Card
} from './Card';

import {
  Item
} from './types';

// ...

type Props = {
  items: Item[]
}

export const CardList = ({ items }: Props) => {
  return (
    <>
      {items.map(({ title, image }, index) => (
        <Card
          key={index}
          title={title}
          image={image}
          // size="large"
        />
      ))}
    </>
  )
}