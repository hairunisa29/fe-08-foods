import logo from './logo.svg';
import './App.css';
import ShowCountries from './components/ShowCountries'
import SearchCountries from './components/SearchCountries'

function App() {
  return (
    <div className="App">
      <ShowCountries/>
      <SearchCountries/>
    </div>
  );
}

export default App;
