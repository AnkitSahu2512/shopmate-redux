import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cartList:[],
        total:0
    },
    reducers:{
        add(state,action){            
            const updatedCartList = state.cartList.concat(action.payload);
            const total = state.total + action.payload.price;
            return {...state,total:total,cartList:updatedCartList};
        },
        remove(state,action){
            const updateCart = state.cartList.filter(item => item.id !== action.payload.id);
            const total = state.total - action.payload.price;
            return {...state,total:total, cartList: updateCart}
        }
    }
})

export const {add, remove} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;