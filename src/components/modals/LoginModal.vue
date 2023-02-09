<template>
  <div class="modal" v-show="showPopup" @click="close">
    <div class="modal__container" @click.stop>
      <header class="header">
        <h3 class="header__title" v-if="login">Войти</h3>
        <h3 class="header__title" v-else>Регистрация</h3>
        <button class="header__close" @click="close">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
            <path
              d="M6.4 19 5 17.6l5.6-5.6L5 6.4 6.4 5l5.6 5.6L17.6 5 19 6.4 13.4 12l5.6 5.6-1.4 1.4-5.6-5.6Z"
            />
          </svg>
        </button>
      </header>
      <section class="body">
        <form class="form" action="#" method="post" v-if="login">
          <label class="form__label" for="login">
            <span>Логин</span>
            <input
              class="form__input"
              id="login"
              type="text"
              name="login"
              placeholder="Логин"
            />
          </label>
          <label class="form__label" for="password">
            <span>Пароль</span>
            <input
              class="form__input"
              id="password"
              type="text"
              name="password"
              placeholder="Пароль"
            />
          </label>
          <button class="form__btn">Залогиниться</button>
        </form>
        <form class="form" action="#" method="post" v-else>
          <label class="form__label" for="login">
            <span>Логин*</span>
            <input
              class="form__input"
              id="login"
              type="text"
              name="login"
              placeholder="Логин"
            />
          </label>
          <label class="form__label" for="name">
            <span>Имя</span>
            <input
              class="form__input"
              id="name"
              type="text"
              name="name"
              placeholder="Имя"
            />
          </label>
          <label class="form__label" for="mail">
            <span>Почта*</span>
            <input
              class="form__input"
              id="mail"
              type="text"
              name="mail"
              placeholder="Почта"
            />
          </label>
          <label class="form__label" for="password">
            <span>Пароль*</span>
            <input
              class="form__input"
              id="password"
              type="text"
              name="password"
              placeholder="Пароль"
            />
          </label>
          <button class="form__btn">Зарегистрироваться</button>
        </form>
      </section>
      <footer class="footer">
        <button class="footer__btn" @click="login = false" v-if="login">
          Регистрация
        </button>
        <button class="footer__btn" @click="login = true" v-else>Войти</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginModal",
  data() {
    return {
      login: true,
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(15, 5, 14, 0.3);
  z-index: 100;

  &__container {
    width: 350px;
    border-radius: 5px;
    background-color: var(--white);
  }
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 5px 5px 0 0;
  background-color: var(--sky-magenta);

  &__title {
    font-weight: 500;
    font-size: 20px;
    line-height: 100%;
    color: var(--white);
  }

  &__close {
    display: flex;
    fill: var(--white);
    transition: fill 0.3s ease;

    &:hover {
      fill: var(--fuchsia-crayola);
    }

    &:focus-visible {
      fill: var(--fuchsia-crayola);
    }

    &:active {
      fill: var(--lavender-blush);
    }
  }
}

.body {
  padding: 10px;
}

.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: 100%;

  &__label {
    display: flex;
    flex-direction: column;
    gap: 5px;

    span {
      font-weight: 400;
      font-size: 16px;
      line-height: 100%;
      color: var(--xiketic);
    }
  }

  &__input {
    padding: 0 5px;
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid var(--sky-magenta);
  }

  &__btn {
    padding: 10px 0;
    border-radius: 5px;
    font-weight: 400;
    font-size: 20px;
    line-height: 100%;
    color: var(--white);
    background-color: var(--sky-magenta);
  }
}

.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  border-top: 1px solid var(--sky-magenta);
  border-radius: 0 0 5px 5px;
  background-color: var(--sky-magenta);

  &__btn {
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    color: var(--white);
  }
}
</style>
