import "./Dashboard.css";

import SpaceCard from "./SpaceCard";

function Dashboard() {
  return (
    <div className="Dashboard">
      <div className="Top"></div>
      <div className="Mid">
        <div className="midProjectName">Hello</div>
        <button className="midNewProject">Start New project</button>
      </div>
      <div className="Main">
        <div className="mainTop"></div>
        <div className="mainStats">
          <div className="mainStatsLeft"></div>
          <div className="mainStatsRight">
            <SpaceCard
              name="Cubicle/L-Type"
              desc="This space is for a two liner short description."
              imgUrl="https://epicofficefurniture.com.au/wp-content/uploads/2021/03/SHUSH30-1-person-cubicle-1500H-OG.jpg"
            />
            <SpaceCard
              name="Linear Workstation"
              desc="This space is for a two liner short description."
              imgUrl="https://st2.depositphotos.com/5777248/10827/v/600/depositphotos_108272328-stock-illustration-photo-frame-icon-simple-style.jpg"
            />
            <SpaceCard
              name="Linear Workstation"
              desc="This space is for a two liner short description."
              imgUrl="https://5.imimg.com/data5/ZK/KH/PT/SELLER-50304012/modulartwopersonlinearworkstation-500x500.png"
            />
            <SpaceCard
              name="Linear Workstation"
              desc="This space is for a two liner short description."
              imgUrl="https://st2.depositphotos.com/5777248/10827/v/600/depositphotos_108272328-stock-illustration-photo-frame-icon-simple-style.jpg"
            />
            <SpaceCard
              name="Cubicle/L-Type"
              desc="This space is for a two liner short description."
              imgUrl="https://epicofficefurniture.com.au/wp-content/uploads/2021/03/SHUSH30-1-person-cubicle-1500H-OG.jpg"
            />
            <SpaceCard
              name="Linear Workstation"
              desc="This space is for a two liner short description."
              imgUrl="https://5.imimg.com/data5/ZK/KH/PT/SELLER-50304012/modulartwopersonlinearworkstation-500x500.png"
            />
            <SpaceCard
              name="Linear Workstation"
              desc="This space is for a two liner short description."
              imgUrl="https://st2.depositphotos.com/5777248/10827/v/600/depositphotos_108272328-stock-illustration-photo-frame-icon-simple-style.jpg"
            />
            <SpaceCard
              name="Linear Workstation"
              desc="This space is for a two liner short description."
              imgUrl="https://st2.depositphotos.com/5777248/10827/v/600/depositphotos_108272328-stock-illustration-photo-frame-icon-simple-style.jpg"
            />
            <SpaceCard
              name="Linear Workstation"
              desc="This space is for a two liner short description."
              imgUrl="https://st2.depositphotos.com/5777248/10827/v/600/depositphotos_108272328-stock-illustration-photo-frame-icon-simple-style.jpg"
            />
            <SpaceCard
              name="Linear Workstation"
              desc="This space is for a two liner short description."
              imgUrl="https://st2.depositphotos.com/5777248/10827/v/600/depositphotos_108272328-stock-illustration-photo-frame-icon-simple-style.jpg"
            />
            <SpaceCard
              name="Linear Workstation"
              desc="This space is for a two liner short description."
              imgUrl="https://st2.depositphotos.com/5777248/10827/v/600/depositphotos_108272328-stock-illustration-photo-frame-icon-simple-style.jpg"
            />
          </div>
        </div>
      </div>
      <div className="bottom">
        <button className="proceedButton">Proceed</button>
      </div>
    </div>
  );
}

export default Dashboard;
