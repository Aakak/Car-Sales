
export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'

export const addItem = (item) => {
    console.log(`addItem , ${item}`);
    return { type: ADD_ITEM, payload: item }
}

export const removeItem = (feature) => {
    return { type: REMOVE_ITEM, payload: feature }
}