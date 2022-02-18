import SearchBar from "./components/SearchBar";
import "./App.css";
import RegionDropdown from "./components/RegionDropdown";
import SearchAlgo from "./components/SearchAlgo";
import React, {useState} from 'react';

function App() {
  const items = [
    { id: 1, value: "NA" },
    { id: 2, value: "BR" },
    { id: 3, value: "EUNE" },
    { id: 4, value: "EUW" },
    { id: 5, value: "KR" },
    { id: 6, value: "TR" },
    { id: 7, value: "OCE" },
    { id: 8, value: "LAN" },
  ];

  const sumName = [{ name: SearchBar.searchText }];

  const [regionId, setRegionId] = useState("na1");

  console.log(regionId);

      
  
  return (
    <div className="container">
      <div>
        

      </div>
     
      
      
      <h1 className="title">EO.GG</h1>
  
      <SearchBar>

      
      </SearchBar>

      <RegionDropdown setRegionId = {setRegionId} title="Select Region" items={items}></RegionDropdown>

      
            
    </div>
  );
}

export default App;
