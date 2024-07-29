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

// ------------------------------ Home.jsx --------------------------

export const userDetails = atom({
    key: 'userDetails',
    default: {
        name: '',
        email: '',
        phone: '',
        contact: '',
        description: '',
        role:'',
        image:'',
        address: '',
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

