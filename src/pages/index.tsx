import Head from 'next/head';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="hero">
        <div className="hero__container">
          <div className="hero__offset hero__flex">
            <div className="hero__big-swiper">
              <Swiper
                slidesPerView={1}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="hero__left-swiper"
              >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
              </Swiper>
            </div>
            <div className="hero__small-swiper">
              <Swiper
                slidesPerView={1}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="hero__right-swiper"
              >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className="nav">
        <div className="nav__container">
          <nav className="nav__navbar">
            <Link className="nav__link" href="/">
              Новинки
            </Link>
            <Link className="nav__link" href="/">
              Лутбоксы
            </Link>
            <Link className="nav__link" href="/">
              Стикеры
            </Link>
            <Link className="nav__link" href="/">
              Брилки
            </Link>
            <Link className="nav__link" href="/">
              Тетради
            </Link>
            <Link className="nav__link" href="/">
              Кружки
            </Link>
          </nav>
        </div>
      </section>
      <section className="banners">
        <div className="banners__container">
          <div className="banners__offset">
            <Swiper
              spaceBetween={20}
              slidesPerView={5}
              slidesPerGroup={5}
              loopFillGroupWithBlank={true}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="banners__swiper"
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
              <SwiperSlide>Slide 5</SwiperSlide>
              <SwiperSlide>Slide 6</SwiperSlide>
              <SwiperSlide>Slide 7</SwiperSlide>
              <SwiperSlide>Slide 8</SwiperSlide>
              <SwiperSlide>Slide 9</SwiperSlide>
              <SwiperSlide>Slide 10</SwiperSlide>
              <SwiperSlide>Slide 11</SwiperSlide>
              <SwiperSlide>Slide 12</SwiperSlide>
              <SwiperSlide>Slide 13</SwiperSlide>
              <SwiperSlide>Slide 14</SwiperSlide>
              <SwiperSlide>Slide 15</SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      <section className="hits">
        <div className="hits__container">
          <div className="hits__offset">
            <h2 className="hits__title">Хиты продаж</h2>
            <div>
              <Swiper
                spaceBetween={20}
                slidesPerView={8}
                slidesPerGroup={8}
                loopFillGroupWithBlank={true}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="hits__swiper"
              >
                <SwiperSlide className="hits__slide">Slide 1</SwiperSlide>
                <SwiperSlide className="hits__slide">Slide 2</SwiperSlide>
                <SwiperSlide className="hits__slide">Slide 3</SwiperSlide>
                <SwiperSlide className="hits__slide">Slide 4</SwiperSlide>
                <SwiperSlide className="hits__slide">Slide 5</SwiperSlide>
                <SwiperSlide className="hits__slide">Slide 6</SwiperSlide>
                <SwiperSlide className="hits__slide">Slide 7</SwiperSlide>
                <SwiperSlide className="hits__slide">Slide 8</SwiperSlide>
                <SwiperSlide className="hits__slide">Slide 9</SwiperSlide>
                <SwiperSlide className="hits__slide">Slide 10</SwiperSlide>
                <SwiperSlide className="hits__slide">Slide 11</SwiperSlide>
                <SwiperSlide className="hits__slide">Slide 12</SwiperSlide>
                <SwiperSlide className="hits__slide">Slide 13</SwiperSlide>
                <SwiperSlide className="hits__slide">Slide 14</SwiperSlide>
                <SwiperSlide className="hits__slide">Slide 15</SwiperSlide>
                <SwiperSlide className="hits__slide">Slide 16</SwiperSlide>
                <SwiperSlide className="hits__slide">Slide 17</SwiperSlide>
                <SwiperSlide className="hits__slide">Slide 18</SwiperSlide>
                <SwiperSlide className="hits__slide">Slide 19</SwiperSlide>
                <SwiperSlide className="hits__slide">Slide 20</SwiperSlide>
                <SwiperSlide className="hits__slide">Slide 21</SwiperSlide>
                <SwiperSlide className="hits__slide">Slide 22</SwiperSlide>
                <SwiperSlide className="hits__slide">Slide 23</SwiperSlide>
                <SwiperSlide className="hits__slide">Slide 24</SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className="stickers">
        <div className="stickers__container">
          <div className="stickers__offset">
            <h2 className="stickers__title">Стикеры</h2>
            <div>
              <Swiper
                spaceBetween={20}
                slidesPerView={8}
                slidesPerGroup={8}
                loopFillGroupWithBlank={true}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="stickers__swiper"
              >
                <SwiperSlide className="stickers__slider">Slide 1</SwiperSlide>
                <SwiperSlide className="stickers__slider">Slide 2</SwiperSlide>
                <SwiperSlide className="stickers__slider">Slide 3</SwiperSlide>
                <SwiperSlide className="stickers__slider">Slide 4</SwiperSlide>
                <SwiperSlide className="stickers__slider">Slide 5</SwiperSlide>
                <SwiperSlide className="stickers__slider">Slide 6</SwiperSlide>
                <SwiperSlide className="stickers__slider">Slide 7</SwiperSlide>
                <SwiperSlide className="stickers__slider">Slide 8</SwiperSlide>
                <SwiperSlide className="stickers__slider">Slide 9</SwiperSlide>
                <SwiperSlide className="stickers__slider">Slide 10</SwiperSlide>
                <SwiperSlide className="stickers__slider">Slide 11</SwiperSlide>
                <SwiperSlide className="stickers__slider">Slide 12</SwiperSlide>
                <SwiperSlide className="stickers__slider">Slide 13</SwiperSlide>
                <SwiperSlide className="stickers__slider">Slide 14</SwiperSlide>
                <SwiperSlide className="stickers__slider">Slide 15</SwiperSlide>
                <SwiperSlide className="stickers__slider">Slide 16</SwiperSlide>
                <SwiperSlide className="stickers__slider">Slide 17</SwiperSlide>
                <SwiperSlide className="stickers__slider">Slide 18</SwiperSlide>
                <SwiperSlide className="stickers__slider">Slide 19</SwiperSlide>
                <SwiperSlide className="stickers__slider">Slide 20</SwiperSlide>
                <SwiperSlide className="stickers__slider">Slide 21</SwiperSlide>
                <SwiperSlide className="stickers__slider">Slide 22</SwiperSlide>
                <SwiperSlide className="stickers__slider">Slide 23</SwiperSlide>
                <SwiperSlide className="stickers__slider">Slide 24</SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className="key-chains">
        <div className="key-chains__container">
          <div className="key-chains__offset">
            <h2 className="key-chains__title">Брелки</h2>
            <div>
              <Swiper
                spaceBetween={20}
                slidesPerView={8}
                slidesPerGroup={8}
                loopFillGroupWithBlank={true}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="key-chains__swiper"
              >
                <SwiperSlide className="key-chains__slider">Slide 1</SwiperSlide>
                <SwiperSlide className="key-chains__slider">Slide 2</SwiperSlide>
                <SwiperSlide className="key-chains__slider">Slide 3</SwiperSlide>
                <SwiperSlide className="key-chains__slider">Slide 4</SwiperSlide>
                <SwiperSlide className="key-chains__slider">Slide 5</SwiperSlide>
                <SwiperSlide className="key-chains__slider">Slide 6</SwiperSlide>
                <SwiperSlide className="key-chains__slider">Slide 7</SwiperSlide>
                <SwiperSlide className="key-chains__slider">Slide 8</SwiperSlide>
                <SwiperSlide className="key-chains__slider">Slide 9</SwiperSlide>
                <SwiperSlide className="key-chains__slider">Slide 10</SwiperSlide>
                <SwiperSlide className="key-chains__slider">Slide 11</SwiperSlide>
                <SwiperSlide className="key-chains__slider">Slide 12</SwiperSlide>
                <SwiperSlide className="key-chains__slider">Slide 13</SwiperSlide>
                <SwiperSlide className="key-chains__slider">Slide 14</SwiperSlide>
                <SwiperSlide className="key-chains__slider">Slide 15</SwiperSlide>
                <SwiperSlide className="key-chains__slider">Slide 16</SwiperSlide>
                <SwiperSlide className="key-chains__slider">Slide 17</SwiperSlide>
                <SwiperSlide className="key-chains__slider">Slide 18</SwiperSlide>
                <SwiperSlide className="key-chains__slider">Slide 19</SwiperSlide>
                <SwiperSlide className="key-chains__slider">Slide 20</SwiperSlide>
                <SwiperSlide className="key-chains__slider">Slide 21</SwiperSlide>
                <SwiperSlide className="key-chains__slider">Slide 22</SwiperSlide>
                <SwiperSlide className="key-chains__slider">Slide 23</SwiperSlide>
                <SwiperSlide className="key-chains__slider">Slide 24</SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className="notebooks">
        <div className="notebooks__container">
          <div className="notebooks__offset">
            <h2 className="notebooks__title">Тетради</h2>
            <div>
              <Swiper
                spaceBetween={20}
                slidesPerView={8}
                slidesPerGroup={8}
                loopFillGroupWithBlank={true}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="notebooks__swiper"
              >
                <SwiperSlide className="notebooks__slider">Slide 1</SwiperSlide>
                <SwiperSlide className="notebooks__slider">Slide 2</SwiperSlide>
                <SwiperSlide className="notebooks__slider">Slide 3</SwiperSlide>
                <SwiperSlide className="notebooks__slider">Slide 4</SwiperSlide>
                <SwiperSlide className="notebooks__slider">Slide 5</SwiperSlide>
                <SwiperSlide className="notebooks__slider">Slide 6</SwiperSlide>
                <SwiperSlide className="notebooks__slider">Slide 7</SwiperSlide>
                <SwiperSlide className="notebooks__slider">Slide 8</SwiperSlide>
                <SwiperSlide className="notebooks__slider">Slide 9</SwiperSlide>
                <SwiperSlide className="notebooks__slider">Slide 10</SwiperSlide>
                <SwiperSlide className="notebooks__slider">Slide 11</SwiperSlide>
                <SwiperSlide className="notebooks__slider">Slide 12</SwiperSlide>
                <SwiperSlide className="notebooks__slider">Slide 13</SwiperSlide>
                <SwiperSlide className="notebooks__slider">Slide 14</SwiperSlide>
                <SwiperSlide className="notebooks__slider">Slide 15</SwiperSlide>
                <SwiperSlide className="notebooks__slider">Slide 16</SwiperSlide>
                <SwiperSlide className="notebooks__slider">Slide 17</SwiperSlide>
                <SwiperSlide className="notebooks__slider">Slide 18</SwiperSlide>
                <SwiperSlide className="notebooks__slider">Slide 19</SwiperSlide>
                <SwiperSlide className="notebooks__slider">Slide 20</SwiperSlide>
                <SwiperSlide className="notebooks__slider">Slide 21</SwiperSlide>
                <SwiperSlide className="notebooks__slider">Slide 22</SwiperSlide>
                <SwiperSlide className="notebooks__slider">Slide 23</SwiperSlide>
                <SwiperSlide className="notebooks__slider">Slide 24</SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className="mugs">
        <div className="mugs__container">
          <div className="mugs__offset">
            <h2 className="mugs__title">Кружки</h2>
            <div>
              <Swiper
                spaceBetween={20}
                slidesPerView={8}
                slidesPerGroup={8}
                loopFillGroupWithBlank={true}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mugs__swiper"
              >
                <SwiperSlide className="mugs__slider">Slide 1</SwiperSlide>
                <SwiperSlide className="mugs__slider">Slide 2</SwiperSlide>
                <SwiperSlide className="mugs__slider">Slide 3</SwiperSlide>
                <SwiperSlide className="mugs__slider">Slide 4</SwiperSlide>
                <SwiperSlide className="mugs__slider">Slide 5</SwiperSlide>
                <SwiperSlide className="mugs__slider">Slide 6</SwiperSlide>
                <SwiperSlide className="mugs__slider">Slide 7</SwiperSlide>
                <SwiperSlide className="mugs__slider">Slide 8</SwiperSlide>
                <SwiperSlide className="mugs__slider">Slide 9</SwiperSlide>
                <SwiperSlide className="mugs__slider">Slide 10</SwiperSlide>
                <SwiperSlide className="mugs__slider">Slide 11</SwiperSlide>
                <SwiperSlide className="mugs__slider">Slide 12</SwiperSlide>
                <SwiperSlide className="mugs__slider">Slide 13</SwiperSlide>
                <SwiperSlide className="mugs__slider">Slide 14</SwiperSlide>
                <SwiperSlide className="mugs__slider">Slide 15</SwiperSlide>
                <SwiperSlide className="mugs__slider">Slide 16</SwiperSlide>
                <SwiperSlide className="mugs__slider">Slide 17</SwiperSlide>
                <SwiperSlide className="mugs__slider">Slide 18</SwiperSlide>
                <SwiperSlide className="mugs__slider">Slide 19</SwiperSlide>
                <SwiperSlide className="mugs__slider">Slide 20</SwiperSlide>
                <SwiperSlide className="mugs__slider">Slide 21</SwiperSlide>
                <SwiperSlide className="mugs__slider">Slide 22</SwiperSlide>
                <SwiperSlide className="mugs__slider">Slide 23</SwiperSlide>
                <SwiperSlide className="mugs__slider">Slide 24</SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
