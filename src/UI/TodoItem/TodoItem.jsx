import React, { forwardRef } from 'react'
import s from './TodoItem.module.css'
import { TodoBody } from './TodoItemChildren/TodoBody'
import { TodoDeleteButton } from './TodoItemChildren/TodoDeleteButton'

export const TodoItem = forwardRef(function TodoItem(props, ref) {
   return (
      <li className={s.todoItem} ref={ref}>
         <TodoBody
            id={props.id}
            title={props.title}
            date={props.date}
            isDone={props.isDone}
            markDoneTodo={props.markDoneTodo}
         />
         <TodoDeleteButton managingModalTodo={props.managingModalTodo} id={props.id} />
      </li>
   )
})
