import React, { useState } from 'react';
import Header from './components/Header';
import SearchContainer from './containers/SearchContainer';
import DetailsContainer from './containers/DetailsContainer';
import BaseContainer from './containers/BaseContainer';
import './App.css';

function App() {
  const [selectedRepository, setSelectedRepository] = useState(null);

  return (
    <BaseContainer>
      <Header title="GitHub Repository Explorer" />
      <div className="app-content">
        <SearchContainer onRepositorySelect={setSelectedRepository} />
        <DetailsContainer selectedRepository={selectedRepository} />
      </div>
    </BaseContainer>
  );
}

export default App;
