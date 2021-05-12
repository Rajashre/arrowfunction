import React from 'react';
import './App.css';
import FirstPractice from './components/PropsPractice'
import details from './components/details'

function App() {
  //console.log(details)
  const Persondata = details.map(item => <FirstPractice  {...item}/>)
  return (
    <div>
        <div>
          {Persondata}
        </div>
    </div>
      
  );
}
 
export default App;
