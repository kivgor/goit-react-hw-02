import css from './Options.module.css';

const Options = ({ setCountVote }) => {
  const updateFeedback = feedbackType => {
    switch (feedbackType) {
      case 'good':
        return setCountVote(prev => ({ ...prev, good: prev.good + 1 }));
      case 'neutral':
        return setCountVote(prev => ({ ...prev, neutral: prev.neutral + 1 }));
      case 'bad':
        return setCountVote(prev => ({ ...prev, bad: prev.bad + 1 }));
      default:
        break;
    }
  };

  return (
    <ul className={css.list}>
      <li>
        <button
          onClick={() => updateFeedback('good')}
          className={css.button}
          type="button"
        >
          Good
        </button>
      </li>
      <li>
        <button
          onClick={() => updateFeedback('neutral')}
          className={css.button}
          type="button"
        >
          Neutral
        </button>
      </li>
      <li>
        <button
          onClick={() => updateFeedback('bad')}
          className={css.button}
          type="button"
        >
          Bad
        </button>
      </li>
      <li>
        <button className={css.button} type="button">
          Reset
        </button>
      </li>
    </ul>
  );
};

export default Options;
