import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Header from './components/Header';
import InfoChamp from './components/Champs/InfoChamp';
import Items from './pages/Items';
import Spells from './pages/Spells';
import Icons from './pages/Icons';
import SearchPlayer from './pages/SearchPlayer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/championinfo/:id" element={<InfoChamp/>}/>
        <Route path="/items" element={<Items/>}/>
        <Route path="/spells" element={<Spells/>}/>
        <Route path="/icons"  element={<Icons/>}/>
        <Route path="/search-player" element={<SearchPlayer/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
