import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiChangePass } from "../../../api/changePassword";
import { toast } from "react-toastify";
import { message } from "antd";

const initialState = {
    dataPassword: {},
};

// export const changePassword = createAsyncThunk(
//     "user/changePassword",
//     async (data, thunk) => {
//         const response = await apiFooterData.getFooterData()
//         return response;
//     }
// );

// const getDataFooterBuilder = (
//     builder
// ) => {
//     builder.addCase(changePassword.fulfilled, (state, action) => {
//         const { dataFooter } = action.payload.data
//         state.dataFooter = dataFooter
//     });
//     builder.addCase(changePassword.pending, (state, action) => { });
//     builder.addCase(changePassword.rejected, (state, action) => { });
// };

export const changePassword = createAsyncThunk(
    "changePassword",
    async (data, thunk) => {
        console.log(data)
        const response = await apiChangePass.updatePassword(data);
        return response;
    }
);

const editPasswordBuilder = (
    builder
) => {
    builder.addCase(changePassword.fulfilled, (state, action) => {
        message.success("Đổi mật khẩu thành công")
    });
    builder.addCase(changePassword.pending, (state, action) => { });
    builder.addCase(changePassword.rejected, (state, action) => {
        message.error("Đổi mật khẩu thất bại")
    });
};


const ChangePasswordSlice = createSlice({
    name: "changepassword",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // getDataFooterBuilder(builder)
        editPasswordBuilder(builder)
    },
});

export default ChangePasswordSlice.reducer;