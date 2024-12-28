import { Link, Outlet } from "react-router-dom";

function Contact(){
    return(
        <div>
            <h1>Contact us page</h1>
            <h2>here we have some other business</h2>
            <Link to="company">Company</Link><br></br>
            <Link to="channel">Channel</Link>
            <Outlet />
        </div>
    )
}
export default Contact;