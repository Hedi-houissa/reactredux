import './App.css';
import AddTask from './component/AddTask';
import FilterTask from './component/FilterTask';

function App() {

// const todoList = useSelector(state => state.reducer.todoList);

  return (
    <div className="App">

      <AddTask/>

    
      <FilterTask />

    
      
      
    </div>
  );
}

export default App;
