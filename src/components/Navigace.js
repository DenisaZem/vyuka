import { NavLink } from "react-router-dom"
import "./Navigace.css"

const Navigace = () => {
  return <header>
            <nav>
                <NavLink to="/">Hlavní strana</NavLink>
                <NavLink to="prehled">Přehled slovíček</NavLink>
                <NavLink to="form">Přidat nové slovíčko</NavLink>
                <NavLink to="cviceni">Výuka</NavLink>
                <NavLink to="login">Log in</NavLink>
                
            </nav>
        </header>
}

export default Navigace
