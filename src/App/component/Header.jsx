import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../Assets/img/Logo.png'
import ProfileLogo from '../../Assets/img/profile-Logo.png'
import User from '../../Assets/img/User.png'
import MenuIcon from '@material-ui/icons/Menu';
function Header(props) {
    const HandleSidebar=e=>{
        let Sidebar=document.querySelector(".header-content .right-area");
        Sidebar.classList.toggle("active")
    }
    return (
        <div className="header">
            <nav className="header-content w-85 d-flex-align-center">
                <Link className="logo" to="/">
                    {props.active=="profile"?(
  <img src={ProfileLogo} alt="" />
                    ):(
                        <img src={logo} alt="" />
                    )}
                   
                  
                </Link>

                <ul className="right-area d-flex-align-center">
                    <li>
             <Link to="/search">
             <svg xmlns="http://www.w3.org/2000/svg" width="24.731" height="24.731" viewBox="0 0 24.731 24.731">
  <g id="Icon_feather-search" data-name="Icon feather-search" transform="translate(-3 -3)" opacity="0.406">
    <path id="Path_1" data-name="Path 1" d="M23.264,13.882A9.382,9.382,0,1,1,13.882,4.5a9.382,9.382,0,0,1,9.382,9.382Z" transform="translate(0 0)" fill="none" stroke="#171717" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
    <path id="Path_2" data-name="Path 2" d="M30.077,30.077l-5.1-5.1" transform="translate(-4.467 -4.467)" fill="none" stroke="#171717" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
  </g>
</svg>

</Link>
                    </li>
                    <li>
                        <Link>
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link>
                        Directory

                        </Link>
                    </li>
                    <li>
                        <Link>
                        Help 
                        </Link>
                    </li>
                    <li>
                        <Link>
                        About us
                        </Link>
                    </li>
                    {props.active!="profile"&&(
                        <>
                           <li >
                        <Link  className="btn  btn-success-outline d-flex-align-center">
                        Log in 
                        </Link>
                    </li>
                    <li >
                        <Link className="btn  btn-success  d-flex-align-center">
                        Sign up
                        </Link>
                    </li>
                        </>
                    )}
                 
                 {props.active=="profile"&&(
                     <li className="d-flex-align-center profile-area-header">
                         <p>My account</p>
                            <img src={User} alt="" />
                     </li>


                 )}

               
                </ul>
                <div className="burger-icon" onClick={HandleSidebar}>
               
               <MenuIcon/>
            </div>
            </nav>
        </div>
    )
}

export default Header
