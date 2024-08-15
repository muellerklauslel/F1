import { useEffect, useState } from "react";
import "../style/Leaderboard.css";

function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState(
    Array.from({ length: 20 }, () => ({
      position: 0 as number | string,
      driver_number: 0,
    }))
  );
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const session = "9574";
    const url = `https://api.openf1.org/v1/position?session_key=${session}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const updatedData = Array.from({ length: 20 }, () => ({
          position: 0 as number | string,
          driver_number: 0,
        }));

        for (let i = 0; i < data.length; i++) {
          var pos = data[i].position;
          if (pos <= 20) {
            updatedData[pos - 1] = {
              position: pos,
              driver_number: data[i].driver_number,
            };
          }
        }
        // console.log(leaderboardData);

        setLeaderboardData(updatedData);
        setDataLoaded(true);
      });
  }, []);

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  return (
    <>
      <h1>Leaderboard</h1>

      {dataLoaded ? (
        <table border={1} className="leaderboard">
          <tr>
            <th>Position</th>
            <th>Bild</th>
            <th>Fahrernummer</th>
            <th>Fahrer</th>
            <th>Interval</th>
            <th>Gap to Leader</th>
            <th>Fastes Lap</th>
          </tr>
          {leaderboardData.map((entry, index) => (
            <>
              <tr key={index}>
                <td className="leaderboardPos">{entry.position}</td>
                <td>
                  <img className="leaderboardImg" src="" alt="" />
                </td>
                <td>{entry.driver_number}</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </>
          ))}
        </table>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
}

export default Leaderboard;
