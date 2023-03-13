import { createRef, useEffect, useRef, useState } from 'react'

export function useTodo() {
   const savedTodos = JSON.parse(localStorage.getItem('todos')) || []
   const loadedTodos = savedTodos.map(({ title, id, isDone, date }) => ({
      title,
      id,
      isDone,
      date,
      nodeRef: createRef(),
   }))

   const [todo, setTodo] = useState('')
   const [todos, setTodos] = useState(loadedTodos)
   const [checked, setChecked] = useState('all')
   const [visibleModal, setVisibleModal] = useState(false)
   const modalRef = useRef(null)

   useEffect(() => {
      const todosToSave = todos.map(({ title, id, isDone, date }) => ({ title, id, isDone, date }))
      localStorage.setItem('todos', JSON.stringify(todosToSave))
   }, [todos])

   const addTodo = e => {
      if ((e.key === 'Enter' || e.target.className.includes('addButton')) && todo.trim() !== '') {
         const newTodo = {
            title: todo,
            id: Math.random(),
            isDone: false,
            date: new Date().toLocaleDateString(),
            nodeRef: createRef(null),
         }
         setTodos([newTodo, ...todos])
         setTodo('')
      }
   }

   const deleteTodo = id => {
      setTodos(todos.filter(todo => todo.id !== id))
      setVisibleModal(false)
   }

   const managingModalTodo = target => {
      setVisibleModal(true)
      modalRef.current = target
      console.log(modalRef)
   }

   const markDoneTodo = id => {
      const newTodos = [...todos]
      const todoToUpdate = newTodos.find(todo => todo.id === id)
      todoToUpdate.isDone = !todoToUpdate.isDone
      setTodos(newTodos)
   }

   const changingDisplayedTodos = e => setChecked(e.target.value)

   const filteredTodos = todos.filter(todo => {
      switch (checked) {
         case 'active':
            return !todo.isDone
         case 'completed':
            return todo.isDone
         default:
            return true
      }
   })

   return {
      todo,
      setTodo,
      todos,
      setTodos,
      checked,
      setChecked,
      visibleModal,
      setVisibleModal,
      modalRef,
      addTodo,
      deleteTodo,
      managingModalTodo,
      markDoneTodo,
      changingDisplayedTodos,
      filteredTodos,
   }
}
