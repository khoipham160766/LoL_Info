import axios from 'axios';
import { useEffect, useState } from 'react';
import Search from 'antd/lib/input/Search';
import './App.css';
import Listchamps from './components/Champs/Listchamps';

function App() {
  const [ListChamp, setListChamp] = useState([]);
  const [Seacrh, setSearch] = useState([]);
  const [Check, setCheck] =useState(false);
  useEffect(()=>{
    allChamps();
  },[]);
  // get id champ
  const allChamps = async() => {
    const response = await axios.get("https://ddragon.leagueoflegends.com/cdn/12.15.1/data/vn_VN/champion.json");
    getChampData(Object.keys(response.data.data));
  }
  // get data champ
  const getChampData = async (result) => {
    const champArr = [];   
    await Promise.all (
      result.map((champ)=>(
       axios.get(`https://ddragon.leagueoflegends.com/cdn/12.15.1/data/vn_VN/champion/${champ}.json`)
      .then(result => {
         champArr.push(result.data.data[champ]);
      })
      ))
    );
    //console.log("arr",champArr);
    setListChamp(champArr);
  }

  // search champ
  const handleSearch = (e) =>{
    setCheck(true);
    const searchChamp = [];
    ListChamp.map(champ =>(
      ((champ.id.toUpperCase()).includes(e.target.value.toUpperCase()))?searchChamp.push(champ):null
    ))
    setSearch(searchChamp);
  }
  return (
    <div className="App">
      <div className="h-full bg-slate-800 float-left">
        <div className="bg-slate-800 float-left w-full">
            <Search placeholder="Nhập tên tướng..."  
                    className="w-[380px] float-left p-4 pl-[50px]" 
                    onChange={handleSearch}
            />
        </div>
        <Listchamps listChamp={(!Check)?ListChamp:Seacrh}/>
      </div>
    </div>
  );
}

export default App;
