import Menu from "./components/Menu";
import "./App.css";
import food from "./food.jpg";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="Navbar-1">
          <Menu text="Menu">
            <ul>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <li>
                <a href="#">Meat</a>
              </li>
              <li>
                <a href="#">vegetables</a>
              </li>
              <li>
                <a href="#">Dairy Products</a>
              </li>
            </ul>
          </Menu>
        </div>

        <div className="Navbar-2">
          <Menu text="About Us">
            <ul>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <li>
                <a href="#">Locations</a>
              </li>
              <li>
                <a href="#">Company </a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </Menu>
        </div>

        <div className="Navbar-3">
          <Menu text="Service">
            <ul>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <li>
                <a href="#">Meat</a>
              </li>
              <li>
                <a href="#">vegetables</a>
              </li>
              <li>
                <a href="#">Dairy Products</a>
              </li>
            </ul>
          </Menu>
        </div>

        <div className="Navbar-4">
          <Menu text="Info">
            <ul>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <li>
                <a href="#">Apply</a>
              </li>
              <li>
                <a href="#">employment</a>
              </li>
              <li>
                <a href="#">Mission</a>
              </li>
            </ul>
          </Menu>
        </div>
      </div>

      <header className="App-header">
        <img src={food} alt="food.jpg" width="500px" height="800px"></img>
        <div>
          <p id="heading">Bringing Heathly Food In Your Life</p>
          <Form />
        </div>
      </header>
    </div>
  );
}

export default App;
