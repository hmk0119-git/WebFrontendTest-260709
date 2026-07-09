import { useEffect } from 'react'
import { useTodoStore } from '@/stores/todo'
import TodoItem from './TotoItem'

export default function TodoList() {
  const todos = useTodoStore(s => s.todos)
  const fetchTodos = useTodoStore(s => s.fetchTodos)

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <>
      <ul className="max-w-[500px]">
        {todos.map(todo => {
          //map method return 안에 key가 있어야 함.
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
            />
          )
        })}
      </ul>
    </>
  )
}
