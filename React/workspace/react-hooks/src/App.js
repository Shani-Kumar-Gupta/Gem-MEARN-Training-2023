import './App.css';
import HookCounterFour from './components/HookCounterFour';
import HookCounterThree from './components/HookCounterThree';
// import CounterClass from './components/CounterClass';
// import HookCounter from './components/HookCounter';
// import HookCounterTwo from './components/HookCounterTwo';

function App() {
  return (
    <div className="App">
      {/* <CounterClass />
      <HookCounter />
      <HookCounterTwo /> */}
      <HookCounterThree />
      <HookCounterFour />
    </div>
  );
}

export default App;
