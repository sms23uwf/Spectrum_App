import React from 'react';
import { connect } from 'react-redux';
import selectEmitterModes from '../selectors/emittermodes';
import selectEmitterModesTotal from '../selectors/emittermodes-total';

export const MissionDataSummary = ({ emitterModesCount, emittersModesTotal }) => {
     const emitterModesWord = emitterModesCount === 1 ? 'emitter mode' : 'emitter modes';

     return (
         <div className="page-header">
             <div className="content-container">
                <div></div>
                <h3 className="page-header__title">Select Mission Data</h3>
             </div>
         </div>
     );
    };

    const mapStateToProps = (state) => {
        const visibleEmitterModes = selectEmitterModes(state.emittermodes, state.filters);

        return {
            emitterModesCount: visibleEmitterModes.length,
            emittersModesTotal: selectEmitterModesTotal(visibleEmitterModes)
        };
    };

    export default connect(mapStateToProps)(MissionDataSummary);