import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import inquiryService from "./inquiryService";

export const getInquirys = createAsyncThunk(
  "inquiry/get-inquirys",
  async (thunkAPI) => {
    try {
      return await inquiryService.getAllInquirys();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  inquirys: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const inquirySlice = createSlice({
  name: "inquiry",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getInquirys.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getInquirys.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.inquirys = action.payload;
      })
      .addCase(getInquirys.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.inquirys = action.error;
      });
  },
});

export default inquirySlice.reducer;
