import axios from "axios";
import Header from "./Header";
import Navigation from "./Navigation";
import Slider from "./Slider";


function Homepage() {   
    return (
        <div>
            <Navigation />
            <Header />
            <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10">
                <Slider />
            </div>
        </div>
    );
}

export default Homepage;