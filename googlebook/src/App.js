    
import React from 'react';
import Books from './Components/Books';
import Jumbotron from './Components/Jumbotron';

function App() {
  return (
    <div className="App">
      <Books>
        <Jumbotron />
      </Books>
    </div>
  );
}

export default App;
