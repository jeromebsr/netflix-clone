import Header from "./Header";
import Navigation from "./Navigation";
import Slider from "./Slider";


function Homepage() {      
    return (
        <div>
            <Navigation />
            <Header />
            <div style={{marginTop:80}} className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10">
                <Slider
                    listname={"Tendances actuelles"}
                    type={"popular"}
                    variant={"movie"}
                />
            </div>
            <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10">
                <Slider
                    listname={"Séries"}
                    type={"popular"}
                    variant={"tv"}
                />
            </div>
        </div>
    );
}

export default Homepage;