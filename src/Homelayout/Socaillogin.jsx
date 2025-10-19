import React from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const Socaillogin = () => {
    return (
        <div>
            <h1 className='font-bold mb-2'>Login with</h1>
            <button className='btn btn-secondary btn-outline  py-5 my-1 w-[230px]'>
              <FaFacebook size={"20px"}></FaFacebook>  Login with Faceook
            </button>



            <button className='btn btn-secondary btn-outline  py-5 my-1 w-[230px]'>
<FaGithub size={"20px"} ></FaGithub> Login with github
            </button>
        </div>
    );
};

export default Socaillogin;