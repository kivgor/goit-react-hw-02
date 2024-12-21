import css from './Feedback.module.css';

const Feedback = ({ countVote, totalFeedback, positiveFeedback }) => {
  return (
    <ul className={css.list}>
      <li>Good: {countVote.good}</li>
      <li>Neutral: {countVote.neutral}</li>
      <li>Bad: {countVote.bad}</li>
      {totalFeedback > 0 && (
        <>
          <li>Total: {totalFeedback}</li>
          <li>Positive: {positiveFeedback}</li>
        </>
      )}
    </ul>
  );
};

export default Feedback;
