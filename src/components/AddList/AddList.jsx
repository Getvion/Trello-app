import React from 'react';

import s from './AddList.module.scss';

function AddList(props) {
  return (
    <div className={s.addList}>
      <button> Add new List</button>
    </div>
  );
}

export default AddList;
