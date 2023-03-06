import { Outlet,NavLink} from "react-router-dom";
import React from "react";
const Home = () => {
    return  <>
    <nav>
      <ul>
        <li>
          <NavLink to="/" activeClassName="active-link" >Home</NavLink>
        </li>
        <li>
        <NavLink to="/contact" activeClassName="active-link">Contact</NavLink>
         
        </li>
        <li>
        <NavLink to="/blog" activeClassName="active-link">Blog</NavLink>
        </li>
        <li>
        <NavLink to="/layout" activeClassName="active-link">Layout</NavLink>
        </li>
        <li>
        <NavLink to="/parameter" activeClassName="active-link">Parameter</NavLink>
        </li>
        <li>
        <NavLink to="/query" activeClassName="active-link">Query</NavLink>
        </li>
        <li>
        <NavLink to="/nopage" activeClassName="active-link">NoPage</NavLink>
        </li>
        
        
      </ul>
    </nav>

    <Outlet />
  </>;
  };
  
 export default Home;