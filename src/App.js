import './App.css';
import Navbar from './Navbar/Navbar';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Home from  "./Home/Home";
import UpdateStudent from './UpdateStudent/UpdateStudent';
import AddStudent from './AddStudent/AddStudent';
import FindStudent from './FindStudent/FindStudent';


function App(props) {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
        <Route exact path="/" element={<Home/>} />  
        <Route path="/update" element={<UpdateStudent/>} />  
        <Route path="/add" element={<AddStudent/>} />  
        <Route path="/findStudent" element={<FindStudent/>} />  
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}
export default App;
