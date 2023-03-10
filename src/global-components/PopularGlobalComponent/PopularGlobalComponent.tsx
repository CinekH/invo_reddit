import React, { useState } from 'react'
import './PopularGlobalComponent.scss';
import { ReactComponent as FlameIcon } from './../../assets/icons/icon_flame_outline.svg';
import { ReactComponent as ArrowDown } from './../../assets/icons/arrow_down.svg';
import { ReactComponent as Dots } from './../../assets/icons/3_dots.svg';
import { ReactComponent as Top } from './../../assets/icons/top.svg';
import { ReactComponent as New } from './../../assets/icons/new.svg';

import { countriesOfWorld } from './countries';

export const PopularGlobalComponent: React.FC = () => {
    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const [showCountries, setShowCountries] = useState<boolean>(false);
    const [country, setCountry] = useState<string>('Poland');

    const updateCountry = (updatedCountry: string) => {
        setCountry(updatedCountry);
        setShowCountries(false);
    }

    return (
        <section className="popular-section">
            <p className='text-large popular-section__text--title'>Popular</p>
            <div className='popular-section__container'>
                <button
                    className='popular-section__button popular-section__button--listing popular-section__button--primary'
                    aria-controls="popular-menu-dropdown"
                    onClick={() => setShowDropdown(prev => !prev)}
                >
                    <FlameIcon className="popular-section__icon" />
                    <span className='text-regular'>Popular</span>
                    <ArrowDown className={showDropdown ? 'popular-section__icon rotated arrow' : 'popular-section__icon arrow'} />
                </button>
                <div className="popular-section__dropdown popular-section__dropdown--listing" id="popular-menu-dropdown" aria-expanded={showDropdown}>
                    <button className='popular-section__button popular-section__button--dropdown'>
                        <Top className="popular-section__icon" />
                        <span className='text-regular'>New</span>
                    </button>
                    <button className='popular-section__button popular-section__button--dropdown'>
                        <New className="popular-section__icon" />
                        <span className='text-regular'>Top</span>
                    </button>
                </div>
                <button
                    className='popular-section__button popular-section__button--country popular-section__button--primary'
                    aria-controls="popular-menu-countries"
                    onClick={() => setShowCountries(prev => !prev)}
                    aria-expanded={showCountries}
                >
                    <span className='text-regular'>{country}</span>
                    <ArrowDown className={showCountries ? 'popular-section__icon rotated' : 'popular-section__icon'} />
                </button>
                <div className="popular-section__dropdown popular-section__countries" id="popular-menu-countries" aria-hidden={!showCountries}>
                    {countriesOfWorld.map(countryObject =>
                    (
                        <button
                            key={countryObject.code}
                            className={`popular-section__country${countryObject.name === country ? ' popular-section__country--selected' : ''}`}
                            onClick={() => updateCountry(countryObject.name)}
                        >
                            {countryObject.name}
                        </button>
                    )
                    )}
                </div>
                <a className='popular-section__link' href="#">
                    <New className="popular-section__icon" />
                    <span className='text-regular'>Top</span>
                </a>
                <a className='popular-section__link' href="#">
                    <Top className="popular-section__icon" />
                    <span className='text-regular'>New</span>
                </a>
                <button className='popular-section__button popular-section__button--more'>
                    <Dots className='popular-section__dots' />
                    <ArrowDown className='popular-section__icon arrow' />
                </button>
            </div >
        </section>
    )
}