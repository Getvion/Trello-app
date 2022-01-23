import React, { useContext, useState } from 'react';
import storeApi from '../../data/storeApi';

import s from './Input.module.scss';

export default function InputContainer({ listId, type }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState();

  const { addMoreCard, addMoreList } = useContext(storeApi);

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBtnConfirm = (e) => {
    console.log(e);
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
              onChange={handleOnChange}
              value={title}
              className={s.input}
              placeholder={type === 'card' ? 'Enter card title...' : 'Enter list title...'}
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
        <div className={s.addCard} onClick={() => setOpen(!open)}>
          <p className={s.addCardText}>{type === 'card' ? 'Add card' : 'Add another List'}</p>
        </div>
      )}
    </div>
  );
}
