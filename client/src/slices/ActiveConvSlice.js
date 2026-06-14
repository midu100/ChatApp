import { createSlice } from '@reduxjs/toolkit'

const activeConvSlice = createSlice({
  name: 'activeConv',
  initialState: {
    active: null,
  },
  reducers: {
    activeConversation: (state, action) => {
      state.active = action.payload
    },
  },
})

export const { activeConversation } = activeConvSlice.actions
export default activeConvSlice.reducer
