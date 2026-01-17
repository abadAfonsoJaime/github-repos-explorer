import React from 'react';
import Header from './components/Header';
import SearchContainer from './containers/SearchContainer';
import DetailsContainer from './containers/DetailsContainer';
import BaseContainer from './containers/BaseContainer';
import './App.css';

function App() {
  return (
    <BaseContainer>
      <Header title="GitHub Repository Explorer" />
      <div className="app-content">
        <SearchContainer />
        <DetailsContainer />
      </div>
    </BaseContainer>
  );
}

export default App;
