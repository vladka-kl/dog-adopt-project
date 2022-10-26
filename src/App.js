import logo from './logo.svg';
import './App.css';
import { LandingPage } from './pages/LandingPage';

function App() {
  // here we fatch the data from the api and render it.
  return (
    <div className='App'>
      <h1>Hello From the App</h1> 
      <LandingPage />
    </div>
  );
}

export default App;
