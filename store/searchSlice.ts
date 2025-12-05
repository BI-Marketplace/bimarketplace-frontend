import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  query: string;
  recent: string[];
}

const initialState: SearchState = {
  query: "",
  recent: [],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;

      if (action.payload && !state.recent.includes(action.payload)) {
        state.recent.unshift(action.payload);
        if (state.recent.length > 5) state.recent.pop();
      }
    },
    removeRecent: (state, action: PayloadAction<string>) => {
      state.recent = state.recent.filter((item) => item !== action.payload);
    },
  },
});

export const { setQuery, removeRecent } = searchSlice.actions;
export default searchSlice.reducer;
