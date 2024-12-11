import NewAnecdote from "./components/newAnecdote";
import Anecdotes from "./components/Anecdotes";
import Filter from "./components/Filter";

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <Anecdotes />
      <NewAnecdote />
    </div>
  );
};

export default App;
