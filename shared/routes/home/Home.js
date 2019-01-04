import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';

import Segment from 'components/segment';
import Button from 'components/button';

export default class Home extends PureComponent {

  render() {
    return (
      <div>
        <Helmet title="Home" />

        <Segment>
          <h1>Hello world!</h1>
        </Segment>

        <Segment>
          <Button>Button</Button>
          <Button to="https://www.trimagency.com/">trimagency.com</Button>
          <Button to="/about">About</Button>
        </Segment>
      </div>
    );
  }
}
