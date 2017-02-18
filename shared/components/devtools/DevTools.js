import React from 'react';

const showDevTools = process.env.BUILD_FLAG_IS_DEV;
const MobxDevTools = showDevTools && require('mobx-react-devtools').default;
const GridOverlay = showDevTools && require('components/grid-overlay').default;

// eslint-disable-next-line
const DevTools = showDevTools ? () => (
  <div>
    <MobxDevTools />
    <GridOverlay columns={12} />
  </div>
) : (() => null);

export default DevTools;
