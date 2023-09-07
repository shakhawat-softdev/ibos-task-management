import { Outlet } from "react-router-dom";
import Navbar from "../components/navAndFooter/navbar/Navbar";
import Footer from "../components/navAndFooter/footer/Footer";
import Sidebar from "./Sidebar";


const Main = () => {
   return (
      <><Navbar />
         <div className="flex">
            <div className="w-[80px]">
               <Sidebar />
            </div>
            <div className="w-full">
               <Outlet />
            </div>
         </div>
         <Footer />
      </>
   );
};

export default Main;