<template lang="pug">
  .upper_block
    .breadcrumbs
      a.breadcrumbs__item главная
      img.breadcrumbs__separator(:src="ellipse", alt="separator")
      a.breadcrumbs__item продукты
      img.breadcrumbs__separator(:src="ellipse", alt="separator")
      a.breadcrumbs__item краски

    section.carousel(:class="currentSlide")
      .carousel__arrow_left
        .carousel__arrow__img
          img.carousel__arrow_left__img(
            :src="arrow", alt="arrow left")(@click="changeSlide('previous')")

      .carousel__center_area
        .title
          .title__header {{title}}
          .title__description {{text}}
        .slider
          .slider__dots(v-for="item in slides" :key="item.id")
            img.slider__dots__item(:src="ellipse", alt="dot"
              :class="currentSlideID === item.id ? 'slider__dots__item--active': 'slider__dots__item'",
              @click="showSlide(item.id)")

      .carousel__arrow_right
        img.carousel__arrow__img(:src="arrow", alt="arrow right")(@click="changeSlide('next')")
</template>

<script>
import ellipse from '../assets/ellipse.png';
import arrow from '../assets/arrow.png';
import background from './background.png';

export default {
  name: 'Carousel',
  data() {
    return { ellipse, arrow, background };
  },
  computed: {
    currentSlide() {
      const { activeSlideIndex } = this.$store.state;
      return `slide${activeSlideIndex}`;
    },
    slides() {
      const { slides } = this.$store.state;
      return slides;
    },
    title() {
      const { slides, activeSlideIndex } = this.$store.state;
      return slides[activeSlideIndex].title;
    },
    text() {
      const { slides, activeSlideIndex } = this.$store.state;
      return slides[activeSlideIndex].text;
    },
    currentSlideID() {
      const { activeSlideIndex } = this.$store.state;
      return activeSlideIndex;
    },
  },
  methods: {
    changeSlide(direction) {
      this.$store.commit('changeSlide', { direction });
    },
    showSlide(id) {
      this.$store.commit('showSlide', { id });
    },
  },
};
</script>

<style scoped lang="scss">
@import "../variables.scss";
.upper_block {
  grid-area: upper_block;
  padding: 0;
  margin: 0;
  width: 100vw;
}

.breadcrumbs {
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-top: 32px;
  padding-left: 64px;
  gap: 8px;

  @media (max-width: $mobile) {
    padding-top: 16px;
    padding-left: 24px;
  }

  &__item {
    font-size: 10px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    opacity: 0.3;
    color: #FFFFFF;
    text-decoration: none;
    @media (max-width: $mobile) {
      color: #1F2020;
    }
  }

  &__separator {
    background: #C4C4C4;
    opacity: 0.3;
    width: 3px;
    height: 3px;
    border-radius: 16px;
    @media (max-width: $mobile) {
      opacity: 1;
    }
  }
}

.carousel {
  @media (max-width: $mobile) {
    display: none;
  }
  z-index: 1;
  position: absolute;
  top: 104px;
  height: 560px;
  min-height: 560px;
  overflow-x: hidden;
  width: 100vw;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  display: flex;
  column-gap: 20px;
  align-items: center;
  justify-content: space-around;

  &__arrow_left {
    padding-left: 420px;
    padding-top: 250px;

    &__img {
      transform: scale(-1, 1);
    }
  }

  &__arrow__img {
    cursor: pointer;
    color: #FFFFFF;
    height: 40px;
  }

  &__center_area {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 130px;
    padding-top: 200px;
  }

  &__arrow_right {
    padding-right: 420px;
    padding-top: 250px;
  }
}

.slide0 {
  background: url(background.png) no-repeat scroll center;
}

.slide1 {
  background: url(background5.jpg) no-repeat scroll center;
}

.slide2 {
  background: url(background7.jpg) no-repeat scroll center;
}

.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 24px;
  color: #FFFFFF;
  max-width: 472px;
  min-width: 250px;

  &__header {
    font-size: 72px;
    letter-spacing: -0.02em;
  }

  &__description {
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 0.02em;
  }
}

.slider{
  opacity: 0.4;
  background: black;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 13px 24px;
  gap: 8px;

  &__dots {
    display: flex;
    align-items: center;
    justify-content: center;

    &__item {
      width: 6px;
      height: 6px;
      background: #FFFFFF;
      opacity: 0.2;
      border-radius: 16px;
      cursor: pointer;

      &--active {
        color: #FFFFFF;
        opacity: 1;
      }
    }
  }
}
</style>
