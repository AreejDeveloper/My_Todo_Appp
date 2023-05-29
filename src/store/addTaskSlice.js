const { createSlice } = require("@reduxjs/toolkit");

const taskDetail = createSlice({
    name:"task",
    initialState:
    {
        title: "",
        detail: ""
    },
    reducers:{
        setTaskTitle(state,action)
        {
            state.title = action.payload;
        },
        setTaskDetail(state,action)
        {
            state.detail = action.payload;
        }
    }
});

export const {setTaskTitle,setTaskDetail} = taskDetail.actions;
export default taskDetail.reducer;