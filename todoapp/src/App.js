import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
// import Fetchposts from './Fetchapi/Fetchpost';
// import Conditinal from './Component/Conditinal';
// import Login from './Component/Login';
// import Navbar from './Component/Navbar';
// import Count from './Component/hook/Count';
// import Form from './Component/Form/Form';
// import Create from './Component/axios/Create';
// import Update from './Component/axios/Update';
// import Banks from './Component/hook/useContext/Bank';
// import Domaccess from './Component/hook/useRef/Doaccess';
// import Previous from './Component/hook/useRef/Previous';
import Usefetch from './Component/hook/Customhook/Usefetch';
import Customhook from './Component/hook/Customhook/Customhook';

function App() {

  return (
    <div className="App">
      {/* <h1>App page</h1> */}
      <Routes>
      {/* <Routes>
        <Route path='/' element={<Navbar />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes> */}
      
      {/* <Route path='/create' element={<Create/>}></Route> */}
      {/* <Route path='/update/:id' element={<Update/>}></Route> */}
      
      </Routes>
      {/* <Routes></Routes> */}
      {/* <Count></Count> */}
      {/* <Form></Form> */}
      {/* <Fetchposts></Fetchposts> */}
      {/* <Conditinal/> */}
      {/* <Create></Create> */}
      {/* <Banks></Banks> */}
      {/* <Domaccess/> */}
      {/* <Previous/> */}
      <Usefetch/><Customhook/>

    </div>

  );
}

export default App;
