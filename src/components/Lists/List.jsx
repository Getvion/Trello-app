import React from 'react';

import Tasks from '../Tasks/Tasks';
import AddTask from '../AddTask/AddTask';

import s from './Lists.module.scss';

function List({ name, tasks }) {
  return (
    <div className={s.list}>
      <div>
        <h2 className={s.list__title}>{name}</h2>
        <Tasks tasks={tasks} />
      </div>
      <AddTask />
    </div>
  );
}

export default List;
