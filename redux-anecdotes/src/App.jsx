/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import anecdoteService from "./services/anecdotes";
import NewAnecdote from "./components/newAnecdote";
import Anecdotes from "./components/Anecdotes";
import Filter from "./components/Filter";
import Notification from "./components/Notification";
import { useDispatch } from "react-redux";
import store from "./store";
import anecdoteReducer, {
  appendAnecdote,
  setAnecdotes,
} from "./reducers/anecdoteReducer";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    anecdoteService
      .getAll()
      .then((anecdotes) => dispatch(setAnecdotes(anecdotes)));
  }, []);

  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification />
      <Filter />
      <Anecdotes />
      <NewAnecdote />
    </div>
  );
};

export default App;
