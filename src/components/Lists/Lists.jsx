import React, { useEffect, useState } from 'react';
import axios from 'axios';

import List from './List';
import AddList from '../AddList/AddList.jsx';

import s from './Lists.module.scss';

function Lists() {
  const [data, setData] = useState(null);

  useEffect(() => {
    try {
      axios.get('http://localhost:3001/lists').then(({ data }) => {
        setData(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const onAddList = (obj) => {
    const newData = [...data, obj];
    setData(newData);
  };

  return (
    <div className={s.lists__wrapper}>
      <div className={s.lists}>
        {data && data.length
          ? data.map((item) => {
              return <List key={item.id} name={item.name} tasks={item.tasks} />;
            })
          : null}
      </div>
      <AddList onAdd={onAddList} />
    </div>
  );
}

export default Lists;
