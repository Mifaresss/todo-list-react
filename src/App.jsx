import React, { useState } from 'react';
import './App.css';
import { Filter } from './Elements/Filter';
import { MyInput } from './Elements/MyInput';
import { NoTask } from './Elements/NoTask';
import { TodoItem } from './Elements/TodoItem';

function App(props) {
   const [todo, setTodo] = useState('');
   const [todos, setTodos] = useState(props.state.initTodos);
   const [checked, setChecked] = useState('all');

   const addTodo = e => {
      if ((e.key === 'Enter' || e.target.className === 'todo__add-button') && todo.trim() !== '') {
         const newTodo = { title: todo, id: Math.random(), isDone: false };
         setTodos([...todos, newTodo]);
         setTodo('');
      }
   };

   const deleteTodo = id => setTodos(todos.filter(todo => todo.id !== id));

   const markDoneTodo = (e, id) => {
      console.log(e.target);
      setTodos(
         todos.map(item => {
            if (item.id === id) item.isDone = !item.isDone;
            return item;
         })
      );
   };

   const changingDisplayedTodos = e => setChecked(e.target.value);

   const filteredTodos = todos.filter(todo => {
      switch (checked) {
         case 'active':
            return !todo.isDone;
         case 'completed':
            return todo.isDone;
         default:
            return true;
      }
   });

   const todosItems =
      filteredTodos.length !== 0 ? (
         filteredTodos.map(todo => (
            <TodoItem
               title={todo.title}
               key={todo.id}
               id={todo.id}
               deleteTodo={deleteTodo}
               markDoneTodo={markDoneTodo}
               isDone={todo.isDone}
            />
         ))
      ) : (
         <NoTask />
      );

   return (
      <div className='wrapper'>
         <Filter changingDisplayedTodos={changingDisplayedTodos} checked={checked} />
         <div className='todo'>
            <MyInput value={todo} onChange={setTodo} addTodo={addTodo} />
            <ul className='todo__list'>{todosItems}</ul>
         </div>
         <div className='wave wave1'></div>
         <div className='wave wave2'></div>
         <div className='wave wave3'></div>
         <div className='wave wave4'></div>
         <ul className='circles'>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
         </ul>
      </div>
   );
}

export default App;
