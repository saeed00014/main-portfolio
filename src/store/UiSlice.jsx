import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: 'persian'
}

const UiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    languageState(state, action) {
      state.language = action.payload
    }
  }
})

export const {
  languageState 
} = UiSlice.actions

export default UiSlice