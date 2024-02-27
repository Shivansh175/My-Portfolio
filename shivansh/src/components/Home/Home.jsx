import React from "react";
import Social from "./Social";
import Data from "./Data";
import "./Home.css";

function Home(){
    return(
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social />

                    <Data />
                    
                    <div className="home__img"></div>


                </div>

            </div>

        </section>
    )
}

export default Home;