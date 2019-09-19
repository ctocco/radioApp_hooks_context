import React, { useState, useEffect } from "react";
import uuid from "uuid/v1";
import NavBar from "./components/NavBar";
import RadioStationList from "./components/RadioStationList";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import styles from "./App.module.scss";
import NowPlayingContextProvider from "./contexts/currentlyPlaying";

const App = () => {
  const [radioDataArray, setRadioDataArray] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    try {
      async function fetchRadioData() {
        const response = await fetch("https://teclead.de/recruiting/radios");
        const radioData = await response.json();
        // destructuring radios object so I can iterate over array
        const { radios } = radioData;
        setRadioDataArray(radios);
        setLoading(false);
      }
      fetchRadioData();
    } catch (error) {
      alert(`${error.name} has occurred. Please reload the page`);
    }
  }, []);

  return (
    <NowPlayingContextProvider>
      <div className={styles.appContainer}>
        <section className={styles.appWindow}>
          <NavBar />
          <div className={styles.stationContainer}>
            {!isLoading ? (
              radioDataArray.map(({ name, frequency, image }, index) => (
                <RadioStationList
                  key={uuid(index)}
                  name={name}
                  frequency={frequency}
                  image={image}
                  className={styles.stationListContainer}
                />
              ))
            ) : (
              <Loading />
            )}
          </div>
          <Footer />
        </section>
      </div>
    </NowPlayingContextProvider>
  );
};

export default App;
