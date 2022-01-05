import React from 'react';

import List from './List';
import AddList from '../AddList/AddList.jsx';

import s from './Lists.module.scss';

function Lists({ data }) {
  return (
    <div className={s.lists__wrapper}>
      <div className={s.lists}>
        {data.lists.map((item) => {
          return <List key={item.id} name={item.name} tasks={item.tasks} />;
        })}
      </div>
      <AddList />
    </div>
  );
}

export default Lists;
