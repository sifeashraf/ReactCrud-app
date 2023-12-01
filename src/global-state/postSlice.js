import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
let postapi = process.env.REACT_APP_DATA_BASE_API;
export const fetchdata = createAsyncThunk("posts/get-posts", async (_, thunkApi) => {
  const { rejectWithValue } = thunkApi;
  try {
    const res = await fetch(postapi);
    let data = await res.json();
    return data;
  } catch (error) {
    console.log("dd");
    return rejectWithValue(error.message);
  }
});
export const deletepost = createAsyncThunk("posts/delete-post", async (id, thunkApi) => {
  const { rejectWithValue } = thunkApi;
  try {
    const res = await fetch(`${postapi}/${id}`, {
      method: "DELETE",
    });
    return id;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const fetchpost = createAsyncThunk("posts/fetch-Post", async (id, thunkApi) => {
  let { rejectWithValue } = thunkApi;
  try {
    let res = await fetch(`${postapi}/${id}`);
    let data = await res.json();
    return data;
  } catch (error) {
    rejectWithValue(error.message);
  }
});

export const insertPost = createAsyncThunk("posts/insert-post", async (item, thunkApi) => {
  const { rejectWithValue } = thunkApi;
  try {
    let res = await fetch(`${postapi}`, {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });
    let data = res.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
export const editPost = createAsyncThunk("posts/edit", async function (item, thunkApi) {
  const { rejectWithValue } = thunkApi;
  try {
    let res = await fetch(`${postapi}/${item.id}`, {
      method: "PATCH",
      body: JSON.stringify(item),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    let data = await res.json();
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});
let postslcie = createSlice({
  name: "posts",
  initialState: { records: [], loading: false, error: null, record: null },
  reducers: {
    clearRecord: (state) => {
      state.record = null;
    },
  },
  extraReducers: {
    //fetch posts
    [fetchdata.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchdata.fulfilled]: (state, action) => {
      state.records = action.payload;
      state.loading = false;
      state.error = null;
    },
    [fetchdata.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    //fetch post
    [fetchpost.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [fetchpost.fulfilled]: (state, action) => {
      state.record = action.payload;
      state.loading = false;
      state.error = null;
    },
    [fetchpost.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    //insert post
    [insertPost.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [insertPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.records.push(action.payload);
    },
    [insertPost.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },

    //delete post
    [deletepost.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [deletepost.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = null;
      state.records = state.records.filter((ele) => ele.id !== action.payload);
    },
    [deletepost.rejected]: (action, state) => {
      state.loading = false;
      state.error = action.payload;
    },
    //edit post
    [editPost.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [editPost.fulfilled]: (state, action) => {
      state.loading = false;
      state.record = action.payload;
    },
    [editPost.rejected]: (action, state) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export let { clearRecord } = postslcie.actions;
export default postslcie.reducer;
