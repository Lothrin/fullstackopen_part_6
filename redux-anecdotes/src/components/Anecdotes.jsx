import { useDispatch, useSelector } from "react-redux";
import { voteAnecdote } from "../reducers/anecdoteReducer";

const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <>
      <li>{anecdote.content}</li>
      <p>
        has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
      </p>
    </>
  );
};

const Anecdotes = () => {
  const anecdotes = useSelector((state) => state);
  const dispatch = useDispatch();

  const sortedAnecdotes = anecdotes.slice().sort((a, b) => b.votes - a.votes);

  return (
    <>
      <h2>Anecdotes</h2>
      <ul>
        {sortedAnecdotes.map((anecdote) => (
          <Anecdote
            key={anecdote.id}
            anecdote={anecdote}
            handleClick={() => dispatch(voteAnecdote(anecdote.id))}
          />
        ))}
      </ul>
    </>
  );
};

export default Anecdotes;
