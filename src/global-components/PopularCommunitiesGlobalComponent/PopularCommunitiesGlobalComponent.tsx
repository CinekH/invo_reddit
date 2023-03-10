import React, { useState } from 'react'
import './PopularCommunitiesGlobalComponent.scss';

import { ReactComponent as ArrowDown } from '../../assets/icons/arrow_down.svg';

export const PopularCommunitiesGlobalComponent: React.FC = () => {
    const [showPopular, setShowPopular] = useState<boolean>(false)
    const [showGaming, setShowGaming] = useState<boolean>(false)
    const [showTV, setShowTV] = useState<boolean>(false)
    const [showSports, setShowSports] = useState<boolean>(false)
    const [showTravel, setShowTravel] = useState<boolean>(false)
    const [showHealth, setShowHealth] = useState<boolean>(false)
    const [showFashion, setShowFashion] = useState<boolean>(false)

    return (
        <section className="popular-communities">
            <div className="popular-communities__container">
                <ul className='popular-communities__list'>
                    <li className='popular-communities__list-item'>
                        <button
                            className='popular-communities__button'
                            onClick={() => setShowPopular(prev => !prev)}
                            aria-expanded={showPopular}
                        >
                            <span className='text-regular'>Popular Communities</span>
                            <ArrowDown className={`popular-communities__icon${showPopular ? ' rotated' : ''}`} />
                        </button>
                        <ul
                            className='popular-communities__dropdown'
                            aria-hidden={!showPopular}
                        >
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link'>
                                    <span>AskReddit</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link'>
                                    <span>NoStupidQuestions</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link'>
                                    <span>DestinyTheGame</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link'>
                                    <span>Explainlikeimfive</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link'>
                                    <span>AskMen</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link'>
                                    <span>Leagueoflegends</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link'>
                                    <span>Minecraft</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link popular-communities__link--primary'>
                                    <span>See more</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className='popular-communities__list-item'>
                        <button
                            className='popular-communities__button'
                            onClick={() => setShowGaming(prev => !prev)}
                            aria-expanded={showGaming}
                        >
                            <span className='text-regular'>Gaming</span>
                            <ArrowDown className={`popular-communities__icon${showGaming ? ' rotated' : ''}`} />
                        </button>
                        <ul
                            className='popular-communities__dropdown'
                            aria-hidden={!showGaming}
                        >
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link'>
                                    <span>Minecraft</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link'>
                                    <span>GTA</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link'>
                                    <span>Fortnite</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link popular-communities__link--primary'>
                                    <span>See more</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className='popular-communities__list-item'>
                        <button
                            className='popular-communities__button'
                            onClick={() => setShowSports(prev => !prev)}
                            aria-expanded={showSports}
                        >
                            <span className='text-regular'>Sports</span>
                            <ArrowDown className={`popular-communities__icon${showSports ? ' rotated' : ''}`} />
                        </button>
                        <ul
                            className='popular-communities__dropdown'
                            aria-hidden={!showSports}
                        >
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link'>
                                    <span>Soccer</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link'>
                                    <span>NFL</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link'>
                                    <span>NBA</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link popular-communities__link--primary'>
                                    <span>See more</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className='popular-communities__list-item'>
                        <button
                            className='popular-communities__button'
                            onClick={() => setShowTV(prev => !prev)}
                            aria-expanded={showTV}
                        >
                            <span className='text-regular'>TV</span>
                            <ArrowDown className={`popular-communities__icon${showTV ? ' rotated' : ''}`} />
                        </button>
                        <ul
                            className='popular-communities__dropdown'
                            aria-hidden={!showTV}
                        >
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link'>
                                    <span>House of cards</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link'>
                                    <span>Game of Thrones</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link'>
                                    <span>Mandalorian</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link popular-communities__link--primary'>
                                    <span>See more</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className='popular-communities__list-item'>
                    <button
                            className='popular-communities__button'
                            onClick={() => setShowTravel(prev => !prev)}
                            aria-expanded={showTravel}
                        >
                            <span className='text-regular'>Travel</span>
                            <ArrowDown className={`popular-communities__icon${showTravel ? ' rotated' : ''}`} />
                        </button>
                        <ul
                            className='popular-communities__dropdown'
                            aria-hidden={!showTravel}
                        >
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link'>
                                    <span>Brasil</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link'>
                                    <span>Australia</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link'>
                                    <span>UK</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link popular-communities__link--primary'>
                                    <span>See more</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className='popular-communities__list-item'>
                    <button
                            className='popular-communities__button'
                            onClick={() => setShowHealth(prev => !prev)}
                            aria-expanded={showHealth}
                        >
                            <span className='text-regular'>Health & Fitness</span>
                            <ArrowDown className={`popular-communities__icon${showHealth ? ' rotated' : ''}`} />
                        </button>
                        <ul
                            className='popular-communities__dropdown'
                            aria-hidden={!showHealth}
                        >
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link'>
                                    <span>Vegan</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link'>
                                    <span>Crossfit</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link'>
                                    <span>Bodybuilding</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link popular-communities__link--primary'>
                                    <span>See more</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className='popular-communities__list-item'>
                    <button
                            className='popular-communities__button'
                            onClick={() => setShowFashion(prev => !prev)}
                            aria-expanded={showFashion}
                        >
                            <span className='text-regular'>Gaming</span>
                            <ArrowDown className={`popular-communities__icon${showFashion ? ' rotated' : ''}`} />
                        </button>
                        <ul
                            className='popular-communities__dropdown'
                            aria-hidden={!showFashion}
                        >
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link'>
                                    <span>Watches</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link'>
                                    <span>Clothes</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link'>
                                    <span>Makeup</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link popular-communities__link--primary'>
                                    <span>See more</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </section>
    )
}