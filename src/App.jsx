
import './App.scss';
import Chronometer from './components/Chronometer';
import Countdown from './components/Countdown';
import DigitalClock from './components/DigitalClock';

function App() {
  return (
    <div className="App">
    <img src={require('./clock.png')} alt='clock'/>
    <DigitalClock />
    <Countdown />
    <Chronometer />
    </div>
  );
}

export default App;
