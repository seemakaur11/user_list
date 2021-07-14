import logo from './logo.svg';
import './App.css';
import Customers from './component/customer';
import './component/style.css';
// import First from './component/First';

function App() {
  return (
    <div>
      {/* <First/> */}
      <div className="main_div">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="react_app">Simple React App</h1>
      </header>
      </div>
      <Customers/>
    </div>
  );
}

export default App;
