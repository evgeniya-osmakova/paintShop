<template lang="pug">
  .mobile_header Краски
</template>

<script>
export default {
  name: 'MobileTitle',
};
</script>

<style scoped lang="scss">
@import "../variables.scss";

  .mobile_header {
    display: none;
    @media (max-width: $carouselMax) {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-weight: 400;
      font-size: 36px;
      letter-spacing: -0.04em;
      padding-left: 24px;
    }
  }

</style>
