// import { useState } from 'react'
// import reactLogo from '../assets/react.svg'
// import viteLogo from '/vite.svg'

import { useState } from 'react';
import Description from './Description/Description';
import Feedback from './Feedback/Feedback';
import Options from './Options/Options';

function App() {
  const [countVote, setCountVote] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  // const [count, setCount] = useState(0);

  return (
    <>
      <Description />
      <Options setCountVote={setCountVote} />
      <Feedback countVote={countVote} />
    </>
  );
}

export default App;
