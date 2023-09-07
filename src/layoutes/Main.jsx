import { Outlet } from "react-router-dom";
import Navbar from "../components/navAndFooter/navbar/Navbar";
import Footer from "../components/navAndFooter/footer/Footer";


const Main = () => {
   return (
      <>
         <Navbar />
         <Outlet />
         <Footer />
      </>
   );
};

export default Main;