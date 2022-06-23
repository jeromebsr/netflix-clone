import axios from "axios";
import Header from "./Header";
import Navigation from "./Navigation";


function Homepage() {   
    return (
        <div>
            <Navigation />
            <Header />
        </div>
    );
}

export default Homepage;