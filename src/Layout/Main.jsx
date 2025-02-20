import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";

const Main = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar></Navbar>
            <div className="grow">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;