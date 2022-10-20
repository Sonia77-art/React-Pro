

import Menu from './components/Menu';
import './App.css';
import food from './food.jpg';

function App() {
  return (
    <div className="App">
      <div className="picture">
        <img src= {food}
        alt="food.jpg" 
        width= "200px"
        height= "100px"></img>
        </div>
      <header className="App-header">
       <div ClassName="Navbar">
            <Menu text= "Menu">
              <ul>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <li><a href= "#">list</a> </li>
                 
              </ul>
            </Menu>
              <Menu text= "About"></Menu>
                <Menu text= "Service"></Menu>
                  <Menu text= "Contact"></Menu>
        </div>
        
      </header>
      </div>
             
    
  );
}

export default App;
