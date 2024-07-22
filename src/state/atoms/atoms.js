import { atom } from "recoil";

// ------------------------- Login.jsx ---------------------


export const userState = atom({
    key: 'userState',
    default: {
        isLoggedIn: false,
        email: '',
        role: '',
    },
});


// -----------------Loading Categories.jsx----------------------

export const categoriesState = atom({
    key: 'categoriesState',
    default: [],
})

// --------------------- Loading Each Category's Commodities --------------------

export const categoryState = atom({
    key: 'categoryState',
    default: '',
})
export const categoryCommoditiesState = atom({
    key: 'categoryCommoditiesState',
    default: [],
})

