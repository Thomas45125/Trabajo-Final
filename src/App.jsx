import React from 'react';
import MiComponente from './MiComponente.jsx';
import TaskList from './TaskList.jsx';
import { Appis } from './MiApi.jsx';
import Presentation from './Presentacion.jsx';
import { Images } from './Images.jsx';


function App() {
  return (
    <div className="App">
      <MiComponente />
      <Presentation />
      <Images/>
      <TaskList />
      <Appis />
    </div>
  );
}

export default App;

