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
        console.log(leaderboardData);

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
                  <img
                    className="leaderboardImg"
                    src="https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GEORUS01_George_Russell/georus01.png.transform/1col/image.png"
                    alt="Georg Russel"
                  />
                </td>
                <td></td>
                <td>Georg Russel</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr key={index}>
                <td className="leaderboardPos">{entry.position}</td>
                <td>
                  <img
                    className="leaderboardImg"
                    src="https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LEWHAM01_Lewis_Hamilton/lewham01.png.transform/1col/image.png"
                    alt="Lewis Hamilton"
                  />
                </td>
                <td></td>
                <td>Lewis Hamilton</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr key={index}>
                <td className="leaderboardPos">{entry.position}</td>
                <td>
                  <img
                    className="leaderboardImg"
                    src="https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/O/OSCPIA01_Oscar_Piastri/oscpia01.png.transform/1col/image.png"
                    alt="Oscar Piastri"
                  />
                </td>
                <td></td>
                <td>Oscar Piastri</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr key={index}>
                <td className="leaderboardPos">{entry.position}</td>
                <td>
                  <img
                    className="leaderboardImg"
                    src="https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CHALEC01_Charles_Leclerc/chalec01.png.transform/1col/image.png"
                    alt="Charles Leclerc"
                  />
                </td>
                <td></td>
                <td>Charles Leclerc</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr key={index}>
                <td className="leaderboardPos">{entry.position}</td>
                <td>
                  <img
                    className="leaderboardImg"
                    src="https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/M/MAXVER01_Max_Verstappen/maxver01.png.transform/1col/image.png"
                    alt="Max Verstappen"
                  />
                </td>
                <td></td>
                <td>Max Verstappen</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr key={index}>
                <td className="leaderboardPos">{entry.position}</td>
                <td>
                  <img
                    className="leaderboardImg"
                    src="https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANNOR01_Lando_Norris/lannor01.png.transform/1col/image.png"
                    alt="Lando Norris"
                  />
                </td>
                <td></td>
                <td>Lando Norris</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr key={index}>
                <td className="leaderboardPos">{entry.position}</td>
                <td>
                  <img
                    className="leaderboardImg"
                    src="https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/C/CARSAI01_Carlos_Sainz/carsai01.png.transform/1col/image.png"
                    alt="Carlos Sainz"
                  />
                </td>
                <td></td>
                <td>Carlos Sainz</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr key={index}>
                <td className="leaderboardPos">{entry.position}</td>
                <td>
                  <img
                    className="leaderboardImg"
                    src="https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/S/SERPER01_Sergio_Perez/serper01.png.transform/1col/image.png"
                    alt="Sergio Perez"
                  />
                </td>
                <td></td>
                <td>Sergio Perez</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr key={index}>
                <td className="leaderboardPos">{entry.position}</td>
                <td>
                  <img
                    className="leaderboardImg"
                    src="https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/F/FERALO01_Fernando_Alonso/feralo01.png.transform/1col/image.png"
                    alt="Fernando Alonso"
                  />
                </td>
                <td></td>
                <td>Fernando Alonso</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr key={index}>
                <td className="leaderboardPos">{entry.position}</td>
                <td>
                  <img
                    className="leaderboardImg"
                    src="https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/E/ESTOCO01_Esteban_Ocon/estoco01.png.transform/1col/image.png"
                    alt="Esteban Ocon"
                  />
                </td>
                <td></td>
                <td>Esteban Ocon</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr key={index}>
                <td className="leaderboardPos">{entry.position}</td>
                <td>
                  <img
                    className="leaderboardImg"
                    src="https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/D/DANRIC01_Daniel_Ricciardo/danric01.png.transform/1col/image.png"
                    alt="Daniel Ricciardo"
                  />
                </td>
                <td></td>
                <td>Daniel Ricciardo</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr key={index}>
                <td className="leaderboardPos">{entry.position}</td>
                <td>
                  <img
                    className="leaderboardImg"
                    src="https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LANSTR01_Lance_Stroll/lanstr01.png.transform/1col/image.png"
                    alt="Lance Stroll"
                  />
                </td>
                <td></td>
                <td>Lance Stroll</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr key={index}>
                <td className="leaderboardPos">{entry.position}</td>
                <td>
                  <img
                    className="leaderboardImg"
                    src="https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/A/ALEALB01_Alexander_Albon/alealb01.png.transform/1col/image.png"
                    alt="Alexander Albon"
                  />
                </td>
                <td></td>
                <td>Alexander Albon</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr key={index}>
                <td className="leaderboardPos">{entry.position}</td>
                <td>
                  <img
                    className="leaderboardImg"
                    src="https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/P/PIEGAS01_Pierre_Gasly/piegas01.png.transform/1col/image.png"
                    alt="Pierre Gasly"
                  />
                </td>
                <td></td>
                <td>Pierre Gasly</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr key={index}>
                <td className="leaderboardPos">{entry.position}</td>
                <td>
                  <img
                    className="leaderboardImg"
                    src="https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/K/KEVMAG01_Kevin_Magnussen/kevmag01.png.transform/1col/image.png"
                    alt="Kevin Magnussen"
                  />
                </td>
                <td></td>
                <td>Kevin Magnussen</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr key={index}>
                <td className="leaderboardPos">{entry.position}</td>
                <td>
                  <img
                    className="leaderboardImg"
                    src="https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/V/VALBOT01_Valtteri_Bottas/valbot01.png.transform/1col/image.png"
                    alt="Valtteri Bottas"
                  />
                </td>
                <td></td>
                <td>Valtteri Bottas</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr key={index}>
                <td className="leaderboardPos">{entry.position}</td>
                <td>
                  <img
                    className="leaderboardImg"
                    src="https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/Y/YUKTSU01_Yuki_Tsunoda/yuktsu01.png.transform/1col/image.png"
                    alt="Yuki Tsunoda"
                  />
                </td>
                <td></td>
                <td>Yuki Tsunoda</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr key={index}>
                <td className="leaderboardPos">{entry.position}</td>
                <td>
                  <img
                    className="leaderboardImg"
                    src="https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/L/LOGSAR01_Logan_Sargeant/logsar01.png.transform/1col/image.png"
                    alt="Logan Sargeant"
                  />
                </td>
                <td></td>
                <td>Logan Sargeant</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr key={index}>
                <td className="leaderboardPos">{entry.position}</td>
                <td>
                  <img
                    className="leaderboardImg"
                    src="https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/N/NICHUL01_Nico_Hulkenberg/nichul01.png.transform/1col/image.png"
                    alt="Nico Hulkenberg"
                  />
                </td>
                <td></td>
                <td>Nico Hulkenberg</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr key={index}>
                <td className="leaderboardPos">{entry.position}</td>
                <td>
                  <img
                    className="leaderboardImg"
                    src="https://media.formula1.com/d_driver_fallback_image.png/content/dam/fom-website/drivers/G/GUAZHO01_Guanyu_Zhou/guazho01.png.transform/1col/image.png"
                    alt="Guanyu Zhou"
                  />
                </td>
                <td></td>
                <td>Guanyu Zhou</td>
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
