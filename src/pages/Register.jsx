import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../routes/Provider/AuthProvider';

const Register = () => {
    const {createUser,setUser} =use(AuthContext)
    const handleregister=(e)=>{
        e.preventDefault();
        const email =e.target.email.value
        const pass =e.target.password.value

        console.log(email,pass);
        createUser(email,pass).then((result)=>{
            const user =result.user;
            console.log(user);
           setUser(user)
        }
        ).catch((error)=>{
            alert(error)
        })
        
        
    }
    return (
        <div>
             <div className="hero bg-base-200  mx-auto ml-19 ">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      
    </div>
    <div className="card bg-base-100 w-[300px]  shadow-2xl">
        <h2 className='text-lg text-center pt-3'>Register your account</h2>
      <div className="card-body">
        <form onSubmit={handleregister}>  
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input 
          required
          name='email' 
          type="email" 
          className="input" 
          placeholder="Email" />

          <label className="label">Password</label>

          <input 
          required
          name="password" 
          type="password" 
          className="input" 
          placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        </form>
        <div className='flex justify-center'>
            <h1>Already have an account? </h1><Link to={"/auth/login"}  ><h1 className='text-secondary'>Login</h1></Link>
        </div>
        
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;