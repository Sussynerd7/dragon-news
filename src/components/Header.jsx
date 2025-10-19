import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='flex mt-8 justify-center flex-col items-center mb-5 gap-3'>
           <img className='w-[350px] mx' src={logo} alt="" />
           <h1>Journalism without fear or favour</h1>
           <p className='font-semibold'>{format(new Date(),"EEEE,MMMM MM,yyyy")}</p>
        </div>
    );
};

export default Header;