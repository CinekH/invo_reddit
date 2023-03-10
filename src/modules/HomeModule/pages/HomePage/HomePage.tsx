import React from "react";
import "./HomePage.scss";

import { PopularGlobalComponent } from "@/global-components/PopularGlobalComponent/PopularGlobalComponent";
import { PostsComponent } from "@/modules/HomeModule/components";

export const HomePage: React.FC = () => {

  return (
    <div className="main-container">
      <PopularGlobalComponent />
      <PostsComponent />
    </div>
  );
};
