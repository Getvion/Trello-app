import React from 'react';

import s from './Tasks.module.scss';

function Tasks({ tasks }) {
  return (
    <div className={s.tasks}>
      {tasks && tasks.length ? (
        tasks.map((task) => {
          return (
            <div key={task.id} className={s.task}>
              {task.text}
            </div>
          );
        })
      ) : (
        <div className={s.tasks__empty}>
          You hasn't tasks in this list, try to add add something
        </div>
      )}
    </div>
  );
}

export default Tasks;
