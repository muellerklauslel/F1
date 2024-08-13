// import TopBar from "./Components/TopBar";
import SideBar from "./Components/SideBar";
import Leaderboard from "./pages/Leaderboard";
import Minimap from "./pages/Minimap";
import TrackConditions from "./pages/TrackConditions";
import PitAnalytics from "./pages/PitAnalytics";
import Mixed from "./pages/Mixed";
import Home from "./pages/Home";
import "./App.css";

function App() {
  console.log(window.location.pathname);
  var path = window.location.pathname;

  var page;

  switch (path) {
    case "/":
      page = <Home />;
      break;
    case "/leaderboard":
      page = <Leaderboard />;
      break;
    case "/minimap":
      page = <Minimap />;
      break;
    case "/track-conditions":
      page = <TrackConditions />;
      break;
    case "/pit-analytics":
      page = <PitAnalytics />;
      break;
    case "/mixed":
      page = <Mixed />;
      break;
    default:
      page = <Home />;
  }

  return (
    <>
      <div className="content">
        <div className="left">
          <SideBar></SideBar>
        </div>
        <div className="right">{page}</div>
      </div>
    </>
  );
}

export default App;
