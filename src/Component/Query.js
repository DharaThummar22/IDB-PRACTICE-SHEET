import React from "react";
import { Link,useLocation } from "react-router-dom";

const Child=({name})=>{
    return(
        <div>
                { name ?(
                        <h3>The language <code>name</code> is <strong>{name}</strong></h3>
                ) : (
                       <h3>Invalid Language Name</h3>
                )}
        </div>
    )
}

function useQuery()
{
    return new URLSearchParams(useLocation().search);
}
const Query=()=>{
    let query=useQuery();
    return(
        <>
        <div>
            <h2>Language</h2>
            <ul>
                <li>
                    <Link to ="language?name=oracle">Oracle</Link>
                </li>
                <li>
                    <Link to ="language?name=JAVA">Java</Link>
                </li>
                <li>
                    <Link to="lanuage?name=PHP">Php</Link>
                </li>
            </ul>
            <Child name={query.get("name")}/>
        </div>
        </>
    );
}
export default Query;