import { Fragment } from 'react';
import CoverCard from '../../components/CoverCard';

import './index.scss';

const menu = [
  { title: 'Contacts', id: 'contacts', link: '#' },
  { title: 'FAQ', id: 'faq', link: '#' }
]

const Main = () => {
  return (
    <Fragment>
      <header className="header">
        <div className="container">
          <nav className="header__navigation">
            <a href="#" className="header__logo">
              <h1>Travel Journal</h1>
            </a>
            <ul className="header__menu">
              {menu.map((item) => (
                <li key={item.id}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <article>
        <section>
          <CoverCard
            title="Northern<br />forest"
            image={`${import.meta.env.BASE_URL}image.jpg`}
            subTitle="Northern taiga journey"
            text={`Majestic coniferous forests, crystal-clear lakes, and the stillness
            of untouched nature create an atmosphere unlike any other region.
            Endless spruce groves, mossy ground, wild rivers and the calm rhythm
            of the northern wilderness.`}
            link="#"
          />
        </section>
      </article>
    </Fragment>
  )
};

export default Main;