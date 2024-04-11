import { useContext } from "react";
import { Link, useNavigate, useLocation} from "react-router-dom";
import { AuthContest } from "../../Providers/AuthProviders";
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import { FaArrowRight } from "react-icons/fa";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const UpdateProfile = () => {
  const {  user, logOut, updateUserProfile } = useContext(AuthContest);
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  // navigation systems
  const navigate = useNavigate();
  const location = useLocation();
  const fromUpdate = location?.state || "/login";

  // handle profile update
  const onSubmit = data => {
    const { name, image } = data;

      updateUserProfile(name, image)
        .then(() => {
          logOut();
          toast.success('Profile Update successful!');
          navigate(fromUpdate);
        })
        .catch(() => {
          toast.error('Profile Update unsuccessful!');
        })
  };

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>IP | Profile Update</title>
        </Helmet>
        <div className="bg-gray-100 px-2 md:px-3 lg:px-12 py-2 md:py-3 lg:py-6 my-4 space-y-3">
          <p className="text-center text-2xl text-blue-500 font-bold">Update your profile Here</p>
          <div className="rounded-xl mx-auto p-5 w-[300px] md:w-[450px] bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-orange-500 font-medium">Name</span>
                </label>
                <input 
                type="text" name="name" placeholder={user.displayName}
                className="input input-bordered"  
                {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg text-orange-500 font-medium">Photo URL</span>
                </label>
                <input 
                type="text" name="photoURL" placeholder={user.photoURL
                } 
                className="input input-bordered"
                {...register("image", { required: true })}
                />
                {errors.image && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-outline border-2 text-orange-500 hover:bg-blue-500 hover:border-0">Update</button>
              </div>
            </form>
            <Toaster />
          </div>
          <div className="pt-2 text-center space-y-2">
            <Link to="/userProfile" className="btn border-0 bg-orange-500 text-lg font-medium hover:bg-blue-600 text-white w-[300px] md:w-[450px]">
              Go To User Profile <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default UpdateProfile;