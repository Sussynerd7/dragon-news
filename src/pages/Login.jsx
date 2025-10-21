import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div>
           <div className="hero bg-base-200  mx-auto ml-19 ">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      
    </div>
    <div className="card bg-base-100 w-[300px]  shadow-2xl">
        <h2 className='text-lg text-center pt-3'>login your account</h2>
      <div className="card-body">
        <form>  
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        </form>
        <div className='flex justify-center'>
            <h1>Dont't have an account? </h1><Link to={"/auth/register"}><h1 className='text-secondary'>Register</h1></Link>
        </div>
        
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;