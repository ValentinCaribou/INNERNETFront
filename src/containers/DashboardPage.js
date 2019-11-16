import React from "react";
import BrowserUsage from "../components/dashboard/BrowserUsage";
import DebitUsage from "../components/dashboard/debitUsage";
// import RecentlyProducts from '../components/dashboard/RecentlyProducts';
import globalStyles from "../styles";
import Data from "../data";
import ParameterBox from "../components/dashboard/ParameterBox";

const DashboardPage = () => {
  return (
    <div>
      <h3 style={globalStyles.navigation}>Application INNERNET / Dashboard</h3>

      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
          <DebitUsage data={Data.dashBoardPage.browserUsage} />
        </div>

        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
          <ParameterBox data={Data.dashBoardPage.browserUsage} />
        </div>

        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 m-b-15 ">
          <BrowserUsage data={Data.dashBoardPage.browserUsage} />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
