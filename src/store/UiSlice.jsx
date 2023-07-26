import { createSlice } from "@reduxjs/toolkit";

const initialState = {

}

const UiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    languageState(state, action) {

    }
  }
})

export const {
  languageState 
} = UiSlice.actions

export default UiSlice