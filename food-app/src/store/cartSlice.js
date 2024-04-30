import {createSlice} from '@reduxjs/toolkit';

import { toast } from 'react-toastify';

const initialState={
      cartItems: localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")):[],
        cartTotalQuantity:0,
        cartTotalAmount:0
}


const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{

        addItem:(state,action)=>{
            // mutating the state here
            const itemIndex=state.cartItems.findIndex( item => item.id===action.payload.id)

            if(itemIndex >= 0){
                // incrementing cartItem
                state.cartItems[itemIndex].cartQuantity+=1
                // cart popup
                toast.info(`${state.cartItems[itemIndex].name} is added again to cart`,{
                    position:"top-center"
                })
            }else{
                // adding items to the cart
                 const tempItem={...action.payload,cartQuantity:1}
            state.cartItems.push(tempItem)
            // popup
            toast.success(`${action.payload.name} is added to cart`,{
                position:"top-center"
            })
            }
            // storing in cartItems in localstorage
           localStorage.setItem('cartItems',JSON.stringify(state.cartItems))
        },

        removeItem:(state,action)=>{
            // removing (filtering) items from the cart
           const nextCartItems= state.cartItems.filter( item => item.id !== action.payload.id)

           state.cartItems=nextCartItems
        //    updating localstorage
           localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
            
            //  popup
           toast.error(`${action.payload.name} is removed from cart`,{
            position:"top-center"
           })
        },

        decreaseItem:(state,action)=>{
            const itemIndex=state.cartItems.findIndex( item => item.id===action.payload.id)

            if(state.cartItems[itemIndex].cartQuantity>1){
                state.cartItems[itemIndex].cartQuantity-=1
            }
            else if(state.cartItems[itemIndex].cartQuantity ===1){
                const nextCartItems= state.cartItems.filter( item => item.id !== action.payload.id)
                state.cartItems=nextCartItems
                localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
                      //  popup
                toast.error(`${action.payload.name} is removed from cart`,{
                position:"top-center"
                })
            }

        },

        clearCart:(state,action)=>{
            state.cartItems=[]

            toast("your cart is empty now",{
                position:"top-center"
            })

            localStorage.setItem("cartItems",JSON.stringify(state.cartItems))
        },

        getTotal:(state,action)=>{
            let{total,quantity}=state.cartItems.reduce((cartTotal,cartItem)=>{

                const{ price,defaultPrice,cartQuantity}=cartItem
                const itemTotal=(price || defaultPrice)*cartQuantity

                cartTotal.total+=itemTotal
                cartTotal.quantity+=cartQuantity

                return cartTotal

            },{
                total:0,
                quantity:0
            })

            state.cartTotalAmount=total
            state.cartTotalQuantity=quantity
            
        }


       
    }
});

export const {addItem,removeItem,decreaseItem,clearCart,getTotal}=cartSlice.actions;
export default cartSlice.reducer;