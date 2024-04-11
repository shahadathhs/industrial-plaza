import { Link, useRouteError } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>IP | ErrorPage</title>
        </Helmet>
        <div className="flex flex-col justify-center items-center text-3xl bg-gray-200 space-y-7 p-4 text-center h-screen">
          <h1 className="text-red-400 font-bold text-5xl">Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
          <Link to="/" className="btn text-white bg-orange-500 hover:bg-blue-500 border-0">Go back to home</Link>
        </div>
      </div>
    </HelmetProvider>  
  );
};

export default ErrorPage;