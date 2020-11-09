<template lang="pug">
  .main
    .show_filters
      Filters
    .show_modal_filters
      ModalFilters
    .goods
      .goods__header
        .goods__header__count 412 товаров
        .goods__header__filters(@click="showFilters()") фильтры
        .goods__header__sort(@click="showSort()")
          .goods__header__sort__text {{currentSort}}
          img.goods__header__sort__img(:src="showMore" alt="show more")

      .goods__list
        .goods__list__item(v-for="item in goods"
          :key="item.id" @mouseover="item.selected = true" @mouseleave="item.selected = false")
          .goods__list__item__img
            img(v-if="!item.selected" :src="item.image" alt="paint photo")
            img(v-if="item.selected" :src="hover" alt="paint photo")
          .goods__list__item__name {{item.name}}
          .goods__list__item__footer
            .goods__list__item__footer__price {{item.price}} ₽
            .goods__list__item__footer__add_sign(v-if="item.selected" @click="addToBasket(item.id)")
              .sign
                img(:src="plus", alt="add")
            .goods__list__item__footer__mobile(@click="addToBasket(item.id)") +
</template>

<script>
import hover from '../assets/hover.png';
import plus from '../assets/plus.png';
import showMore from '../assets/showMore.png';
import Filters from './Filters.vue';
import ModalFilters from './ModalFilters.vue';

export default {
  name: 'Main',
  components: {
    ModalFilters,
    Filters,
  },
  data() {
    return { hover, plus, showMore };
  },
  computed: {
    currentState() {
      const { currentState } = this.$store.state;
      return currentState;
    },
    currentSort() {
      const { currentSort } = this.$store.state;
      return currentSort || 'Сначала дорогие';
    },
    goods() {
      const { currentFilters, currentSort, catalog } = this.$store.state;
      const filtersNames = Object.keys(currentFilters);
      const activeFilters = filtersNames.filter(
        (filterName) => currentFilters[filterName] === true,
      );
      const filteredCatalog = catalog.filter((item) => {
        if (activeFilters.length > 0) {
          return activeFilters.every(
            (filterName) => currentFilters[filterName] === item[filterName],
          );
        }
        return true;
      });
      if (currentSort) {
        return (currentSort === 'Сначала недорогие')
          ? filteredCatalog.sort((a, b) => (a.price > b.price ? 1 : -1))
          : filteredCatalog.sort((a, b) => (a.price < b.price ? 1 : -1));
      }
      return filteredCatalog;
    },
  },
  methods: {
    addToBasket(newId) {
      this.$store.commit('addToBasket', { newId });
    },
    showSort() {
      this.$store.commit('showSort');
    },
    showFilters() {
      this.$store.commit('showFilters');
    },
  },
};
</script>

<style scoped lang="scss">
@import "../variables.scss";
  .main {
    overflow-x: hidden;
    grid-area: main_block;
    display: flex;
    gap: 120px;
    padding-top: 72px;
    padding-left: 64px;
    @media (max-width: $mobile) {
      padding: 0;
      margin: 0;
      width: 100vw;
      gap: 0;
      overflow-x: hidden;
    }
  }

  .show_filters {
    @media (max-width: $mobile) {
      display: none;
    }
  }

  .show_modal_filters {
    @media (min-width: $mobile + 1px) {
      display: none;
      width: 100vw;
    }
  }

  .goods {
    width: 70vw;
    display: flex;
    flex-direction: column;
    gap: 44px;
    @media (max-width: $mobile) {
      padding-left: 24px;
      width: 100vw;
      overflow-x: hidden;
    }

    &__header {
      padding-left: 24px;
      padding-right: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      @media (max-width: $mobile) {
        padding-right: 24px;
      }

      &__count {
        font-weight: 500;
        font-size: 12px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        @media (max-width: $mobile) {
          display: none;
        }
      }

      &__filters {
        letter-spacing: 0.06em;
        text-transform: uppercase;
        font-weight: 500;
        font-size: 12px;
        cursor: pointer;
        @media (min-width: $mobile + 1px) {
          display: none;
        }
      }

      &__sort {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px;

        &__text {
          font-weight: 500;
          font-size: 12px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
      }
    }

    &__list {
      display: flex;
      flex-wrap: wrap;
      row-gap: 55px;
      column-gap: 24px;
      padding-bottom: 147px;

      &__item {
        padding-left: 24px;
        display: flex;
        flex-direction: column;
        column-gap: 16px;
        border-bottom: 1px solid lightgray;

        &__img {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 278px;
          width: 278px;
          padding-bottom: 16px;
        }

        &__name {
          font-weight: 300;
          font-size: 16px;
          letter-spacing: 0.02em;
          width: 278px;
          padding-bottom: 24px;
          text-align: left;
        }

        &__footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 110px;

          &__price {
            font-weight: 600;
            font-size: 16px;
          }

          &__add_sign {
            background: #7BB899;
            border-radius: 8px;
            padding: 10px 34px;
            cursor: pointer;
            &:active {
              box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
            }
            @media (max-width: $mobile) {
              display: none;
            }
          }

          &__mobile {
            cursor: pointer;
            background: #F2F2F2;
            border-radius: 6px;
            padding: 7px 20px;
            font-weight: bolder;
            @media (min-width: $mobile + 1px) {
              display: none;
            }
            &:active {
              box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
            }
          }
        }
      }
    }
  }

  .sign {
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>
