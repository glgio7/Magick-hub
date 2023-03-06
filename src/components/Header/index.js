import { Link } from "react-router-dom"
import { HiMenu } from "react-icons/hi";
import StyledHeader from "./styles";

const Header = ({ toggleMenu }) => {
    return (
        <StyledHeader>
            <HiMenu className="menu" onClick={toggleMenu}/>
            <Link to={'/'} className="logo"><h1><img src='/assets/magickhub.png' alt='' /></h1></Link>
        </StyledHeader>
    )
}

export default Header;