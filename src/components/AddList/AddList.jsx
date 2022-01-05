import axios from 'axios';
import React, { useState } from 'react';

import s from './AddList.module.scss';

function AddList({ onAdd }) {
  const [active, setActive] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const addList = () => {
    if (!inputValue) alert('Введите название списка');

    axios
      // Добавляем новый список в объект с данными
      .post('http://localhost:3001/lists', {
        name: inputValue,
      })
      // Добавляем данные в стейт чтобы они сразу отобразились на экране
      .then(({ data }) => {
        const listObj = { ...data, tasks: [] };
        onAdd(listObj);
      })
      .catch((error) => {
        alert('Произошла ошибка, добавьте список снова');
      });
    setInputValue('');
    setActive(false);
  };

  const keyDownCheck = (e) => {
    if (e.keyCode === 13) {
      addList();
    }
  };

  return (
    <>
      {active ? (
        <div className={s.addlist}>
          <input
            className={s.addlist__input}
            type='text'
            placeholder='Type your list name'
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
            onKeyDown={(e) => {
              keyDownCheck(e);
            }}
          />
          <button className={s.addlist__button} onClick={addList}>
            Add List
          </button>
        </div>
      ) : (
        <div className={s.addlist} onClick={() => setActive(!active)}>
          <img
            className={s.addlist__img}
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Feather-core-plus-circle.svg/1200px-Feather-core-plus-circle.svg.png'
            alt='plus'
          />
          <p className={s.addlist__text}>Add new List</p>
        </div>
      )}
    </>
  );
}

export default AddList;
