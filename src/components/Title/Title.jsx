import React, { useContext, useRef, useState } from 'react';
import storeApi from '../../data/storeApi';

import s from './Title.module.scss';

export default function Title({ title, listId }) {
  const [showTitle, setShowTitle] = useState(true);
  const [inputValue, setInputValue] = useState(title);

  const { updateListTitle } = useContext(storeApi);

  const inputEl = useRef();

  const showForm = () => {
    setShowTitle(false);
    setTimeout(() => inputEl.current.focus(), 0);
  };

  const changeTitleComfirm = (event) => {
    if (event) event.preventDefault();

    if (inputValue) {
      setShowTitle(true);
      updateListTitle(inputValue, listId);
    } else {
      alert('Add title in the field');
    }
  };

  const onKeyDownCheck = (e) => {
    if (e.key === 'Enter') {
      changeTitleComfirm();
    }
  };
  return (
    <div>
      {showTitle ? (
        <div className={s.titleContainer}>
          <h3 className={s.title} onClick={showForm}>
            {inputValue}
          </h3>
        </div>
      ) : (
        <form action='#' className={s.titleContainer}>
          <input
            ref={inputEl}
            className={s.input}
            value={inputValue}
            onKeyDown={(e) => onKeyDownCheck(e)}
            onChange={(e) => setInputValue(e.target.value)}
            type='text'
          />
          <button className={s.btnConfirm} onClick={(e) => changeTitleComfirm(e)}>
            Change
          </button>
        </form>
      )}
    </div>
  );
}
