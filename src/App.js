
import './App.css';
import MainComponent from './components/main-component';
import TitleComponent from './components/title-component';

function App() {
  return (
    <div className="App">
      <div className="container">
        <TitleComponent />
        <MainComponent />
      </div>
    </div>
  );
}

export default App;
