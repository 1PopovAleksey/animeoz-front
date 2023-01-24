import Link from 'next/link';
import { Burger, Cart, Favorite, Logo } from './icons';

export default function Header() {
  const amountCart = 2;

  return (
    <>
      <header className="header">
        <div className="header__top">
          <div className="header__container">
            <nav className="header__nav">
              <Link className="header__link" href="/">
                Оплата и доставка
              </Link>
              <Link className="header__link" href="/">
                О нас
              </Link>
              <Link className="header__link" href="/">
                Контакты
              </Link>
              <Link className="header__link" href="/">
                Акции
              </Link>
            </nav>
            <a className="header__link header__link_tel" href="tel:+79999999999">
              +7 (999) 999 99 99
            </a>
          </div>
        </div>
        <div className="header__bottom">
          <div className="header__container header__container_bottom">
            <Link className="header__logo" href="/">
              <Logo />
            </Link>
            <button className="header__catalog">
              <Burger />
              Каталог
            </button>
            <div className="header__search">
              <input type="text" name="search" id="search" placeholder="Поиск" />
              <button>Найти</button>
            </div>
            <Link className="header__favorite" href="/">
              <Favorite />
            </Link>
            <Link className="header__cart" href="/">
              <Cart />
              <span>{amountCart}</span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
