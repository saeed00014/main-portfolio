import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: 'persian',
  font: 'iranyekan'
}

const UiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    languageState(state, action) {
      state.language = action.payload
      if(action.payload == 'persian') {
        state.font = 'iranyekan'
      }else {
        state.font = 'roboto'
      }
    }
  }
})

export const {
  languageState 
} = UiSlice.actions

export default UiSlice