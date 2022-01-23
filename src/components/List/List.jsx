import React from 'react';
import { Droppable, Draggable } from 'react-beautiful-dnd';

import Card from './Card';
import InputCard from '../Input/InputCard';

import s from './List.module.scss';

function List({ list, index }) {
  return (
    <div className={s.listWrapper}>
      <Draggable draggableId={list.id} index={index}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
            <div className={s.root}>
              <h3 className={s.title}>{list.title}</h3>
              <Droppable droppableId={list.id}>
                {(provided) => {
                  return (
                    <div
                      className={s.cardContainer}
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      {list.cards.map((card, index) => (
                        <Card key={card.id} card={card} index={index} />
                      ))}
                      {provided.placeholder}
                    </div>
                  );
                }}
              </Droppable>
              <InputCard listId={list.id} type='card' />
            </div>
          </div>
        )}
      </Draggable>
    </div>
  );
}

export default List;
