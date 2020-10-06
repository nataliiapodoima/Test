import Vue from 'vue'
import Vuex from 'vuex'
import BasketItem from '@/models/BasketItem';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    basket : Array<BasketItem>()

  },
  mutations: {
    increment(state, id: number) {
      const foundInBasket = state.basket.find(x => x.id === id);
      if (!foundInBasket) {
        state.basket.push(new BasketItem(id, 1));
        return; 
      }
      foundInBasket.quantity++; 
     }, 
     decrement(state, id: number) {
      const foundInBasket = state.basket.find(x => x.id === id); 
      if (foundInBasket) {
        if (foundInBasket.quantity != 0) {
          foundInBasket.quantity--;
        }
      }
     }, 
     remove(state, id: number) {
      const foundInBasket = state.basket.find(x => x.id === id);
      let foundBookIndex: number;
      if (foundInBasket) {
        foundBookIndex =  state.basket.indexOf(foundInBasket);
        state.basket.splice(foundBookIndex, 1);
      }      
     }, 
     clean(state) {
       state.basket.splice(0, state.basket.length);
     }

  },
  getters: {
    getTotalQuantity: state => {

      if (!state.basket.length) {
        return 0;
      }
      
      return state.basket.reduce((sum: any, item: any) => {
        return sum + item.quantity;
      }, 0)
    }
  },
  actions: {
    
  },
  modules: {
  }
})
