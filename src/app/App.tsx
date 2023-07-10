import { Form } from '../widgets/Form'
import { TodoList } from '../entities/todo'

const App = () => {
  return (
    <>
      <Form />
      <h1 className='title'>Todo List</h1>
      <TodoList />
    </>
  )
}
export default App
