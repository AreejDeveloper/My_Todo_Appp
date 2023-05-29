import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Todo from './Component/todo';
import MainPage from './Component/mainPage';
import UpdateTodo from './Component/UpdateTodo';
import EditAllTodo from './Component/edit';
import store from './store/store';
import { Provider } from 'react-redux';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <Routes>
        <Route exact ={true.toString()} path='/' element ={<MainPage/>}></Route>
          <Route exact ={true.toString()} path='/todo' element ={<Todo/>}></Route>
          <Route exact ={true.toString()} path='/updateTodo' element ={<UpdateTodo/>}>
            <Route exact ={true.toString()} path='editTodo/:taskId' element ={<EditAllTodo/>}></Route> 
          </Route>
        </Routes>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
