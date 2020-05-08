import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import Collapsible from './Collapsible';
import selectEmitters from '../selectors/emitters';
import selectEmittersTotal from '../selectors/emitters-total';
import selectEmitterModes from '../selectors/emittermodes';
import EmitterModeList from './EmitterModeList';

export const EmitterModeCollapsible = (props) => (
    props.emitters.map((emitter, key) => {
        return (
            <div key={key} className="content-container">
                <Collapsible key={emitter.id} title={emitter.lnot}>
                    <EmitterModeList key={emitter.id} {...emitter} />
                </Collapsible>
            </div>
        )
    })
);

const mapStateToProps = (state) => {
    return {
        emittermodes: selectEmitterModes(state.emittermodes, state.filters),
        emitters: selectEmitters(state.emitters, state.filters),
        checkboxChecked:false
    };
};

export default connect(mapStateToProps) (EmitterModeCollapsible);
