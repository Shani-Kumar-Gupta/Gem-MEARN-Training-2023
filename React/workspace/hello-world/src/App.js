import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <Greet greetPeopleName='Shani' />
      <Greet greetPeopleName='Priyanshu' />
      <Welcome greetPeopleName='Shani' heroName='Batman' >
        <button>Action</button>
      </Welcome>
      <Hello />
    </div>
  );
}

export default App;
