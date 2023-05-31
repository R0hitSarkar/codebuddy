import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialStatevalue = {
  answer: {},
  isSuccess: '',
  error: '',
}


export const addUser = createAsyncThunk("addUser", async(values)=>{
  return fetch("https://codebuddy.review/submit", {
    method: "POST",
    mode: 'cors',
    body: JSON.stringify({
      "emailId": values[1][1],
      "password": values[1][2],
      "firstName": values[2][3],
      "lastName": values[2][4],
      "address": values[2][5],
      "countryCode": values[3][6],
      "phoneNumber": values[3][7]
    })
  }).then(res => res.json());
});

export const answerSlice = createSlice({
  name: 'counter',
  initialState: initialStatevalue,
  reducers: {
    updateAnswer: (state, action) => {
      state.answer = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addUser.pending, (state) => {

    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.error = '';
      state.isSuccess = true;
      console.log(action.payload);
    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.error = action.error;
    });
  }
})

// Action creators are generated for each case reducer function
export const { updateAnswer } = answerSlice.actions

export default answerSlice.reducer;