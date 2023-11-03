import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <Greet greetPeopleName='Shani' />
      <Greet greetPeopleName='Priyanshu' />
      <Welcome greetPeopleName='Shani' heroName='Batman' >
        <button>Action</button>
      </Welcome>
      <Hello />
      <hr />
      <Message />
    </div>
  );
}

export default App;
