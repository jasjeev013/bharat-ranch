import { atom } from "recoil";



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

