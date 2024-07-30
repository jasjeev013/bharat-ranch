import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const {persistAtom } = recoilPersist();

// ------------------------- Login.jsx ---------------------


export const isLoggedIn = atom({
    key: 'isLoggedIn',
    default: false,
    effects_UNSTABLE:[persistAtom]
});

// ------------------------------ Home.jsx --------------------------

export const userDetails = atom({
    key: 'userDetails',
    default: {
        name: '',
        email: '',
        contact: '',
        description: '',
        role:'',
        image:'',
        address: '',
    },
    effects_UNSTABLE:[persistAtom]
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

