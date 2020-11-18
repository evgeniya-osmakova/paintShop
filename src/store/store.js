import Vuex from 'vuex';
import Vue from 'vue';
import Photo0 from '../assets/Photo0.png';
import Photo1 from '../assets/Photo1.png';
import Photo2 from '../assets/Photo2.png';
import Photo3 from '../assets/Photo3.png';
import Photo4 from '../assets/Photo4.png';
import Photo5 from '../assets/Photo5.png';
import Photo6 from '../assets/Photo6.png';
import Photo7 from '../assets/Photo7.png';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentState: 'showCatalog',
    currentFilters: {
      new: false,
      inStock: false,
      contract: false,
      exclusive: false,
      sale: false,
    },
    currentSort: '',
    countItemsInBasket: 0,
    itemsInBasket: [],
    catalog: [
      {
        id: 0,
        image: Photo7,
        name: 'Краска Wallquest, Brownsone MS90100',
        price: 6000,
        new: true,
        inStock: false,
        contract: true,
        exclusive: true,
        sale: false,
        popular: false,
        selected: false,
      },
      {
        id: 1,
        image: Photo0,
        name: 'Краска Wallquest, Brownsone MS90101',
        price: 4800,
        new: false,
        inStock: false,
        contract: true,
        exclusive: false,
        sale: false,
        popular: false,
        selected: false,
      },
      {
        id: 2,
        image: Photo1,
        name: 'Краска Wallquest, Brownsone MS90102',
        price: 5290,
        new: false,
        inStock: false,
        contract: true,
        exclusive: true,
        sale: false,
        popular: true,
        selected: false,
      },
      {
        id: 3,
        image: Photo2,
        name: 'Краска Wallquest, Brownsone MS90103',
        price: 2800,
        new: true,
        inStock: false,
        contract: false,
        exclusive: true,
        sale: true,
        popular: true,
        selected: false,
      },
      {
        id: 4,
        image: Photo3,
        name: 'Краска Wallquest, Brownsone MS90104',
        price: 3400,
        new: true,
        inStock: true,
        contract: true,
        exclusive: true,
        sale: false,
        popular: false,
        selected: false,
      },
      {
        id: 5,
        image: Photo4,
        name: 'Краска Wallquest, Brownsone MS90100',
        price: 6000,
        new: true,
        inStock: false,
        contract: true,
        exclusive: true,
        sale: false,
        popular: false,
        selected: false,
      },
      {
        id: 6,
        image: Photo5,
        name: 'Краска Wallquest, Brownsone MS90101',
        price: 4800,
        new: false,
        inStock: false,
        contract: true,
        exclusive: false,
        sale: false,
        popular: false,
        selected: false,
      },
      {
        id: 7,
        image: Photo6,
        name: 'Краска Wallquest, Brownsone MS90102',
        price: 5290,
        new: false,
        inStock: false,
        contract: true,
        exclusive: true,
        sale: false,
        popular: true,
        selected: false,
      },
      {
        id: 8,
        image: Photo7,
        name: 'Краска Wallquest, Brownsone MS90103',
        price: 2800,
        new: true,
        inStock: false,
        contract: false,
        exclusive: true,
        sale: true,
        popular: true,
        selected: false,
      },
      {
        id: 9,
        image: Photo0,
        name: 'Краска Wallquest, Brownsone MS90104',
        price: 3400,
        new: true,
        inStock: true,
        contract: true,
        exclusive: true,
        sale: false,
        popular: false,
        selected: false,
      },
      {
        id: 10,
        image: Photo1,
        name: 'Краска Wallquest, Brownsone MS90100',
        price: 6000,
        new: true,
        inStock: false,
        contract: true,
        exclusive: true,
        sale: false,
        popular: false,
        selected: false,
      },
      {
        id: 11,
        image: Photo2,
        name: 'Краска Wallquest, Brownsone MS90101',
        price: 4800,
        new: false,
        inStock: false,
        contract: true,
        exclusive: false,
        sale: false,
        popular: false,
        selected: false,
      },
      {
        id: 12,
        image: Photo3,
        name: 'Краска Wallquest, Brownsone MS90102',
        price: 5290,
        new: false,
        inStock: false,
        contract: true,
        exclusive: true,
        sale: false,
        popular: true,
        selected: false,
      },
      {
        id: 13,
        image: Photo4,
        name: 'Краска Wallquest, Brownsone MS90103',
        price: 2800,
        new: true,
        inStock: false,
        contract: false,
        exclusive: true,
        sale: true,
        popular: true,
        selected: false,
      },
      {
        id: 14,
        image: Photo5,
        name: 'Краска Wallquest, Brownsone MS90104',
        price: 3400,
        new: true,
        inStock: true,
        contract: true,
        exclusive: true,
        sale: false,
        popular: false,
        selected: false,
      },
    ],
  },
  mutations: {
    addToBasket: (state, payload) => {
      state.countItemsInBasket += 1;
      const { newId } = payload;
      const { itemsInBasket } = state;
      let idExist = false;
      itemsInBasket.forEach((item) => {
        if (item.id === newId) {
          // eslint-disable-next-line no-param-reassign
          item.count += 1;
          idExist = true;
        }
      });
      if (!idExist) {
        itemsInBasket.push({
          id: newId,
          count: 1,
          deleted: false,
        });
      }
    },
    changeFilter: (state, payload) => {
      const { filter } = payload;
      state.currentFilters[filter] = !state.currentFilters[filter];
    },
    clearBasket: (state) => {
      state.countItemsInBasket = 0;
      state.itemsInBasket = [];
    },
    deleteItem: (state, { id: deletedId }) => {
      state.itemsInBasket = state.itemsInBasket.reduce((acc, item) => {
        if (deletedId === item.id) {
          if (item.count > 1) {
            acc.push({ ...item, count: item.count - 1 });
            state.countItemsInBasket -= 1;
            return acc;
          }
          acc.push({ ...item, count: 0, deleted: true });
          return acc;
        }
        acc.push(item);
        return acc;
      }, []);
    },
    addItem: (state, { id: addedId }) => {
      state.itemsInBasket = state.itemsInBasket.reduce((acc, item) => {
        if (addedId === item.id) {
          acc.push({ ...item, count: item.count + 1 });
          state.countItemsInBasket += 1;
          return acc;
        }
        acc.push(item);
        return acc;
      }, []);
    },
    deleteAll: (state, { id: deletedId, count }) => {
      state.countItemsInBasket -= count;
      state.itemsInBasket = state.itemsInBasket.reduce((acc, item) => {
        if (deletedId === item.id) {
          acc.push({ ...item, deleted: true });
          return acc;
        }
        acc.push(item);
        return acc;
      }, []);
    },
    returnAll: (state, { id: deletedId, count }) => {
      state.countItemsInBasket += count;
      state.itemsInBasket = state.itemsInBasket.reduce((acc, item) => {
        if (deletedId === item.id) {
          acc.push({ ...item, deleted: false });
          return acc;
        }
        acc.push(item);
        return acc;
      }, []);
    },
    closeBasket: (state) => {
      state.itemsInBasket = state.itemsInBasket.reduce((acc, item) => {
        if (item.deleted) {
          return acc;
        }
        acc.push(item);
        return acc;
      }, []);
      state.countItemsInBasket = state.itemsInBasket.reduce((acc, { count }) => acc + count, 0);
      state.currentState = 'showCatalog';
    },
    showCatalog: (state) => {
      state.currentState = 'showCatalog';
    },
    addSort: (state, payload) => {
      const { sort } = payload;
      state.currentSort = sort;
      state.currentState = 'showCatalog';
    },
    showSort: (state) => {
      state.currentState = 'showSort';
    },
    showFilters: (state) => {
      state.currentState = 'showFilters';
    },
    showBasket: (state) => {
      state.currentState = 'showBasket';
    },
  },
});
