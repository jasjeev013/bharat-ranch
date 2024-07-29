import { selector } from 'recoil';
import { categoryState, isLoggedIn } from '../atoms/atoms';
import axios from 'axios';


// -----------------Loading Home.jsx (User)----------------------

export const fetchuserDetails = selector({
  key: 'getuserDetails',
  get: async ({ get }) => {

    const isUserLoggedIn = get(isLoggedIn);
    if (!isUserLoggedIn) return;
    const response = await axios.get('http://localhost:5000/users/get/email', {
      withCredentials: true // This is important to handle cookies
    });
        const data = await response.data;
    return data;
  },
});

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