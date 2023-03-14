import './App.css';
import Counter from './components/Counter';
import Form from './components/Form';
import Meme from './components/Meme';
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
    */}
    <Navbar/>
    <Meme/>


    </div>
  );
}

export default App;
