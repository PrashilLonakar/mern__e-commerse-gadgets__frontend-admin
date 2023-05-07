import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import blogCategoryService from "./blogCategoryService";

export const getBlogCategorys = createAsyncThunk(
  "blog-category/get-blog-categorys",
  async (thunkAPI) => {
    try {
      return await blogCategoryService.getAllBlogCategorys();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = {
  blogCategorys: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const blogCategorySlice = createSlice({
  name: "blog-category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlogCategorys.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlogCategorys.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.blogCategorys = action.payload;
      })
      .addCase(getBlogCategorys.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.blogCategorys = action.error;
      });
  },
});

export default blogCategorySlice.reducer;
