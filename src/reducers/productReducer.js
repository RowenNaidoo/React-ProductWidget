export default function productReducer(state = [], action){
    switch(action.type) {
        case 'GET_PRODUCT_SUCCESS':
            return [...state,
                Object.assign({}, action.product)
            ];
    
    default:
        return state;
    }
}
