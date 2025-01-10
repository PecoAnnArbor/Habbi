import "./NavBar.css";
import habbiLogo from '../../assets/habbi_logo_transparent.png';


const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light px-5">
            <img className="navbar-brand logo" src={habbiLogo} alt="Habbi Logo" />
            {/* <a className="navbar-brand" href="#">Habbi</a> */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Product</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Mission</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                    </ul>
                </div>
                <form className="form-inline my-2 my-lg-0">
                    <button className="btn my-2 my-sm-0 login" type="submit">Login</button>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Sign Up</button>
                </form>
            </nav>
        </>
    )
}

export default NavBar;