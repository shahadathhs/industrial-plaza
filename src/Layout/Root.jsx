import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="pt-20">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;