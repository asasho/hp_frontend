import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../app/store";

export const fetchAsyncGetNews = createAsyncThunk("news/get", async () => {
  const res = await axios.get(
    "https://radiant-escarpment-24008.herokuapp.com/articles/"
  );
  return res.data;
});

export const fetchAsyncGetPressRelease = createAsyncThunk("news/pressRelease", async () =>{
  const res = await axios.get(
    "https://radiant-escarpment-24008.herokuapp.com/admin/articles/"
  );
  const result = res.data 
});

export const fetchAsyncGetOneNews = createAsyncThunk(
  "news/getData",
  async (id: number) => {
    const res = await axios.get(
      `https://radiant-escarpment-24008.herokuapp.com/articles/${id}`
    );
    return res.data;
  }
);

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    isOpenNews: false,
    news: [
      {
        id: 0,
        title: "",
        description: "",
        image_url: "",
        updated_at: "",
        category: "",
      },
    ],
    article: {
      id: 0,
      title: "",
      description: "",
      image_url: "",
      updated_at: "",
      category: "",
    },
  },
  reducers: {
    setIsOpenNews(state) {
      state.isOpenNews = true;
    },
    resetIsOpenNews(state) {
      state.isOpenNews = false;
    },
    editNews(state, action) {
      state.news = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGetNews.fulfilled, (state, action) => {
      state.news = action.payload;
    });
    builder.addCase(fetchAsyncGetOneNews.fulfilled, (state, action) => {
      state.article = action.payload;
    });
  },
});

export const { setIsOpenNews, resetIsOpenNews, editNews } = newsSlice.actions;

export const selectIsOpenNews = (state: RootState) => state.news.isOpenNews;
export const selectNews = (state: RootState) => state.news.news;
export const selectArticle = (state: RootState) => state.news.article;

export default newsSlice.reducer;
