import css from './Feedback.module.css'

const Feedback = () => {
  return (
      <ul className={css.list}>
          <li>Good: </li>
          <li>Neutral: </li>
          <li>Bad: </li>          
      </ul>
  )
}

export default Feedback