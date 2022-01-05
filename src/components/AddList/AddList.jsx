import React, { useState } from 'react';

import s from './AddList.module.scss';

function AddList(props) {
  const [active, setActive] = useState(false);

  return (
    <>
      {active ? (
        <div className={s.addlist}>
          <input className={s.addlist__input} type='text' placeholder='Type your list name' />
          <button className={s.addlist__button}>Add List</button>
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
