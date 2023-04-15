import {React, axios, consts} from "./ts/libraries";
import logo from './logo.svg';
import './App.css';

function App() {
  const getMessage = async () => {
    const response = await axios.get(
      consts.api_path, 
      {
        headers:{
          'Content-type': 'application/json',
          'Acess-Control-Allow-Origin': "*",
          'Accept': 'application/json',
        }
      }
    )
    .catch((error: Error) => {
      console.log(error.message);
    });
    return response;
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div id="answer_area">
          <div id="answer">
            {App()}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
