import { Link } from "react-router-dom";
import './Market.css'

function Market(props){
   
return(
    <tr > 
        <td>{props.itemTeacher.id}</td>        
        <td> {props.itemTeacher.username} </td>
        <td> {props.itemTeacher.password} </td>
        <td>{props.itemTeacher.status}</td>        
        <td><Link to={`/updateteacher/${props.itemTeacher.id}`}>CAMBIAR DATOS</Link></td>
        
    </tr>
);

}
export default Market