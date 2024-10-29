import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  type: '',
  quantity: 0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,

  reducers: {
    cartConfig: (state, action) => {
      if (action.payload.type === 'removed' && state.quantity < 2) {
        return {
          ...state,
          type: '',
          quantity: 0,
        }
      }

      if (action.payload.type === 'removed') {
        action.payload.quantity -= 1
      }

      if (action.payload.type === 'add') {
        return {
          ...state,
          quantity: state.quantity + 1,
        }
      }

      return {
        ...state,
        type: action.payload.type,
        quantity: action.payload.quantity,
      }
    },
  },
})

export const { cartConfig } = cartSlice.actions
