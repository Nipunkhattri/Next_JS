import { createSlice } from '@reduxjs/toolkit';
import { dummyData } from '@/dummydata';

const initialState = {
  orders: dummyData.orders, 
  itemsById: dummyData.items
};

const dummySlice = createSlice({
  name: 'dummy',
  initialState,
  reducers: { 
  addItem(state, action) {
    state.itemsById.push(action.payload);
  },
  deleteItem(state, action) {
    state.itemsById = state.itemsById.filter(item => item.id !== action.payload);
  },
  editItem(state, action) {
    const { itemId, updatedItem } = action.payload;
    const index = state.itemsById.findIndex(item => item.id === itemId);
    if (index !== -1) {
      state.itemsById[index] = { ...state.itemsById[index], ...updatedItem };
    }
  },
  completeOrder(state, action) {
    state.orders = state.orders.map(order => {
      if (order.id === action.payload) {
        return { ...order, status: "Completed" };
      }
      return order;
    });
  }
  },
});

export const { addItem,deleteItem,editItem ,completeOrder} = dummySlice.actions;
export default dummySlice.reducer;
