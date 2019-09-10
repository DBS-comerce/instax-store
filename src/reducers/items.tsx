
export const initialState = {
    items: [],
};

type ActionTypeAddItems = {type: string; items: []}
type ActionTypes = ActionTypeAddItems

export default ( state = initialState, action: ActionTypes ) => {
    switch (action.type){
        case 'ADD_ITEMS':
            return {
              ...state,
              items: action.items,
            };

        default:
            return state;
    }
}