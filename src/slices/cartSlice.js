import { createSlice } from "@reduxjs/toolkit";
// import cartItems from "../cartItems";
import axios from "axios";

const initialState = {
    cartItems: [], 
    amount: 1,
    total: 0,
    isLoading: true,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems  = []
        },
        setCart: (state, action) => {
            state.cartItems = action.payload
            // console.log("setting", state.cartItems)
        },
        removeItem: (state, action) => {
            console.log("Action", action)
            const itemId = action.payload
            state.cartItems = state.cartItems.filter(item => item._id !== itemId)
        },
        increase: (state, {payload}) => {
            const itemId = payload
            const cartItem = state.cartItems.find(item => item._id === itemId) 
            cartItem.amount = cartItem.amount + 1
            console.log('count incresed', payload)
        },
        decrease: (state, {payload}) => {
            const itemId = payload
            const cartItem = state.cartItems.find(item => item._id === itemId) 
            cartItem.amount = cartItem.amount - 1
            console.log('count incresed', payload)
        },
        calculateTotals: (state, action) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount
                total += item.amount * item.price
            })
            state.amount = amount
            state.total = total
        },
    }
})

export const getCartItems =  () => {
    return async (dispatch) => {
        try{
        console.log('Get cart items called')
        const res = await axios.get(`http://localhost:4000/get/cart/`)
        const data  = res.data.itemDetails
        dispatch(cartSlice.actions.setCart(data))
        localStorage.setItem('cartData', JSON.stringify(data))
        console.log(data)
        }catch(e){
            dispatch(e.response.data)
        }
    }
}

export const increaseQuantity  = () => {
    return async(dispatch) => {
        console.log("Quantity increased in database")
        const data = axios.post()
        dispatch(cartSlice.actions.increase())
    }
}


export default cartSlice.reducer
export const { clearCart, removeItem, increase, decrease, calculateTotals, } = cartSlice.actions