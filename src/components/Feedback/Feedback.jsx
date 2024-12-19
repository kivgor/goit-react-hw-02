import css from './Feedback.module.css';

const Feedback = ({ countVote }) => {
  return (
    <ul className={css.list}>
      <li>Good: {countVote.good}</li>
      <li>Neutral: {countVote.neutral}</li>
      <li>Bad: {countVote.bad}</li>
    </ul>
  );
};

export default Feedback;
