import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
        state.items.push({
            ...action.payload,
            quantity:1
        })
console.log(action);
    },
    removeFromCart:(state,action) =>{
        const itemId = action.payload
        state.items = state.items.filter(item =>{
          if(item.id !== itemId){
            return item
          }
        })
            },
    incrementqty: (state, action) => {
        const itemId = action.payload
        state.items= state.items.map(item=>{
            if(item.id === itemId){
                return{
                    ...item,
                    quantity: item.quantity+1
                }
            }
            return item
        })
    },
    decrementqty: (state, action) => {
        const itemId = action.payload
        state.items= state.items.map(item=>{
            if(item.id === itemId){
                return{
                    ...item,
                    quantity: item.quantity-1
                }
            }
            return item
        })

    }
  },
})

// Action creators are generated for each case reducer function
export const { incrementqty, decrementqty, addToCart , removeFromCart } = cartSlice.actions

export default cartSlice.reducer