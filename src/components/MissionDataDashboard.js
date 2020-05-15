import React from 'react';
import Grid from '@material-ui/core/Grid';
import MissionDataSummary from './MissionDataSummary';
import EmitterModeCollapsible from './EmitterModeCollabsible';
import { MissionDataTreeView } from './MissionDataTreeView';

const MissionDataDashboard = () => (
  <div>
    <MissionDataSummary/>
    <MissionDataTreeView/>
  </div>
);

export default MissionDataDashboard;
