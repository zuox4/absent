import logo from './logo.svg';
import './App.css';
import Abcent from './AbcentPage';
import MultiSelectDropdown from './AbcentPage';
import { useState } from 'react';

function App() {
  const [select, setSelect] = useState(false)
  return (
    
    <div className="App">
      <h1>Список отсутствующих</h1>
        <MultiSelectDropdown name={'по болезни'}/>
        <MultiSelectDropdown name={'по семейным обстоятельствам'}/>
        <MultiSelectDropdown name={'без уважительной причины'}/>
        <MultiSelectDropdown name={' - заочное обучение'}/>
    </div>
  );
}

export default App;
