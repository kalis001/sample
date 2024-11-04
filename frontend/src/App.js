import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Login from './Comp/Login';
// import Home from './Comp/Home/Home';
// import Navbars from './Comp/Navbar/Navbars';
// import Wbuilder from './Comp/Home/Wbuilder';
// import Wtemplate from './Comp/Home/Wtemplate';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
// import Fouvi from './Comp/Fouvi/Fouvi';
// import Contact from './Comp/Fouvi/Contact';
// import count from './Comp/Hook/USESTATE/Count';
// import Count from './Comp/Hook/USESTATE/Count';
// import Form from './Comp/Form/Form';
// import Blockhome from './Comp/Blockfriday/Blockhome';
// import Create from './Comp/axios/Create';
// import Update from './Comp/axios/Update';
// import Create from './Comp/axios/Create';
// import Fetchpost from './Comp/Fetchapi/Fetchpost';
// import Bank from './Comp/Hook/Parent,child props/Bank';
// import Child from './Comp/Hook/Parent,child props/Child';
// import Bankk from './Comp/Hook/Usecontext/Bankk';
// import Gmail from './Comp/Gmail/Gmail';
import Domacess from './Comp/Hook/UseRef/Domacess';
import Previous from './Comp/Hook/UseRef/Previous';
import Customhook from './Comp/Hook/customhook/Customhook';
import { Button } from '@mui/material';





function App() {
  return (
    <div className="App">

      <Routes>
        {/*         
        
        dynamic routing 
        <Route path='/s' element={<Navbars />}>
          <Route path='login' element={<Login />}></Route>
          <Route path='Home' element={<Home />}>  </Route>
          <Route path='Wbuilder'element={<Wbuilder />}></Route>
        </Route>  */}
        {/* <Route path='Wbuilder' element={<Wbuilder />}></Route> */}
        {/* <Route path='Wbuilder' element={<Wbuilder />}></Route> */}
        {/* </Route> */}



        {/* <Route path='/Home' element={<Home />}>
          <Route path='login' element={<Login />}></Route>
          <Route path='Wbuilder' element={<Wbuilder />}></Route>
        </Route>  */}


        {/* <Route path='/Home' element={<Home/>}></Route>
         <Route path='Wbuilder' element={<Wbuilder />}></Route> */}


        {/* <Route path='/create' element={<Create />}></Route> */}
        {/* <Route path='/update/:id' element={<Update />}></Route> */}



      </Routes>
      {/* <Fouvi></Fouvi> */}
      {/* <Contact></Contact>  */}
      {/* <Count></Count> */}
      {/* <Form></Form> */}
      {/* <Blockhome></Blockhome> */}
      {/* <Fetchpost></Fetchpost> */}
      {/* <Bank></Bank> */}
      {/* <Bank></Bank> */}
      {/* <Bankk></Bankk> */}
      {/* <Gmail></Gmail> */}
      {/* <Domacess/> */}
      {/* <Previous/> */}
      {/* <Customhook/> */}
      <Button variant='contained' color='error' size='large' sx={{fontSize:30}}>add student</Button>
     
    
   

    </div>

  );
}

export default App;