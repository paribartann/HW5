import { SHOW_INSTOCK } from '../actions/action_types';

const initialState = {
   inStockOnly: true
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SHOW_INSTOCK:
            console.log(action.payload)
            return Object.assign({}, state, { inStockOnly: action.payload});
                
        default:
            return state
    }
}