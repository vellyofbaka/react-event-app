import React from 'react';
import { Menu, Container, Button, Icon } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { useFirebase } from 'react-redux-firebase';

const NavBar = ({ history }) => {
  const firebase = useFirebase();
  const auth = useSelector(state => state.firebase.auth, []);

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        history.push('/');
      });
  };
  const authenticated = auth.isLoaded && !auth.isEmpty;

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={Link} to="/" header name="Event App">
          {/* <h3>Event App</h3> */}
        </Menu.Item>
        <Menu.Item as={NavLink} exact to="/events" name="Events" />
        {authenticated && (
          <>
            <Menu.Item as={NavLink} to="/people" name="People" />
            <Menu.Item>
              <Button
                as={Link}
                to="/createEvent"
                floated="right"
                positive
                inverted
                content="Create Event"
              />
            </Menu.Item>
          </>
        )}
      </Container>
      <h1>NavBar</h1>
    </Menu>
  );
};

export default withRouter(NavBar);
