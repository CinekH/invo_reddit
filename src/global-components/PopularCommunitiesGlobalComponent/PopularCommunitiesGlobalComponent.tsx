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
                            aria-label="show popular communities"
                        >
                            <span className='text-regular'>Popular Communities</span>
                            <ArrowDown className={`popular-communities__icon${showPopular ? ' rotated' : ''}`} />
                        </button>
                        <ul
                            className='popular-communities__dropdown'
                            aria-hidden={!showPopular}
                        >
                            <li className='popular-communities__dropdown-item' aria-label="go to subreddit">
                                <a href='#' className='popular-communities__link'>
                                    <span>AskReddit</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link' aria-label="go to subreddit">
                                    <span>NoStupidQuestions</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link' aria-label="go to subreddit">
                                    <span>DestinyTheGame</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link' aria-label="go to subreddit">
                                    <span>Explainlikeimfive</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link' aria-label="go to subreddit">
                                    <span>AskMen</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link' aria-label="go to subreddit">
                                    <span>Leagueoflegends</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link' aria-label="go to subreddit">
                                    <span>Minecraft</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link popular-communities__link--primary' aria-label="see more popular communities">
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
                            aria-label="show gaming subreddits"
                        >
                            <span className='text-regular'>Gaming</span>
                            <ArrowDown className={`popular-communities__icon${showGaming ? ' rotated' : ''}`} />
                        </button>
                        <ul
                            className='popular-communities__dropdown'
                            aria-hidden={!showGaming}
                        >
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link' aria-label="go to subreddit">
                                    <span>Minecraft</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link' aria-label="go to subreddit">
                                    <span>GTA</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link' aria-label="go to subreddit">
                                    <span>Fortnite</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link popular-communities__link--primary' aria-label="see more gaming subreddits">
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
                            aria-label="show sports subreddits"
                        >
                            <span className='text-regular'>Sports</span>
                            <ArrowDown className={`popular-communities__icon${showSports ? ' rotated' : ''}`} />
                        </button>
                        <ul
                            className='popular-communities__dropdown'
                            aria-hidden={!showSports}
                        >
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link' aria-label="go to subreddit">
                                    <span>Soccer</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link' aria-label="go to subreddit">
                                    <span>NFL</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link' aria-label="go to subreddit">
                                    <span>NBA</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link popular-communities__link--primary' aria-label="see more sports subreddits">
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
                            aria-label="show TV subreddits"
                        >
                            <span className='text-regular'>TV</span>
                            <ArrowDown className={`popular-communities__icon${showTV ? ' rotated' : ''}`} />
                        </button>
                        <ul
                            className='popular-communities__dropdown'
                            aria-hidden={!showTV}
                        >
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link' aria-label="go to subreddit">
                                    <span>House of cards</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link' aria-label="go to subreddit">
                                    <span>Game of Thrones</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link' aria-label="go to subreddit">
                                    <span>Mandalorian</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link popular-communities__link--primary' aria-label="see more TV subreddits">
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
                            aria-label="show travel subreddits"
                        >
                            <span className='text-regular'>Travel</span>
                            <ArrowDown className={`popular-communities__icon${showTravel ? ' rotated' : ''}`} />
                        </button>
                        <ul
                            className='popular-communities__dropdown'
                            aria-hidden={!showTravel}
                        >
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link' aria-label="go to subreddit">
                                    <span>Brasil</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link' aria-label="go to subreddit">
                                    <span>Australia</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link' aria-label="go to subreddit">
                                    <span>UK</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link popular-communities__link--primary' aria-label="See more travel subreddits">
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
                            aria-label="show Health and fitness subreddits"
                        >
                            <span className='text-regular'>Health & Fitness</span>
                            <ArrowDown className={`popular-communities__icon${showHealth ? ' rotated' : ''}`} />
                        </button>
                        <ul
                            className='popular-communities__dropdown'
                            aria-hidden={!showHealth}
                        >
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link' aria-label="go to subreddit">
                                    <span>Vegan</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link' aria-label="go to subreddit">
                                    <span>Crossfit</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link' aria-label="go to subreddit">
                                    <span>Bodybuilding</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link popular-communities__link--primary' aria-label="see more health and fitness subreddits">
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
                            aria-label="show fashion subreddits"
                        >
                            <span className='text-regular'>Gaming</span>
                            <ArrowDown className={`popular-communities__icon${showFashion ? ' rotated' : ''}`} />
                        </button>
                        <ul
                            className='popular-communities__dropdown'
                            aria-hidden={!showFashion}
                        >
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link' aria-label="go to subreddit">
                                    <span>Watches</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link' aria-label="go to subreddit">
                                    <span>Clothes</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link' aria-label="go to subreddit">
                                    <span>Makeup</span>
                                </a>
                            </li>
                            <li className='popular-communities__dropdown-item'>
                                <a href='#' className='popular-communities__link popular-communities__link--primary' aria-label="see more fashion subreddits">
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