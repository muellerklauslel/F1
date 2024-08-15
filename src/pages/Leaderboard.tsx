import { useEffect, useState } from "react";
import "../style/Leaderboard.css";

function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState(
    Array.from({ length: 20 }, () => ({
      position: -1 as number | string,
      driver_number: -1,
      driver_name: "",
      driver_img: "",
      driver_acronym: "",
      team: "",
      team_color: "",
      interval: -1,
      gap_to_leader: -1,
      fastest_lap: false,
    }))
  );
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const session = "9574";
    const url = `https://api.openf1.org/v1/position?session_key=${session}`;

    // Get the position and driver Number from the /position endpoint
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        //create the data-array
        var updatedData = Array.from({ length: 20 }, () => ({
          position: -1 as number | string,
          driver_number: -1 as number,
          driver_name: "",
          driver_img: "",
          driver_acronym: "",
          team: "",
          team_color: "",
          interval: -1,
          gap_to_leader: -1,
          fastest_lap: false,
        }));

        // populate the array with the data
        for (let i = 0; i < data.length; i++) {
          var pos = data[i].position;
          if (pos <= 20) {
            updatedData[pos - 1] = {
              position: pos,
              driver_number: data[i].driver_number,
              driver_name: "",
              driver_img: "",
              driver_acronym: "",
              team: "",
              team_color: "",
              interval: -1,
              gap_to_leader: -1,
              fastest_lap: false,
            };
          }
        }

        // populate the array with extra info
        fetch(
          `https://api.openf1.org/v1/drivers?&driver_number%3C100&session_key=${session}`
        )
          .then((response) => response.json())
          .then((driverData) => {
            // console.log(driverData);

            // sort the array tho match the data
            driverData = driverData.sort(
              (a: number, b: number) => a.driver_number - b.driver_number // errors are false (works properly)
            );

            updatedData = updatedData.sort(
              (a: number, b: number) => a.driver_number - b.driver_number // errors are false (works properly)
            );

            // console.log(driverData);
            // console.log(updatedData);

            // add the extra infos to the array
            for (let i = 0; i < updatedData.length; i++) {
              updatedData[i].driver_acronym = driverData[i].driver_acronym;
              updatedData[i].driver_img = driverData[i].headshot_url;
              updatedData[i].driver_name = driverData[i].full_name;
              updatedData[i].team = driverData[i].team_name;
              updatedData[i].team_color = driverData[i].team_color;
            }

            //
            //
            // get the fastest lap
            //
            //

            const firstUrl =
              "https://api.openf1.org/v1/laps?session_key=" +
              session +
              "&driver_number=" +
              updatedData[1].driver_number;

            fetch(firstUrl)
              .then((response) => response.json())
              .then((laptimeSecondDriver) => {
                const tempLapTime = laptimeSecondDriver[2].lap_duration;
                const secondUrl =
                  "https://api.openf1.org/v1/laps?session_key=" +
                  session +
                  "&lap_duration%3C" +
                  tempLapTime;

                console.log(tempLapTime);

                fetch(secondUrl)
                  .then((response) => response.json())
                  .then((lapTimeData) => {
                    console.log(lapTimeData);
                    if (lapTimeData.length > 0) {
                      var minLapTime = tempLapTime; // the fastest time
                      var fastestLapDriver = ""; // the driver who drove the fastest lap
                      for (
                        let indexLapTimes = 0;
                        indexLapTimes < lapTimeData.length;
                        indexLapTimes++
                      ) {
                        const item = lapTimeData[indexLapTimes];

                        if (item.lap_duration < minLapTime) {
                          minLapTime = item.lap_duration;
                          fastestLapDriver = item.driver_number;
                        }
                      }

                      console.log(fastestLapDriver);
                      console.log(minLapTime);

                      const fastestLapLeaderboardDataIndex =
                        updatedData.findIndex(
                          (element) => element.driver_number > 10
                        );

                      updatedData[5].fastest_lap = true;
                    }

                    //set the leaderboard data and enable the leaderboard
                    setLeaderboardData(updatedData);
                    setDataLoaded(true);
                  })
                  .catch((error) => console.error(error));
              })
              .catch((error) => console.error(error));
          })
          .catch((error) => console.error(error));

        // console.log(leaderboardData);
      })
      .catch((error) => console.error(error));
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
            <tr key={index}>
              <td className="leaderboardPos">{entry.position}</td>
              <td>
                <img
                  className="leaderboardImg"
                  src={entry.driver_img}
                  alt={entry.driver_name}
                />
              </td>
              <td>{entry.driver_number}</td>
              <td>{entry.driver_name}</td>
              <td>{entry.interval}</td>
              <td>{entry.gap_to_leader}</td>
              <td>{entry.fastest_lap ? "yes" : "no"}</td>
            </tr>
          ))}
        </table>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
}

export default Leaderboard;
