<template lang="pug">
  .filters
    .filters__filter(@click="changeFilter('new')")
      .filter(:class="currentFilter.new ? 'filters__filter__slider--active': 'filters__filter__slider'")
        .filters__filter__slider__dot
      .filters__filter__name новинки
    .filters__filter(@click="changeFilter('inStock')")
      .filter(:class="currentFilter.inStock ? 'filters__filter__slider--active' : 'filters__filter__slider'")
        .filters__filter__slider__dot
      .filters__filter__name есть в наличии
    .filters__filter(@click="changeFilter('contract')")
      .filter(:class="currentFilter.contract ? 'filters__filter__slider--active' : 'filters__filter__slider'")
        .filters__filter__slider__dot
      .filters__filter__name контрактные
    .filters__filter(@click="changeFilter('exclusive')")
      .filter(:class="currentFilter.exclusive ? 'filters__filter__slider--active' : 'filters__filter__slider'")
        .filters__filter__slider__dot
      .filters__filter__name эксклюзивные
    .filters__filter(@click="changeFilter('sale')")
      .filter(:class="currentFilter.sale ? 'filters__filter__slider--active' : 'filters__filter__slider'")
        .filters__filter__slider__dot
      .filters__filter__name распродажа
</template>

<script>

export default {
  name: 'Filters',
  computed: {
    currentState() {
      const { currentState } = this.$store.state;
      return currentState;
    },
    currentFilter() {
      const { currentFilters } = this.$store.state;
      return currentFilters;
    },
  },
  methods: {
    changeFilter(filter) {
      this.$store.commit('changeFilter', { filter });
    },
    showCatalog() {
      this.$store.commit('showCatalog');
    },
  },
};
</script>

<style scoped lang="scss">
@import "../variables.scss";
  .filters {
    display: flex;
    flex-direction: column;
    row-gap: 10px;

    @media (max-width: $mobile) {
      position: absolute;
      top: calc(100vh - 318px);
      height: 318px;
      background: #FFFFFF;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100vw;
      padding-top: 54px;
      border-radius: 40px;
    }

    &__filter {
      display: flex;
      gap: 12px;
      align-items: center;
      cursor: pointer;
      @media (max-width: $mobile) {
        padding-left: 24px;
      }

      &__slider {
        background: #F2F2F2;
        border-radius: 40px;
        padding: 7px 21px 7px 7px;

        &--active {
          background: #7BB899;
          border-radius: 40px;
          padding: 7px 7px 7px 21px;
        }

        &__dot{
          padding: 4px;
          background: black;
          border-radius: 40px;
        }
      }

      &__name {
        display: flex;
        justify-content: flex-start;
        width: 120px;
        text-transform: uppercase;
        font-weight: 400;
        font-size: 12px;
        letter-spacing: 0.06em;
      }
    }
  }
</style>
