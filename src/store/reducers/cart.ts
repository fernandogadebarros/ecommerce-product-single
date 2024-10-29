import { createSlice } from '@reduxjs/toolkit'

const initialState = 0

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state) => {
      return state + 1
    },
    remove: (state) => {
      if (state === 0) return state
      return state - 1
    },
    reset: (state) => {
      state = 0
      return state
    },
  },
})

export const { add, remove, reset } = cartSlice.actions
