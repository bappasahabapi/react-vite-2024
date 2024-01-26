/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */

const initialState ={
    cartData:[]
}
const cartReducer =(state,action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            return{
                cartData:[
                    ...state.cartData, // take everthing fromm cartData
                    action.payload  

                ]
            }
            break;

            
            
        case 'REMOVE_FROM_CART':
            // const filteredItems = cartData.filter((item) => {
            //     return item.id !== itemId;
            //   });
          
            //   setCartData([...filteredItems]);
            return{
                ...state,
                cartData: state.cartData.filter((item)=>item.id !==action.payload.id)
            }
            break;
        default:
            return state;
    }
}

export {initialState, cartReducer}