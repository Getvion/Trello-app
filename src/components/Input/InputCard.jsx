import React, { useContext, useRef, useState } from 'react';
import storeApi from '../../data/storeApi';

import s from './Input.module.scss';

export default function InputContainer({ listId, type }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState();

  const { addMoreCard, addMoreList } = useContext(storeApi);

  const inputEl = useRef();

  const onClickAtAdd = () => {
    setOpen(!open);
    setTimeout(() => inputEl.current.focus(), 0);
  };

  const onKeyDownCheck = (e) => {
    if (e.key === 'Enter') {
      handleBtnConfirm();
    }
  };

  const handleBtnConfirm = () => {
    if (!title) return alert('please add title');

    if (type === 'card') {
      addMoreCard(title, listId);
      setTitle('');
      setOpen(false);
    } else {
      addMoreList(title);
      setTitle('');
      setOpen(false);
    }
  };

  return (
    <div className={s.root}>
      {open ? (
        <div>
          <div className={s.card}>
            <input
              className={s.input}
              ref={inputEl}
              placeholder={type === 'card' ? 'Enter card title...' : 'Enter list title...'}
              onChange={(e) => setTitle(e.target.value)}
              onKeyDown={(e) => onKeyDownCheck(e)}
            />
          </div>
          <div className={s.confirm}>
            <button className={s.btnConfirm} onClick={handleBtnConfirm}>
              {type === 'card' ? 'Add card' : 'Add list'}
            </button>
            <span className={s.closeBtn} onClick={() => setOpen(false)}>
              X
            </span>
          </div>
        </div>
      ) : (
        <div className={s.addCard} onClick={onClickAtAdd}>
          <p className={s.addCardText}>{type === 'card' ? 'Add card' : 'Add another List'}</p>
        </div>
      )}
    </div>
  );
}
