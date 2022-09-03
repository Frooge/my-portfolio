import Sidebar from './components/sidebar';
import Home from './components/home';
import Skills from './components/skills';

import './App.scss';
import 'animate.css/animate.css';

function App() {
  return (
    <div className="App">
        <Sidebar />
        <Home />
        <Skills />
    </div>
  );
}

export default App;
