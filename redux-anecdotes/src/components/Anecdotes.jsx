import { useDispatch, useSelector } from "react-redux";
import { voteForAnecdote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

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
  const dispatch = useDispatch();

  const anecdotes = useSelector(({ filter, anecdotes }) => {
    if (filter === "") {
      return anecdotes;
    }

    return anecdotes.filter((anecdote) =>
      anecdote.content.toLowerCase().includes(filter.toLowerCase())
    );
  });

  const voteAnecdoteHandler = (id, content) => {
    dispatch(voteForAnecdote(id));

    dispatch(setNotification(`You voted for Anecdote "${content}"!`, 1));

    // setTimeout(() => {
    //   dispatch(hideNotification());
    // }, 5000);
  };

  const sortedAnecdotes = anecdotes.slice().sort((a, b) => b.votes - a.votes);

  return (
    <>
      <ul>
        {sortedAnecdotes.map((anecdote) => (
          <Anecdote
            key={anecdote.id}
            anecdote={anecdote}
            handleClick={() =>
              voteAnecdoteHandler(anecdote.id, anecdote.content)
            }
          />
        ))}
      </ul>
    </>
  );
};

export default Anecdotes;
