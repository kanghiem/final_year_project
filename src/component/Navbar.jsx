import React from 'react'
import { NavLink } from 'react-router-dom'
// import SearchPage from '../page/Search'



const Navbar = () => {
  return (
    <div className='navBar--Content '>
        <div className="navBarItem">
        <h1 className='font-logoFont text-4xl font-extrabold m-3 p-3 cursor-pointer'>Fotify</h1>
        <ul>
            {/* Logo Nav */}
            {/* <li className='font-logoFont text-4xl font-extrabold'>
                <NavLink to={"/"}>Fotify</NavLink>
            </li> */}

            {/* Home Nav */}
            <li className='li--navBar'>
                <NavLink to={"/"}
                    className={(isActive)=>{
                        return isActive ? "font-bold" : ""
                    }}
                >

                <i class="fa-light fa-house-chimney-crack icon--navBar"></i>
                Home
                
                </NavLink>
            </li>

            {/* Search Nav */}
            <li className='li--navBar'>
            <i class="fa-sharp fa-regular fa-magnifying-glass icon--navBar"></i>
            Search

            {/* <SearchPage></SearchPage> */}
                {/* <NavLink to={"/search"}>
                <i class="fa-sharp fa-regular fa-magnifying-glass icon--navBar"></i>
                Search
                </NavLink> */}
            </li>

            {/* Explore Nav */}
            <li className='li--navBar'>
                <NavLink to={"/explore"}>
                <i class="fa-sharp fa-solid fa-compass icon--navBar"></i>
                Explore
                </NavLink>
            </li>

            {/* Notifications Nav */}
            <li className='li--navBar'>
                <NavLink to={"/notifications"}>
                <i class="fa-sharp fa-light fa-heart icon--navBar"></i>
                Notifications
                </NavLink>
            </li>

            {/* Create Nav */}
            <li className='li--navBar'>
                <NavLink to={"/create"}>
                <i class="fa-thin fa-square-plus icon--navBar"></i>
                Create
                </NavLink>
            </li>

            {/* Saved Nav */}
            {/* <li className='li--navBar'>
                <NavLink to={"/saved"}>
                <i class="fa-light fa-bookmark icon--navBar"></i>
                Saved
                </NavLink>
            </li> */}

            {/* Profile Nav */}
            <li className='li--navBar'>
                <NavLink to={"/profile"}>
                <i class="fa-light fa-user icon--navBar"></i>
                Profile
                </NavLink>
            </li>

            {/* More Nav */}
            <li className='li--navBar'>
                <NavLink to={"/more"}>
                <i class="fa-sharp fa-light fa-bars icon--navBar"></i>
                More
                </NavLink>
            </li>
            
        </ul>
        </div>
          
    </div>
  )
}

export default Navbar