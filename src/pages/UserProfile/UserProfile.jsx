import { useContext } from "react";
import { AuthContest } from "../../Providers/AuthProviders";
import { Link } from "react-router-dom";
import { FaPhotoFilm } from "react-icons/fa6";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const UserProfile = () => {
  const {user} = useContext(AuthContest);

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>IP | User Profile</title>
        </Helmet>
        <div className="py-2 pt-20 md:py-3 lg:py-6">
          <section className="text-gray-800">
            <div className="container flex flex-col items-center justify-center gap-8 mx-auto md:flex-row">
              {
                user?.photoURL
                ?
                <img src={user?.photoURL} className="w-[350px] rounded-xl" />
                :
                <div className="p-6 text-xl font-bold text-center text-red-500 bg-white rounded-2xl">
                  <p>Profile Photo Not Found</p>
                  <div className="flex justify-center gap-2">
                    <FaPhotoFilm />
                    <MdDoNotDisturbAlt />
                  </div> 
                </div>
              }
              <div className="flex flex-col w-full gap-5 text-blue-500 lg:w-2/3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-blue-600">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <p className="text-3xl font-semibold leading-none">
                  <span className="text-orange-500">Name:</span> {user?.displayName}
                </p>
                <p className="text-3xl font-semibold leading-none">
                <span className="text-orange-500">Email:</span> {user?.email || "Email is not available "}
                </p>
                <Link to="/updateProfile" className="btn border-0 hover:bg-orange-500 text-lg font-medium bg-blue-600 text-white w-[300px]">
                  Go to  Update Profile <FaArrowRight />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </HelmetProvider>
  );
};

export default UserProfile;