import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Navigation() {
    const [formSearchStyle, setFormSearchStyle] = useState<string>("form-search"); 
    const [searchIconActive, setSearchIconActive] = useState<null|string>(null);

    const handleSearch = () => {
        setFormSearchStyle("form-search-focused")
        setSearchIconActive("search-icon-active")

        setTimeout(() => {
            let input = document.querySelector<any>("input")
            input.focus();   
        })
    }

    const handleBlur = () => {
        setFormSearchStyle("form-search")
        setSearchIconActive(null)
    }

    return (
        <div className="navbar">
            <ul className="flex flex-row grow">
                <NavLink to="/">
                    <img className="nav__logo" src={logo} alt="" />
                </NavLink>
                
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-link nav-active" : "nav-link")}>
                    <li>Accueil</li>
                </NavLink>
                
                <NavLink to="/abc" className={(nav) => (nav.isActive ? "nav-link nav-active" : "nav-link")}>
                    <li>Séries</li>
                </NavLink>

                <NavLink to="/abc" className={(nav) => (nav.isActive ? "nav-link nav-active" : "nav-link")}>
                    <li>Films</li>
                </NavLink>

                <NavLink to="/abc" className={(nav) => (nav.isActive ? "nav-link nav-active" : "nav-link")}>
                    <li>Nouveautés les plus regardées</li>
                </NavLink>

                <NavLink to="/abc" className={(nav) => (nav.isActive ? "nav-link nav-active" : "nav-link")}>
                    <li>Ma liste</li>
                </NavLink>

                <NavLink to="/abc" className={(nav) => (nav.isActive ? "nav-link nav-active" : "nav-link")}>
                    <li>Explorer par langue</li>
                </NavLink>
            </ul>
            <ul className="flex flex-row mr-10">
                <button onClick={() => handleSearch()}>
                    <i className={`fa-solid fa-magnifying-glass fa-lg ${searchIconActive}`}></i>   
                </button>

                <input type="text" className={formSearchStyle} placeholder="Titres, personnes, genres" onBlur={() =>  handleBlur()} />

                <NavLink to="/abc" className={(nav) => (nav.isActive ? "nav-link nav-active" : "nav-link self-center")}>
                    <li>DIRECT</li>
                </NavLink>

                <NavLink to="/abc" className={(nav) => (nav.isActive ? "nav-link nav-active" : "nav-link self-center")}>
                    <li>Jeunesse</li>
                </NavLink>

                <button>
                    <i className="fa-solid fa-bell fa-lg"></i>
                </button>

                <span>
                    <img className="nav__avatar" src="https://i.pravatar.cc/30" alt="Avatar" />
                </span>

                <button>
                    <i className="fa-solid fa-caret-down"></i>
                </button>
            </ul>
        </div>
    );
}

export default Navigation;