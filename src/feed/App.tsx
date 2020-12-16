import {
  CardList
} from './CardList';

import {
  Item
} from './types';

// ...

const items: Item[] = [
  {
    title: 'first item',
    image: 'http://via.placeholder.com/350x150'
  },
  {
    title: 'second item',
    image: 'http://via.placeholder.com/350x150'
  }
];

// ...

export const App = () => {
  return <CardList items={items} />
}