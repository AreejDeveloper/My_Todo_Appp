import axios from "axios";
const { createSlice } = require("@reduxjs/toolkit");

export const Statuses = Object.freeze({
    IDLE:"idle",
    LOADING:"Loading",
    ERROR:"error"
})
const getAllTaskSlice = createSlice({
    name:"allTask",
    initialState:{
        status: Statuses.IDLE,
        data:[],
        new:[],
    },
    reducers:{
        setTask(state,action)
        {
            state.data = action.payload;
        },
        setStatus(state,action)
        {
            state.status = action.payload;
        },
    }
});

export const {setTask,setStatus} = getAllTaskSlice.actions;
export default getAllTaskSlice.reducer;

export function getAllTask ()
{
    return async function(dispatch, getState)
    {
        dispatch(setStatus(Statuses.LOADING));
        try
        {
            const response = await axios.get("http://localhost:5000/task");
            dispatch(setTask(response.data));
            dispatch(setStatus(Statuses.IDLE));
        }
        catch(error)
        {
            console.log(error);
            dispatch(setStatus(Statuses.ERROR));

        }
    }

}