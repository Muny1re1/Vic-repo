// importing all the important components and hooks from their respective files.
import './App.css';
import React, { useEffect, useState } from 'react';
import BotCollection from './BotCollection';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BotSpecs from './BotSpecs';
import SortBar from './SortBar';


// app function declaration.
function App() {
  // using react state to declare varaibles, their setter function ad the initial value they hold using the useState hook.
  const [Bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);
  const [definate, setDefinate] = useState([]);


  // fetching data from our API endpoint of bots which priamrily gets data from our db.json file using the useEffect hook.
  useEffect(
    function fetchData(){
    fetch("http://localhost:3000/bots")//fetching
      .then(r => r.json())// converting the response to readable JSOn data
      // using that data to setBots and Definate. Bots will be used in almost every component while definate is only in the sortbar component.
      .then(data => {
        setBots(data); 
        setDefinate(data);
      })
      // catching any errors that may occur while fetching the data.
      .catch((error) => {
        console.error("Failed to fetch bots", error);
      });
  }, []);

  // rendering our components while passing down the neccessary props.

  return (
    <>
      < SortBar bots={Bots} setBots={setBots} definate={definate}/>

{/* setting up our router and its routes with paths related to the bots. */}
      <Router>
        <Routes>
          <Route path="/" element={<BotCollection bots={Bots} army={army} setArmy={setArmy} />} />
          <Route path="/botSpecs/:id" element={<BotSpecs bots={Bots} setArmy={setArmy}/>} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
