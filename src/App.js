import React from 'react';
import { useSelector } from 'react-redux';
import { selectDarkMode } from './features/darkmodeSlice';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import CountryDetails from './components/CountryDetails';

function App() {
  const darkmode = useSelector(selectDarkMode);
  return (
    <Router>
      <div className={`app ${darkmode && "darkmode"}`}>
        <Header />

        <div className="app__body">
          <Switch>
            <Route path={`/country/:id`}>
              <CountryDetails />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
