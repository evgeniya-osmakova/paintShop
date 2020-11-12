<template lang="pug">
  .modal-filters(v-if="currentState === 'showFilters'")
    .modal
      Filters
    .modal-overlay(@click="showCatalog")
</template>

<script>

import Filters from './Filters.vue';

export default {
  name: 'ModalFilters',
  components: {
    Filters,
  },
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

.modal {
  @media (max-width: $bodyMax) {
    display: flex;
    top: 0;
    right: 0;
    position: fixed;
    width: 100vw;
    z-index: 1010;
  }
}

.modal-overlay {
  @media (max-width: $bodyMax) {
    z-index: 1000;
    position: fixed;
    top:0;
    left:0;
    width: 100vw;
    height: 100vh;
    background: black;
    opacity: 0.7;
  }
}
</style>
