import { IPopular } from '../data/popular';

type DiscoverProps = {
  title: string;
  link?: string;
  data: IPopular[];
  className?: string;
};

function Discover({ title, link, data, className }: DiscoverProps) {
  const blurClass = className ? className : '';

  return (
    <section className={`App__collection__discover ${blurClass}`}>
      <a href="#" className="App__collection__discover__title">
        <h1 className="App__collection__discover__title--name">{title}</h1>
        <p className={link?.trim() != null ? 'App__collection__discover__title--link' : ''}>
          {link}
        </p>
      </a>

      <li className="App__collection__discover__list">
        {data.map((item, index) => {
          return (
            <a href="#" className="App__collection__discover__list__item" key={index}>
              <img
                src={item.image}
                alt={item.title}
                className="App__collection__discover__list__item--cover"
              />
              <h3 className="App__collection__discover__list__item--title">{item.title}</h3>
            </a>
          );
        })}
      </li>
    </section>
  );
}

export default Discover;
