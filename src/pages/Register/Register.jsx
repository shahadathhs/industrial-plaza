import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContest } from "../../Providers/AuthProviders";

const Register = () => {
  const { createUser } = useContext(AuthContest);

  const handleRegister = ( ) => {
    // create user
    createUser(email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  return (
    <div className="bg-base-200 py-3 lg:py-6 my-5">
      <p className="text-center pb-3 text-2xl text-blue-500 font-bold">Register Here</p>
      <div className="rounded-xl mx-auto p-5 w-4/5 md:w-1/2 lg:w-1/3 bg-base-100">
        <form onSubmit={handleRegister}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg text-orange-500 font-medium">Name</span>
            </label>
            <input type="text" name="name" placeholder="Your Full Name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg text-orange-500 font-medium">Email</span>
            </label>
            <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg text-orange-500 font-medium">Photo URL</span>
            </label>
            <input type="text" name="photoURL" placeholder="Password" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg text-orange-500 font-medium">Password</span>
            </label>
            <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-outline border-2 text-orange-500 hover:bg-blue-500 hover:border-0">Register</button>
          </div>
          <div className="pt-2">
            <p>Already have an account? Login <Link to="/login" className="text-violet-600 font-medium">here</Link> </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;