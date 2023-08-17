import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  cardItems: [],
  cardTotalQuantity: 0,
  cardTotalPrice: 0,
};

const cardSlice  = createSlice ({
  name: 'card',
  initialState,
  reducers: {
    getallCard(state, action) {
      state.cardItems = action.payload
    },
    addCard(state, action) {
      const newItem = action.payload
      const exitingIndex = state.cardItems.findIndex(
        (item) => item._id === newItem._id
      )
      if(!newItem.features && exitingIndex >= 0 && state.cardItems[exitingIndex].quantity <= 4) {
        state.cardItems[exitingIndex] = {
          ...state.cardItems[exitingIndex],
            quantity: state.cardItems[exitingIndex].quantity + 1
        }
      }else if(exitingIndex >= 0 && state.cardItems[exitingIndex].quantity >= 5) {
        state.cardItems[exitingIndex] = { 
          ...state.cardItems[exitingIndex],
            limitations: 'limited to Five'
        } 
      }else if(exitingIndex < 0) {
        const item = { ...newItem, quantity: 1 }
        state.cardItems.push(item)
      }
    },
    decreaseCard(state, action) {
      const newItem = action.payload
      const exitingIndex = state.cardItems.findIndex(
        (item) => item._id === newItem._id
      )

      if (exitingIndex >= 0 && newItem.quantity > 1) {
        state.cardItems[exitingIndex] = {
          ...state.cardItems[exitingIndex],
            quantity: state.cardItems[exitingIndex].quantity - 1 
        }
        state.cardItems[exitingIndex] = { 
          ...state.cardItems[exitingIndex],
            limitations: ''
          } 
      }else if ( exitingIndex >= 0 && newItem.quantity == 1 ) {
 
      }
    },
    increaseCard(state, action) {
      const newItem = action.payload
      const exitingIndex = state.cardItems.findIndex (
        (item) => item._id === newItem._id
      )

      if(exitingIndex >= 0 && state.cardItems[exitingIndex].quantity <= 4) {
        state.cardItems[exitingIndex] = { 
          ...state.cardItems[exitingIndex],
            quantity: state.cardItems[exitingIndex].quantity + 1
        }           
          state.cardItems[exitingIndex] = { 
          ...state.cardItems[exitingIndex],
            limitations: ''
          } 
      }else if(exitingIndex >= 0 && state.cardItems[exitingIndex].quantity === 5) {
        state.cardItems[exitingIndex] = { 
          ...state.cardItems[exitingIndex],
            limitations: 'limited to Five'
        }  
      }
    },
    deleteCard(state, action) {
      const newItem = action.payload
      state.cardItems = 
        state.cardItems.filter((item) => item._id !== newItem._id)
    },
    getTotals(state, action) {
      let {total, quantity} = state.cardItems.reduce((cardTotal, cardItem) => {
        const { price, quantity } = cardItem
        const itemTotal = price * quantity

        cardTotal.total += itemTotal
        cardTotal.quantity += quantity

        return cardTotal
      },
      {
        total: 0,
        quantity: 0
      })
      total = parseFloat(total.toFixed(2))
      state.cardTotalQuantity = quantity
      state.cardTotalPrice = total
    }
}})

export const { getallCard, addCard, decreaseCard, increaseCard, deleteCard, getTotals } =
  cardSlice.actions;

export default cardSlice



