import React, { useState } from "react";
import "./MainMenuGlobalComponent.scss";

import { ReactComponent as IconFlame } from "../../assets/icons/icon_flame_outline.svg";
import { ReactComponent as Gaming } from "../../assets/icons/gaming.svg";
import { ReactComponent as Sports } from "../../assets/icons/sports.svg";
import { ReactComponent as Business } from "../../assets/icons/business.svg";
import { ReactComponent as Crypto } from "../../assets/icons/crypto.svg";
import { ReactComponent as Television } from "../../assets/icons/television.svg";
import { ReactComponent as Celebrity } from "../../assets/icons/celebrity.svg";
import { ReactComponent as Settings } from "../../assets/icons/settings.svg";
import { ReactComponent as GetApp } from "../../assets/icons/getapp.svg";
import { ReactComponent as ArrowDown } from "../../assets/icons/arrow_down.svg";
import { ReactComponent as Dots } from "../../assets/icons/3_dots.svg";

interface IMainMenuGlobalComponent {
  showMainMenu: boolean,
}

export const MainMenuGlobalComponent: React.FC<IMainMenuGlobalComponent> = ({ showMainMenu }) => {
  const [gaming, setGaming] = useState<boolean>(false);
  const [sports, setSports] = useState<boolean>(false);
  const [business, setBusiness] = useState<boolean>(false);
  const [crypto, setCrypto] = useState<boolean>(false);
  const [television, setTelevision] = useState<boolean>(false);
  const [celebrity, setCelebrity] = useState<boolean>(false);
  const [moreTopics, setMoreTopics] = useState<boolean>(false);
  const [settings, setSettings] = useState<boolean>(false);

  return (
    <nav id="main-menu" className="main-menu" aria-hidden={!showMainMenu}>
      <ul className="main-menu__list">
        <li className="main-menu__section">
          <p className="text-tiny main-menu__title">FEEDS</p>
          <ul className="main-menu__categories">
            <li className="main-menu__category" >
              <a className="main-menu__link" href="#">
                <div className="main-menu__spacer"></div>
                <div className="main-menu__icon-container">
                  <IconFlame className="main-menu__icon flame" />
                </div>
                Popular
              </a>
            </li>
          </ul>
        </li>
        <li className="main-menu__section">
          <p className="text-tiny main-menu__title">TOPICS</p>
          <ul className="main-menu__categories">
            <li className="main-menu__category">
              <button className="main-menu__element" onClick={() => setGaming(prev => !prev)} aria-expanded={gaming} aria-controls="main-menu__gaming" aria-label="show subcategories">
                <div className="main-menu__spacer"></div>
                <div className="main-menu__icon-container">
                  <Gaming className="main-menu__icon main-menu__icon--gaming" />
                </div>
                <span className="main-menu__name">Gaming</span>
                <ArrowDown className={`main-menu__icon arrow${gaming ? ' rotated' : ''}`} />
              </button>
              <ul id="main-menu__gaming" className="main-menu__subcategories" aria-hidden={!gaming}>
                <li className="main-menu__subcategory">
                  <a className="main-menu__link" href="#" aria-label="Go to subreddit">
                    <div className="main-menu__spacer"></div>
                    <div className="main-menu__icon-container"></div>
                    Minecraft
                  </a>
                </li>
                <li className="main-menu__subcategory">
                  <a className="main-menu__link" href="#" aria-label="Go to subreddit">
                    <div className="main-menu__spacer"></div>
                    <div className="main-menu__icon-container"></div>
                    Counter Strike
                  </a>
                </li>
                <li className="main-menu__subcategory">
                  <a className="main-menu__link" href="#" aria-label="Go to subreddit">
                    <div className="main-menu__spacer"></div>
                    <div className="main-menu__icon-container"></div>
                    FIFA
                  </a>
                </li>
                <li className="main-menu__subcategory">
                  <a className="main-menu__link" href="#" aria-label="Go to subreddit">
                    <div className="main-menu__spacer"></div>
                    <div className="main-menu__icon-container"></div>
                    League of Legends
                  </a>
                </li>
              </ul>
            </li>
            <li className="main-menu__category">
              <button className="main-menu__element" onClick={() => setSports(prev => !prev)} aria-expanded={sports} aria-controls="main-menu__sports" aria-label="Show subcategories">
                <div className="main-menu__spacer"></div>
                <div className="main-menu__icon-container">
                  <Sports className="main-menu__icon main-menu__icon--sports" />
                </div>
                <span className="main-menu__name">Sports</span>
                <ArrowDown id="main-menu__sports" className={`main-menu__icon arrow${sports ? ' rotated' : ''}`} />
              </button>
              <ul className="main-menu__subcategories" aria-hidden={!sports}>
                <li className="main-menu__subcategory">
                  <a className="main-menu__link" href="#" aria-label="Go to subreddit">
                    <div className="main-menu__spacer"></div>
                    <div className="main-menu__icon-container"></div>
                    NFL
                  </a>
                </li>
                <li className="main-menu__subcategory">
                  <a className="main-menu__link" href="#" aria-label="Go to subreddit">
                    <div className="main-menu__spacer"></div>
                    <div className="main-menu__icon-container"></div>
                    NBA
                  </a>
                </li>
                <li className="main-menu__subcategory">
                  <a className="main-menu__link" href="#" aria-label="Go to subreddit">
                    <div className="main-menu__spacer"></div>
                    <div className="main-menu__icon-container"></div>
                    Tennis
                  </a>
                </li>
                <li className="main-menu__subcategory">
                  <a className="main-menu__link" href="#" aria-label="Go to subreddit">
                    <div className="main-menu__spacer"></div>
                    <div className="main-menu__icon-container"></div>
                    Soccer
                  </a>
                </li>
              </ul>
            </li>
            <li className="main-menu__category">
              <button className="main-menu__element" onClick={() => setBusiness(prev => !prev)} aria-expanded={business} aria-controls="main-menu__business" aria-label="Show subcategories">
                <div className="main-menu__spacer"></div>
                <div className="main-menu__icon-container">
                  <Business className="main-menu__icon main-menu__icon--business" />
                </div>
                <span className="main-menu__name">Business, Economics</span>
                <ArrowDown className={`main-menu__icon arrow${business ? ' rotated' : ''}`} />
              </button>
              <ul id="main-menu__business" className="main-menu__subcategories" aria-hidden={!business}>
                <li className="main-menu__subcategory">
                  <a className="main-menu__link" href="#" aria-label="Go to subreddit">
                    <div className="main-menu__spacer"></div>
                    <div className="main-menu__icon-container"></div>
                    GameStop
                  </a>
                </li>
                <li className="main-menu__subcategory">
                  <a className="main-menu__link" href="#" aria-label="Go to subreddit">
                    <div className="main-menu__spacer"></div>
                    <div className="main-menu__icon-container"></div>
                    Moderna
                  </a>
                </li>
                <li className="main-menu__subcategory">
                  <a className="main-menu__link" href="#" aria-label="Go to subreddit">
                    <div className="main-menu__spacer"></div>
                    <div className="main-menu__icon-container"></div>
                    Pfizer
                  </a>
                </li>
                <li className="main-menu__subcategory">
                  <a className="main-menu__link" href="#" aria-label="Go to subreddit">
                    <div className="main-menu__spacer"></div>
                    <div className="main-menu__icon-container"></div>
                    Best Buy
                  </a>
                </li>
              </ul>
            </li>
            <li className="main-menu__category">
              <button className="main-menu__element" onClick={() => setCrypto(prev => !prev)} aria-expanded={crypto} aria-controls="main-menu__crypto" aria-label="Show subcategories">
                <div className="main-menu__spacer"></div>
                <div className="main-menu__icon-container">
                  <Crypto className="main-menu__icon main-menu__icon--crypto" />
                </div>
                <span className="main-menu__name">Crypto</span>
                <ArrowDown className={`main-menu__icon arrow${crypto ? ' rotated' : ''}`} />
              </button>
              <ul id="main-menu__crypto" className="main-menu__subcategories" aria-hidden={!crypto}>
                <li className="main-menu__subcategory">
                  <a className="main-menu__link" href="#" aria-label="Go to subreddit">
                    <div className="main-menu__spacer"></div>
                    <div className="main-menu__icon-container"></div>
                    Bitcoin
                  </a>
                </li>
                <li className="main-menu__subcategory">
                  <a className="main-menu__link" href="#" aria-label="Go to subreddit">
                    <div className="main-menu__spacer"></div>
                    <div className="main-menu__icon-container"></div>
                    Litecoin
                  </a>
                </li>
                <li className="main-menu__subcategory">
                  <a className="main-menu__link" href="#" aria-label="Go to subreddit">
                    <div className="main-menu__spacer"></div>
                    <div className="main-menu__icon-container"></div>
                    Cardano
                  </a>
                </li>
                <li className="main-menu__subcategory">
                  <a className="main-menu__link" href="#" aria-label="Go to subreddit">
                    <div className="main-menu__spacer"></div>
                    <div className="main-menu__icon-container"></div>
                    Dogecoin
                  </a>
                </li>
              </ul>
            </li>
            <li className="main-menu__category">
              <button className="main-menu__element" onClick={() => setTelevision(prev => !prev)} aria-expanded={television} aria-controls="main-menu__television" aria-label="Show subcategories">
                <div className="main-menu__spacer"></div>
                <div className="main-menu__icon-container">
                  <Television className="main-menu__icon main-menu__icon--television" />
                </div>
                <span className="main-menu__name">Television</span>
                <ArrowDown className={`main-menu__icon arrow${television ? ' rotated' : ''}`} />
              </button>
              <ul id="main-menu__television" className="main-menu__subcategories" aria-hidden={!television}>
                <li className="main-menu__subcategory">
                  <a className="main-menu__link" href="#" aria-label="Go to subreddit">
                    <div className="main-menu__spacer"></div>
                    <div className="main-menu__icon-container"></div>
                    Breaking Bad
                  </a>
                </li>
                <li className="main-menu__subcategory">
                  <a className="main-menu__link" href="#" aria-label="Go to subreddit">
                    <div className="main-menu__spacer"></div>
                    <div className="main-menu__icon-container"></div>
                    Game of Thrones
                  </a>
                </li>
                <li className="main-menu__subcategory">
                  <a className="main-menu__link" href="#" aria-label="Go to subreddit">
                    <div className="main-menu__spacer"></div>
                    <div className="main-menu__icon-container"></div>
                    Dexter
                  </a>
                </li>
                <li className="main-menu__subcategory">
                  <a className="main-menu__link" href="#" aria-label="Go to subreddit">
                    <div className="main-menu__spacer"></div>
                    <div className="main-menu__icon-container"></div>
                    Andor
                  </a>
                </li>
              </ul>
            </li>
            <li className="main-menu__category">
              <button className="main-menu__element" onClick={() => setCelebrity(prev => !prev)} aria-expanded={celebrity} aria-controls="main-menu__celebrity" aria-label="Show subcategories">
                <div className="main-menu__spacer"></div>
                <div className="main-menu__icon-container">
                  <Celebrity className="main-menu__icon main-menu__icon--celebrity" />
                </div>
                <span className="main-menu__name">Celebrity</span>
                <ArrowDown className={`main-menu__icon arrow${celebrity ? ' rotated' : ''}`} />
              </button>
              <ul id="main-menu__celebrity" className="main-menu__subcategories" aria-hidden={!celebrity}>
                <li className="main-menu__subcategory">
                  <a className="main-menu__link" href="#" aria-label="Go to subreddit">
                    <div className="main-menu__spacer"></div>
                    <div className="main-menu__icon-container"></div>
                    Natalie Portman
                  </a>
                </li>
                <li className="main-menu__subcategory">
                  <a className="main-menu__link" href="#" aria-label="Go to subreddit">
                    <div className="main-menu__spacer"></div>
                    <div className="main-menu__icon-container"></div>
                    Keanu Reeves
                  </a>
                </li>
                <li className="main-menu__subcategory">
                  <a className="main-menu__link" href="#" aria-label="Go to subreddit">
                    <div className="main-menu__spacer"></div>
                    <div className="main-menu__icon-container"></div>
                    Tom Hiddleston
                  </a>
                </li>
                <li className="main-menu__subcategory">
                  <a className="main-menu__link" href="#" aria-label="Go to subreddit">
                    <div className="main-menu__spacer"></div>
                    <div className="main-menu__icon-container"></div>
                    Kim Kardashian
                  </a>
                </li>
              </ul>
            </li>
            <li className="main-menu__category">
              <button className="main-menu__element" onClick={() => setMoreTopics(prev => !prev)} aria-expanded={moreTopics} aria-controls="main-menu__more-topics" aria-label="Show more categories">
                <div className="main-menu__spacer"></div>
                <div className="main-menu__icon-container">
                  <Dots className="main-menu__icon dots" />
                </div>
                <span className="main-menu__name">More Topics</span>
                <ArrowDown className={`main-menu__icon arrow${moreTopics ? ' rotated' : ''}`} />
              </button>
              <ul id="main-menu__more-topics" className="main-menu__subcategories" aria-hidden={!moreTopics}>
                <li className="main-menu__subcategory">
                  <a className="main-menu__link" href="#">
                    <div className="main-menu__spacer"></div>
                    <div className="main-menu__icon-container" aria-label="Go to subreddit"></div>
                    Animals
                  </a>
                </li>
                <li className="main-menu__subcategory">
                  <a className="main-menu__link" href="#" aria-label="Go to subreddit">
                    <div className="main-menu__spacer"></div>
                    <div className="main-menu__icon-container"></div>
                    Cars
                  </a>
                </li>
                <li className="main-menu__subcategory">
                  <a className="main-menu__link" href="#" aria-label="Go to subreddit">
                    <div className="main-menu__spacer"></div>
                    <div className="main-menu__icon-container"></div>
                    Military
                  </a>
                </li>
                <li className="main-menu__subcategory">
                  <a className="main-menu__link" href="#" aria-label="Go to subreddit">
                    <div className="main-menu__spacer"></div>
                    <div className="main-menu__icon-container"></div>
                    Politics
                  </a>
                </li>
                <li className="main-menu__subcategory">
                  <a className="main-menu__link" href="#" aria-label="Go to subreddit">
                    <div className="main-menu__spacer"></div>
                    <div className="main-menu__icon-container"></div>
                    Science
                  </a>
                </li>
                <li className="main-menu__subcategory">
                  <a className="main-menu__link" href="#" aria-label="Go to subreddit">
                    <div className="main-menu__spacer"></div>
                    <div className="main-menu__icon-container"></div>
                    Travel
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="main-menu__section main-menu__section--bottom">
          <ul className="main-menu__categories">
            <li className="main-menu__category">
              <button className="main-menu__element" onClick={() => setSettings(prev => !prev)} aria-expanded={settings} aria-controls="main-menu__settings" aria-label="Show settings">
                <div className="main-menu__spacer"></div>
                <div className="main-menu__icon-container">
                  <Settings className="main-menu__icon main-menu__icon--settings" />
                </div>
                <span className="main-menu__name">Settings</span>
                <ArrowDown className={`main-menu__icon arrow${settings ? ' rotated' : ''}`} />
              </button>
              <ul id="main-menu__settings" className="main-menu__subcategories" aria-hidden={!settings}>
                <li className="main-menu__subcategory">
                  <a className="main-menu__link" href="#" aria-label="Show setting">
                    <div className="main-menu__spacer"></div>
                    <div className="main-menu__icon-container"></div>
                    Setting one
                  </a>
                </li>
                <li className="main-menu__subcategory">
                  <a className="main-menu__link" href="#" aria-label="Show setting">
                    <div className="main-menu__spacer"></div>
                    <div className="main-menu__icon-container"></div>
                    Setting two
                  </a>
                </li>
                <li className="main-menu__subcategory">
                  <a className="main-menu__link" href="#">
                    <div className="main-menu__spacer"></div>
                    <div className="main-menu__icon-container"></div>
                    Setting three
                  </a>
                </li>
              </ul>
            </li>
            <li className="main-menu__category">
              <a className="main-menu__link" href="#" aria-label="Download the Reddit Application">
                <div className="main-menu__spacer"></div>
                <div className="main-menu__icon-container">
                  <GetApp className="main-menu__icon main-menu__icon--getapp" />
                </div>
                Get app
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  )
};
