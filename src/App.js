
import React from 'react';
import './App.css';
import SearchBar from './components/Searchbar';
import Main from './components/Main';


class App extends React.Component {
  render () {
  return (
  <div>
      <header className='App-header'>
      <h1>Reddit Extra <span>+</span></h1>
      </header>
  <div className="container">
      <div className='scontainer'>
            <SearchBar  />
            
          </div>
  <div className='lcontainer'>

         </div>
        

          </div>
  
  <div className="Main">
      <Main />
      </div>


  <div className="Footer">
  <h3>Chilufya Chilufya</h3>
  &copy; Reddit API 2023
  <h3>Codecadmey</h3>
  </div>


  </div>
  );
}
}

export default App;
