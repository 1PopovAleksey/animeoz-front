import Link from 'next/link';
import { Logo } from './icons';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__top">
          <div className="footer__container">
            <div className="footer__offset">
              <Link className="footer__logo" href="/">
                <Logo />
              </Link>
              <div className="footer__info">
                <h3 className="footer__title">Информация</h3>
                <nav className="footer__nav">
                  <Link className="footer__link" href="/">
                    Оплата и доставка
                  </Link>
                  <Link className="footer__link" href="/">
                    О нас
                  </Link>
                  <Link className="footer__link" href="/">
                    Контакты
                  </Link>
                  <Link className="footer__link" href="/">
                    Акции
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__container footer__flex">
            <Link className="footer__link" href="/">
              Политика конфиденциальности
            </Link>
            <span className="footer__copiright">© ANIMEOЗ</span>
            <Link className="footer__link" href="/">
              Пользовательское соглашение
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
