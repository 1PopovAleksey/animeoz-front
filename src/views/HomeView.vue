<template>
  <section class="hero">
    <div class="hero__container">
      <div class="hero__offset">
        <div class="hero__flex">
          <swiper
            :cssMode="true"
            :navigation="true"
            :pagination="true"
            :mousewheel="true"
            :keyboard="true"
            :loop="true"
            :autoplay="{
              delay: 10000,
              disableOnInteraction: false,
            }"
            :modules="modules"
            class="hero__big-swiper"
          >
            <swiper-slide>
              <div class="hero__slide-1">
                <h1>ANIMEOЗ</h1>
                <p>
                  В нашем магазине вы сможете найти товары связанные с аниме
                </p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="hero__slide-2">
                <h1>ANIMEOЗ</h1>
                <p>
                  В нашем магазине вы сможете найти товары связанные с аниме
                </p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="hero__slide-3">
                <h1>ANIMEOЗ</h1>
                <p>
                  В нашем магазине вы сможете найти товары связанные с аниме
                </p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="hero__slide-4">
                <h1>ANIMEOЗ</h1>
                <p>
                  В нашем магазине вы сможете найти товары связанные с аниме
                </p>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="hero__slide-5">
                <h1>ANIMEOЗ</h1>
                <p>
                  В нашем магазине вы сможете найти товары связанные с аниме
                </p>
              </div>
            </swiper-slide>
          </swiper>
          <swiper
            :cssMode="true"
            :navigation="true"
            :pagination="true"
            :mousewheel="true"
            :keyboard="true"
            :loop="true"
            :autoplay="{
              delay: 10000,
              disableOnInteraction: false,
            }"
            :modules="modules"
            class="hero__small-swiper"
          >
            <swiper-slide>
              <div class="hero__slide-1_small">
                <h1>Стикеры</h1>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="hero__slide-2_small">
                <h1>Кружки</h1>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="hero__slide-3_small">
                <h1>Брилки</h1>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="hero__slide-4_small">
                <h1>Значки</h1>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="hero__slide-5_small">
                <h1>Тетради</h1>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
  <section class="menu">
    <div class="menu__container">
      <nav class="menu__nav">
        <RouterLink class="menu__link" to="/new">Новинки</RouterLink>
        <RouterLink class="menu__link" to="/">Лутбоксы</RouterLink>
        <RouterLink class="menu__link" to="/">Стикеры</RouterLink>
        <RouterLink class="menu__link" to="/">Брилки</RouterLink>
        <RouterLink class="menu__link" to="/">Тетради</RouterLink>
        <RouterLink class="menu__link" to="/">Кружки</RouterLink>
      </nav>
    </div>
  </section>
  <section class="banners">
    <div class="banners__container">
      <div class="banners__offset">
        <div class="banners__cards">
          <RouterLink class="banners__card" to="/"></RouterLink>
          <RouterLink class="banners__card" to="/"></RouterLink>
          <RouterLink class="banners__card" to="/"></RouterLink>
          <RouterLink class="banners__card" to="/"></RouterLink>
          <RouterLink class="banners__card" to="/"></RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Navigation, Pagination, Mousewheel, Keyboard],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";

