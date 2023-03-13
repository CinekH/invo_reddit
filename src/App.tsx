import React, { useState, useEffect } from 'react';
import { HomePage } from "@modules";
import { MainMenuGlobalComponent, PopularCommunitiesGlobalComponent, TopNavigationGlobalComponent, TrendingTodayGlobalComponent } from "@/global-components";

const App: React.FC = () => {
  const [showMainMenu, setShowMainMenu] = useState<boolean>(false);

  const handleMobileClosing = () => {
    /*
      This work when user clicked any link on site before,
      cannot find the right solution
    */
    setShowMainMenu(false);
    history.pushState( "nohb", '', "" );
  }

  const toggleMainMenu = () => {
    history.pushState(history.state, "", '#');
    setShowMainMenu(prev => !prev);
  }

  useEffect(() => {
    if (showMainMenu) {
      window.addEventListener('popstate', handleMobileClosing);
    } else {
      window.removeEventListener('popstate', handleMobileClosing);
    }

    return () => {
      window.removeEventListener('popstate', handleMobileClosing);
    }
  }, [showMainMenu])

  return (
    <div className="container">
      <TopNavigationGlobalComponent showMainMenu={showMainMenu} setShowMainMenu={toggleMainMenu} />
      <MainMenuGlobalComponent showMainMenu={showMainMenu} />
      <TrendingTodayGlobalComponent />
      <HomePage />
      <PopularCommunitiesGlobalComponent />
    </div>
  )
};

export default App;
