import { useState } from "react";

function Footer() {
    const [serviceCode, setServiceCode] = useState("Code de service");
    return (
        <div className="footer">
            <div className="footer-icons flex mb-5">
                <a href="#">
                    <i className="fa-2xl fa-brands fa-facebook-f mr-8"></i>
                </a>
                <a href="#">
                    <i className="fa-2xl fa-brands fa-instagram mr-8"></i>
                </a>
                <a href="#">
                    <i className="fa-2xl fa-brands fa-twitter mr-8"></i>
                </a>
                <a href="#">
                    <i className="fa-2xl fa-brands fa-youtube"></i>
                </a>
            </div>
            <div className="footer-nav-links">
                <ul className="footer-nav-links">
                    <li>
                        <a href="#">Audiodescription</a>
                    </li>
                    <li>
                        <a href="#">Relations Investisseurs</a>
                    </li>
                    <li>
                        <a href="#">Informations légales</a>
                    </li>
                    <li>
                        <a href="#">Centre d'aide</a>
                    </li>
                    <li>
                        <a href="#">Recrutement</a>
                    </li>
                    <li>
                        <a href="#">Préférences de cookies</a>
                    </li>
                    <li>
                        <a href="#">Cartes cadeaux</a>
                    </li>
                    <li>
                        <a href="#">Conditions d'utilisation</a>
                    </li>
                    <li>
                        <a href="#">Mentions légales</a>
                    </li>
                    <li>
                        <a href="#">Presse</a>
                    </li>
                    <li>
                        <a href="#">Confidentalité</a>
                    </li>
                    <li>
                        <a href="#">Nous contacter</a>
                    </li>
                </ul>
            </div>
            <div className="footer-service-code">
                <button onClick={() => setServiceCode("984-765")}>{serviceCode}</button>
            </div>
            <div className="footer-copyright mt-5 mb-5">
                © 1997-2022 Netflix, Inc.
            </div>
        </div>
    );
}

export default Footer;