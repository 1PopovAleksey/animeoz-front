<template>
  <header class="header">
    <div class="header__top">
      <div class="header__container header__flex header__flex_top">
        <nav class="header__nav">
          <RouterLink class="header__link" to="/">Оплата и доставка</RouterLink>
          <RouterLink class="header__link" to="/">О нас</RouterLink>
          <RouterLink class="header__link" to="/">Контакты</RouterLink>
          <RouterLink class="header__link" to="/">Акции</RouterLink>
        </nav>
        <a class="header__link" href="tel:+79999999999">+7 (999) 999 99 99</a>
      </div>
    </div>
    <div class="header__bottom">
      <div class="header__container header__flex header__flex_bottom">
        <RouterLink class="header__logo" to="/">
          <HeaderLogo />
        </RouterLink>
        <button class="header__catalog">
          <HeaderBurger />
          <span>Каталог</span>
        </button>
        <div class="header__search">
          <input type="text" placeholder="Поиск" />
          <button>Найти</button>
        </div>
        <div class="header__user">
          <button class="header__login">
            <HeaderLogin />
          </button>
          <RouterLink class="header__favorite" to="/">
            <HeaderFavorite />
          </RouterLink>
          <RouterLink class="header__cart" to="/">
            <HeaderCart />
          </RouterLink>
        </div>
      </div>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
  <footer></footer>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
// Icons
import HeaderLogo from "./components/icons/HeaderLogo.vue";
import HeaderBurger from "./components/icons/HeaderBurger.vue";
import HeaderLogin from "./components/icons/HeaderLogin.vue";
import HeaderFavorite from "./components/icons/HeaderFavorite.vue";
import HeaderCart from "./components/icons/HeaderCart.vue";
</script>

<style scoped lang="scss">
@import "../src/assets/base.scss";

.header {
  &__top {
    display: flex;
    align-items: center;
    height: 40px;
  }

  &__container {
    @include container;
  }

  &__flex {
    display: flex;

    &_top {
      align-items: center;
      justify-content: space-between;
    }

    &_bottom {
      gap: 20px;
    }
  }

  &__nav {
    display: flex;
    gap: 20px;
  }

  &__link {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: var(--xiketic);
  }

  &__bottom {
    display: flex;
    align-items: center;
    height: 80px;
    background-color: var(--lavender-blush);
  }

  &__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 183px;
    height: 50px;
    border-radius: 5px;
    background: var(--sky-magenta);
  }

  &__catalog {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 13px;
    width: 183px;
    height: 50px;
    border-radius: 5px;
    background: var(--sky-magenta);

    span {
      font-weight: 600;
      font-size: 24px;
      line-height: 100%;
      color: var(--white);
    }
  }

  &__search {
    display: flex;
    width: 590px;
    height: 50px;
    border: 1px solid var(--sky-magenta);
    border-radius: 5px;
    background-color: var(--sky-magenta);

    input {
      padding: 0 13px;
      width: 100%;
      height: 100%;
      border: none;
      border-radius: 5px 0 0 5px;
      outline: none;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: var(--sky-magenta);
      background-color: var(--lavender-blush);

      &::placeholder {
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: var(--sky-magenta);
      }
    }

    button {
      padding: 0 18px;
      height: 100%;
      border-radius: 0 5px 5px 0;
      font-weight: 500;
      font-size: 20px;
      line-height: 100%;
      color: var(--white);
      background-color: var(--sky-magenta);
    }
  }

  &__user {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 184px;
  }
}
</style>
