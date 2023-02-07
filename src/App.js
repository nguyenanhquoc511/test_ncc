import { Sidebar } from './components'
import { Home } from './pages';
import './App.scss'

function App() {
  return (
    <div className="app">
      <Sidebar/>
      <Home/>
    </div>
  );
}

export default App;
