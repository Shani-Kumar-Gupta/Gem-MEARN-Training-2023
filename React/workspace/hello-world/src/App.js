import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import ConditionalRendering from './components/ConditionalRendering';
import Form from './components/Form';
import MountingParent from './components/MountingParent';

function App() {
  return (
    <div className="App">
      <Greet greetPeopleName="Shani" />
      <Greet greetPeopleName="Priyanshu" />
      <Welcome greetPeopleName="Shani" heroName="Batman">
        <button>Action</button>
      </Welcome>
      <Hello />
      <hr />
      <Message />
      <hr />
      <Counter />
      <hr />
      <EventBind />
      <hr />
      <ParentComponent />
      <hr />
      <ConditionalRendering />
      <hr />
      <Form />
      <hr />
      <MountingParent />
    </div>
  );
}

export default App;
