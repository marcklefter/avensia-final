import {
  Card
} from './Card';

import {
  Item
} from './types';

// ...

type CardListProps = {
  items: Item[]
}

export const CardList = ({ items }: CardListProps) => {
  return (
    <>
      {items.map((item, index) => (
        <Card
          key={index}

          {...item}
          // size="large"
        />
      ))}

      {/* {items.map(({ title, image }, index) => (
        <Card
          key={index}

          title={title}
          image={image}
          // size="large"
        />
      ))} */}
    </>
  )
}