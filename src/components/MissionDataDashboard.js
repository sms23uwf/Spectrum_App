import React from 'react';
import { connect } from 'react-redux';
import MissionDataSummary from './MissionDataSummary';
import EmitterModeTree from './EmitterModeTree';
import EmitterModeGrid from './EmitterModeGrid';
import { MissionDataTreeView } from './MissionDataTreeView';
import selectEmitters from '../selectors/emitters';
import selectEmitterModes from '../selectors/emittermodes';
import { setEmitterFilter } from '../actions/filters';

const MissionDataDashboard = () => (
  <div>
    <MissionDataSummary/>
    <EmitterModeGrid/>
  </div>
);

const mapStateToProps = (state) => {
  return {
      emittermodes: selectEmitterModes(state.emittermodes, state.filters),
      emitters: selectEmitters(state.emitters, state.filters),
      checkboxChecked:false
  };
};

export default connect(mapStateToProps) (MissionDataDashboard);