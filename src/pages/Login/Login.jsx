import { Link } from "react-router-dom";

const Login = () => {
  return (
      <div className="bg-base-200 py-3 lg:py-6 my-5 space-y-4">
        <p className="text-center text-2xl text-blue-500 font-bold">Login Here</p>
        <div className="rounded-xl mx-auto p-5 w-4/5 md:w-1/2 lg:w-1/3 bg-base-100">
          <form>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg text-orange-500 font-medium">Email</span>
              </label>
              <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg text-orange-500 font-medium">Password</span>
              </label>
              <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-outline border-2 text-orange-500 hover:bg-blue-500 hover:border-0">Login</button>
            </div>
            <div className="pt-2">
              <p>New? Register <Link to="/register" className="text-violet-600 font-medium">here</Link> </p>
            </div>
          </form>
        </div>
        <hr className="border-t-2 border-blue-700 border-dashed" />
        <div className="text-center space-y-3">
          <p className="text-center text-2xl text-blue-500 font-bold">Or continue with</p>
          {/* Google Login */}
          <button className="btn btn-outline border-2 text-orange-500 hover:bg-blue-500 hover:border-0">
            Login with Google
          </button>
          <br />
          {/* GitHub Login */}
          <button className="btn btn-outline border-2 text-orange-500 hover:bg-blue-500 hover:border-0">
            Login with GitHub
          </button>
        </div>
      </div>
  );
};

export default Login;