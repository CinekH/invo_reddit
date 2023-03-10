import React from 'react'
import "./TopNavigationGlobalComponent.scss";

import { ReactComponent as Search } from '../../assets/icons/search.svg';

interface ITopNavigationGlobalComponent {
    showMainMenu: boolean,
    setShowMainMenu: () => void,
}

export const TopNavigationGlobalComponent: React.FC<ITopNavigationGlobalComponent> = ({ showMainMenu, setShowMainMenu }) => {
    return (
        <nav className='top-nav'>
            <div className='top-nav__block top-nav__block--left'>
                <button className="top-nav__btn"
                    onClick={setShowMainMenu}
                    aria-expanded={showMainMenu}
                    aria-controls="main-menu"
                    aria-label="Open main menu"
                >
                    <div className="top-nav__hamburger"></div>
                </button>
                <a href="#" className='top-nav__link--logo text-logo' aria-label="visit main site">reddit</a>
            </div>
            <form className="top-nav__form" action='#'>
                    <input className='top-nav__search' type="text" placeholder='Search' aria-label="search"/>
            </form>
            <div className="top-nav__block top-nav__block--right">
                <a href="#" className='top-nav__link--login text-small' aria-label="Log in to your account">Log in</a>
                <a href="#" className='top-nav__link--register text-small' aria-label="Create a new account">Register</a>
            </div>
        </nav>
    )
}