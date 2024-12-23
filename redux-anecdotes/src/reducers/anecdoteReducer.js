import { createSlice, current } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    // voteAnecdote(state, action) {

    //   const id = action.payload;
    //   const anecdoteToVote = state.find(a => a.id === id);
    //   // console.log(initialState)
    //   // console.log(action.payload)
    
    //   if (anecdoteToVote) {
    //     const votedAnecdote = {
    //       ...anecdoteToVote,
    //       votes: anecdoteToVote.votes + 1,
    //     };
    
    //     console.log(current(state)); 

        
    //     return state.map(anecdote =>
    //       anecdote.id !== id ? anecdote : votedAnecdote

          
    //     );
    //   }
    //   console.warn(`Anecdote with id ${id} not found.`);
    //   return state;
    // },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    },
    updateAnecdote(state, action) {
      const updatedAnecdote = action.payload
      return state.map(anecdote =>
        anecdote.id !== updatedAnecdote.id ? anecdote : updatedAnecdote
      )
    }
  },
});

export const {updateAnecdote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const voteForAnecdote = (id) => {
  return async (dispatch, getState) => {
    const anecdote = getState().anecdotes.find(a => a.id === id)

    if (anecdote) {
      const updatedAnecdote = { ...anecdote, votes: anecdote.votes + 1 }
      await anecdoteService.update(id, updatedAnecdote)
      dispatch(updateAnecdote(updatedAnecdote))
    }
  }
}


export default anecdoteSlice.reducer



// const anecdoteReducer = (state = initialState, action) => {
//   switch(action.type) {
//     case 'NEW_ANECDOTE':
//       return state.concat(action.payload)
//     case 'VOTE': {
//       const id = action.payload.id
//       const anecdoteToVote = state.find(a => a.id === id)
//       const votedAnecdote = {
//         ...anecdoteToVote,
//         votes: anecdoteToVote.votes +1
//       }
//       return state.map(anecdote => anecdote.id !== id ? anecdote : votedAnecdote

//       )
//     }
//     default: return state
//   }
// }

// // export const createAnecdote = (content) => {
// //   return {
// //     type: "NEW_ANECDOTE",
// //     payload: {
// //       content,
// //       votes: 0,
// //       id: getId(),
// //     },
// //   };
// // };

// export const voteAnecdote = (id) => {
//   return {
//     type: "VOTE",
//     payload: { id },
//   };
// };

