const initialState = {
    cart: []
}

const cartReducer = (state = initialState, action) => {


    switch (action.type) {
        case 'addProduct/cart':

            const addProductExists = state.cart.find(product => product.id === action.payload.id)

            if (addProductExists){
                const newArray = state.cart.map(product => {
                    if (product.id === action.payload.id) {
                        return {
                            ...product,
                            quantity: product.quantity + 1
                        }
                    }
                    return product
                })
                return {
                    ...state,
                    cart: newArray
                }
            } else {
                return {
                    ...state,
                    cart: [...state.cart, { ...action.payload, quantity: 1 }]
                }
            }
        case 'removeProdut/cart':
            const removeProductExists = state.cart.find(product => product.id === action.payload.id)

            if (removeProductExists) {

                const newArray = state.cart.filter(product => product.id !== action.payload.id)
                
                return {
                    ...state,
                    cart: newArray
                }
            } else {
                return state
            }
        case 'removeOneProduct/cart':
            const removeOneProductExists = state.cart.find(product => product.id === action.payload.id)
            const productQuantityIsEqualOne = removeOneProductExists.quantity === 1

            if (productQuantityIsEqualOne) {
                const newArray = state.cart.filter(product => product.id !== action.payload.id)
                return {
                    ...state,
                    cart: newArray
                }
            }
            if (removeOneProductExists) {
                const newArray = state.cart.map(product => {
                    if (product.id === action.payload.id && product.quantity > 1) {
                        return {
                            ...product,
                            quantity: product.quantity - 1
                        }
                    }
                    return product
                })
                return {
                    ...state,
                    cart: newArray
                }
            }else {
                return state
            }
        default:
            return state;
    }

}


export default cartReducer