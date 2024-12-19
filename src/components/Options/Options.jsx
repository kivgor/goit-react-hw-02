import css from './Options.module.css';
import { useState } from 'react';

const Options = () => {

const [countVote, setCountVote] = useState({
  good: 0,
  neutral: 0,
  bad: 0,
});
  
   const handleClickByVote = vote => {
     switch (vote) {
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
          onClick={() => handleClickByVote('good')}
          className={css.button}
          type="button"
        >
          Good: {countVote.good}
        </button>
      </li>
      <li>
        <button
          onClick={() => handleClickByVote('neutral')}
          className={css.button}
          type="button"
        >
          Neutral: {countVote.neutral}
        </button>
      </li>
      <li>
        <button
          onClick={() => handleClickByVote('bad')}
          className={css.button}
          type="button"
        >
          Bad: {countVote.bad}
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
