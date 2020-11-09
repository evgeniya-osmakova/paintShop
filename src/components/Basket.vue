<template lang="pug">
  .modal-basket(v-if="currentState === 'showBasket'")
    .modal
      .basket
        .upper_block
          .upper_block__header
            .upper_block__header__name Корзина
            .upper_block__header__close_sign(@click="closeBasket")
              img.upper_block__header__close_sign__back(:src="exit", alt="exit")
          .upper_block__info
            .upper_block__info__count {{totalCount}}
            .upper_block__info__clear_btn(@click="clearBasket") очистить список
          .upper_block__goods
            .line(v-for="item in goods" :key="item.id")
              .item
                .item__left_block(:class="item.deleted ? 'item--deleted' : ''")
                  img.item__left_block__photo(:src="item.image" alt="paint photo")
                  .item__left_block__info
                    .item__left_block__info__name {{item.name}}
                    .item__left_block__info__price {{item.price}} ₽
                .item__right_block
                  .item__right_block__count(:class="item.deleted ? 'item--deleted' : ''")
                    .item__right_block__count__sign(@click="deleteItem(item.id)") -
                    .item__right_block__count__number {{item.count}}
                    .item__right_block__count__sign(@click="addItem(item.id)") +
                  .item__right_block__sign
                    img.item__right_block__sign__delete(v-if="!item.deleted"
                      :src="x" alt="delete" @click="deleteAll(item.id, item.count)")
                    img.item__right_block__sign__return(v-if="item.deleted"
                      :src="repeat" alt="return" @click="returnAll(item.id, item.count)")

        .bottom_block
          .bottom_block__total_count
            .bottom_block__total_sum__text Итого
            .bottom_block__total_sum__number {{totalSum}}₽
          .bottom_block__order_btn
            .bottom_block__order_btn__text оформить заказ

    .modal-overlay
</template>

<script>
import plus from '../assets/plus.png';
import x from '../assets/x.png';
import x1 from '../assets/x_1.png';
import repeat from '../assets/repeat.png';
import exit from '../assets/exit.png';

export default {
  name: 'Basket',
  data() {
    return {
      exit, x1, repeat, x, plus,
    };
  },
  computed: {
    currentState() {
      const { currentState } = this.$store.state;
      return currentState;
    },
    totalSum() {
      const { itemsInBasket, catalog } = this.$store.state;
      return itemsInBasket.reduce((acc, { id, count, deleted }) => {
        catalog.forEach(({ id: itemId, price }) => {
          if (id === itemId && !deleted) {
            // eslint-disable-next-line no-param-reassign
            acc += price * count;
          }
        });
        return acc;
      }, 0);
    },
    totalCount() {
      const { countItemsInBasket: count } = this.$store.state;
      if (count === 1 || count === 21 || count === 31
          || count === 41 || count === 51 || count === 61) {
        return `${count} товар`;
      }
      if (count === 0 || (count > 4 && count < 21) || (count > 24 && count < 31)
          || (count > 34 && count < 41) || (count > 44 && count < 51)
          || (count > 54 && count < 61)) {
        return `${count} товаров`;
      }
      if ((count > 1 && count < 5) || (count > 21 && count < 25) || (count > 31 && count < 35)
          || (count > 41 && count < 45) || (count > 51 && count < 55)
          || (count > 61 && count < 65)) {
        return `${count} товара`;
      }
      return `${count} шт`;
    },
    goods() {
      const { itemsInBasket, catalog } = this.$store.state;
      return itemsInBasket.reduce((acc, { id, count, deleted }) => {
        catalog.forEach(({
          id: itemId, image, name, price,
        }) => {
          if (id === itemId) {
            acc.push({
              id, image, name, price, count, deleted,
            });
          }
        });
        return acc;
      }, []);
    },
  },
  methods: {
    clearBasket() {
      this.$store.commit('clearBasket');
    },
    deleteItem(id) {
      this.$store.commit('deleteItem', { id });
    },
    addItem(id) {
      this.$store.commit('addItem', { id });
    },
    deleteAll(id, count) {
      this.$store.commit('deleteAll', { id, count });
    },
    returnAll(id, count) {
      this.$store.commit('returnAll', { id, count });
    },
    closeBasket(id) {
      this.$store.commit('closeBasket', { id });
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
    width: 600px;
    max-width: 100%;
    height: 100vh;
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

  .basket {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .upper_block {
    margin: 30px;
    padding-top: 32px;
    display: flex;
    flex-direction: column;

    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 80px;

      &__name {
        font-weight: 500;
        font-size: 30px;
        letter-spacing: -0.04em;
      }

      &__close_sign {
        display: flex;
        cursor: pointer;

        &____back {
          position: relative;
        }

        &____front {
          position: absolute;
          left: 24px;
        }
      }
    }

    &__info {
      display: flex;
      align-items: center;
      justify-content: space-between;

      &__count {
        font-size: 14px;
        font-weight: 400;
      }

      &__clear_btn {
        cursor: pointer;
        opacity: 0.4;
        font-weight: 300;
        font-size: 14px;
      }
    }

    &__goods {
      display: flex;
      flex-direction: column;
    }
  }

  .line {
    margin-top: 10px;
    border-top: 1px solid lightgray;
  }

  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;

    &--deleted {
      opacity: 0.2;
    }

    &__left_block {
      display: flex;
      align-items: center;
      justify-content: flex-start;

      &__photo {
        height: 96px;
        width: 96px;
      }

      &__info {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        &__name {
          font-weight: 300;
          font-size: 16px;
          letter-spacing: 0.02em;
        }

        &__price {
          font-weight: 600;
          font-size: 16px;
        }
      }
    }

    &__right_block {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      column-gap: 43px;

      &__count {
        display: flex;
        column-gap: 20px;
        align-items: center;

        &__sign {
          cursor: pointer;
          background: #F2F2F2;
          border-radius: 4px;
          padding: 12px 15px;
        }

        &__number {
          cursor: pointer;
          font-weight: 400;
          font-size: 16px;
        }
      }

      &__sign {
        align-items: center;
        cursor: pointer;

        &__delete {}

        &__return {
          opacity: 1;
        }
      }
    }
  }

  .bottom_block {
    margin: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__total_sum {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      &__text {
        font-weight: 400;
        font-size: 16px;
      }

      &__number {
        font-weight: 500;
        font-size: 30px;
        letter-spacing: -0.02em;
      }
    }

    &__order_btn {
      padding: 20px 57px;
      background: #7BB899;
      border-radius: 4px;

      &__text {
        letter-spacing: 0.06em;
        text-transform: uppercase;
        font-weight: 500;
        font-size: 12px;
        text-align: center;
      }
    }
  }

</style>