import Home from "./Component/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Login from './Component/Shared/Login/Login';
import HeaderNav from './Component/Shared/HeaderNav/HeaderNav.jsx';
import MyTask from './Component/MyTask/MyTask.jsx';
import RequireAuth from "./Component/RequireAuth/RequireAuth";
import AddTask from "./Component/AddTask/AddTask";

function App() {
  return (
    <>
      <HeaderNav/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/add-task' element={
          <RequireAuth>
            <AddTask/>
          </RequireAuth>
        }></Route>
        <Route path="/my-task" element={<MyTask/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </>
  );
}

export default App;
