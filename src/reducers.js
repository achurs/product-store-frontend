import { ADD_TO_CART } from "./actions";
const initialState = {
    cart: {},
};
const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            const newCart = { ...state.cart };
            const product = action.payload;
            if(newCart[product.name]){
                newCart[product.name].quantity++;
            }else{
                newCart[product.name]={
                    ...product,
                    quantity: 1,
                };
            }
            return {
                ...state,
                cart: newCart,
            };
        default: return state;
    }
};
export default cartReducer;