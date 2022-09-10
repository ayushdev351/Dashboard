import "./Dashboard.css";

import SpaceCard from "./SpaceCard";

function Dashboard() {
  return (
    <div className="Dashboard">
      <div className="Top"></div>
      <div className="Mid">
        <div className="midProjectName">Hello</div>
        <div className="midNewProject">Hello2</div>
      </div>
      <div className="Main">
        <div className="mainTop"></div>
        <div className="mainStats">
          <div className="mainStatsLeft"></div>
          <div className="mainStatsRight">
            <SpaceCard />
            <SpaceCard />
            <SpaceCard />
            <SpaceCard />
            <SpaceCard />
            <SpaceCard />
            <SpaceCard />
            <SpaceCard />
            <SpaceCard />
            <SpaceCard />
            <SpaceCard />
            <SpaceCard />
            <SpaceCard />
            <SpaceCard />
            <SpaceCard />
            <SpaceCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
