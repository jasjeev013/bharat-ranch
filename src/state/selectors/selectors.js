import { selector } from 'recoil';
import { categoryState } from '../atoms/atoms';



// -----------------Loading Categories.jsx----------------------

export const fetchCategories = selector({
  key: 'fetchCategories',
  get: async ({ get }) => {
    const response = await fetch('http://localhost:5000/commodities/categories/find');
    const data = await response.json();
    return data;
  },
});

// ---------------------Setting Category & Loading Each Category's Commodities --------------------

export const fetchCategory = selector({
  key: 'fetchCategory',
  get: async ({ get }) => {
    const category = get(categoryState);
    let data = [];
    try {
      if (category) {
        const response = await fetch(`http://localhost:5000/commodities/category/find?category=${category}`);
        data = await response.json();
      }
      return data;

    } catch (error) {
      return { error }
    }
  },
  set: ({set},category) =>{
    set(categoryState,category);
  }
});