import React from 'react'
import './App.css';
import Row from './Row';
import requests from './request';
import Banner from './Banner';
import Nav from './Nav';
function App ()  {
  return (
    <div className="App">
      <Nav/>
    <Banner/>
    
    <Row title ="NETFLIX ORIGINAL" isLargeRow fetchUrl={requests.fetchNetflixOriginals}/>
    <Row title ="TRENDING NOW" fetchUrl={requests.fetchTrending}/>
    <Row title="Top Rating"fetchUrl={requests.fetchTopRated}/>
    <Row title ="Action Movies" fetchUrl={requests.fetchActionMovies}/>
    <Row title ="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
    <Row title="Horror Movies"fetchUrl={requests.fetchHorrorMovies}/>
    <Row title ="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
    <Row title="Document Movies"fetchUrl={requests.fetchDocumentaries}/>
    </div>
  )
}

export default App;