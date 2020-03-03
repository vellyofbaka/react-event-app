import React from 'react';
import {
  Container,
  Segment,
  Header,
  Image,
  Button,
  Icon
} from 'semantic-ui-react';

const HomePage = ({ history }) => {
  return (
    <Segment
      inverted
      color="blue"
      textAlign="center"
      vertical
      className="masthead"
    >
      <Container text>
        <Header as="h1" inverted>
          {/* <Image
            size='massive'
            src='/assets/logo.png'
            alt='logo'
            style={{ marginBottom: 12 }}
          /> */}
          Event App
        </Header>
        <Button
          onClick={() => history.push('/events')}
          size="huge"
          inverted
          style={{ marginTop: 20 }}
        >
          Get started
          <Icon name="right arrow" inverted />
        </Button>
      </Container>
    </Segment>
  );
};

export default HomePage;
