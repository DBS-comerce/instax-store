export type ActionTypes = ReturnType<typeof addNewElement>

export const addNewElement = (items: []) => ({
    type: 'ADD_ITEMS',
    items,
});
