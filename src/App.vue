<template>
  <header id="header" class="header">
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
          <LogoIcon />
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
          <button class="header__login" @click="changeVisible">
            <HeaderLogin />
          </button>
          <LoginModal v-show="showPopup" @close="changeVisible" />
          <RouterLink class="header__favorite" to="/favorite">
            <HeaderFavorite />
          </RouterLink>
          <RouterLink class="header__cart" to="/cart">
            <HeaderCart />
          </RouterLink>
        </div>
      </div>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
  <footer id="footer" class="footer">
    <div class="footer__top">
      <div class="footer__container footer__flex footer__flex_top">
        <div class="footer__offset">
          <RouterLink class="footer__logo" to="/">
            <LogoIcon />
          </RouterLink>
          <div class="footer__flex footer__flex_row">
            <div class="footer__flex footer__flex_column">
              <h3 class="footer__title">Информация</h3>
              <nav class="footer__nav">
                <RouterLink class="footer__link" to="/">
                  Оплата и доставка
                </RouterLink>
                <RouterLink class="footer__link" to="/">О нас</RouterLink>
                <RouterLink class="footer__link" to="/">Контакты</RouterLink>
                <RouterLink class="footer__link" to="/">Акции</RouterLink>
              </nav>
            </div>
            <div class="footer__flex footer__flex_column">
              <h3 class="footer__title">Аккаунт</h3>
              <nav class="footer__nav">
                <RouterLink class="footer__link" to="/">
                  Оплата и доставка
                </RouterLink>
                <RouterLink class="footer__link" to="/">О нас</RouterLink>
                <RouterLink class="footer__link" to="/">Контакты</RouterLink>
                <RouterLink class="footer__link" to="/">Акции</RouterLink>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="footer__container">
        <div class="footer__flex footer__flex_space-between">
          <RouterLink class="footer__link_bottom" to="/">
            Политика конфиденциальности
          </RouterLink>
          <span class="footer__copiright">© ANIMEOЗ</span>
          <RouterLink class="footer__link_bottom" to="/">
            Пользовательское соглашение
          </RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
// Icons
import LogoIcon from "./components/icons/LogoIcon.vue";
import HeaderBurger from "./components/icons/HeaderBurger.vue";
import HeaderLogin from "./components/icons/HeaderLogin.vue";
import HeaderFavorite from "./components/icons/HeaderFavorite.vue";
import HeaderCart from "./components/icons/HeaderCart.vue";
// Modals
import LoginModal from "./components/modals/LoginModal.vue";

import { useCounterStore } from "./stores/auth";
import { storeToRefs } from "pinia";

const { showPopup } = storeToRefs(useCounterStore());
const { changeVisible } = useCounterStore();
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
    border: 2px solid var(--sky-magenta);
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

.footer {
  &__top {
    display: flex;
    background-color: var(--sky-magenta);
  }

  &__container {
    @include container;
  }

  &__flex {
    display: flex;

    &_top {
      flex-direction: column;
    }

    &_row {
      flex-direction: row;
      gap: 20px;
    }

    &_column {
      flex-direction: column;
      gap: 15px;
      margin: 20px 0 0 0;
      width: 183px;
    }

    &_space-between {
      display: flex;
      justify-content: space-between;
    }
  }

  &__offset {
    padding: 20px 0 40px 0;
  }

  &__logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 183px;
    height: 50px;
    border-radius: 5px;
    background: var(--xiketic);
  }

  &__nav {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__title {
    font-weight: 500;
    font-size: 24px;
    line-height: 100%;
    color: var(--white);
  }

  &__link {
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: var(--white);
  }

  &__bottom {
    display: flex;
    align-items: center;
    height: 50px;
  }

  &__link_bottom {
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: var(--xiketic);
  }

  &__copiright {
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: var(--xiketic);
  }
}
</style>
