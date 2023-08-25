import '../CSS/index.css'
import '../CSS/Navbar.css'
import Logo from '../logo.png'
import { Link } from 'react-router-dom';

function Navbar() {
    
    return (
            
            <div className="nav1">
   
                {/* <div style={{backgroundcolor:'#1D3F6E'}}> */}
                
                {/* <br></br> */}
              
                <nav>
                    <ul>
                        <li>
                             <img src={Logo} alt=""/> 
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/gallery">Gallery</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/blogs">Blogs</Link>
                        </li>
                        <li>
                            <Link to="/contact">ContactUs</Link>
                        </li>
                        <li>
                            <Link to='/createUser'>SignUp</Link>
                        </li>
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                    </ul>
                </nav>
                {/* <br></br> */}
            </div>
            
    ) 
}

export default Navbar;