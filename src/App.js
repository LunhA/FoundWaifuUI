import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
import router from './router/index';
import Landing from './views/Landing';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <Landing/>
      <AppFooter/>
    </div>
  );
}

export default App;
