import React from 'react'
import "./header.css"

const Header = () => {
    return (
        <div className='header'>
            <div className='header-content'>
                <button className='header-button'>
                    <span className='header-button-text'> {`ENGLISH`}</span>
                </button>
                <ul className='header-menu'>
                    <li>
                        <a className='header-menu-option' href="/">{`العروض`}</a>
                    </li>
                    <li>
                        <img src="/imgs/menu-star.svg" alt="" />
                    </li>
                    <li>
                        <a className='header-menu-option' href="/">{`لابتبوت`}</a>
                    </li>
                    <li>
                        <img src="/imgs/menu-star.svg" alt="" />
                    </li>
                    <li>
                        <a className='header-menu-option' href="/">{`موبيلات`}</a>
                    </li>
                    <li>
                        <img src="/imgs/menu-star.svg" alt="" />
                    </li>
                    <li >
                        <a className='header-menu-option' href="/">{`اكسسورات`}</a>
                    </li>
                    <li>
                        <img src="/imgs/menu-star.svg" alt="" />
                    </li>
                    <li>
                        <a className='header-menu-option' href="/">{`الشات`}</a>
                    </li>
                </ul>
                <div className='header-logo'>
                    <span className='header-logo-text'>{`تِكّي`}</span>
                    <img className='header-logo-img' src="/imgs/logo.svg" alt="logo" />
                </div>
            </div>
        </div>
    )
}

export default Header