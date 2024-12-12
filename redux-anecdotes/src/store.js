import { configureStore } from "@reduxjs/toolkit";
import anecdoteReducer, { appendAnecdote, setAnecdotes, initializeAnecdotes } from "./reducers/anecdoteReducer";
import filterReducer from "./reducers/filterReducer";
import notificationReducer from './reducers/notificationReducer';
import anecdoteService from './services/anecdotes'
import { useDispatch } from 'react-redux';



const store = configureStore({
    reducer: {
      anecdotes: anecdoteReducer,
      filter: filterReducer,
      notification: notificationReducer,
    },
  });
    
  console.log(store.getState());

  export default store