import { NavLink } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";
import "./Navigace.css"

const Navigace = () => {
  return <header>
            <nav>
                <div className="navigation">
                    <div className="nav-header">
                        <button className="hamburger"> <GiHamburgerMenu /> </button> 
                    </div>
                    <div className="nav-list">
                        <NavLink to="/">Hlavní strana</NavLink>
                        <NavLink to="prehled">Přehled slovíček</NavLink>
                        <NavLink to="form">Přidat nové slovíčko</NavLink>
                        <NavLink to="cviceni">Výuka</NavLink>
                        <NavLink to="login">Log in</NavLink>
                    </div>
                </div>
            </nav>
        </header>
}

export default Navigace
