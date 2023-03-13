import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { useTodo } from './BLL/MainLogic.js'
import './styles/App.css'
import './styles/reset.css'
import { Background } from './UI/Background/Background'
import { Filter } from './UI/Filter/Filter'
import { MainInput } from './UI/MainInput/MainInput'
import { Modal } from './UI/Modal/Modal'
import { TodoItem } from './UI/TodoItem/TodoItem'
import s from './UI/TodoItem/TodoItem.module.css'

function App() {
   const {
      todo,
      setTodo,
      checked,
      visibleModal,
      setVisibleModal,
      modalRef,
      addTodo,
      deleteTodo,
      managingModalTodo,
      markDoneTodo,
      changingDisplayedTodos,
      filteredTodos,
   } = useTodo()

   const todosItems = filteredTodos.map((todo, index) => (
      <CSSTransition
         key={todo.id}
         timeout={300}
         classNames={{
            enterActive: s.todoItemEnterActive,
            exitActive: s.todoItemExitActive,
         }}
         nodeRef={todo.nodeRef}
      >
         <TodoItem
            managingModalTodo={managingModalTodo}
            index={index}
            ref={todo.nodeRef}
            title={todo.title}
            id={todo.id}
            deleteTodo={deleteTodo}
            markDoneTodo={markDoneTodo}
            isDone={todo.isDone}
            date={todo.date}
         />
      </CSSTransition>
   ))

   return (
      <div className='wrapper'>
         <Filter changingDisplayedTodos={changingDisplayedTodos} checked={checked} />
         <div className='todo'>
            <MainInput value={todo} onChange={setTodo} addTodo={addTodo} />
            <TransitionGroup component='ul' className='todo__list'>
               {todosItems}
            </TransitionGroup>
            <Modal
               visibleModal={visibleModal}
               setVisibleModal={setVisibleModal}
               text='You sure?'
               deleteTodo={deleteTodo}
               id={modalRef.current}
            />
         </div>
         <Background />
      </div>
   )
}

export default App
