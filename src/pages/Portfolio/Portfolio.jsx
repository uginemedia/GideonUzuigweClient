import React from "react";
import PortfolioComponent from "../../components/Portfolio/Portfolio";
import Title from "../../components/Title/Title";

const Portfolio = () => {
  return (
    <div>
      <Title title1="My " title2="Portfolio" subTitle="work" />
      <PortfolioComponent />
    </div>
  );
};

export default Portfolio;
