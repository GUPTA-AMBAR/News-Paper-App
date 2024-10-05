import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './componenets/Cards';

const NewsApp = () => {

  const [newsData,setNewsData]=useState(null);

  const [search, setSearch]=useState("sports");

  const API_KEY = "c9603dffa92040628e5864139db74e3c";

  const getData = async() =>{
     const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
     const jsonData = await response.json();
     console.log(jsonData.articles);
     setNewsData(jsonData.articles);
  }

  useEffect(()=>{
    getData();
  },[])

  const handleInput=(e)=>{
    // console.log(e.target.value);
    setSearch(e.target.value);
  }

  const handleButton=(e)=>{
    setSearch(e.target.value);
  }

  



  return (
    <>
    <nav className="navbar">
      <div className="navbar-logo">
        <b><h1>HINUSTAN TIMES</h1></b>
      </div>
      <div className="navbar-search">
        
      <input className="form-control mr-sm-1  searchbar" type="search" placeholder="Search" aria-label="Search "  value={search} onChange={handleInput}/>
      <button className="btn btn-outline-black my-2 my-sm-0 search" style={{background:"green"}} type="submit" onClick={getData}>Search</button>

      </div>
      <div className="navbar-buttons">
        <button onClick={handleButton} value="sports">Sports</button>
        <button onClick={handleButton} value="politics">Politics</button>
        <button onClick={handleButton} value="elections">Elections</button>
        <button onClick={handleButton} value="bollywood">Bollywood</button>
        <button onClick={handleButton} value="hollywood">Hollywood</button>
      </div>
    </nav>

    <div>
      {newsData ? <Card data={newsData}/> : null}
    </div>

    </>
  );
};

export default NewsApp;

