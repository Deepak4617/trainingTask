import { Outlet, Link } from 'react-router-dom'
const Layout = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="/home" >Home</Link>
                            <Link className="nav-link" to="/blog">Blog</Link>
                            <Link className="nav-link" to="/contact">Contact</Link>
                            <Link className='nav-link' to={"/login"} >Login</Link>
                            {/* <Link className='nav-link' to={"/"} >Products</Link> */}

                        </div>
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    )
}
export default Layout;