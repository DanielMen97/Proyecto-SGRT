import './App.css';
import './Iconos.css';
import {Header} from './elementos/Header'
import {Main} from './elementos/Main';
import {Aside} from './elementos/Aside';
import {Section} from './elementos/Section/Section';




function App() {
  return (
    <div className="App">
        <Header />
        <Section />
        <Main />
        <Aside />
     
    </div>
  );
}

export default App;
