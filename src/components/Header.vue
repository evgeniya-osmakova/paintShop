<template lang="pug">

  header.header
    .header__group
      .header__group__mobile
        img(:src="burger", alt="profile")
      .header__group__logo
        img(:src="logo", alt="profile")
      nav.header__group__navbar
        a.header__group__navbar__item продукты
        a.header__group__navbar__item цвета
        a.header__group__navbar__item вдохновение
        a.header__group__navbar__item советы
        a.header__group__navbar__item найти магазин

    .header__group
      .header__group__tel
        .header__group__tel__num +7 (495) 221-77-69
        a.header__group__tel__text Заказать звонок
      .header__group__info
        .header__group__info__icon
          a
            img(:src="search", alt="search")
        .header__group__info__icon
          a
            img(:src="profile", alt="profile")
        .header__group__info__icon
          a
            img(:src="heart", alt="favorite")
        .header__group__info__inBasket(@click="showBasket")
          a.header__group__info__inBasket__count {{ inBasket }}
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
  overflow-x: hidden;
  grid-area: header;
  height: 104px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: $mobile) {
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
    @media (max-width: $mobile) {
      padding-left: 0;
    }

    &__mobile {
      display: none;
      @media (max-width: $mobile) {
        padding-left: 24px;
        display: flex;
      }
    }

    &__navbar {
      display: flex;
      align-items: center;
      gap: 24px;
      font-weight: 400;
      font-size: 14px;

      &__item {
        text-transform: uppercase;
        text-decoration: none;
        color: black;
      }

      @media (max-width: $mobile) {
        display: none;
      }
    }

    &__tel {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      letter-spacing: -0.02em;

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
      @media (max-width: $mobile) {
        display: none;
      }
    }

    &__info {
      display: flex;
      align-items: center;
      gap: 25px;
      padding-right: 40px;
      @media (max-width: $mobile) {
        padding-right: 24px;
      }

      &__icon {
        @media (max-width: $mobile) {
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
          box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
        }

        &__count {
          font-weight: 500;
          font-size: 12px;
          letter-spacing: 0.06em;
          text-decoration: none;
          color: black;
        }
      }
    }

  }
}
</style>
