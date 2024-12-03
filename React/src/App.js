import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
// import { Link, Route, Routes } from 'react-router-dom'
// import './Components/Index.css'
// import Child from './Components/Props/Child';
// import Useeffect from './Components/Hooks/useeffect/useeffect';
// import Exercise1 from './Components/Hooks/useeffect/Exercise1';
// import Form from './Components/Form/Form';
// import Getform from './Components/Form/Getform';
// import Exform from './Components/exercise/Exform';
// import Exformget from './Components/exercise/Exformget';
// import Putform from './Components/put-and-delete/Putform';
// import Routerpage from './Components/Routerpage';
// import User from './Components/Exercise-up-del/User';
// import Postdata from './Components/Form-final-ex/Postdata';
// import Routerform from './Components/Form-final-ex/Routerform';
// import DataContext from './Components/Hooks/Context/DataContext';
// import Counter from './Components/Hooks/useReducer/Counter';
// import Counterex from './Components/Hooks/useReducer/Counterex';
import Axiosrouter from './Components/Axios/Axiosrouter';
import Login from './Components/Axios/Login';

function App() {
  return (
    <div>
      {/* <Login></Login> */}
      <Axiosrouter/>
      {/* <Counterex/> */}
      {/* <Counter/> */}
      {/* <DataContext /> */}
      {/* <Routerpage/> */}

      {/* <User></User> */}

      {/* <Routerform></Routerform> */}

      {/* <Form/>
      <Getform/> */}
      {/* <Useeffect/>
      <Exercise1/> */}
      
      {/* <Child /> */}

      {/* <About/>
      <Index/> */}

      {/* <Link to='/about'>About</Link>
      <Link to='/'>Index</Link>
      <Link to='/home'>Home</Link>
      <Link to='/movies/new'>NEWMOVIE</Link>
      <Link to='/movies/old'>OLD-MOVIE</Link>
      <Link to='/user/1'>User-1</Link>
      <Link to='/user/2'>User-2</Link>
      <Link to='/user/3'>User-3</Link>

      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/about' element={<About />} />
        <Route path='/home' element={<Home />} />
        <Route path='/user/:id' element={<User />} />
        <Route path='/movies'>
          <Route path='new' element={<New />} />
          <Route path='old' element={<Old />} />
        </Route>
      </Routes> */}

    </div>
  );
}

export default App;
