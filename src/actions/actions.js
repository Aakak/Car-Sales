
export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE = 'REMOVE_FEATURE'

export const addItem = (item) => {
    return { type: ADD_ITEM, payload: item }
}

export const removeItem = (feature) => {
    return { type: REMOVE_ITEM, payload: feature }
}