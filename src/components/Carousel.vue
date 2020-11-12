<template lang="pug">
  .upper_block
    .breadcrumbs
      a.breadcrumbs__item главная
      img.breadcrumbs__separator(:src="ellipse", alt="separator")
      a.breadcrumbs__item продукты
      img.breadcrumbs__separator(:src="ellipse", alt="separator")
      a.breadcrumbs__item краски

    section.carousel(:class="currentSlide")
      .carousel__arrow-left
        img.arrow-img.arrow-left__img(
            :src="arrow", alt="arrow left")(@click="changeSlide('previous')")

      .carousel__center-area
        .title
          .title__header {{slides[activeSlideIndex].title}}
          .title__description {{slides[activeSlideIndex].text}}
        .slider
          .slider__dots(v-for="item in slides" :key="item.id")
            img.dots-item(:src="ellipse", alt="dot"
              :class="activeSlideIndex === item.id ? 'dots-item, dots-item--active': 'dots-item'",
              @click="showSlide(item.id)")

      .carousel__arrow-right
        img.arrow-img(:src="arrow", alt="arrow right")(@click="changeSlide('next')")
</template>

<script>
import ellipse from '../assets/ellipse.png';
import arrow from '../assets/arrow.png';
import background from './background.png';

export default {
  name: 'Carousel',
  data() {
    return {
      ellipse,
      arrow,
      background,
      activeSlideIndex: 0,
      slides: [
        {
          id: 0,
          title: 'Краски',
          text: 'Идеально подходят для стен и других поверхностей. Найди свой идеальный цвет!',
        },
        {
          id: 1,
          title: 'Покупайте',
          text: 'У нас лучшие цены, только проверенные временем производители',
        },
        {
          id: 2,
          title: 'Выгодно',
          text: 'Скидки для постоянных покупателей, акции и распродажи',
        },
      ],
    };
  },
  computed: {
    currentSlide() {
      return `slide${this.activeSlideIndex}`;
    },
  },
  methods: {
    changeSlide(direction) {
      if (direction === 'next') {
        if (this.activeSlideIndex === this.slides.length - 1) {
          this.activeSlideIndex = 0;
        } else {
          this.activeSlideIndex += 1;
        }
      } else if (this.activeSlideIndex === 0) {
        this.activeSlideIndex = this.slides.length - 1;
      } else {
        this.activeSlideIndex -= 1;
      }
    },
    showSlide(id) {
      this.activeSlideIndex = id;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../variables.scss";
.upper_block {
  max-width: 1920px;
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

  @media (max-width: $carouselMax) {
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
    @media (max-width: $carouselMax) {
      color: #1F2020;
    }
  }

  &__separator {
    background: #C4C4C4;
    opacity: 0.3;
    width: 3px;
    height: 3px;
    border-radius: 16px;
    @media (max-width: $carouselMax) {
      opacity: 1;
    }
  }
}

.carousel {
  max-width: 1920px;
  @media (max-width: $carouselMax) {
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

  &__arrow-left {
    padding-left: 420px;
    padding-top: 250px;
  }

  &__center-area {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 130px;
    padding-top: 200px;
    width: 400px;
    min-width: 400px;
  }

  &__arrow-right {
    padding-right: 420px;
    padding-top: 250px;
  }
}

.arrow-img {
  cursor: pointer;
  color: #FFFFFF;
  height: 40px;
}

.arrow-left__img {
  transform: scale(-1, 1);
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
  }
}
.dots-item {
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
</style>
