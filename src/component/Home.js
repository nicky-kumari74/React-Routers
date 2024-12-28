import { Link, useNavigate } from "react-router-dom"

function Home(){
    const navi=useNavigate();
    const Navtopage=(url)=>{
        navi(url)
    }
    return(
        <>
        <h1>Home page.</h1>
        <Link to="/user/nicky" >Nicky</Link><br></br>
        <Link to="/user/ajay" >Ajay</Link>
        <button onClick={()=>Navtopage('/about')}>go to about page</button>
        <button onClick={()=>Navtopage('/contact')}>go to contact page</button>
        </>
    )
}
export default Home