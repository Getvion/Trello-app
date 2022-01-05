import React from 'react';

import s from './Tasks.module.scss';

function Task({ task }) {
  return <div className={s.task}>{task}</div>;
}

export default Task;
