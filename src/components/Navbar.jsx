import React, { useContext } from 'react';
import { NavLink } from 'react-router';
import user1 from '../assets/user.png'
import { AuthContext } from '../routes/Provider/AuthProvider';
const Navbar = () => {
    const {user,logOut} = useContext(AuthContext)
    console.log(user)
    const handlelogout  =()=>{
logOut().then(()=>{alert('You have logged out')})
    }
    return (
        <div className='flex gap-5 justify-between items-center mx-[233px] '>
            <div className="">{user? user.email: " "}</div>
            <div className="nav flex gap-5 ">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className="login-btn gap-5 flex">
                
                <img src={user1} alt="" />
                {user? (<button onClick={handlelogout} className='btn btn-primary px-10'>Log out</button>):  <NavLink to={"auth/login"}>
                 <button  className="btn btn-primary px-10">Login</button>
                 </NavLink>
               }
              
               </div>

        </div>
    );
};

export default Navbar;