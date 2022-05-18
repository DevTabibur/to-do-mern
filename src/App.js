import Home from "./Component/Home/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Login from './Component/Shared/Login/Login';
import HeaderNav from './Component/Shared/HeaderNav/HeaderNav.jsx';
import MyTask from './Component/MyTask/MyTask.jsx';

function App() {
  return (
    <>
      <HeaderNav/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="my-task" element={<MyTask/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </>
  );
}

export default App;
