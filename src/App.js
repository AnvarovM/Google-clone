import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import SearchResultPage from "./components/SearchResultPage"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
          <SearchResultPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
