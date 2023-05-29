import axios from "axios";
import { Statuses } from "./getAllTaskSlice";
// import {setTask,setStatus} from "./getAllTaskSlice";
const {createSlice, createAsyncThunk} = require("@reduxjs/toolkit");

export const UpdateSlice = createSlice({
    name:"Update",
    initialState:{
        data:[],
        status:Statuses.IDLE
    },
    extraReducers: (builder) =>{

        builder
        .addCase(getTaskforUpdate.pending,(state,action)=>{
            state.status = Statuses.LOADING;
        })
        .addCase(getTaskforUpdate.fulfilled,(state,action)=>{
            state.data=action.payload;
            state.status = Statuses.IDLE;
        })
        .addCase(getTaskforUpdate.rejected,(state,action)=>{
            state.status=Statuses.ERROR;
        })
    } 
});
export default UpdateSlice.reducer;
export const getTaskforUpdate = createAsyncThunk('update/taskd',async (id)=>{
    const reposne = await axios.get(`http://localhost:5000/task"/${id}`);
    console.log(reposne);
    return reposne;
})