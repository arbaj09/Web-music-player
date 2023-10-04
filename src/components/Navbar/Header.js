
import Bottom from "../Bottom/buttom";
import './Header.css'
import { Outlet, Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import { SiApplemusic } from "react-icons/si";

const Header= ()=>{
    const { loginWithRedirect,logout,isAuthenticated  ,isLoading,user} = useAuth0();
    if (isLoading) {
        return <div className="">
            <div className="Loading"></div>
        </div>;
      }
    return  <><div className="Navbr-Container">
        <nav className="Nav">

            <ul className="List">
                <SiApplemusic className='logo' />
                <li>Web music player</li>
                <Link  to='/about'> <li className="abt">About</li></Link>
            </ul>
            {isAuthenticated&&(
                <div className="UserProfile">
                    <img src={user.picture } alt={user.name}/>
                    <h2>{user.name}</h2>
                </div>
            )}
         
            

        </nav>
        <div className="Auth-Ican">{isAuthenticated ?(
        <button onClick={() => loginWithRedirect()}>Log In</button>)
        :
        (<button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>)}
        </div>


    </div>

    <Outlet />
    <Bottom/></>

}
export default Header;