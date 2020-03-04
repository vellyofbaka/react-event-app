import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import Spinner from './components/Loading';
import NotFound from './components/404';
import HomePage from './pages/HomePage/HomePage';
import EventDashboard from './pages/EventDashboard/EventDashboard';
import PeopleDashboard from './pages/PeopleDashboard/PeopleDashboard';
import UserDetailedPage from './pages/UserDetailedPage/UserDetailedPage';
import SettingsDashboard from './pages/SettingsDashboard/SettingsDashboard';
import EventForm from './components/EventForm/EventForm';
import NavBar from './components/NavBar/NavBar';
import ModalManager from './components/Modals/ModalManager';
// import { UserIsAuthenticated } from './util/AuthWrapper';

function App() {
  const auth = useSelector(state => state.firebase.auth, []);
  if (!auth.isLoaded && auth.isEmpty) return <Spinner />;
  return (
    <>
      <ModalManager />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
      <Route
        path="/(.+)"
        render={() => (
          <>
            <NavBar />
            <Container className="main">
              <Switch>
                <Route exact path="/events" component={EventDashboard} />
                <Route
                  path={['/manage/:id', '/createEvent']}
                  component={EventForm}
                />
                <Route path="/people" component={PeopleDashboard} />
                <Route path="/profile/:id" component={UserDetailedPage} />
                <Route path="/settings" component={SettingsDashboard} />
                <Route component={NotFound} />
              </Switch>
            </Container>
          </>
        )}
      />
    </>
  );
}

export default App;
