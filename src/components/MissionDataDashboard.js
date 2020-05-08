import React from 'react';
import Grid from '@material-ui/core/Grid';
import MissionDataSummary from './MissionDataSummary';
import EmitterModeCollapsible from './EmitterModeCollabsible';

const MissionDataDashboard = () => (
  <div>
    <MissionDataSummary/>
    <EmitterModeCollapsible/>
  </div>
);

export default MissionDataDashboard;
