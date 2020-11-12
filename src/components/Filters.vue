<template lang="pug">
  .filters
    .filters__filter.filter(v-for="filter in filters"
      :key="filter.id")(@click="changeFilter((filter.name))")
      .filter__slider.slider(:class="currentFilter[filter.name] ? 'slider, slider--active': 'slider'")
        .slider__dot
      .filter__name {{filter.text}}
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
    filters() {
      return [
        { id: 0, name: 'new', text: 'новинки' },
        { id: 1, name: 'inStock', text: 'в наличии' },
        { id: 2, name: 'contract', text: 'контрактные' },
        { id: 3, name: 'exclusive', text: 'эксклюзивные' },
        { id: 4, name: 'sale', text: 'распродажа' },
      ];
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

    @media (max-width: $bodyMax) {
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
      @media (max-width: $bodyMax) {
        padding-left: 24px;
      }
    }
  }
  .filter {
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
  .slider {
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
</style>
