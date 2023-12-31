import { createSlice } from "@reduxjs/toolkit";

import { dispatch } from "@/redux/store";

const initialState = {
  language: "fr",
  sidebar: {
    open: false,
    type: "CONTACT",
  },
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebar.open = !state.sidebar.open;
    },
    updateSidebarType: (state, action) => {
      state.sidebar.type = action.payload.type;
    },
  },
});

export default slice.reducer;

export const ToggleSidebar = () => {
  return async () => {
    dispatch(slice.actions.toggleSidebar());
  };
};

export const UpdateSidebarType = (type: string) => {
  return async () => {
    dispatch(slice.actions.updateSidebarType({ type }));
  };
};
