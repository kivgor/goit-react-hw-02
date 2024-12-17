import css from './Options.module.css';

const Options = () => {

  return (
    <ul className={css.list}>
      <li>
        <button className={css.button} type="button">
          Good
        </button>
      </li>
      <li>
        <button className={css.button} type="button">
          Neutral
        </button>
      </li>
      <li>
        <button className={css.button} type="button">
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