.hero {
  &__container {
    @include container;
  }

  &__offset {
    padding: 20px 0;
  }

  &__flex {
    display: flex;
    gap: 20px;
  }

  &__big-swiper {
    width: 793px;
    height: 387px;
    border-radius: 5px;
    background-color: var(--sky-magenta);
  }

  &__small-swiper {
    width: 387px;
    height: 387px;
    border-radius: 5px;
    background-color: var(--sky-magenta);
  }

  &__slide-1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 80px;
    height: 100%;
    background: url("../assets/img/slide-1.png") 500px center no-repeat;
    background-size: contain;

    h1 {
      font-weight: 500;
      font-size: 40px;
      line-height: 49px;
      color: var(--white);
    }

    p {
      width: 400px;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      color: var(--white);
    }
  }

  &__slide-2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 80px;
    height: 100%;
    background: url("../assets/img/slide-2.png") 200px center no-repeat;
    background-size: contain;

    h1 {
      font-weight: 500;
      font-size: 40px;
      line-height: 49px;
      color: var(--white);
    }

    p {
      width: 400px;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      color: var(--white);
    }
  }

  &__slide-3 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 80px;
    height: 100%;
    background: url("../assets/img/slide-3.png") 480px center no-repeat;
    background-size: contain;

    h1 {
      font-weight: 500;
      font-size: 40px;
      line-height: 49px;
      color: var(--white);
    }

    p {
      width: 400px;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      color: var(--white);
    }
  }

  &__slide-4 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 80px;
    height: 100%;
    background: url("../assets/img/slide-4.png") 280px center no-repeat;
    background-size: contain;

    h1 {
      font-weight: 500;
      font-size: 40px;
      line-height: 49px;
      color: var(--white);
    }

    p {
      width: 400px;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      color: var(--white);
    }
  }

  &__slide-5 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 80px;
    height: 100%;
    background: url("../assets/img/slide-5.png") 430px center no-repeat;
    background-size: contain;

    h1 {
      font-weight: 500;
      font-size: 40px;
      line-height: 49px;
      color: var(--white);
    }

    p {
      width: 400px;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      color: var(--white);
    }
  }

  &__slide-1_small {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: url("../assets/img/slide-1.png") center center no-repeat;
    background-size: contain;

    h1 {
      padding: 5px;
      font-weight: 500;
      font-size: 40px;
      line-height: 49px;
      color: var(--white);
      border-radius: 5px;
      background-color: var(--sky-magenta);
    }
  }

  &__slide-2_small {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: url("../assets/img/cup-slide.png") center center no-repeat;
    background-size: contain;

    h1 {
      padding: 5px;
      font-weight: 500;
      font-size: 40px;
      line-height: 49px;
      color: var(--white);
      border-radius: 5px;
      background-color: var(--sky-magenta);
    }
  }

  &__slide-3_small {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: url("../assets/img/slide-3.png") center center no-repeat;
    background-size: contain;

    h1 {
      padding: 5px;
      font-weight: 500;
      font-size: 40px;
      line-height: 49px;
      color: var(--white);
      border-radius: 5px;
      background-color: var(--sky-magenta);
    }
  }

  &__slide-4_small {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: url("../assets/img/slide-4.png") center center no-repeat;
    background-size: contain;

    h1 {
      padding: 5px;
      font-weight: 500;
      font-size: 40px;
      line-height: 49px;
      color: var(--white);
      border-radius: 5px;
      background-color: var(--sky-magenta);
    }
  }

  &__slide-5_small {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: url("../assets/img/slide-5.png") 0 center no-repeat;
    background-size: contain;

    h1 {
      padding: 5px;
      font-weight: 500;
      font-size: 40px;
      line-height: 49px;
      color: var(--white);
      border-radius: 5px;
      background-color: var(--sky-magenta);
    }
  }
}

.menu {
  &__container {
    @include container;
  }

  &__nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__link {
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: var(--xiketic);
  }
}

.banners {
  &__container {
    @include container;
  }

  &__offset {
    padding: 20px 0;
  }

  &__cards {
    display: flex;
    gap: 20px;
  }

  &__card {
    width: 224px;
    height: 126px;
    border-radius: 5px;
    background: var(--sky-magenta) url("../assets/img/slide-3.png") center
      center no-repeat;
    background-size: contain;
  }
}
</style>

<style lang="scss">
.swiper-button-prev {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--lavender-blush) url("../assets/svg/prev.svg") 12px center
    no-repeat;
  width: 40px;
  height: 40px;
  border-radius: 100%;

  &::after {
    content: "";
  }
}

.swiper-button-next {
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--lavender-blush) url("../assets/svg/next.svg") 15px center
    no-repeat;
  width: 40px;
  height: 40px;
  border-radius: 100%;

  &::after {
    content: "";
  }
}

.swiper-pagination {
  bottom: 12px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.swiper-pagination-bullet {
  margin: 0 !important;
  background-color: var(--lavender-blush);
}

.swiper-pagination-bullet-active {
  transform: scale(1.3);
  background-color: var(--white);
}
</style>
