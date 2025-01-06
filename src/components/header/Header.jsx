import { Link } from 'react-router-dom';
import "./header.css"

const Header = () => {
    return (
        <div className='header'>
            <div className='header-content'>
                <button className='header-button'>
                    <span className='header-button-text'> {`ENGLISH`}</span>
                </button>
                {/* <div></div> */}
                <ul className='header-menu'>
                    <li>
                        <Link className='header-menu-option' to="/chat">{`العروض`}</Link>
                    </li>
                    <li>
                        <img src="/imgs/menu-star.svg" alt="" />
                    </li>
                    <li>
                        <Link className='header-menu-option' to="/chat">{`لابتبوت`}</Link>
                    </li>
                    <li>
                        <img src="/imgs/menu-star.svg" alt="" />
                    </li>
                    <li>
                        <Link className='header-menu-option' to="/chat">{`موبيلات`}</Link>
                    </li>
                    <li>
                        <img src="/imgs/menu-star.svg" alt="" />
                    </li>
                    <li >
                        <Link className='header-menu-option' to="/chat">{`اكسسورات`}</Link>
                    </li>
                    <li>
                        <img src="/imgs/menu-star.svg" alt="" />
                    </li>
                    <li>
                        <Link className='header-menu-option' to="/chat">{`الشات`}</Link>
                    </li>
                </ul>
                <div className='header-logo'>
                    <Link className='header-logo' to={"/"}>
                        <span className='header-logo-text'>{`تِكّي`}</span>
                        <img className='header-logo-img' src="/imgs/logo.svg" alt="logo" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header;
