import React, { useState } from "react";
import "./HomePage.scss";

import { PopularGlobalComponent } from "@/global-components/PopularGlobalComponent/PopularGlobalComponent";
import { PostsComponent } from "@/modules/HomeModule/components";
import { TrendingTodayGlobalComponent } from "@/global-components";

export const HomePage: React.FC = () => {

  return (
    <div className="main-container">
      <PopularGlobalComponent />
      <PostsComponent />
    </div>
  );
};
