<template lang="pug">

  header.header
    .header__group.header-left
      .header-left__mobile
        img(:src="burger", alt="profile")
      .header-left__logo
        img(:src="logo", alt="profile")
      nav.header-left__navbar.header-navbar
        a.header-navbar__item продукты
        a.header-navbar__item цвета
        a.header-navbar__item вдохновение
        a.header-navbar__item советы
        a.header-navbar__item найти магазин

    .header__group.header-right
      .header-right__tel.header-tel
        .header-tel__num +7 (495) 221-77-69
        a.header-tel__text Заказать звонок
      .header-right__info.header-info
        .header-info__icon
          a
            img(:src="search", alt="search")
        .header-info__icon
          a
            img(:src="profile", alt="profile")
        .header-info__icon
          a
            img(:src="heart", alt="favorite")
        .header-info__inBasket.header-basket(@click="showBasket")
          a.header-basket__count {{ inBasket }}
</template>

<script>
import logo from '../assets/logo.png';
import search from '../assets/search.png';
import profile from '../assets/profile.png';
import heart from '../assets/heart.png';
import burger from '../assets/burger.png';

export default {
  name: 'Header',
  data() {
    return {
      logo,
      search,
      profile,
      heart,
      burger,
    };
  },
  computed: {
    inBasket() {
      return this.$store.state.countItemsInBasket;
    },
  },
  methods: {
    showBasket() {
      this.$store.commit('showBasket');
    },
  },
};
</script>

<style scoped lang="scss">
  @import "../variables.scss";
  .header {
    max-width: 1920px;
    overflow-x: hidden;
    grid-area: header;
    height: 104px;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: $headerMax) {
      padding: 0;
      margin: 0;
      border-bottom: 1px solid lightgray;
      width: 100vw;
    }

    &__group {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 40px;
      padding-left: 64px;
      @media (max-width: $headerMax) {
        padding-left: 0;
      }
    }
  }
  .header-left {
    &__mobile {
      display: none;
      @media (max-width: $headerMax) {
        padding-left: 24px;
        padding-right: 5px;
        display: flex;
      }
    }

    &__navbar {
      display: flex;
      align-items: center;
      gap: 24px;
      font-weight: 400;
      font-size: 14px;
    }
  }

  .header-navbar{
    &__item {
      text-transform: uppercase;
      text-decoration: none;
      color: black;
    }

    @media (max-width: $headerMax) {
      display: none;
    }
  }
  .header-right {
    &__tel {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      letter-spacing: -0.02em;
    }

    &__info {
      display: flex;
      align-items: center;
      gap: 25px;
      padding-right: 40px;
      @media (max-width: $headerMax) {
        padding-right: 24px;
      }
    }
  }
  .header-tel {
    &__num {
      font-size: 16px;
      font-weight: bold;
    }

    &__text {
      font-weight: 400;
      font-size: 14px;
      opacity: 0.3;
      text-decoration: none;
      color: black;
    }
    @media (max-width: $headerMax) {
      display: none;
    }
  }
  .header-info {
    &__icon {
      @media (max-width: $headerMax) {
        display: none;
      }
    }

    &__inBasket {
      background: #7BB899;
      border-radius: 50%;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
      }
    }
  }
  .header-basket {
    &__count {
      font-weight: 500;
      font-size: 12px;
      letter-spacing: 0.06em;
      text-decoration: none;
      color: black;
    }
  }

</style>
