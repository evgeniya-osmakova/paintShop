<template lang="pug">
  .modal-sorting(v-if="currentState === 'showSort'")
    .modal
      .sorting
        .sorting__item(@click="addSort('Сначала дорогие')")
          .sorting__item__text сначала дорогие
        .sorting__item(@click="addSort('Сначала недорогие')")
          .sorting__item__text сначала недорогие
        .sorting__item
          .sorting__item__text сначала популярные
        .sorting__item
          .sorting__item__text сначала новые

    .modal-overlay(@click="showCatalog")
</template>

<script>
export default {
  name: 'SortWindow',
  computed: {
    currentState() {
      const { currentState } = this.$store.state;
      return currentState;
    },
  },
  methods: {
    addSort(sort) {
      this.$store.commit('addSort', { sort });
    },
    showCatalog() {
      this.$store.commit('showCatalog');
    },
  },
};
</script>

<style scoped lang="scss">

  .modal {
    display: flex;
    top: 0;
    right: 0;
    position: fixed;
    max-width: 100%;
    height: 200px;
    width: 280px;
    z-index: 1010;
  }

  .modal-overlay {
    z-index: 1000;
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.7;
  }

  .sorting {
    position: absolute;
    top: 200px;
    background: #FFFFFF;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    &__item {
      width: 280px;
      cursor: pointer;
      display: flex;
      justify-content: flex-start;

      &__text {
        padding-top: 16px;
        padding-bottom: 16px;
        padding-left: 24px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        font-weight: 500;
        font-size: 12px;
      }

      &:hover {
        background: #7BB899;
      }
    }
  }
</style>
