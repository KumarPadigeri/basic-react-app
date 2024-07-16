import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 

        <div className="not-found">
            <h2>oops....</h2>
            <p>The page can't be found</p>
            <Link to="/">Back to home page...</Link>
        </div>
     );
}
 
export default NotFound;