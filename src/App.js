import React from "react";
import "./App.css";
import "./row.css";

import Row from "./Row";
import requestconfig from "./request";
import Banner from "./Banner";
import Nav from './Nav';
function App() {
  return (
    <div className="App">
      {/* <h1>Hey Clever Programmer!Let's build a netflix clone FRont-end Today </h1> */}
      {/*Nav */}
      {/*Banner */}
      <Nav/>
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requestconfig.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requestconfig.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requestconfig.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requestconfig.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requestconfig.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={requestconfig.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requestconfig.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requestconfig.fetchDocumentaries} />
    </div>
  );
}

export default App;
