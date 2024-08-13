import styles from "../style/SideBar.module.css";

const SideBar = () => {
  return (
    <>
      <ul
        className={
          "list-group list-group-flush " +
          styles.sideBar +
          " " +
          styles.customColors
        }
      >
        <li className={"list-group-item " + styles.sideBarItem}>
          <a href="/leaderboard">Leaderboard</a>
        </li>
        <li className={"list-group-item " + styles.sideBarItem}>
          <a href="/minimap">minimap</a>
        </li>
        <li className={"list-group-item " + styles.sideBarItem}>
          <a href="/track-conditions">track-conditions</a>
        </li>
        <li className={"list-group-item " + styles.sideBarItem}>
          <a href="/pit-analytics">pit-analytics</a>
        </li>
        <li className={"list-group-item " + styles.sideBarItem}>
          <a href="/mixed">mixed</a>
        </li>
      </ul>
    </>
  );
};

export default SideBar;
