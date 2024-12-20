import { useEffect, useState } from 'react';
import Description from './Description/Description';
import Feedback from './Feedback/Feedback';
import Options from './Options/Options';
import Notification from './Notification/Notification';

function App() {
  const initialVotes = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  
  const [countVote, setCountVote] = useState(() => {
    const savedVotes = JSON.parse(localStorage.getItem('saved-votes'));
    
      if (savedVotes !== null) {
        return savedVotes;
      }
    return initialVotes;
  });

  useEffect(() => {
    localStorage.setItem('saved-votes', JSON.stringify(countVote));
  }, [countVote]);

  const updateFeedback = feedbackType => {
    setCountVote(prev => ({ ...prev, [feedbackType]: prev[feedbackType] + 1 }));
  };
  const resetFeedback = () => {
    setCountVote(initialVotes);
  };

  const totalFeedback = countVote.good + countVote.neutral + countVote.bad;

  

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback countVote={countVote} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
