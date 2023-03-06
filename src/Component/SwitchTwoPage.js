//in App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Component/Home';
import Contact from './Component/Contact';
import Blog from './Component/Blog';
import Layout from './Component/Layout';
import NoPage from './Component/NoPage';
function App() {
  return (
   <>
    <Layout/>
    <Routes>
      <Route path='/'exact render={()=><Home/>}></Route>
      <Route path='contact' exact render={()=><Contact/>}></Route>
      <Route path='blog' element={<Blog/>}></Route>
      <Route path='layout' element={<Layout/>}></Route>
      <Route path='*' element={<NoPage/>}></Route>
    </Routes>
    </>
     );
}
export default App;

//Home.js
/*mport { Outlet, Link } from "react-router-dom";
import React from "react";
const Home = () => {
    return  <>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/contact">Contact</Link>
         
        </li>
        <li>
        <Link to="/blog">Blog</Link>
        </li>
        <li>
        <Link to="/layout">Layout</Link>
        </li>
        <li>
        <Link to="/nopage">NoPage</Link>
        </li>
      </ul>
    </nav>

    <Outlet />
  </>;
  };
  
 export default Home;



 //contact.js
 import React from "react";
 const Contact = () => {
    return <h1>Contact Me</h1>;
  };
 export default Contact;

 //same as Blog & Nopage

 //layout.js
import React from "react";
const Layout = () => {
    return <h1>Layout Page</h1>;
  };
  
  export default Layout;


//index.js
import { BrowserRouter } from 'react-router-dom';
<React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
</React.StrictMode>*/