import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabs: [
    { id: 1, name: "Properties", icon: "icon-bed" },
    { id: 2, name: "Tours", icon: "icon-destination" },
    { id: 3, name: "Flights", icon: "icon-ski" },
    { id: 4, name: "Rides", icon: "icon-home" },
    { id: 5, name: "Attractions & Events", icon: "icon-car" },
    // { id: 6, name: "Cruise", icon: "icon-yatch" },
    { id: 6, name: "Travel Packages", icon: "icon-tickets" },
  ],
  currentTab: "Properties",
};

export const findPlaceSlice = createSlice({
  name: "find-place",
  initialState,
  reducers: {
    addCurrentTab: (state, { payload }) => {
      state.currentTab = payload;
    },
  },
});

export const { addCurrentTab } = findPlaceSlice.actions;
export default findPlaceSlice.reducer;
