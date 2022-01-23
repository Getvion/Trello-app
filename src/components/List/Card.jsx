import React from 'react';

import { Draggable } from 'react-beautiful-dnd';

import s from './List.module.scss';

export default function Card({ card, index }) {
  return (
    <Draggable draggableId={card.id} index={index}>
      {(provided) => {
        return (
          <div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
            <p className={s.card}>{card.title}</p>
          </div>
        );
      }}
    </Draggable>
  );
}
