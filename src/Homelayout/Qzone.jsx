import React from 'react';
import swimmingimage from "../assets/swimming.png"
import Playimage from "../assets/class.png"
import CLassimage from "../assets/playground.png"
const Qzone = () => {
    return (
        <div className='bg-base-200 p-3 rounded-md'>
            <h1 className='font-bold mb-5'>Qzone</h1>
            <div className="">
                <img src={swimmingimage} alt="" />
                <img src={CLassimage} alt="" />
                <img src={Playimage} alt="" />
            </div>
        </div>
    );
};

export default Qzone;