import logo from './logo.svg';
import './App.css';
import {Headers, SubHeaders} from "./components/Header.js"
import {MenuBar}  from './components/Menu.js';
import { Footer } from './components/Footer.js';

function App() {
  return (
    <div className="App">
  < Headers />
  < SubHeaders />
  < MenuBar />
  <Footer />

    </div>
  );
}

export default App;
