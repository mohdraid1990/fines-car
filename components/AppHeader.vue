<template>
  <header>
    <div class="toggle-menu" @click="toggleMenu">
      <img src="/public/menu.svg" alt="Menu" />
    </div>
    <nav :class="{ active: isMenuOpen }">
      <a href="/">
        <img src="/public/Loge.svg" alt="Logo" />
      </a>
      <ul>
        <li @click="closeMenu">
          <NuxtLink :to="{ name: 'about' }" exact-active-class="active-link">Тарифы</NuxtLink>
        </li>
        <li @click="closeMenu">
          <NuxtLink :to="{ name: 'Contact' }" exact-active-class="active-link">Контакты</NuxtLink>
        </li>
      </ul>
    </nav>
    <div class="info">
      <a href="tel:+74951184422">+7 495 118-44-22</a>
      <button @click="login">Вход</button>
      <button class="active" @click="register">Регистрация</button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

header {
  width: 100%;
  height: 60px;
  display: flex;
  background-image: linear-gradient(90deg, #000000 30%, #1c2734 73%);
  align-items: center;
  justify-content: space-evenly;
  padding: 0 5px;

  .toggle-menu {
    display: none;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 30px;

    ul {
      display: flex;
      align-items: center;
      gap: 20px;
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        a {
          text-decoration: none;
          color: #ffffff;
          font-family: "PT Sans", sans-serif;
          font-size: 18px;
          font-weight: 400;
          line-height: 23.29px;
          transition: 0.2s all ease;

          &:hover {
            color: #0584fe;
          }
        }
      }
    }
  }

  .info {
    display: flex;
    align-items: center;
    gap: 20px;

    a {
      color: #ffffff;
      font-family: PT Sans;
      font-size: 18px;
      font-weight: 700;
      line-height: 23.29px;
      text-align: left;
    }

    button {
      background: none;
      border: none;
      color: #ffffff;
      cursor: pointer;
      font-family: PT Sans;
      font-size: 18px;
      font-weight: 400;
      line-height: 23.29px;
      text-align: center;
    }

    .active {
      width: 117px;
      height: 37px;
      background-color: #0584fe;
      border: none;
      border-radius: 10px;
      font-family: PT Sans;
      font-size: 15px;
      font-weight: 400;
      line-height: 19.41px;
      text-align: center;
      color: #ffffff;
    }
  }

  @media screen and (max-width: 500px) {
    .info a {
      font-size: 14px;
    }

    .toggle-menu {
      display: block;
      width: 25px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    nav {
      flex-direction: column;
      position: absolute;
      top: 59px;
      left: 0;
      width: 100%;
      background-image: linear-gradient(90deg, #000000 30%, #1c2734 73%);
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
      z-index: 999;

      &.active {
        max-height: 300px;
        padding: 17px;
      }

      ul {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
      }
    }
  }
}

.active-link {
  color: #0584fe !important;
}
</style>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    login() {
      alert("Данные для входа отправлены");
    },
    register() {
      alert("Данные для регистрации отправлены");
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>
