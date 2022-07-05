import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";
import Slider from "./Slider";


function Homepage() {      
    return (
        <div>
            <Navigation />
            <Header />
            <div style={{ marginTop: 80 }} className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10 slider-container">
                <Slider
                    listname={"Tendances actuelles"}
                    type={"popularMovie"}
                />
            </div>
            <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10 slider-container">
                <Slider
                    listname={"Séries"}
                    type={"popularTv"}
                />
            </div>
            <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10 slider-container">
                <Slider
                    listname={"Mieux noté"}
                    type={"topRatedTv"}
                />
            </div>
            <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10 slider-container">
                <Slider
                    listname={"Revoir"}
                    type={"popularMovie"}
                />
            </div>
            <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10 slider-container">
                <Slider
                    listname={"Série à regarder sans modération"}
                    type={"popularTv"}
                />
            </div>
            <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10 slider-container">
                <Slider
                    listname={"Seulement sur Netflix"}
                    type={"topRatedTv"}
                />
            </div>
            <Footer />
        </div>
    );
}

export default Homepage;