import { useParams } from "react-router-dom";

const Parameter = () => {
    const { id ,name} = useParams();
    return (
        <div>
            <h1>Parameter Example</h1>
            <h2>Employee Detail-{id}  {name && <b>({name})</b> }  </h2>
        </div>
    );
}
export default Parameter;