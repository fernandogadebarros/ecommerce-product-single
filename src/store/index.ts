import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './reducers/cart'

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
})
