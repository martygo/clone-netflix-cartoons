import React from 'react';
import ShowContext from '../context/ShowContext';
import { IPopular } from '../types/IPopular';

type DiscoverProps = {
  title: string;
  link?: string;
  className?: string;
};

type DiscoverItemProps = {
  item: IPopular;
};

function Discover({ title, link, className }: DiscoverProps) {
  const { shows } = React.useContext(ShowContext);

  return (
    <section className={`App__collection__discover ${className ? className : ''}`}>
      <a href="#" className="App__collection__discover__title">
        <h1 className="App__collection__discover__title--name">{title}</h1>
        <p className={link?.trim() != null ? 'App__collection__discover__title--link' : ''}>
          {link}
        </p>
      </a>

      <li className="App__collection__discover__list">
        {shows.map((show) => {
          return <DiscoverItem item={show} key={show.id}/>;
        })}
      </li>
    </section>
  );
}

function DiscoverItem({ item }: DiscoverItemProps) {
  return (
    <a href="#" className="App__collection__discover__list__item">
      <img src={item.image} alt={item.title} className="App__collection__discover__list__item--cover" />
      <h3 className="App__collection__discover__list__item--title">{item.title}</h3>
    </a>
  );
}

export default Discover;
