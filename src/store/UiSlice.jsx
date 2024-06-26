import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: localStorage.getItem('LanguageSaeedPortfolio') ?
    localStorage.getItem('LanguageSaeedPortfolio') : 'persian',

  font: (localStorage.getItem('LanguageSaeedPortfolio') == 'english') ? 'roboto' : 'iranyekan' 
}

const UiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    languageState(state, action) {
      state.language = action.payload
      if(action.payload == 'persian'){
        state.font = 'iranyekan'
      }else {
        state.font = 'roboto'
      }
      localStorage.setItem('LanguageSaeedPortfolio', action.payload)
    }
  }
})

export const {
  languageState 
} = UiSlice.actions

export default UiSlice