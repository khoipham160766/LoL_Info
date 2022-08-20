import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Listchamps from './components/Listchamps';

function App() {
  const [ListChamp, setListChamp] = useState([]);
  useEffect(()=>{
    allChamps();
  },[]);
  // get id champ
  const allChamps = async () => {
    const response = await axios.get("https://ddragon.leagueoflegends.com/cdn/12.15.1/data/vn_VN/champion.json");
    getChampData(Object.keys(response.data.data));
  }
  // get data champ
  const getChampData = async (result) => {
    const champArr = [];   
    await Promise.all (
      result.map((champ)=>{
      return axios.get(`https://ddragon.leagueoflegends.com/cdn/12.15.1/data/vn_VN/champion/${champ}.json`)
      .then(result => {
         champArr.push(result.data.data[champ]);
      })
    })
    );
    console.log("arr",champArr);
    setListChamp(champArr);
  }
  return (
    <div className="App">
      <div className="h-full bg-slate-800 float-left">
        <Listchamps listChamp={ListChamp}/>
      </div>
    </div>
  );
}

export default App;
