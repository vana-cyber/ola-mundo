import MenuLink from "../MenuLink";
import "./Menu.module.css";

export default function Menu() {
    return (
        <>
        <nav className="navegacao">
            <MenuLink to="/">
                Início
            </MenuLink>
            <MenuLink to="/sobremim">
                Sobre Mim
            </MenuLink>
        </nav>
        </>
    )
}