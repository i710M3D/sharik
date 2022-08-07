import { Link } from "react-router-dom";

const Btn = () => {
    return ( 
        <div>
            <Link to='/'>
            <button type="button" className="font-[600] text-xl cursor-pointer block w-full mt-4  " >Login</button>
            </Link>
        </div>
     );
}
 
export default Btn;