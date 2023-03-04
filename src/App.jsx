import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';
import { Filter } from './Elements/Filter';
import { MyInput } from './Elements/MyInput';
import { TodoItem } from './Elements/TodoItem';

function App(props) {
   const [todo, setTodo] = useState('');
   const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || props.state.initTodos);
   const [checked, setChecked] = useState('all');
   localStorage.setItem('todos', JSON.stringify(todos));

   const addTodo = e => {
      if ((e.key === 'Enter' || e.target.className === 'todo__add-button') && todo.trim() !== '') {
         const newTodo = { title: todo, id: Math.random(), isDone: false };
         setTodos([newTodo, ...todos]);
         setTodo('');
      }
   };

   const deleteTodo = id => setTodos(todos.filter(todo => todo.id !== id));

   const markDoneTodo = (e, id) => {
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

   const todosItems = filteredTodos.map(todo => (
      <CSSTransition key={todo.id} timeout={300} classNames='todo__item'>
         <TodoItem title={todo.title} id={todo.id} deleteTodo={deleteTodo} markDoneTodo={markDoneTodo} isDone={todo.isDone} />
      </CSSTransition>
   ));

   return (
      <div className='wrapper'>
         <Filter changingDisplayedTodos={changingDisplayedTodos} checked={checked} />
         <div className='todo'>
            <MyInput value={todo} onChange={setTodo} addTodo={addTodo} />
            <TransitionGroup component={'ul'} className='todo__list'>
               {todosItems}
            </TransitionGroup>
         </div>
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
