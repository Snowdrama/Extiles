import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { CloseButton, MaximizeButton, MinimizeButton } from '../../src/component/button/window-buttons';

import { Sidebar } from '../../src/component/sidebar/sidebar';
import { DownloadButton } from '../../src/component/sidebar/sidebar-components/download-button';
import { ExtrudeWidth, TileSize } from '../../src/component/sidebar/sidebar-components/sliders';
import { ShowSliceGrid } from '../../src/component/sidebar/sidebar-components/checkboxes';
import { Panel, Tab } from '../../src/component/layout';

import createLayout from '../../src/component/layout';


const Layout = createLayout();

storiesOf('Main Layout', module)
.add('Main Layout', () => (
  <Layout />
));

storiesOf('Window Buttons', module)
.add('Close Button', () => (
  <CloseButton />
))
.add('Maximize Button', () => (
  <MaximizeButton />
))
.add('Minimize Button', () => (
  <MinimizeButton />
));

storiesOf('Sidebar Elements', module)
.add('Tile Size', () => (
  <Sidebar>
    <Panel>
        Tile Size<br/>
        <TileSize />
    </Panel>
  </Sidebar>
))
.add('Extrude Width', () => (
  <Sidebar>
    <Panel>
        Extude Width<br/>
        <ExtrudeWidth />
    </Panel>
  </Sidebar>
))
.add('Selected Tab', () => (
  <Sidebar>
    <Tab selected>
      Active Tab<br/>
      Image Preview will go here
    </Tab>
  </Sidebar>
))
.add('Unselected Tab', () => (
  <Sidebar>
    <Tab>
      Inactive Tab<br/>
    </Tab>
  </Sidebar>
));