import React from 'react';

import s from './AddTask.module.scss';

function AddTask(props) {
  return (
    <div className={s.addtask}>
      <input className={s.addtask__input} type='text' />
      <button className={s.addtask__btn}>Add task</button>
    </div>
  );
}

export default AddTask;
