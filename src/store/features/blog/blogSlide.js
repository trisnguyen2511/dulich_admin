import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiCategory } from "../../../api/blog";

const initialState = {
    total: 0,
    // blogs: [],
    tours: [],
    allTours: [],
    listSelected: []
};

export const GetToursAll = createAsyncThunk(
    "post/GetToursAll",
    async (data, thunk) => {
        const response = await apiCategory.getAllTour();
        return response;
    }
);

const GetToursAllBuilder = (
    builder
) => {
    builder.addCase(GetToursAll.fulfilled, (state, action) => {
        const { tours, totalTours, listSelected } = action.payload.data;
        const newKey = "key"
        let currentValue = 1
        tours.forEach(function (obj) {
            // obj[newKey] = obj._id;
            obj.key = obj._id
            // currentValue++;
        });
        state.listSelected = listSelected
        state.total = totalTours;
        state.allTours = tours;

    });
    builder.addCase(GetToursAll.pending, (state, action) => { });
    builder.addCase(GetToursAll.rejected, (state, action) => { });
};

export const GetBlog = createAsyncThunk(
    "post/getBlogs",
    async (data, thunk) => {
        const response = await apiCategory.getAllBlog(data);
        return response;
    }
);

const GetBlogsBuilder = (
    builder
) => {
    builder.addCase(GetBlog.fulfilled, (state, action) => {
        const { blogs, totalBlogs } = action.payload.data;
        // console.log(blogs)
        state.total = totalBlogs;
        state.tours = blogs;
    });
    builder.addCase(GetBlog.pending, (state, action) => { });
    builder.addCase(GetBlog.rejected, (state, action) => { });
};

export const createBlog = createAsyncThunk(
    "post/createBlog",
    async (data, thunk) => {
        const response = await apiCategory.createBlog(data);
        return response;
    }
);

const createBlogBuilder = (
    builder
) => {
    builder.addCase(createBlog.fulfilled, (state, action) => {


    });
    builder.addCase(createBlog.pending, (state, action) => { });
    builder.addCase(createBlog.rejected, (state, action) => { });
};

export const editBlog = createAsyncThunk(
    "post/editblog",
    async (data, thunk) => {
        const response = await apiCategory.updateBlog(data.id, data.body);
        return response;
    }
);

const editBlogBuilder = (
    builder
) => {
    builder.addCase(editBlog.fulfilled, (state, action) => {


    });
    builder.addCase(editBlog.pending, (state, action) => { });
    builder.addCase(editBlog.rejected, (state, action) => { });
};

export const deleteBlog = createAsyncThunk(
    "post/deleteBlog",
    async (data, thunk) => {
        const response = await apiCategory.deleteTour(data);
        return response;
    }
);

const deleteBlogBuilder = (
    builder
) => {
    builder.addCase(deleteBlog.fulfilled, (state, action) => {
    });
    builder.addCase(deleteBlog.pending, (state, action) => { });
    builder.addCase(deleteBlog.rejected, (state, action) => { });
};

export const hotTour = createAsyncThunk(
    "post/hotTour",
    async (data, thunk) => {
        const response = await apiCategory.hotTour(data);
        return response;
    }
);

const HotTourBuilder = (
    builder
) => {
    builder.addCase(hotTour.fulfilled, (state, action) => {
    });
    builder.addCase(hotTour.pending, (state, action) => { });
    builder.addCase(hotTour.rejected, (state, action) => { });
};





const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        GetToursAllBuilder(builder)
        GetBlogsBuilder(builder)
        createBlogBuilder(builder)
        editBlogBuilder(builder)
        deleteBlogBuilder(builder)
        HotTourBuilder(builder)
    },
});

export default blogSlice.reducer;