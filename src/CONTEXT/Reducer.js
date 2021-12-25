
export const initialState = {
cart:[],
};

const reducer = (state ,action) =>{

    console.log(action)
    switch(action.type){
        case "ADD_TO_CART":
            return{
                ...state,
              cart: [...state.cart,action.item]
            };
            case "REMOVE_FROM_CART":
                const index = state.cart.findIndex(cartitem => cartitem.id === action.id);

                let newCart = [...state.cart];  //holding the new cart state 

                if(index >= 0){
                    newCart.splice(index,1)
                }
                else{
                    console.warn("can't remove item, as cart is empty")
                }
                return {
                    ...state,
                    cart: newCart
                }
            default:
               return state
    }

}

export default reducer
