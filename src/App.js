import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './modules/makeStore';

import MainHeader from '#components/header';
import WelcomePage from '#pages/welcome';
import PeoplePage from '#pages/people';
import PeopleDetailPage from '#pages/people-detail';

import './scss/default.scss';

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);
function App() {
  return (
    <ReduxProvider store={reduxStore}>
      <Router>
        <MainHeader />
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/people" component={PeoplePage} />
        <Route path="/people/:characterId" component={PeopleDetailPage} />
      </Router>
    </ReduxProvider>
  );
}

export default App;
