import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";



const Root = () => {
    return (
        <div className="poppins">
            <NavBar></NavBar>
            <div className="min-h-[calc(100vh-290px)]">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;