

/*import Blog from './Component/Blog';
import NoPage from './Component/NoPage';
import Layout from './Component/Layout';
import Parameter from './Component/Parameter';
import Query from './Component/Query';
<Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='contact' render={()=><Contact/>}></Route>
      <Route path='blog' element={<Blog/>}></Route>
      <Route path='layout' element={<Layout/>}></Route>
      <Route path='parameter/:id/:name' element={<Parameter/>}></Route>
      <Route path='parameter/:id/:name' element={<Parameter/>}></Route>
      <Route path='query' element={<Query/>}></Route>
      <Route path='*' element={<NoPage/>}></Route>
      </Routes>*/
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Navigatation from './Component/Navigation';
import Home from './Component/rr';
import Contact from './Component/ss';

function App() {
  return (
   <>
    <div>
      <Routes>
      <Route path='/HOME' element={<Home/>}></Route>
      <Route path='/CONTACT' element={<Contact/>}></Route>
      </Routes>
      <Navigatation/>
    </div>
   </>
     
   
    
  );
}

export default App;
