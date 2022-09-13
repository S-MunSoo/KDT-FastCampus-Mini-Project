import { createSlice } from '@reduxjs/toolkit'

export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    basket: []
  },
  reducers: {
    addBasket: (state, action) => {
      state.favorite = [...state.favorite, action.payload]
    }
  }
})

export const basketReducer = basketSlice.reducer
export const { addBasket } = basketSlice.actions
