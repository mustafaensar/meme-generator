import './App.css';
import Counter from './components/Counter';
import Form from './components/Form';
import Input from './components/Input';
import Meme from './components/Meme';
import MUI from './components/MUI';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Ternary from './components/Ternary';
import UseEffect from './components/UseEffect';


function App() {
  return (
    <div className="App">
      {/*
      <Form/>   
      <Counter/>   
      <Signup/>
      <Ternary/>
      <UseEffect/>
    <Navbar/>
    <Meme/>
      <MUI/>
      <Input type="text"/>
      <Input type="number"/>
    */}
      <Input type="password" label="Password label"/>

    </div>
  );
}

export default App;
