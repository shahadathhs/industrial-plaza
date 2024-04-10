import { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContest } from "../../Providers/AuthProviders";
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
  const { createUser, updateUserProfile, logOut } = useContext(AuthContest);
  const [passwordError,setPasswordError] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // navigation systems
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";

  const onSubmit = (data) => {
    const { email, password, image, name } = data;

    if(password.length<6){
      setPasswordError("Password must be 6 characters")
      return
    }

    if(!/[A-Z]/.test(password)){
      setPasswordError("Password must have at least 1 Uppercase letter")
      return
    }
    
    if(!/[a-z]/.test(password)){
      setPasswordError("Password must have at least 1 Lowercase letter")
      return
    }

    setPasswordError('')
      
    //create user and update profile
    createUser(email, password)
      .then(() => {
        logOut();
        toast.success('Register successful!');
        updateUserProfile(name, image)
          .then(() => {
            navigate(from);
          });
      })
      .catch(error=> setPasswordError(error.message))
  };

  return (
    <div className="bg-base-200 py-3 lg:py-6 my-5">
      <p className="text-center pb-3 text-2xl text-blue-500 font-bold">Register Here</p>
      <div className="rounded-xl mx-auto p-5 w-4/5 md:w-1/2 lg:w-1/3 bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg text-orange-500 font-medium">Name</span>
            </label>
            <input 
            type="text" name="name" placeholder="Your Full Name" 
            className="input input-bordered"  
            {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg text-orange-500 font-medium">Email</span>
            </label>
            <input 
            type="email" name="email" placeholder="Your Email" 
            className="input input-bordered" 
            {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg text-orange-500 font-medium">Photo URL</span>
            </label>
            <input 
            type="text" name="photoURL" placeholder="Your Photo URL" 
            className="input input-bordered"
            {...register("image")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg text-orange-500 font-medium">Password</span>
            </label>
            <input 
            type="password" name="password" placeholder="Password" 
            className="input input-bordered"
            {...register("password", { required: true })} 
            />
            {errors.password && (
              <span className="text-red-500">This field is required</span>
            )}
            {
              passwordError && <small className='text-red-800'>{passwordError}</small>
            }
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-outline border-2 text-orange-500 hover:bg-blue-500 hover:border-0">Register</button>
          </div>
          <div className="pt-2">
            <p>Already have an account? Login <Link to="/login" className="text-violet-600 font-medium">here</Link> </p>
          </div>
        </form>
        <Toaster />
      </div>
    </div>
  );
};

export default Register;