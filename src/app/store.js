import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/PageCount/counterSlice';
import answerSlice from '../components/Answers/answerSlice';



export const store = configureStore({
    reducer: {
        counter: counterReducer,
        answerList: answerSlice,
    },
})