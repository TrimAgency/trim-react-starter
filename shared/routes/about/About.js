import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';

import Segment from 'components/segment';

export default class About extends PureComponent {

  render() {
    return (
      <div>
        <Helmet title="About" />

        <Segment>
          <h1>About</h1>
          <p>
            Ship early. Ship Often. Work openly. Changing requirements will come. We expect this. We
            make regular time for improvement. We believe in lifelong learning. We make time to
            learn, grow, and explore our craft. We believe in Data; it drives both creative and
            technical decisions. We believe in each other, and understand that we are human. We
            believe in solving human problems with useable technology.
          </p>
        </Segment>
      </div>
    );
  }
}
